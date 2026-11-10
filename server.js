/* Мини-сервер без зависимостей: отдаёт сайт и считает уникальные устройства.
   Запуск: node server.js   (порт — из переменной PORT, по умолчанию 3000)
   Данные счётчика: DATA_DIR/visitors.json (по умолчанию ./data).
   На Railway подключите Volume и задайте DATA_DIR на его путь — иначе счётчик
   обнулится при каждом деплое. */
"use strict";
const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const DATA_DIR = process.env.DATA_DIR || path.join(ROOT, "data");
const DATA_FILE = path.join(DATA_DIR, "visitors.json");
const MAX_NEW_PER_IP_HOUR = 20;   // защита от накрутки с одного IP

const MIME = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8", ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml", ".png": "image/png", ".ico": "image/x-icon", ".txt": "text/plain; charset=utf-8"
};
// Отдаём только файлы сайта — server.js, data/ и package.json недоступны
const PUBLIC = (rel) => rel === "index.html" || /^(css|js)\/[\w.\-]+$/.test(rel);

/* ── хранилище: множество хэшей id устройств ── */
let devices = new Set();
try { devices = new Set(JSON.parse(fs.readFileSync(DATA_FILE, "utf8")).devices || []); } catch (e) {}
let saving = false, dirty = false;
function save() {
  if (saving) { dirty = true; return; }
  saving = true;
  try { fs.mkdirSync(DATA_DIR, { recursive: true }); } catch (e) {}
  const tmp = DATA_FILE + ".tmp";
  fs.writeFile(tmp, JSON.stringify({ devices: [...devices] }), (err) => {
    const done = () => { saving = false; if (dirty) { dirty = false; save(); } };
    if (err) return (console.error("save:", err.message), done());
    fs.rename(tmp, DATA_FILE, (e2) => { if (e2) console.error("save:", e2.message); done(); });
  });
}

const ipHits = new Map();   // ip -> [время новых устройств]
function ipAllowed(ip) {
  const now = Date.now(), list = (ipHits.get(ip) || []).filter((t) => now - t < 3600e3);
  ipHits.set(ip, list);
  return list.length < MAX_NEW_PER_IP_HOUR;
}

function json(res, code, obj) {
  res.writeHead(code, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  res.end(JSON.stringify(obj));
}

function handleVisit(req, res) {
  let body = "";
  req.on("data", (c) => { body += c; if (body.length > 1024) req.destroy(); });
  req.on("end", () => {
    let id = "";
    try { id = String(JSON.parse(body).id || ""); } catch (e) {}
    if (!/^[\w-]{16,64}$/.test(id)) return json(res, 400, { error: "bad id" });
    const h = crypto.createHash("sha256").update(id).digest("hex");
    if (!devices.has(h)) {
      const ip = (req.headers["x-forwarded-for"] || req.socket.remoteAddress || "").split(",")[0].trim();
      if (!ipAllowed(ip)) return json(res, 200, { count: devices.size, isNew: false });
      ipHits.get(ip).push(Date.now());
      devices.add(h);
      save();
      return json(res, 200, { count: devices.size, isNew: true });
    }
    json(res, 200, { count: devices.size, isNew: false });
  });
}

http.createServer((req, res) => {
  const url = new URL(req.url, "http://x");
  if (url.pathname === "/api/visit" && req.method === "POST") return handleVisit(req, res);
  if (url.pathname === "/api/visitors" && req.method === "GET") return json(res, 200, { count: devices.size });
  if (req.method !== "GET" && req.method !== "HEAD") { res.writeHead(405); return res.end(); }

  let rel = decodeURIComponent(url.pathname).replace(/^\/+/, "") || "index.html";
  if (!PUBLIC(rel)) { res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }); return res.end("Not found"); }
  fs.readFile(path.join(ROOT, rel), (err, buf) => {
    if (err) { res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }); return res.end("Not found"); }
    res.writeHead(200, {
      "Content-Type": MIME[path.extname(rel)] || "application/octet-stream",
      "Cache-Control": rel === "index.html" ? "no-cache" : "public, max-age=3600"
    });
    res.end(req.method === "HEAD" ? undefined : buf);
  });
}).listen(PORT, () => console.log("Сайт: http://localhost:" + PORT + "  |  устройств в счётчике: " + devices.size));
