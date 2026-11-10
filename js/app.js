/* ==========================================================================
   app.js — логика справочника: язык (RU/UZ), поиск, прогресс, карточки,
   викторина, песочница. Тексты интерфейса — в i18n.js, содержимое — в data.js.
   ========================================================================== */
(function () {
  "use strict";

  const DATA = window.KD_DATA;
  const I18N = window.KD_I18N;
  if (!DATA || !I18N) { console.error("Не загружены js/data.js или js/i18n.js"); return; }

  /* ───────────────────────── Настройки ───────────────────────── */
  const KP_URL = "https://unpkg.com/kotlin-playground@1";  // официальный виджет JetBrains
  const KP_TIMEOUT_MS = 15000;
  const LEARNED_BOX = 3;             // с этой «коробки» понятие считается выученным
  const MAX_BOX = 5;
  const REVIEW_DAYS = [0, 1, 3, 7, 14, 30]; // через сколько дней повторять
  const SESSION_SIZE = 15;
  const QUIZ_SIZE = 10;
  const LANGS = ["ru", "uz"];
  const KEY = {
    progress: "kd:v1:progress",
    theme: "kd:v1:theme",
    lang: "kd:v1:lang",
    play: "kd:v1:play-code"
  };
  const HERO = {
    code: 'fun main() {\n    val platform = "Android"\n    println("Hello, $platform!")\n    for (i in 1..3) println("step $i")\n}',
    out: "Hello, Android!\nstep 1\nstep 2\nstep 3"
  };
  const PLAY_DEFAULT = 'fun main() {\n    val names = listOf("Anvar", "Dilnoza", "Jasur")\n    for ((i, name) in names.withIndex()) {\n        println("${i + 1}. Hello, $name!")\n    }\n}\n';
  const ANDROID_SECS = new Set(["an", "cm"]);

  /* ───────────────────────── Утилиты ───────────────────────── */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
  // ё → е и все виды апострофов → ', чтобы o'zgaruvchi находило o‘zgaruvchi
  const norm = (s) => String(s).toLowerCase().replace(/ё/g, "е").replace(/[‘’ʻʼ`´]/g, "'");
  const reduceMotion = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function el(tag, props, ...kids) {
    const n = document.createElement(tag);
    if (props) {
      for (const [k, v] of Object.entries(props)) {
        if (v == null || v === false) continue;
        if (k === "class") n.className = v;
        else if (k === "text") n.textContent = v;
        else if (k === "dataset") Object.assign(n.dataset, v);
        else if (k.startsWith("on") && typeof v === "function") n.addEventListener(k.slice(2), v);
        else if (v === true) n.setAttribute(k, "");
        else n.setAttribute(k, String(v));
      }
    }
    for (const kid of kids.flat()) {
      if (kid == null || kid === false) continue;
      n.append(kid.nodeType ? kid : document.createTextNode(String(kid)));
    }
    return n;
  }

  const ICONS = {
    book: '<path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H20v15H5.5A1.5 1.5 0 0 0 4 19.5z"/><path d="M4 19.5A1.5 1.5 0 0 0 5.5 21H20v-3"/>',
    cards: '<rect x="3" y="7" width="14" height="13" rx="2"/><path d="M7 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>',
    quiz: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7"/><path d="M12 17h.01"/>',
    terminal: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3"/><path d="M13 15h4"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    play: '<path d="M7 4.5v15l12-7.5z" fill="currentColor"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h9"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    up: '<path d="M12 19V5"/><path d="m5 12 7-7 7 7"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'
  };
  function icon(name) {
    const tmp = document.createElement("span");
    tmp.innerHTML = '<svg class="icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + (ICONS[name] || "") + "</svg>";
    return tmp.firstChild;
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /** Текст с `инлайн-кодом` без innerHTML. */
  function richText(parent, text) {
    String(text).split("`").forEach((part, i) => {
      if (!part) return;
      parent.append(i % 2 ? el("code", { text: part }) : document.createTextNode(part));
    });
    return parent;
  }

  /** Записывает текст в node, подсвечивая найденные слова. */
  function highlight(node, text, terms) {
    node.textContent = "";
    if (!terms.length) { node.textContent = text; return; }
    const low = norm(text);
    const ranges = [];
    for (const t of terms) {
      let i = 0;
      while ((i = low.indexOf(t, i)) !== -1) { ranges.push([i, i + t.length]); i += t.length; }
    }
    if (!ranges.length) { node.textContent = text; return; }
    ranges.sort((a, b) => a[0] - b[0]);
    const merged = [ranges[0].slice()];
    for (const r of ranges.slice(1)) {
      const last = merged[merged.length - 1];
      if (r[0] <= last[1]) last[1] = Math.max(last[1], r[1]); else merged.push(r.slice());
    }
    let pos = 0;
    for (const [a, b] of merged) {
      if (a > pos) node.append(document.createTextNode(text.slice(pos, a)));
      node.append(el("mark", { text: text.slice(a, b) }));
      pos = b;
    }
    if (pos < text.length) node.append(document.createTextNode(text.slice(pos)));
  }

  let toastTimer = 0;
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
  }

  async function copyText(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(text); return true; }
    } catch (e) { /* пробуем запасной способ */ }
    try {
      const ta = el("textarea", { style: "position:fixed;opacity:0;top:0;left:0", "aria-hidden": "true" });
      ta.value = text;
      document.body.append(ta);
      ta.select();
      const ok = document.execCommand && document.execCommand("copy");
      ta.remove();
      return !!ok;
    } catch (e) { return false; }
  }

  /* ───────────────────────── Хранилище ───────────────────────── */
  const Store = (() => {
    const mem = {};
    let persistent = true;
    try {
      localStorage.setItem("kd:test", "1");
      localStorage.removeItem("kd:test");
    } catch (e) { persistent = false; }
    return {
      isPersistent: () => persistent,
      get(key, fallback) {
        try {
          if (persistent) {
            const raw = localStorage.getItem(key);
            if (raw !== null) return JSON.parse(raw);
          }
        } catch (e) { /* повреждённые данные — берём значение по умолчанию */ }
        return key in mem ? mem[key] : fallback;
      },
      set(key, value) {
        mem[key] = value;
        if (!persistent) return;
        try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { persistent = false; }
      },
      remove(key) {
        delete mem[key];
        try { localStorage.removeItem(key); } catch (e) { /* ничего */ }
      }
    };
  })();

  /* ───────────────────────── Язык ───────────────────────── */
  function detectLang() {
    const saved = Store.get(KEY.lang, null);
    if (LANGS.includes(saved)) return saved;
    const nav = (navigator.languages && navigator.languages[0]) || navigator.language || "ru";
    return /^uz/i.test(nav) ? "uz" : "ru";
  }
  let lang = detectLang();

  function t(key, vars) {
    let s = I18N[lang] && I18N[lang][key];
    if (s === undefined) s = I18N.ru[key];
    if (s === undefined) return key;
    if (typeof s === "string" && vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] !== undefined ? vars[k] : m));
    return s;
  }
  const L = (obj) => (obj && (obj[lang] || obj.ru)) || "";
  const levelName = (n) => t("lvl_" + n);
  function pluralWord(n, forms) {
    if (forms.length === 1) return forms[0];
    const m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return forms[0];
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return forms[1];
    return forms[2];
  }

  function applyStatic() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach((n) => { n.textContent = t(n.dataset.i18n); });
    $$("[data-i18n-html]").forEach((n) => { n.innerHTML = t(n.dataset.i18nHtml); });   // строки из i18n.js, не пользовательский ввод
    $$("[data-i18n-attr]").forEach((n) => {
      n.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":");
        if (attr && key) n.setAttribute(attr.trim(), t(key.trim()));
      });
    });
    const meta = $('meta[name="description"]');
    if (meta) meta.setAttribute("content", t("meta_description"));
    $$(".lang-btn").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  }

  /* ───────────────────────── Данные ───────────────────────── */
  const SECTIONS = DATA.sections;
  const ENTRIES = [];
  const BY_ID = new Map();
  SECTIONS.forEach((sec, si) => {
    sec.items.forEach((it, ii) => {
      const [name, ru, uz, code, nru, nuz, lvl, opts] = it;
      const e = {
        id: sec.id + ":" + name, sec, si, ii, name, code,
        desc: { ru, uz }, note: { ru: nru || "", uz: nuz || "" }, lvl: lvl || 2, opts: opts || {}
      };
      e.hay = {};
      LANGS.forEach((l) => { e.hay[l] = norm([name, e.desc[l], e.note[l], code, sec.title[l]].join(" ")); });
      ENTRIES.push(e);
      BY_ID.set(e.id, e);
    });
  });
  const RUNNABLE_COUNT = ENTRIES.filter((e) => e.opts.run).length;

  /* ───────────────────────── Прогресс ───────────────────────── */
  const Progress = (() => {
    let data = {};
    const subs = new Set();
    const emit = () => subs.forEach((f) => f());
    function load() {
      const raw = Store.get(KEY.progress, {});
      data = {};
      if (raw && typeof raw === "object") {
        for (const [id, v] of Object.entries(raw)) {
          if (BY_ID.has(id) && v && Number.isFinite(v.b)) {
            data[id] = { b: clamp(Math.round(v.b), 0, MAX_BOX), t: Number(v.t) || 0 };
          }
        }
      }
    }
    const save = () => Store.set(KEY.progress, data);
    const api = {
      load,
      reload() { load(); emit(); },
      onChange(f) { subs.add(f); },
      box: (id) => (data[id] ? data[id].b : 0),
      seen: (id) => !!data[id],
      learned: (id) => !!data[id] && data[id].b >= LEARNED_BOX,
      due(id, now = Date.now()) {
        const d = data[id];
        return !!d && now >= d.t + REVIEW_DAYS[d.b] * 86400000;
      },
      set(id, b) { data[id] = { b: clamp(b, 0, MAX_BOX), t: Date.now() }; save(); emit(); },
      toggleLearned(id) {
        if (api.learned(id)) delete data[id]; else data[id] = { b: LEARNED_BOX, t: Date.now() };
        save(); emit();
        return api.learned(id);
      },
      reset() { data = {}; Store.remove(KEY.progress); emit(); },
      learnedCount(secId) {
        let n = 0;
        for (const e of ENTRIES) if ((!secId || e.sec.id === secId) && api.learned(e.id)) n++;
        return n;
      },
      dueCount() { return ENTRIES.reduce((n, e) => n + (api.due(e.id) ? 1 : 0), 0); }
    };
    return api;
  })();

  /** Следующее понятие «по пути»: сначала основы, потом дальше. */
  function nextToLearn() {
    const todo = ENTRIES.filter((e) => !Progress.learned(e.id));
    todo.sort((a, b) => a.lvl - b.lvl || a.si - b.si || a.ii - b.ii);
    return todo[0] || null;
  }

  /* ───────────────────────── Подсветка кода ───────────────────────── */
  const KT_KEYWORDS = new Set(("as break class continue do else false for fun if in interface is null object package return super this throw true try typealias val var when while " +
    "by catch constructor finally get import init set where abstract annotation companion const data enum inline inner internal lateinit open operator out override private protected public reified sealed suspend vararg").split(" "));
  const KT_RE = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("""[\s\S]*?"""|"(?:\\.|[^"\\\n])*")|('(?:\\.|[^'\\\n])')|(@[A-Za-z_]\w*)|(\b\d[\d_]*(?:\.\d+)?[LfF]?\b)|([A-Za-z_]\w*)/g;
  const XML_RE = /(<!--[\s\S]*?-->)|("[^"]*")|(<\/?[\w:.-]+|\/?>)|([\w:.-]+)(?==)/g;

  function tokenize(code, re, classify) {
    const frag = document.createDocumentFragment();
    let pos = 0, m;
    re.lastIndex = 0;
    while ((m = re.exec(code)) !== null) {
      if (m.index > pos) frag.append(document.createTextNode(code.slice(pos, m.index)));
      const cls = classify(m);
      frag.append(cls ? el("span", { class: cls, text: m[0] }) : document.createTextNode(m[0]));
      pos = m.index + m[0].length;
    }
    if (pos < code.length) frag.append(document.createTextNode(code.slice(pos)));
    return frag;
  }
  function codeNodes(code, language) {
    if (language === "xml") {
      return tokenize(code, XML_RE, (m) => (m[1] ? "tk-com" : m[2] ? "tk-str" : m[3] ? "tk-tag" : m[4] ? "tk-attr" : ""));
    }
    if (language === "bash") {
      return tokenize(code, /(#[^\n]*)|("(?:\\.|[^"\\\n])*")/g, (m) => (m[1] ? "tk-com" : "tk-str"));
    }
    return tokenize(code, KT_RE, (m) => {
      if (m[1]) return "tk-com";
      if (m[2] || m[3]) return "tk-str";
      if (m[4]) return "tk-ann";
      if (m[5]) return "tk-num";
      if (m[6]) return KT_KEYWORDS.has(m[6]) ? "tk-kw" : /^[A-Z]/.test(m[6]) ? "tk-type" : "";
      return "";
    });
  }
  function codeBlock(code, language, extraClass) {
    const c = el("code");
    c.append(codeNodes(code, language));
    return el("pre", { class: "code" + (extraClass ? " " + extraClass : ""), tabindex: "0" }, c);
  }

  /* ───────────────────────── Kotlin Playground ───────────────────────── */
  const KP = (() => {
    let promise = null;
    function load() {
      if (window.KotlinPlayground) return Promise.resolve(window.KotlinPlayground);
      if (promise) return promise;
      promise = new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = KP_URL;
        s.async = true;
        s.setAttribute("data-selector", ".kd-never");   // не превращать чужие <code> на странице
        const timer = setTimeout(() => reject(new Error("timeout")), KP_TIMEOUT_MS);
        s.onload = () => {
          clearTimeout(timer);
          if (window.KotlinPlayground) resolve(window.KotlinPlayground); else reject(new Error("no-api"));
        };
        s.onerror = () => { clearTimeout(timer); reject(new Error("load")); };
        document.head.append(s);
      }).catch((e) => { promise = null; throw e; });
      return promise;
    }
    const isDark = () => (document.documentElement.dataset.theme
      || (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")) === "dark";

    /** Заменяет содержимое host живым редактором Kotlin Playground. */
    async function mount(host, code, options) {
      const api = await load();
      const node = el("code", { class: "kd-play-code", "data-target-platform": "java", theme: isDark() ? "darcula" : "idea", "auto-indent": "true", "highlight-on-fly": "true" });
      node.textContent = code;
      host.replaceChildren(node);
      await api(node, options || {});
    }
    return { load, mount };
  })();

  /* ───────────────────────── Блок с кодом ───────────────────────── */
  /**
   * Показывает код с подсветкой, кнопки «копировать», «показать вывод»
   * и «запустить онлайн». e: { name, code, opts, secId }
   */
  function createSnippet(e) {
    const language = e.opts.lang || "kotlin";
    const canRun = !!e.opts.run && !e.opts.noRun && language === "kotlin";
    const hasOut = e.opts.out != null;

    const root = el("div", { class: "snip" });
    const bar = el("div", { class: "snip-bar" });
    const host = el("div", { class: "snip-code" }, codeBlock(e.code, language));
    const status = el("p", { class: "snip-status", role: "status" });

    const copyBtn = el("button", { class: "btn", type: "button", onclick: async () => {
      toast((await copyText(e.code)) ? t("snip_copied") : t("snip_copy_fail"));
    } }, icon("copy"), el("span", { text: t("snip_copy") }));
    bar.append(copyBtn);

    let outBox = null;
    if (hasOut) {
      outBox = el("div", { class: "snip-out", hidden: true },
        el("p", { class: "snip-out-label", text: t("snip_out_label") }),
        el("pre", { text: e.opts.out }));
      const outBtn = el("button", { class: "btn out-btn", type: "button", "aria-expanded": "false", onclick: () => {
        const show = outBox.hidden;
        outBox.hidden = !show;
        outBtn.setAttribute("aria-expanded", String(show));
        outBtn.replaceChildren(icon("eye"), el("span", { text: t(show ? "snip_hide_out" : "snip_show_out") }));
      } }, icon("eye"), el("span", { text: t("snip_show_out") }));
      bar.append(outBtn);
    }

    let runBtn = null;
    if (canRun) {
      runBtn = el("button", { class: "btn primary run-btn", type: "button", onclick: async () => {
        runBtn.disabled = true;
        status.className = "snip-status";
        status.textContent = t("snip_loading");
        try {
          await KP.mount(host, e.code);
          status.textContent = "";
          host.append(el("p", { class: "snip-hint", text: t("snip_hint_play") }));
          runBtn.remove();
        } catch (err) {
          status.className = "snip-status bad";
          status.textContent = t("snip_load_fail");
          runBtn.disabled = false;
        }
      } }, icon("play"), el("span", { text: t("snip_run_online") }));
      bar.append(runBtn);
    }

    root.append(bar, host, status);
    if (outBox) root.append(outBox);
    const noteKey = e.opts.noRun ? "snip_noinput_note" : (!canRun && ANDROID_SECS.has(e.secId) ? "snip_android_note" : "");
    if (noteKey) root.append(el("p", { class: "snip-note", text: t(noteKey) }));
    return root;
  }

  /* ───────────────────────── Тема ───────────────────────── */
  const Theme = (() => {
    const btn = $("#themeBtn");
    const current = () => document.documentElement.dataset.theme
      || (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    function paint() {
      const th = current();
      btn.replaceChildren(icon(th === "dark" ? "sun" : "moon"));
      btn.setAttribute("aria-label", t(th === "dark" ? "theme_to_light" : "theme_to_dark"));
      const meta = $('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", th === "dark" ? "#0f1822" : "#f2f6f9");
    }
    const saved = Store.get(KEY.theme, null);
    if (saved === "light" || saved === "dark") document.documentElement.dataset.theme = saved;
    btn.addEventListener("click", () => {
      const next = current() === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      Store.set(KEY.theme, next);
      paint();
    });
    return { paint };
  })();

  /* ───────────────────────── Справочник ───────────────────────── */
  const rows = new Map();          // id -> { el, head, panel, mark, item, open, built, name, desc, learnBtn, shown }
  const secEls = new Map();        // sectionId -> { root, count, bar, list }
  const filter = { q: "", level: 0, status: "all" };
  const autoOpened = new Set();
  let navObserver = null;

  function pips(lvl) {
    return el("span", { class: "e-lvl", role: "img", "aria-label": t("level_label", { lvl: levelName(lvl) }), title: levelName(lvl) },
      [1, 2, 3].map((n) => el("i", { class: n <= lvl ? "on" : "" })));
  }
  const entryHash = (id) => "#reference/" + encodeURIComponent(id);

  function setOpen(id, open) {
    const r = rows.get(id);
    if (!r || r.open === open) return;
    if (open && !r.built) buildPanel(r);
    r.open = open;
    r.el.classList.toggle("open", open);
    r.head.setAttribute("aria-expanded", String(open));
    if (!open) autoOpened.delete(id);
  }

  function toggleRow(id) {
    const r = rows.get(id);
    const open = !r.open;
    setOpen(id, open);
    autoOpened.delete(id);
    try { history.replaceState(null, "", open ? entryHash(id) : "#reference"); } catch (e) { /* file:// в некоторых браузерах */ }
  }

  function buildPanel(r) {
    const e = r.item;
    const inner = $(".e-panel-in", r.panel);
    inner.append(createSnippet({ name: e.name, code: e.code, opts: e.opts, secId: e.sec.id }));
    const note = L(e.note);
    if (note) inner.append(el("p", { class: "e-note" }, el("strong", { text: t("note_label") }), richText(el("span"), note)));
    const learnBtn = el("button", { class: "btn learn-btn", type: "button", "aria-pressed": String(Progress.learned(e.id)), onclick: () => Progress.toggleLearned(e.id) });
    const linkBtn = el("button", { class: "btn", type: "button", onclick: async () => {
      const url = location.href.split("#")[0] + entryHash(e.id);
      toast((await copyText(url)) ? t("link_copied") : t("link_fail"));
    } }, icon("link"), el("span", { text: t("link_btn") }));
    r.learnBtn = learnBtn;
    inner.append(el("div", { class: "e-actions" }, learnBtn, linkBtn));
    paintRow(r);
    r.built = true;
  }

  function paintRow(r) {
    const learned = Progress.learned(r.item.id);
    r.el.classList.toggle("learned", learned);
    r.mark.setAttribute("aria-pressed", String(learned));
    if (r.learnBtn) {
      r.learnBtn.setAttribute("aria-pressed", String(learned));
      r.learnBtn.replaceChildren(icon("check"), el("span", { text: t(learned ? "learned" : "learn_mark") }));
    }
  }

  function buildReference() {
    const host = $("#sections");
    host.replaceChildren();
    SECTIONS.forEach((sec) => {
      const title = L(sec.title);
      const count = el("p", { class: "sec-count" });
      const bar = el("div", { class: "meter small", role: "progressbar", "aria-label": t("sec_progress_aria", { title }), "aria-valuemin": "0", "aria-valuemax": String(sec.items.length), "aria-valuenow": "0" }, el("i"));
      const list = el("div", { class: "entries" });
      const root = el("section", { class: "sec", id: "sec-" + sec.id, dataset: { sec: sec.id }, "aria-labelledby": "h-sec-" + sec.id },
        el("header", { class: "sec-head" }, el("h2", { id: "h-sec-" + sec.id, text: title }), count, bar),
        richText(el("p", { class: "sec-desc" }), L(sec.desc)),
        list);
      secEls.set(sec.id, { root, count, bar, list });
      host.append(root);
    });

    ENTRIES.forEach((e, idx) => {
      const panelId = "p-" + idx;
      const name = el("span", { class: "e-name", text: e.name });
      const desc = el("span", { class: "e-desc", text: L(e.desc) });
      const mark = el("button", { class: "mark", type: "button", "aria-pressed": "false", "aria-label": t("entry_mark_aria", { name: e.name }), title: t("entry_mark_title"), onclick: () => Progress.toggleLearned(e.id) }, icon("check"));
      const head = el("button", { class: "e-head", type: "button", "aria-expanded": "false", "aria-controls": panelId, onclick: () => toggleRow(e.id) },
        name, desc, pips(e.lvl), icon("chevron"));
      const panel = el("div", { class: "e-panel", id: panelId }, el("div", { class: "e-panel-in" }));
      const row = el("article", { class: "entry", id: "e-" + idx, dataset: { id: e.id } }, mark, head, panel);
      rows.set(e.id, { el: row, head, panel, mark, item: e, open: false, built: false, name, desc, learnBtn: null, shown: true });
      secEls.get(e.sec.id).list.append(row);
    });
  }

  /** Чем меньше число, тем выше запись в результатах: сначала совпадения по имени. */
  function matchRank(e, q) {
    const name = norm(e.name);
    const bare = name.replace(/[(\s].*$/, "");
    if (name === q || bare === q) return 0;
    if (name.startsWith(q) || bare.startsWith(q)) return 1;
    if (name.includes(q)) return 2;
    return 3;
  }

  function applyFilters() {
    const terms = norm(filter.q).split(/\s+/).filter(Boolean);
    const query = norm(filter.q).trim();
    let shown = 0;
    const perSec = new Map(SECTIONS.map((s) => [s.id, 0]));
    for (const r of rows.values()) {
      const e = r.item;
      let ok = true;
      if (filter.level && e.lvl !== filter.level) ok = false;
      if (ok && filter.status === "learned" && !Progress.learned(e.id)) ok = false;
      if (ok && filter.status === "new" && Progress.learned(e.id)) ok = false;
      if (ok && terms.length && !terms.every((q) => e.hay[lang].includes(q))) ok = false;
      r.shown = ok;
      r.el.hidden = !ok;
      r.el.style.order = ok && query ? String(matchRank(e, query) * 1000 + e.ii) : "";
      if (ok) {
        shown++;
        perSec.set(e.sec.id, perSec.get(e.sec.id) + 1);
        highlight(r.name, e.name, terms);
        highlight(r.desc, L(e.desc), terms);
      }
    }
    for (const sec of SECTIONS) secEls.get(sec.id).root.hidden = perSec.get(sec.id) === 0;
    // Мало результатов — сразу раскрываем, чтобы не кликать лишний раз
    if (terms.length && shown > 0 && shown <= 3) {
      for (const r of rows.values()) if (r.shown && !r.open) { setOpen(r.item.id, true); autoOpened.add(r.item.id); }
    } else {
      for (const id of Array.from(autoOpened)) setOpen(id, false);
    }
    const filtered = terms.length || filter.level || filter.status !== "all";
    $("#resultCount").textContent = filtered
      ? (shown ? t("count_found", { x: shown, n: ENTRIES.length }) : t("count_none"))
      : t("count_total", { n: ENTRIES.length });
    $("#emptyState").hidden = shown !== 0;
    $("#searchClear").hidden = !filter.q;
  }

  function syncChips() {
    $$(".chip-group").forEach((g) => {
      const key = g.dataset.filter;
      $$(".chip", g).forEach((c) => c.setAttribute("aria-pressed", String(String(filter[key]) === c.dataset.value)));
    });
  }
  function resetFilters() {
    filter.q = ""; filter.level = 0; filter.status = "all";
    $("#search").value = "";
    syncChips();
    applyFilters();
  }

  function openEntry(id) {
    const r = rows.get(id);
    if (!r) return;
    if (!r.shown) resetFilters();
    setOpen(id, true);
    autoOpened.delete(id);
    r.el.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", block: "start" });
    r.head.focus({ preventScroll: true });
  }
  function scrollToSection(secId) {
    const s = secEls.get(secId);
    if (!s) return;
    if (s.root.hidden) resetFilters();
    s.root.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", block: "start" });
  }

  function updateProgressUi() {
    const total = ENTRIES.length;
    const learned = Progress.learnedCount();
    const pct = total ? Math.round((learned / total) * 100) : 0;
    const due = Progress.dueCount();

    for (const r of rows.values()) paintRow(r);
    for (const sec of SECTIONS) {
      const n = Progress.learnedCount(sec.id), tot = sec.items.length;
      const s = secEls.get(sec.id);
      if (!s) continue;
      s.count.textContent = t("sec_count", { n, t: tot });
      s.bar.setAttribute("aria-valuenow", String(n));
      $("i", s.bar).style.width = (tot ? (n / tot) * 100 : 0) + "%";
      const nav = $('[data-nav="' + sec.id + '"]');
      if (nav) { $(".nav-count", nav).textContent = n + "/" + tot; $("i", nav).style.width = (tot ? (n / tot) * 100 : 0) + "%"; }
    }
    $("#ringFg").style.strokeDasharray = pct + " 100";
    $("#sideTotalPct").textContent = pct + "%";
    $("#sideTotalSub").textContent = t("side_total_sub", { l: learned, n: total });
    const hp = $("#heroProgress .meter");
    hp.setAttribute("aria-label", t("hero_progress", { l: learned, n: total }));
    hp.setAttribute("aria-valuenow", String(pct));
    $("i", hp).style.width = pct + "%";
    $("#heroProgressText").textContent = learned
      ? t("hero_progress", { l: learned, n: total }) + (due ? t("hero_progress_due", { due }) : "")
      : t("hero_progress_none");

    const next = nextToLearn();
    const btn = $("#btnContinue");
    if (!next) { btn.textContent = t("btn_all_done"); btn.dataset.target = ""; }
    else {
      btn.textContent = learned ? t("btn_continue", { name: next.name }) : t("btn_start");
      btn.dataset.target = next.id;
    }
    const badge = $("#dueBadge");
    badge.hidden = !due;
    badge.textContent = due > 99 ? "99+" : String(due);
    badge.setAttribute("aria-label", String(due));
    if (filter.status !== "all") applyFilters();
  }

  function buildSideNav() {
    const nav = $("#sideNav");
    nav.replaceChildren();
    if (navObserver) { navObserver.disconnect(); navObserver = null; }
    SECTIONS.forEach((sec) => {
      nav.append(el("button", { class: "nav-item", type: "button", dataset: { nav: sec.id, sec: sec.id }, onclick: () => scrollToSection(sec.id) },
        el("span", { class: "nav-dot", "aria-hidden": "true" }),
        el("span", { class: "nav-title", text: L(sec.short) }),
        el("span", { class: "nav-count", text: "0/" + sec.items.length }),
        el("span", { class: "meter tiny", "aria-hidden": "true" }, el("i"))));
    });
  }
  function observeSections() {
    if (!("IntersectionObserver" in window)) return;
    navObserver = new IntersectionObserver((list) => {
      for (const it of list) {
        if (it.isIntersecting) $$(".nav-item", $("#sideNav")).forEach((n) => n.classList.toggle("active", n.dataset.nav === it.target.dataset.sec));
      }
    }, { rootMargin: "-20% 0px -70% 0px" });
    secEls.forEach((s) => navObserver.observe(s.root));
  }

  function buildHero() {
    const n = ENTRIES.length;
    $("#heroLead").textContent = t("hero_lead", {
      n, r: RUNNABLE_COUNT,
      concepts: pluralWord(n, t("concepts")), programs: pluralWord(RUNNABLE_COUNT, t("programs"))
    });
    $("#heroSnippet").replaceChildren(createSnippet({ name: "hero", code: HERO.code, opts: { run: true, out: HERO.out }, secId: "kw" }));
  }

  function buildRoadmap() {
    const ol = $("#roadmap");
    ol.replaceChildren();
    DATA.roadmap.forEach((step) => {
      ol.append(el("li", { dataset: { sec: step.sec } },
        el("span", { class: "rm-title", text: L(step.title) }),
        el("button", { class: "link-btn", type: "button", onclick: () => { $("#about").open = false; scrollToSection(step.sec); } }, t("roadmap_open")),
        el("span", { class: "rm-text", text: L(step.text) })));
    });
  }

  function fillSelects() {
    [["cardsScope", "cardsLevel"], ["quizScope", "quizLevel"]].forEach(([scopeId, levelId]) => {
      const scope = $("#" + scopeId), level = $("#" + levelId);
      const sv = scope.value || "all", lv = level.value || "0";
      scope.replaceChildren(el("option", { value: "all", text: t("scope_all") }),
        ...SECTIONS.map((s) => el("option", { value: s.id, text: L(s.title) })));
      level.replaceChildren(...[0, 1, 2, 3].map((n) => el("option", { value: String(n), text: t("lvl_" + (n || "all")) })));
      scope.value = sv; level.value = lv;
    });
  }

  function initToolbar() {
    const input = $("#search");
    let timer = 0;
    input.addEventListener("input", () => {
      clearTimeout(timer);
      timer = setTimeout(() => { filter.q = input.value.trim(); applyFilters(); }, 80);
    });
    input.addEventListener("keydown", (e) => { if (e.key === "Escape" && input.value) { input.value = ""; filter.q = ""; applyFilters(); } });
    $("#searchClear").addEventListener("click", () => { input.value = ""; filter.q = ""; applyFilters(); input.focus(); });
    $$(".chip-group").forEach((g) => g.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      const key = g.dataset.filter;
      filter[key] = key === "level" ? Number(chip.dataset.value) : chip.dataset.value;
      syncChips();
      applyFilters();
    }));
    $("#emptyReset").addEventListener("click", resetFilters);
    document.addEventListener("keydown", (e) => {
      if (e.key !== "/" || e.ctrlKey || e.metaKey || e.altKey || currentView !== "reference") return;
      if (/^(INPUT|TEXTAREA|SELECT)$/.test((document.activeElement && document.activeElement.tagName) || "")) return;
      e.preventDefault();
      input.focus();
    });
    $("#btnContinue").addEventListener("click", () => {
      const id = $("#btnContinue").dataset.target;
      if (id) openEntry(id); else location.hash = "#cards";
    });
    let confirmTimer = 0;
    const resetBtn = $("#resetProgress");
    resetBtn.addEventListener("click", () => {
      if (!resetBtn.dataset.sure) {
        resetBtn.dataset.sure = "1";
        resetBtn.textContent = t("reset_confirm");
        confirmTimer = setTimeout(() => { delete resetBtn.dataset.sure; resetBtn.textContent = t("reset_progress"); }, 4000);
      } else {
        clearTimeout(confirmTimer);
        delete resetBtn.dataset.sure;
        resetBtn.textContent = t("reset_progress");
        Progress.reset();
        toast(t("reset_done"));
      }
    });
    $("#storageWarn").hidden = Store.isPersistent();
    $$(".lang-btn").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
  }

  /* ───────────────────────── Карточки ───────────────────────── */
  function pickEntries(scope, level) {
    return ENTRIES.filter((e) => (scope === "all" || e.sec.id === scope) && (!level || e.lvl === level));
  }
  const kbdHint = (n) => el("kbd", { text: String(n) });

  const Cards = (() => {
    const stage = $("#cardsStage");
    let session = null;

    function buildQueue(scope, level) {
      const cand = pickEntries(scope, level);
      const now = Date.now();
      const due = cand.filter((e) => Progress.due(e.id, now)).sort((a, b) => Progress.box(a.id) - Progress.box(b.id));
      const dueIds = new Set(due.map((e) => e.id));
      const fresh = cand.filter((e) => !Progress.seen(e.id)).sort((a, b) => a.lvl - b.lvl || a.si - b.si || a.ii - b.ii);
      const bySec = new Map();
      fresh.forEach((e) => { if (!bySec.has(e.sec.id)) bySec.set(e.sec.id, []); bySec.get(e.sec.id).push(e); });
      const mixed = [];
      const lists = Array.from(bySec.values());
      while (lists.some((l) => l.length)) lists.forEach((l) => { if (l.length) mixed.push(l.shift()); });
      const rest = cand.filter((e) => Progress.seen(e.id) && !dueIds.has(e.id)).sort((a, b) => Progress.box(a.id) - Progress.box(b.id));
      return shuffle([...due, ...mixed, ...rest].slice(0, SESSION_SIZE)).map((e) => e.id);
    }

    function start(ids) {
      const queue = ids || buildQueue($("#cardsScope").value, Number($("#cardsLevel").value));
      if (!queue.length) {
        session = null;
        stage.replaceChildren(el("p", { class: "panel-msg", text: t("cards_empty") }));
        return;
      }
      session = { queue, i: 0, known: [], again: [], revealed: false };
      render();
    }

    function answer(ok) {
      const id = session.queue[session.i];
      Progress.set(id, ok ? Progress.box(id) + 1 : 0);
      (ok ? session.known : session.again).push(id);
      session.i++;
      session.revealed = false;
      render();
    }

    function render(keepFocus) {
      if (!session) return;
      if (session.i >= session.queue.length) { renderDone(); return; }
      const e = BY_ID.get(session.queue[session.i]);
      const pct = Math.round((session.i / session.queue.length) * 100);
      const bar = el("div", { class: "session-bar" },
        el("div", { class: "meter small", role: "progressbar", "aria-label": t("cards_progress_aria"), "aria-valuemin": "0", "aria-valuemax": String(session.queue.length), "aria-valuenow": String(session.i) }, el("i", { style: "width:" + pct + "%" })),
        el("p", { class: "session-count", text: t("cards_count", { i: session.i + 1, n: session.queue.length }) }));
      const card = el("div", { class: "fc", dataset: { sec: e.sec.id } },
        el("p", { class: "fc-meta" }, el("span", { class: "tag", text: L(e.sec.title) }), el("span", { class: "tag plain", text: levelName(e.lvl) })),
        el("h2", { class: "fc-name", text: e.name }));
      let focusEl;
      if (!session.revealed) {
        card.append(el("p", { class: "fc-prompt", text: t("cards_prompt") }));
        focusEl = el("button", { class: "btn primary big-btn", type: "button", onclick: () => { session.revealed = true; render(); } }, t("cards_show"));
        card.append(el("div", { class: "fc-actions" }, focusEl));
      } else {
        card.append(el("p", { class: "fc-desc", text: L(e.desc) }));
        card.append(createSnippet({ name: e.name, code: e.code, opts: e.opts, secId: e.sec.id }));
        const note = L(e.note);
        if (note) card.append(el("p", { class: "e-note" }, el("strong", { text: t("note_label") }), richText(el("span"), note)));
        const again = el("button", { class: "btn big-btn", type: "button", onclick: () => answer(false) }, t("cards_dont") + " ", kbdHint(1));
        focusEl = el("button", { class: "btn primary big-btn", type: "button", onclick: () => answer(true) }, t("cards_know") + " ", kbdHint(2));
        card.append(el("div", { class: "fc-actions" }, again, focusEl));
      }
      stage.replaceChildren(bar, card);
      if (!keepFocus) focusEl.focus({ preventScroll: true });
    }

    function renderDone() {
      const total = session.queue.length, k = session.known.length;
      const wrap = el("div", { class: "done" },
        el("h2", { class: "done-title", text: t("round_done") }),
        el("p", { class: "done-score" }, el("strong", { text: t("round_score", { k, n: total }) }), t("round_score_tail")));
      if (session.again.length) {
        wrap.append(el("p", { class: "done-sub", text: t("round_review") }));
        wrap.append(el("ul", { class: "miss-list" }, session.again.map((id) => {
          const e = BY_ID.get(id);
          return el("li", null, el("button", { class: "link-btn mono", type: "button", onclick: () => { location.hash = entryHash(id); } }, e.name), el("span", { text: " — " + L(e.desc) }));
        })));
      }
      const next = el("button", { class: "btn primary big-btn", type: "button", onclick: () => start() }, t("round_more"));
      const only = session.again.length ? el("button", { class: "btn big-btn", type: "button", onclick: () => start(shuffle(session.again)) }, t("round_only_hard")) : null;
      wrap.append(el("div", { class: "fc-actions" }, next, only));
      stage.replaceChildren(wrap);
      next.focus({ preventScroll: true });
    }

    function init() {
      $("#cardsStart").addEventListener("click", () => start());
      document.addEventListener("keydown", (e) => {
        if (currentView !== "cards" || !session || session.i >= session.queue.length || !session.revealed) return;
        if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) || e.ctrlKey || e.metaKey || e.altKey) return;
        if (e.key === "1") answer(false);
        else if (e.key === "2") answer(true);
      });
    }
    return { init, start, show() { if (!session) start(); }, relang() { if (session) render(true); else if (stage.firstChild) stage.replaceChildren(); } };
  })();

  /* ───────────────────────── Викторина ───────────────────────── */
  const Quiz = (() => {
    const stage = $("#quizStage");
    let run = null;
    const shortOut = (e) => e.opts.out != null && !e.opts.noRun && e.opts.out.split("\n").length <= 3
      && e.opts.out.split("\n").every((l) => l.length <= 44) && e.code.split("\n").length <= 14;

    function makeQuestion(e) {
      const types = ["def", "name"];
      let outDistractors = null;
      if (shortOut(e)) {
        const pool = shuffle(ENTRIES.filter((x) => x.id !== e.id && shortOut(x) && x.opts.out !== e.opts.out));
        const seen = new Set([e.opts.out]);
        outDistractors = [];
        for (const x of pool) {
          if (seen.has(x.opts.out)) continue;
          seen.add(x.opts.out);
          outDistractors.push(x.opts.out);
          if (outDistractors.length === 3) break;
        }
        if (outDistractors.length === 3) types.push("out");
      }
      const type = types[Math.floor(Math.random() * types.length)];
      if (type === "out") {
        const options = shuffle([e.opts.out, ...outDistractors]);
        return { e, type, options, correct: options.indexOf(e.opts.out), answered: -1 };
      }
      const keyOf = (x) => (type === "def" ? L(x.desc) : x.name);
      const used = new Set([keyOf(e)]);
      const picks = [];
      for (const x of shuffle(ENTRIES.filter((y) => y.sec === e.sec && y.id !== e.id))) {
        if (used.has(keyOf(x))) continue;
        used.add(keyOf(x));
        picks.push(x);
        if (picks.length === 3) break;
      }
      const options = shuffle([e, ...picks]);
      return { e, type, options, correct: options.indexOf(e), answered: -1 };
    }

    function start(ids) {
      const scope = $("#quizScope").value, level = Number($("#quizLevel").value);
      const pool = ids ? ids.map((id) => BY_ID.get(id)) : shuffle(pickEntries(scope, level)).slice(0, QUIZ_SIZE);
      if (pool.length < 2) {
        run = null;
        stage.replaceChildren(el("p", { class: "panel-msg", text: t("quiz_need_two") }));
        return;
      }
      run = { qs: pool.map(makeQuestion), i: 0, score: 0, wrong: [] };
      render();
    }

    function choose(idx) {
      const q = run.qs[run.i];
      if (q.answered !== -1) return;
      q.answered = idx;
      const ok = idx === q.correct;
      if (ok) run.score++; else run.wrong.push(q.e.id);
      const id = q.e.id;
      Progress.set(id, ok ? Progress.box(id) + 1 : Math.max(0, Progress.box(id) - 1));
      render();
    }

    const optionText = (q, o) => (q.type === "def" ? L(o.desc) : q.type === "name" ? o.name : o);

    function render(keepFocus) {
      if (!run) return;
      if (run.i >= run.qs.length) { renderDone(); return; }
      const q = run.qs[run.i], e = q.e, answered = q.answered !== -1;
      const pct = Math.round((run.i / run.qs.length) * 100);
      const head = el("div", { class: "session-bar" },
        el("div", { class: "meter small", role: "progressbar", "aria-label": t("quiz_progress_aria"), "aria-valuemin": "0", "aria-valuemax": String(run.qs.length), "aria-valuenow": String(run.i) }, el("i", { style: "width:" + pct + "%" })),
        el("p", { class: "session-count", text: t("quiz_count", { i: run.i + 1, n: run.qs.length }) }));
      let prompt;
      if (q.type === "def") prompt = el("h2", { class: "q-prompt" }, t("q_what_is_a"), el("span", { class: "q-name", dataset: { sec: e.sec.id }, text: e.name }), t("q_what_is_b"));
      else if (q.type === "name") prompt = el("h2", { class: "q-prompt" }, t("q_which_a") + L(e.desc) + t("q_which_b"));
      else prompt = el("h2", { class: "q-prompt", text: t("q_output") });
      const list = el("ol", { class: "q-options" }, q.options.map((o, i) => {
        let cls = "q-opt" + (q.type === "name" ? " mono" : "") + (q.type === "out" ? " q-opt-out" : "");
        if (answered) { if (i === q.correct) cls += " correct"; else if (i === q.answered) cls += " wrong"; }
        return el("li", null, el("button", { class: cls, type: "button", disabled: answered, onclick: () => choose(i) },
          kbdHint(i + 1), el("span", { class: "q-opt-text", text: optionText(q, o) })));
      }));
      const card = el("div", { class: "quiz-card" }, prompt);
      if (q.type === "out") card.append(codeBlock(e.code, "kotlin", "q-code"));
      card.append(list);
      let focusEl = null;
      if (answered) {
        const ok = q.answered === q.correct;
        card.append(el("p", { class: "q-verdict " + (ok ? "ok" : "bad"), role: "status", text: ok ? t("q_ok") : t("q_bad", { answer: optionText(q, q.options[q.correct]).replace(/\n/g, " ⏎ ") }) }));
        const note = L(e.note);
        if (note) card.append(el("p", { class: "e-note" }, el("strong", { text: t("note_label") }), richText(el("span"), note)));
        focusEl = el("button", { class: "btn primary big-btn", type: "button", onclick: () => { run.i++; render(); } }, run.i + 1 === run.qs.length ? t("q_result") : t("q_next"));
        card.append(el("div", { class: "fc-actions" }, focusEl));
      }
      stage.replaceChildren(head, card);
      if (focusEl && !keepFocus) focusEl.focus({ preventScroll: true });
    }

    function renderDone() {
      const total = run.qs.length, s = run.score, ratio = s / total;
      const verdict = ratio === 1 ? t("quiz_v_all") : ratio >= 0.7 ? t("quiz_v_good") : ratio >= 0.4 ? t("quiz_v_mid") : t("quiz_v_low");
      const wrap = el("div", { class: "done" },
        el("h2", { class: "done-title", text: t("quiz_result_title") }),
        el("p", { class: "done-score" }, el("strong", { text: t("quiz_score", { s, n: total }) }), " — " + verdict));
      if (run.wrong.length) {
        wrap.append(el("p", { class: "done-sub", text: t("quiz_errors") }));
        wrap.append(el("ul", { class: "miss-list" }, run.wrong.map((id) => {
          const e = BY_ID.get(id);
          return el("li", null, el("button", { class: "link-btn mono", type: "button", onclick: () => { location.hash = entryHash(id); } }, e.name), el("span", { text: " — " + L(e.desc) }));
        })));
      }
      const again = el("button", { class: "btn primary big-btn", type: "button", onclick: () => start() }, t("quiz_new"));
      const only = run.wrong.length ? el("button", { class: "btn big-btn", type: "button", onclick: () => start(shuffle(run.wrong)) }, t("quiz_repeat")) : null;
      wrap.append(el("div", { class: "fc-actions" }, again, only));
      stage.replaceChildren(wrap);
      again.focus({ preventScroll: true });
    }

    function init() {
      $("#quizStart").addEventListener("click", () => start());
      document.addEventListener("keydown", (e) => {
        if (currentView !== "quiz" || !run || run.i >= run.qs.length) return;
        if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) || e.ctrlKey || e.metaKey || e.altKey) return;
        const n = Number(e.key);
        if (n >= 1 && n <= run.qs[run.i].options.length) choose(n - 1);
      });
    }
    return { init, relang() { if (run) render(true); else if (stage.firstChild) stage.replaceChildren(); } };
  })();

  /* ───────────────────────── Песочница ───────────────────────── */
  const Play = (() => {
    const host = $("#playHost");
    let mounted = false, loading = false;
    async function show() {
      if (mounted || loading) return;
      loading = true;
      host.replaceChildren(el("p", { class: "snip-status", text: t("play_loading") }));
      try {
        const saved = Store.get(KEY.play, null);
        const box = el("div", { class: "snip-code" });
        host.replaceChildren(box);
        await KP.mount(box, typeof saved === "string" && saved.trim() ? saved : PLAY_DEFAULT, {
          onChange: (code) => { try { Store.set(KEY.play, code); } catch (e) { /* ничего */ } }
        });
        mounted = true;
      } catch (err) {
        host.replaceChildren(el("div", { class: "play-fail" },
          el("p", { text: t("play_fail") }),
          el("button", { class: "btn primary", type: "button", onclick: () => { loading = false; show(); } }, t("play_retry"))));
      }
      loading = false;
    }
    return { show };
  })();

  /* ───────────────────────── Навигация ───────────────────────── */
  const VIEWS = ["reference", "cards", "quiz", "play"];
  let currentView = "reference";
  let firstRoute = true;

  function route() {
    const raw = location.hash.replace(/^#/, "");
    const parts = raw.split("/");
    const view = VIEWS.includes(parts[0]) ? parts[0] : "reference";
    const switched = view !== currentView || firstRoute;
    currentView = view;
    VIEWS.forEach((v) => { $("#view-" + v).hidden = v !== view; });
    $$(".tab").forEach((tab) => {
      if (tab.dataset.view === view) tab.setAttribute("aria-current", "page"); else tab.removeAttribute("aria-current");
    });
    document.title = t("doc_title_" + view);
    if (view === "reference" && parts[1]) {
      let id = "";
      try { id = decodeURIComponent(parts.slice(1).join("/")); } catch (e) { id = ""; }
      if (BY_ID.has(id)) { firstRoute = false; requestAnimationFrame(() => openEntry(id)); return; }
    }
    if (switched && !firstRoute) {
      window.scrollTo(0, 0);
      const h = $("#view-" + view + " h1");
      if (h) h.focus({ preventScroll: true });
    }
    if (view === "cards") Cards.show();
    if (view === "play") Play.show();
    firstRoute = false;
  }

  /* ───────────────────────── Смена языка и запуск ───────────────────────── */
  function renderContent() {
    buildHero();
    buildRoadmap();
    buildSideNav();
    buildReference();
    observeSections();
    fillSelects();
  }

  function setLang(next) {
    if (!LANGS.includes(next) || next === lang) return;
    const open = Array.from(rows.values()).filter((r) => r.open).map((r) => r.item.id);
    lang = next;
    Store.set(KEY.lang, lang);
    autoOpened.clear(); rows.clear(); secEls.clear();
    applyStatic();
    renderContent();
    open.forEach((id) => setOpen(id, true));
    applyFilters();
    updateProgressUi();
    Theme.paint();
    if (Visitors.n != null) Visitors.show(Visitors.n);
    Cards.relang();
    Quiz.relang();
    const resetBtn = $("#resetProgress");
    delete resetBtn.dataset.sure;
    resetBtn.textContent = t("reset_progress");
    document.title = t("doc_title_" + currentView);
  }

  /* ───────── Счётчик устройств ─────────
     Устройство = браузер с сохранённым случайным id (localStorage + cookie).
     Один и тот же браузер считается один раз, сколько бы раз он ни заходил.
     Нужен сервер server.js; при открытии файла напрямую счётчик скрыт. */
  const Visitors = {
    KEY: "kd_device",
    deviceId() {
      let id = "";
      try { id = localStorage.getItem(this.KEY) || ""; } catch (e) {}
      if (!id) {
        const m = document.cookie.match(/(?:^|; )kd_device=([\w-]{16,64})/);
        if (m) id = m[1];
      }
      if (!/^[\w-]{16,64}$/.test(id)) {
        const a = new Uint8Array(16);
        (window.crypto || window.msCrypto).getRandomValues(a);
        id = Array.from(a, (b) => b.toString(16).padStart(2, "0")).join("");
      }
      try { localStorage.setItem(this.KEY, id); } catch (e) {}
      document.cookie = "kd_device=" + id + "; max-age=63072000; path=/; SameSite=Lax";
      return id;
    },
    show(n) {
      const box = $("#visitors"), num = $("#visitorsN");
      if (!box || !num || !Number.isFinite(n)) return;
      this.n = n;
      num.textContent = n.toLocaleString(lang === "uz" ? "uz-UZ" : "ru-RU");
      box.hidden = false;
    },
    async init() {
      if (location.protocol === "file:") return;
      try {
        const r = await fetch("api/visit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: this.deviceId() }),
          cache: "no-store"
        });
        if (!r.ok) return;
        const d = await r.json();
        this.show(d.count);
      } catch (e) { /* сервера нет — счётчик остаётся скрытым */ }
    }
  };

  function init() {
    $$("[data-icon]").forEach((n) => n.append(icon(n.dataset.icon)));
    $("#searchClear").append(icon("x"));
    $("#toTop").append(icon("up"));
    applyStatic();
    Theme.paint();

    Progress.load();
    renderContent();
    initToolbar();
    Cards.init();
    Quiz.init();
    Progress.onChange(updateProgressUi);
    window.addEventListener("storage", (e) => { if (e.key === KEY.progress) Progress.reload(); });
    updateProgressUi();
    applyFilters();

    const toTop = $("#toTop");
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { toTop.hidden = window.scrollY < 900; ticking = false; });
    }, { passive: true });
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion() ? "auto" : "smooth" }));

    window.addEventListener("hashchange", route);
    route();
    Visitors.init();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
