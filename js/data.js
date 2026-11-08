/* ==========================================================================
   data.js — всё содержимое справочника (русский и узбекский текст).
   Создан автоматически из исходников; выводы программ получены реальным запуском Kotlin.
   Формат записи: [имя, описание RU, описание UZ, код, «Важно» RU, «Важно» UZ, уровень 1–3, {опции}]
   Опции: run (можно запустить), out (проверенный вывод), lang (xml/bash), noRun.
   ========================================================================== */
window.KD_DATA = {
 "sections": [
  {
   "id": "kw",
   "title": {
    "ru": "Ключевые слова Kotlin",
    "uz": "Kotlin kalit so‘zlari"
   },
   "short": {
    "ru": "Ключевые слова",
    "uz": "Kalit so‘zlar"
   },
   "desc": {
    "ru": "Слова и модификаторы, из которых строится любая программа на Kotlin. Каждый пример — целая программа, которую можно запустить.",
    "uz": "Kotlin dasturi quriladigan so‘zlar va modifikatorlar. Har bir misol — to‘liq dastur, uni ishga tushirish mumkin."
   },
   "items": [
    [
     "val",
     "Объявляет неизменяемую переменную (только чтение)",
     "O‘zgarmas o‘zgaruvchini e’lon qiladi (faqat o‘qish uchun)",
     "fun main() {\n    val name = \"Anvar\"\n    val age: Int = 20\n    println(\"$name, $age\")\n    // name = \"Ali\"   // error: val cannot be reassigned\n}",
     "Значение `val` нельзя переприсвоить (как `final` в Java). Если переменная не должна меняться, выбирайте `val`.",
     "`val` qiymatini qayta o‘zgartirib bo‘lmaydi (Java’dagi `final` kabi). Agar o‘zgarmasa, doim `val` ishlating.",
     1,
     {
      "run": true,
      "out": "Anvar, 20"
     }
    ],
    [
     "var",
     "Объявляет изменяемую переменную",
     "O‘zgaruvchan (o‘zgartiriladigan) o‘zgaruvchini e’lon qiladi",
     "fun main() {\n    var counter = 0\n    counter += 1\n    counter++\n    println(counter)\n}",
     "Тип выводится автоматически: `var x = 0` — это `Int`. Менять можно значение, но не тип.",
     "Tur avtomatik aniqlanadi: `var x = 0` — bu `Int`. Qiymatni o‘zgartirish mumkin, turni esa yo‘q.",
     1,
     {
      "run": true,
      "out": "2"
     }
    ],
    [
     "fun",
     "Объявляет функцию",
     "Funksiyani e’lon qiladi",
     "fun add(a: Int, b: Int): Int {\n    return a + b\n}\n\nfun square(x: Int) = x * x            // expression body\n\nfun greet(name: String = \"world\") = println(\"Hello, $name!\")\n\nfun main() {\n    println(add(2, 3))\n    println(square(5))\n    greet()\n    greet(\"Anvar\")\n}",
     "Если тело — одно выражение, пишите `= выражение`. У параметров могут быть значения по умолчанию.",
     "Agar tana bitta ifoda bo‘lsa, `= ifoda` deb yozing. Parametrlarga standart qiymat berish mumkin.",
     1,
     {
      "run": true,
      "out": "5\n25\nHello, world!\nHello, Anvar!"
     }
    ],
    [
     "if",
     "Выполняет код при истинном условии; это выражение",
     "Shart rost bo‘lsa kodni bajaradi; bu ifoda hisoblanadi",
     "fun main() {\n    val age = 20\n    if (age >= 18) {\n        println(\"adult\")\n    }\n    val status = if (age >= 18) \"adult\" else \"minor\"\n    println(status)\n}",
     "В Kotlin `if` возвращает значение, поэтому тернарного оператора `?:` как в Java здесь нет: его заменяет `if`.",
     "Kotlin’da `if` qiymat qaytaradi, shuning uchun Java’dagi `?:` kabi ternar operator yo‘q: uning o‘rniga `if` ishlatiladi.",
     1,
     {
      "run": true,
      "out": "adult\nadult"
     }
    ],
    [
     "else",
     "Ветка, которая срабатывает, если условие ложно",
     "Shart yolg‘on bo‘lganda ishlaydigan shoxcha",
     "fun main() {\n    val score = 75\n    if (score >= 90) println(\"A\")\n    else if (score >= 70) println(\"B\")\n    else println(\"C\")\n}",
     "Цепочку условий можно собирать через `else if`. Если ветвей много, удобнее `when`.",
     "Shartlar zanjirini `else if` bilan yig‘ish mumkin. Shoxchalar ko‘p bo‘lsa, `when` qulayroq.",
     1,
     {
      "run": true,
      "out": "B"
     }
    ],
    [
     "when",
     "Выбирает ветку по значению; мощная замена switch",
     "Qiymatga qarab shoxchani tanlaydi; switch’ning kuchli o‘rnini bosadi",
     "fun describe(x: Any): String = when (x) {\n    0 -> \"zero\"\n    in 1..9 -> \"digit\"\n    is String -> \"text of length ${x.length}\"\n    else -> \"something else\"\n}\n\nfun main() {\n    println(describe(0))\n    println(describe(7))\n    println(describe(\"kotlin\"))\n    println(describe(3.14))\n}",
     "В ветках можно проверять значения, диапазоны (`in`) и типы (`is`). Если `when` используется как выражение, ветка `else` обязательна.",
     "Shoxchalarda qiymat, oraliq (`in`) va tur (`is`) tekshirish mumkin. `when` ifoda sifatida ishlatilsa, `else` shoxchasi majburiy.",
     1,
     {
      "run": true,
      "out": "zero\ndigit\ntext of length 6\nsomething else"
     }
    ],
    [
     "for",
     "Перебирает элементы диапазона, строки или коллекции",
     "Oraliq, satr yoki kolleksiya elementlarini birma-bir ko‘rib chiqadi",
     "fun main() {\n    for (i in 1..3) println(\"step $i\")\n    for (ch in \"abc\") print(\"$ch \")\n    println()\n    for ((index, value) in listOf(\"a\", \"b\").withIndex()) {\n        println(\"$index=$value\")\n    }\n}",
     "Классического `for (int i = 0; ...)` в Kotlin нет. Вместо него используют диапазоны: `1..5`, `0 until n`, `10 downTo 1`.",
     "Kotlin’da klassik `for (int i = 0; ...)` yo‘q. Uning o‘rniga oraliqlar ishlatiladi: `1..5`, `0 until n`, `10 downTo 1`.",
     1,
     {
      "run": true,
      "out": "step 1\nstep 2\nstep 3\na b c \n0=a\n1=b"
     }
    ],
    [
     "while",
     "Повторяет код, пока условие истинно",
     "Shart rost ekan, kodni takrorlaydi",
     "fun main() {\n    var n = 3\n    while (n > 0) {\n        println(n)\n        n--\n    }\n    println(\"liftoff\")\n}",
     "Условие проверяется до выполнения тела, поэтому тело может не выполниться ни разу.",
     "Shart tana bajarilishidan oldin tekshiriladi, shuning uchun tana bir marta ham bajarilmasligi mumkin.",
     1,
     {
      "run": true,
      "out": "3\n2\n1\nliftoff"
     }
    ],
    [
     "do",
     "Цикл do-while: тело выполняется минимум один раз",
     "do-while sikli: tana kamida bir marta bajariladi",
     "fun main() {\n    var i = 0\n    do {\n        println(\"i = $i\")\n        i++\n    } while (i < 3)\n}",
     "Условие проверяется после тела. Подходит, когда действие нужно выполнить хотя бы раз.",
     "Shart tanadan keyin tekshiriladi. Amalni kamida bir marta bajarish kerak bo‘lganda qo‘l keladi.",
     2,
     {
      "run": true,
      "out": "i = 0\ni = 1\ni = 2"
     }
    ],
    [
     "break",
     "Прерывает цикл (можно с меткой)",
     "Sikl ishini to‘xtatadi (yorliq bilan ham mumkin)",
     "fun main() {\n    outer@ for (i in 1..3) {\n        for (j in 1..3) {\n            if (i * j == 4) break@outer\n            println(\"$i*$j=${i * j}\")\n        }\n    }\n}",
     "Обычный `break` выходит только из ближайшего цикла. Метка `outer@` позволяет выйти сразу из внешнего.",
     "Oddiy `break` faqat eng yaqin sikldan chiqadi. `outer@` yorlig‘i tashqi sikldan birdaniga chiqishga imkon beradi.",
     1,
     {
      "run": true,
      "out": "1*1=1\n1*2=2\n1*3=3\n2*1=2"
     }
    ],
    [
     "continue",
     "Пропускает остаток шага и переходит к следующему",
     "Joriy qadamning qolgan qismini o‘tkazib, keyingisiga o‘tadi",
     "fun main() {\n    for (i in 1..5) {\n        if (i % 2 == 0) continue\n        println(i)\n    }\n}",
     "Цикл не останавливается: пропускается только текущая итерация.",
     "Sikl to‘xtamaydi: faqat joriy iteratsiya o‘tkazib yuboriladi.",
     1,
     {
      "run": true,
      "out": "1\n3\n5"
     }
    ],
    [
     "return",
     "Возвращает значение из функции и завершает её",
     "Funksiyadan qiymat qaytaradi va uni tugatadi",
     "fun firstNegative(list: List<Int>): Int? {\n    for (x in list) {\n        if (x < 0) return x\n    }\n    return null\n}\n\nfun main() {\n    println(firstNegative(listOf(3, -1, -5)))\n    println(firstNegative(listOf(1, 2)))\n    listOf(1, 2, 3).forEach {\n        if (it == 2) return@forEach\n        println(it)\n    }\n}",
     "Внутри лямбды обычный `return` выходит из внешней функции. Чтобы выйти только из лямбды, пишут `return@forEach`.",
     "Lambda ichida oddiy `return` tashqi funksiyadan chiqadi. Faqat lambdadan chiqish uchun `return@forEach` deb yoziladi.",
     1,
     {
      "run": true,
      "out": "-1\nnull\n1\n3"
     }
    ],
    [
     "in",
     "Проверяет принадлежность диапазону или коллекции",
     "Oraliq yoki kolleksiyaga tegishlilikni tekshiradi",
     "fun main() {\n    println(5 in 1..10)\n    println(\"a\" in listOf(\"a\", \"b\"))\n    println(20 !in 1..10)\n    for (i in 10 downTo 8) print(\"$i \")\n    println()\n}",
     "Работает и в цикле `for (x in items)`, и как проверка. Отрицание — `!in`.",
     "`for (x in items)` siklida ham, tekshiruv sifatida ham ishlaydi. Inkori — `!in`.",
     1,
     {
      "run": true,
      "out": "true\ntrue\ntrue\n10 9 8 "
     }
    ],
    [
     "is",
     "Проверяет тип объекта; включает умное приведение",
     "Obyekt turini tekshiradi; aqlli tur o‘zgartirishni yoqadi",
     "fun main() {\n    val x: Any = \"Kotlin\"\n    if (x is String) {\n        println(x.length)      // smart cast: x is String here\n    }\n    println(x !is Int)\n}",
     "После проверки `is` компилятор сам считает переменную нужным типом (smart cast), приводить вручную не нужно.",
     "`is` tekshiruvidan so‘ng kompilyator o‘zgaruvchini kerakli tur deb hisoblaydi (smart cast), qo‘lda o‘zgartirish shart emas.",
     2,
     {
      "run": true,
      "out": "6\ntrue"
     }
    ],
    [
     "as",
     "Приводит значение к типу; as? делает это безопасно",
     "Qiymatni turga o‘tkazadi; as? buni xavfsiz bajaradi",
     "fun main() {\n    val x: Any = \"text\"\n    val s = x as String\n    println(s.uppercase())\n    val n = x as? Int\n    println(n)\n}",
     "Обычный `as` бросает `ClassCastException`, если тип не подходит. `as?` в этом случае возвращает `null`.",
     "Tur mos kelmasa, oddiy `as` `ClassCastException` tashlaydi. `as?` esa bu holda `null` qaytaradi.",
     2,
     {
      "run": true,
      "out": "TEXT\nnull"
     }
    ],
    [
     "null",
     "Отсутствие значения; доступно только типам со знаком ?",
     "Qiymat yo‘qligi; faqat ? belgili turlarga mumkin",
     "fun main() {\n    var name: String? = \"Anvar\"\n    println(name?.length)\n    name = null\n    println(name?.length)\n    println(name ?: \"unknown\")\n}",
     "Обычный тип (`String`) не может быть `null`: это защищает от `NullPointerException`. Допускает `null` только `String?`.",
     "Oddiy tur (`String`) `null` bo‘la olmaydi: bu `NullPointerException`dan himoya qiladi. `null`ni faqat `String?` qabul qiladi.",
     1,
     {
      "run": true,
      "out": "5\nnull\nunknown"
     }
    ],
    [
     "class",
     "Объявляет класс",
     "Klassni e’lon qiladi",
     "class Person(val name: String, var age: Int) {\n    fun greet() = println(\"Hi, I'm $name, $age\")\n    fun birthday() { age++ }\n}\n\nfun main() {\n    val p = Person(\"Anvar\", 20)\n    p.greet()\n    p.birthday()\n    p.greet()\n}",
     "Свойства можно объявлять прямо в основном конструкторе: `class Person(val name: String)`. Ключевого слова `new` в Kotlin нет.",
     "Xususiyatlarni to‘g‘ridan-to‘g‘ri asosiy konstruktorda e’lon qilish mumkin: `class Person(val name: String)`. Kotlin’da `new` kalit so‘zi yo‘q.",
     1,
     {
      "run": true,
      "out": "Hi, I'm Anvar, 20\nHi, I'm Anvar, 21"
     }
    ],
    [
     "data",
     "Класс для хранения данных: toString, equals, copy — автоматически",
     "Ma’lumot saqlash klassi: toString, equals, copy — avtomatik",
     "data class User(val name: String, val age: Int)\n\nfun main() {\n    val u = User(\"Anvar\", 20)\n    println(u)\n    val older = u.copy(age = 21)\n    println(older)\n    println(u == User(\"Anvar\", 20))\n    val (name, age) = u\n    println(\"$name $age\")\n}",
     "Сравнение через `==` проверяет значения полей, а не ссылки. Класс можно «разобрать» на части: `val (name, age) = u`.",
     "`==` bilan taqqoslash havolalarni emas, maydon qiymatlarini tekshiradi. Klassni qismlarga ajratish mumkin: `val (name, age) = u`.",
     1,
     {
      "run": true,
      "out": "User(name=Anvar, age=20)\nUser(name=Anvar, age=21)\ntrue\nAnvar 20"
     }
    ],
    [
     "sealed",
     "Закрытая иерархия: все наследники известны компилятору",
     "Yopiq iyerarxiya: barcha vorislar kompilyatorga ma’lum",
     "sealed class Result {\n    data class Success(val data: String) : Result()\n    data class Error(val message: String) : Result()\n    object Loading : Result()\n}\n\nfun show(r: Result) = when (r) {\n    is Result.Success -> \"ok: ${r.data}\"\n    is Result.Error -> \"error: ${r.message}\"\n    Result.Loading -> \"loading...\"\n}\n\nfun main() {\n    println(show(Result.Loading))\n    println(show(Result.Success(\"data\")))\n    println(show(Result.Error(\"no network\")))\n}",
     "`when` по `sealed`-типу не требует `else`, а если забыть один из вариантов — код не скомпилируется. Так принято описывать состояния экрана.",
     "`sealed` tur bo‘yicha `when` uchun `else` kerak emas, biror variantni unutsangiz — kod kompilyatsiya bo‘lmaydi. Ekran holatlarini shunday tasvirlash odat.",
     2,
     {
      "run": true,
      "out": "loading...\nok: data\nerror: no network"
     }
    ],
    [
     "enum",
     "Перечисление: фиксированный набор значений",
     "Sanab o‘tiluvchi tur: qiymatlarning qat’iy to‘plami",
     "enum class Direction(val degrees: Int) {\n    NORTH(0), EAST(90), SOUTH(180), WEST(270)\n}\n\nfun main() {\n    println(Direction.EAST)\n    println(Direction.EAST.degrees)\n    println(Direction.entries.map { it.name })\n    println(Direction.valueOf(\"WEST\").ordinal)\n}",
     "У каждого значения есть `name` и `ordinal`. Список всех значений дают `entries` (в старом коде — `values()`).",
     "Har bir qiymatda `name` va `ordinal` bor. Barcha qiymatlar ro‘yxatini `entries` beradi (eski kodda — `values()`).",
     2,
     {
      "run": true,
      "out": "EAST\n90\n[NORTH, EAST, SOUTH, WEST]\n3"
     }
    ],
    [
     "open",
     "Разрешает наследовать класс или переопределять метод",
     "Klassdan meros olishga yoki metodni qayta aniqlashga ruxsat beradi",
     "open class Animal {\n    open fun sound() = \"...\"\n}\n\nclass Dog : Animal() {\n    override fun sound() = \"Woof\"\n}\n\nfun main() {\n    println(Animal().sound())\n    println(Dog().sound())\n}",
     "По умолчанию все классы и методы в Kotlin закрыты (`final`). Чтобы разрешить наследование, нужен `open`.",
     "Kotlin’da barcha klass va metodlar sukut bo‘yicha yopiq (`final`). Meros olishga ruxsat berish uchun `open` kerak.",
     2,
     {
      "run": true,
      "out": "...\nWoof"
     }
    ],
    [
     "abstract",
     "Класс или метод без реализации: её дадут наследники",
     "Amalga oshirilmagan klass yoki metod: uni vorislar beradi",
     "abstract class Shape {\n    abstract fun area(): Double\n    fun describe() = \"area = ${area()}\"\n}\n\nclass Square(private val side: Double) : Shape() {\n    override fun area() = side * side\n}\n\nfun main() {\n    println(Square(3.0).describe())\n}",
     "Объект абстрактного класса создать нельзя. Метод с `abstract` не имеет тела, а наследник обязан его реализовать.",
     "Abstrakt klass obyektini yaratib bo‘lmaydi. `abstract` metodning tanasi bo‘lmaydi, voris uni amalga oshirishi shart.",
     2,
     {
      "run": true,
      "out": "area = 9.0"
     }
    ],
    [
     "interface",
     "Контракт: набор методов, которые обязан реализовать класс",
     "Shartnoma: klass amalga oshirishi shart bo‘lgan metodlar to‘plami",
     "interface Clickable {\n    fun onClick()\n    fun description() = \"clickable\"      // default implementation\n}\n\nclass Button : Clickable {\n    override fun onClick() = println(\"clicked\")\n}\n\nfun main() {\n    val b = Button()\n    b.onClick()\n    println(b.description())\n}",
     "Класс может реализовать несколько интерфейсов. В интерфейсе допустимы методы с телом (реализация по умолчанию).",
     "Klass bir nechta interfeysni amalga oshirishi mumkin. Interfeysda tanasi bor metodlar (standart amalga oshirish) ham bo‘ladi.",
     2,
     {
      "run": true,
      "out": "clicked\nclickable"
     }
    ],
    [
     "object",
     "Объявляет синглтон (единственный экземпляр) или анонимный объект",
     "Singleton (yagona nusxa) yoki anonim obyektni e’lon qiladi",
     "object Logger {\n    private var count = 0\n    fun log(msg: String) {\n        count++\n        println(\"#$count $msg\")\n    }\n}\n\nfun main() {\n    Logger.log(\"start\")\n    Logger.log(\"finish\")\n    val listener = object {\n        fun hello() = println(\"anonymous object\")\n    }\n    listener.hello()\n}",
     "Создавать `Logger` через конструктор не нужно: он уже существует в единственном экземпляре и создаётся при первом обращении.",
     "`Logger`ni konstruktor orqali yaratish shart emas: u allaqachon yagona nusxada mavjud va birinchi murojaatda yaratiladi.",
     2,
     {
      "run": true,
      "out": "#1 start\n#2 finish\nanonymous object"
     }
    ],
    [
     "companion",
     "Статические члены класса: companion object",
     "Klassning statik a’zolari: companion object",
     "class User private constructor(val name: String) {\n    companion object {\n        const val MIN_LENGTH = 3\n        fun create(name: String): User? =\n            if (name.length >= MIN_LENGTH) User(name) else null\n    }\n}\n\nfun main() {\n    println(User.create(\"Al\"))\n    println(User.create(\"Anvar\")?.name)\n    println(User.MIN_LENGTH)\n}",
     "Ключевого слова `static` в Kotlin нет: общие для класса функции и константы живут в `companion object`. Частая задача — фабричные методы.",
     "Kotlin’da `static` kalit so‘zi yo‘q: klass uchun umumiy funksiya va konstantalar `companion object`da turadi. Odatiy vazifa — fabrika metodlari.",
     2,
     {
      "run": true,
      "out": "null\nAnvar\n3"
     }
    ],
    [
     "override",
     "Переопределяет метод родителя или интерфейса",
     "Ota klass yoki interfeys metodini qayta aniqlaydi",
     "class Point(val x: Int, val y: Int) {\n    override fun toString() = \"Point($x, $y)\"\n    override fun equals(other: Any?) = other is Point && x == other.x && y == other.y\n    override fun hashCode() = 31 * x + y\n}\n\nfun main() {\n    println(Point(1, 2))\n    println(Point(1, 2) == Point(1, 2))\n}",
     "Слово `override` обязательно: так компилятор ловит опечатки в имени метода. Если переопределяете `equals`, переопределите и `hashCode`.",
     "`override` so‘zi majburiy: shu tufayli kompilyator metod nomidagi xatoni topadi. `equals`ni qayta aniqlasangiz, `hashCode`ni ham qayta aniqlang.",
     2,
     {
      "run": true,
      "out": "Point(1, 2)\ntrue"
     }
    ],
    [
     "init",
     "Блок инициализации: выполняется при создании объекта",
     "Initsializatsiya bloki: obyekt yaratilganda bajariladi",
     "class Account(initial: Int) {\n    var balance: Int = 0\n        private set\n\n    init {\n        require(initial >= 0) { \"initial must be >= 0\" }\n        balance = initial\n        println(\"account created: $balance\")\n    }\n\n    fun deposit(x: Int) { balance += x }\n}\n\nfun main() {\n    val a = Account(100)\n    a.deposit(50)\n    println(a.balance)\n}",
     "Блоки `init` выполняются в порядке записи вместе с инициализаторами свойств. Идеально для проверки аргументов через `require`.",
     "`init` bloklari xususiyat initsializatorlari bilan birga yozilish tartibida bajariladi. Argumentlarni `require` bilan tekshirish uchun juda mos.",
     2,
     {
      "run": true,
      "out": "account created: 100\n150"
     }
    ],
    [
     "constructor",
     "Дополнительный (вторичный) конструктор",
     "Qo‘shimcha (ikkilamchi) konstruktor",
     "class Person(val name: String) {\n    var age: Int = 0\n\n    constructor(name: String, age: Int) : this(name) {\n        this.age = age\n    }\n}\n\nfun main() {\n    val a = Person(\"Ali\")\n    val b = Person(\"Vali\", 30)\n    println(\"${a.name} ${a.age}\")\n    println(\"${b.name} ${b.age}\")\n}",
     "Вторичный конструктор обязан вызвать основной через `this(...)`. Чаще вместо него хватает значений параметров по умолчанию.",
     "Ikkilamchi konstruktor asosiyni `this(...)` orqali chaqirishi shart. Ko‘pincha o‘rniga parametrlarning standart qiymatlari yetarli.",
     2,
     {
      "run": true,
      "out": "Ali 0\nVali 30"
     }
    ],
    [
     "by",
     "Делегирует работу другому объекту: by lazy, by viewModels",
     "Ishni boshqa obyektga topshiradi: by lazy, by viewModels",
     "interface Printer { fun print(text: String) }\nclass ConsolePrinter : Printer { override fun print(text: String) = println(text) }\nclass Report(printer: Printer) : Printer by printer\n\nfun main() {\n    val lazyValue: String by lazy {\n        println(\"computing...\")\n        \"result\"\n    }\n    println(\"before\")\n    println(lazyValue)\n    println(lazyValue)\n    Report(ConsolePrinter()).print(\"delegated\")\n}",
     "`by lazy` вычисляет значение один раз при первом обращении. В Android вы часто увидите `val vm: MyViewModel by viewModels()`.",
     "`by lazy` qiymatni birinchi murojaatda bir marta hisoblaydi. Android’da ko‘pincha `val vm: MyViewModel by viewModels()` uchraydi.",
     3,
     {
      "run": true,
      "out": "before\ncomputing...\nresult\nresult\ndelegated"
     }
    ],
    [
     "lateinit",
     "Позволяет объявить переменную без значения и задать позже",
     "O‘zgaruvchini qiymatsiz e’lon qilib, keyinroq berishga imkon beradi",
     "class Screen {\n    lateinit var title: String\n\n    fun show() {\n        if (::title.isInitialized) println(title) else println(\"title is not set\")\n    }\n}\n\nfun main() {\n    val s = Screen()\n    s.show()\n    s.title = \"Home\"\n    s.show()\n}",
     "Только для `var` не-nullable типов. Обращение до присваивания бросает `UninitializedPropertyAccessException`. В Android так хранят `binding` и `adapter`.",
     "Faqat nullable bo‘lmagan `var` uchun. Qiymat berishdan oldin murojaat qilsangiz `UninitializedPropertyAccessException` chiqadi. Android’da `binding` va `adapter` shunday saqlanadi.",
     2,
     {
      "run": true,
      "out": "title is not set\nHome"
     }
    ],
    [
     "const",
     "Константа времени компиляции",
     "Kompilyatsiya vaqtidagi konstanta",
     "const val MAX_USERS = 100\n\nobject Config {\n    const val BASE_URL = \"https://example.com\"\n}\n\nfun main() {\n    println(MAX_USERS)\n    println(Config.BASE_URL)\n}",
     "`const` допустим только для простых типов и строк на верхнем уровне или в `object`. Имена констант принято писать ЗАГЛАВНЫМИ.",
     "`const` faqat oddiy turlar va satrlar uchun, yuqori darajada yoki `object` ichida mumkin. Konstanta nomlari BOSH HARFLARDA yoziladi.",
     2,
     {
      "run": true,
      "out": "100\nhttps://example.com"
     }
    ],
    [
     "vararg",
     "Параметр с переменным числом аргументов",
     "O‘zgaruvchan sondagi argumentli parametr",
     "fun sum(vararg numbers: Int): Int = numbers.sum()\n\nfun main() {\n    println(sum(1, 2, 3))\n    val arr = intArrayOf(4, 5, 6)\n    println(sum(*arr))\n}",
     "Внутри функции `vararg` — это массив. Чтобы передать готовый массив, ставят оператор `*` (spread).",
     "Funksiya ichida `vararg` — massiv. Tayyor massivni uzatish uchun `*` (spread) operatori qo‘yiladi.",
     2,
     {
      "run": true,
      "out": "6\n15"
     }
    ],
    [
     "typealias",
     "Даёт короткое имя длинному типу",
     "Uzun turga qisqa nom beradi",
     "typealias UserMap = Map<Int, String>\ntypealias Handler = (String) -> Unit\n\nfun main() {\n    val users: UserMap = mapOf(1 to \"Ali\", 2 to \"Vali\")\n    val h: Handler = { println(\"hello $it\") }\n    h(users.getValue(1))\n}",
     "Новый тип не создаётся: это просто псевдоним. Удобен для сложных типов вроде лямбд и вложенных коллекций.",
     "Yangi tur yaratilmaydi: bu shunchaki taxallus. Lambda va ichma-ich kolleksiyalar kabi murakkab turlar uchun qulay.",
     3,
     {
      "run": true,
      "out": "hello Ali"
     }
    ],
    [
     "try",
     "Перехватывает исключения: try / catch / finally",
     "Istisnolarni ushlaydi: try / catch / finally",
     "fun main() {\n    try {\n        val n = \"abc\".toInt()\n        println(n)\n    } catch (e: NumberFormatException) {\n        println(\"not a number\")\n    } finally {\n        println(\"always runs\")\n    }\n    val safe = try { \"42\".toInt() } catch (e: Exception) { -1 }\n    println(safe)\n}",
     "В Kotlin `try` — выражение: его результат можно записать в переменную. Проверяемых исключений (как `throws` в Java) здесь нет.",
     "Kotlin’da `try` — ifoda: natijasini o‘zgaruvchiga yozish mumkin. Java’dagi `throws` kabi tekshiriladigan istisnolar yo‘q.",
     2,
     {
      "run": true,
      "out": "not a number\nalways runs\n42"
     }
    ],
    [
     "throw",
     "Бросает исключение вручную",
     "Istisnoni qo‘lda tashlaydi",
     "fun setAge(age: Int) {\n    if (age < 0) throw IllegalArgumentException(\"age must be >= 0\")\n}\n\nfun main() {\n    try {\n        setAge(-1)\n    } catch (e: IllegalArgumentException) {\n        println(\"caught: ${e.message}\")\n    }\n}",
     "Для проверки аргументов удобнее готовые `require(...)` и `check(...)`: они бросают нужные исключения сами.",
     "Argumentlarni tekshirish uchun tayyor `require(...)` va `check(...)` qulayroq: ular kerakli istisnoni o‘zlari tashlaydi.",
     2,
     {
      "run": true,
      "out": "caught: age must be >= 0"
     }
    ],
    [
     "private",
     "Ограничивает видимость: private, protected, internal, public",
     "Ko‘rinish doirasini cheklaydi: private, protected, internal, public",
     "class Wallet {\n    private var money = 100\n    internal fun show() = println(money)\n    fun spend(x: Int) { if (x <= money) money -= x }\n}\n\nfun main() {\n    val w = Wallet()\n    w.spend(30)\n    w.show()\n    // w.money     // error: money is private\n}",
     "По умолчанию всё `public`. `internal` — видно внутри одного модуля Gradle. Прячьте всё, что не нужно снаружи.",
     "Sukut bo‘yicha hammasi `public`. `internal` — bitta Gradle moduli ichida ko‘rinadi. Tashqarida kerak bo‘lmagan hamma narsani yashiring.",
     1,
     {
      "run": true,
      "out": "70"
     }
    ]
   ]
  },
  {
   "id": "ty",
   "title": {
    "ru": "Типы и null-безопасность",
    "uz": "Turlar va null-xavfsizlik"
   },
   "short": {
    "ru": "Типы",
    "uz": "Turlar"
   },
   "desc": {
    "ru": "Основные типы данных Kotlin и защита от NullPointerException. В Kotlin всё — объект, примитивов «в чистом виде» нет.",
    "uz": "Kotlin’ning asosiy ma’lumot turlari va NullPointerException’dan himoya. Kotlin’da hamma narsa — obyekt."
   },
   "items": [
    [
     "Int",
     "Целое 32-битное число",
     "32 bitli butun son",
     "fun main() {\n    val a = 7\n    println(a / 2)                 // integer division\n    println(a % 2)\n    println(a.toDouble() / 2)\n    println(Int.MAX_VALUE)\n    println(Int.MAX_VALUE + 1)     // overflow\n}",
     "Деление двух `Int` даёт `Int` (`7 / 2 = 3`). При переполнении число «заворачивается» в отрицательное, ошибки не будет.",
     "Ikkita `Int`ni bo‘lish `Int` beradi (`7 / 2 = 3`). To‘lib ketganda son manfiyga «aylanadi», xato chiqmaydi.",
     1,
     {
      "run": true,
      "out": "3\n1\n3.5\n2147483647\n-2147483648"
     }
    ],
    [
     "Long",
     "Целое 64-битное число (суффикс L)",
     "64 bitli butun son (L qo‘shimchasi)",
     "fun main() {\n    val big = 3_000_000_000L\n    println(big)\n    println(Long.MAX_VALUE)\n    println(1_000_000 * 1_000_000)      // Int overflow\n    println(1_000_000L * 1_000_000)\n}",
     "Если число не помещается в `Int` (больше ~2,1 млрд), нужен `Long`. Для читаемости разделяйте разряды `_`.",
     "Son `Int`ga sig‘masa (~2,1 mlrddan katta), `Long` kerak. O‘qish qulayligi uchun xonalarni `_` bilan ajrating.",
     1,
     {
      "run": true,
      "out": "3000000000\n9223372036854775807\n-727379968\n1000000000000"
     }
    ],
    [
     "Double",
     "Дробное число (64 бита)",
     "Kasr son (64 bit)",
     "fun main() {\n    val x = 0.1 + 0.2\n    println(x)\n    println(10 / 4)           // Int / Int\n    println(10 / 4.0)\n    println(\"%.2f\".format(3.14159))\n}",
     "`0.1 + 0.2` не равно ровно `0.3`: дроби хранятся двоично. Для денег лучше `BigDecimal` или целые копейки.",
     "`0.1 + 0.2` aniq `0.3`ga teng emas: kasrlar ikkilik ko‘rinishda saqlanadi. Pul uchun `BigDecimal` yoki butun tiyinlar yaxshiroq.",
     1,
     {
      "run": true,
      "out": "0.30000000000000004\n2\n2.5\n3.14"
     }
    ],
    [
     "Boolean",
     "Логический тип: true или false",
     "Mantiqiy tur: true yoki false",
     "fun main() {\n    val a = true\n    val b = false\n    println(a && b)\n    println(a || b)\n    println(!a)\n    println(5 > 3 && \"kotlin\".startsWith(\"k\"))\n}",
     "`&&` и `||` вычисляются лениво: если ответ уже ясен, правая часть не выполняется.",
     "`&&` va `||` dangasa hisoblanadi: javob aniq bo‘lsa, o‘ng qism bajarilmaydi.",
     1,
     {
      "run": true,
      "out": "false\ntrue\nfalse\ntrue"
     }
    ],
    [
     "Char",
     "Один символ (в одинарных кавычках)",
     "Bitta belgi (bitta tirnoqda)",
     "fun main() {\n    val c = 'A'\n    println(c.code)\n    println(c + 2)\n    println('a'.uppercaseChar())\n    println('7'.isDigit())\n    println('7'.digitToInt() + 1)\n}",
     "`Char` — это не число: чтобы получить код, используйте `.code`. Цифру-символ в число переводит `digitToInt()`.",
     "`Char` — son emas: kodini olish uchun `.code` ishlating. Raqam-belgini songa `digitToInt()` o‘giradi.",
     2,
     {
      "run": true,
      "out": "65\nC\nA\ntrue\n8"
     }
    ],
    [
     "String",
     "Неизменяемая строка текста",
     "O‘zgarmas matn satri",
     "fun main() {\n    val s = \"Kotlin\"\n    println(s.length)\n    println(s.uppercase())\n    println(s[0])\n    println(s.substring(1, 4))\n    println(s.reversed())\n    println(\"a,b,c\".split(\",\"))\n    println(\"\"\"\n        multi\n        line\n    \"\"\".trimIndent())\n}",
     "Строки неизменяемы: методы возвращают новую строку. Тройные кавычки `\"\"\"` дают многострочный текст.",
     "Satrlar o‘zgarmas: metodlar yangi satr qaytaradi. Uchlik tirnoq `\"\"\"` ko‘p qatorli matn beradi.",
     1,
     {
      "run": true,
      "out": "6\nKOTLIN\nK\notl\nniltoK\n[a, b, c]\nmulti\nline"
     }
    ],
    [
     "\"$x ${y}\"",
     "Шаблон строки: подстановка значений прямо в текст",
     "Satr shabloni: qiymatlarni to‘g‘ridan-to‘g‘ri matnga qo‘yish",
     "fun main() {\n    val name = \"Anvar\"\n    val a = 3\n    val b = 4\n    println(\"Hello, $name!\")\n    println(\"$a + $b = ${a + b}\")\n    println(\"name has ${name.length} letters\")\n}",
     "Простое имя вставляют через `$имя`, а любое выражение — через `${выражение}`. Склеивать строки через `+` обычно не нужно.",
     "Oddiy nomni `$nom` bilan, istalgan ifodani `${ifoda}` bilan qo‘yiladi. Satrlarni `+` bilan yopishtirish odatda shart emas.",
     1,
     {
      "run": true,
      "out": "Hello, Anvar!\n3 + 4 = 7\nname has 5 letters"
     }
    ],
    [
     "Any",
     "Корневой тип: любой объект является Any",
     "Ildiz tur: har qanday obyekt Any hisoblanadi",
     "fun main() {\n    val items: List<Any> = listOf(1, \"two\", 3.0, true)\n    for (item in items) {\n        println(\"$item -> ${item::class.simpleName}\")\n    }\n}",
     "Аналог `Object` в Java. Чтобы узнать, что внутри, используйте `is` или `when`.",
     "Java’dagi `Object` analogi. Ichida nima borligini bilish uchun `is` yoki `when` ishlating.",
     2,
     {
      "run": true,
      "out": "1 -> Int\ntwo -> String\n3.0 -> Double\ntrue -> Boolean"
     }
    ],
    [
     "Unit",
     "«Ничего полезного»: тип результата функции без return",
     "«Foydali narsa yo‘q»: return’siz funksiya natijasi turi",
     "fun sayHi() {\n    println(\"hi\")\n}\n\nfun main() {\n    val r: Unit = sayHi()\n    println(r)\n}",
     "Это аналог `void`, но настоящий тип. Писать `: Unit` у функции не нужно: оно подразумевается.",
     "Bu `void` analogi, lekin haqiqiy tur. Funksiyaga `: Unit` yozish shart emas: u nazarda tutiladi.",
     2,
     {
      "run": true,
      "out": "hi\nkotlin.Unit"
     }
    ],
    [
     "Nothing",
     "Тип «никогда не вернётся»: функция всегда бросает ошибку",
     "«Hech qachon qaytmaydi» turi: funksiya doim xato tashlaydi",
     "fun fail(message: String): Nothing = throw IllegalStateException(message)\n\nfun main() {\n    val x: Int = try { fail(\"boom\") } catch (e: IllegalStateException) { -1 }\n    println(x)\n}",
     "`throw` и `return` сами имеют тип `Nothing`, поэтому подходят в любое выражение, например `x ?: return`.",
     "`throw` va `return`ning o‘zi `Nothing` turida, shuning uchun istalgan ifodada ishlatiladi, masalan `x ?: return`.",
     3,
     {
      "run": true,
      "out": "-1"
     }
    ],
    [
     "Int?",
     "Тип, допускающий null (знак вопроса)",
     "null qabul qiladigan tur (so‘roq belgisi)",
     "fun main() {\n    val a: Int? = null\n    val b: Int? = 5\n    println(a)\n    println(b?.plus(1))\n    println(\"12\".toIntOrNull())\n    println(\"x12\".toIntOrNull())\n}",
     "`Int?` и `Int` — разные типы. Многие функции имеют безопасные версии: `toIntOrNull()`, `firstOrNull()`, `getOrNull()`.",
     "`Int?` va `Int` — turli turlar. Ko‘p funksiyaning xavfsiz variantlari bor: `toIntOrNull()`, `firstOrNull()`, `getOrNull()`.",
     1,
     {
      "run": true,
      "out": "null\n6\n12\nnull"
     }
    ],
    [
     "?.",
     "Безопасный вызов: если слева null, результат тоже null",
     "Xavfsiz chaqiruv: chap tomon null bo‘lsa, natija ham null",
     "class Address(val city: String?)\nclass User(val address: Address?)\n\nfun main() {\n    val u1 = User(Address(\"Tashkent\"))\n    val u2 = User(null)\n    println(u1.address?.city?.length)\n    println(u2.address?.city?.length)\n}",
     "Цепочка `a?.b?.c` не упадёт: на первом `null` она остановится и вернёт `null`.",
     "`a?.b?.c` zanjiri xato bermaydi: birinchi `null`da to‘xtab, `null` qaytaradi.",
     1,
     {
      "run": true,
      "out": "8\nnull"
     }
    ],
    [
     "?:",
     "Оператор Элвиса: значение по умолчанию для null",
     "Elvis operatori: null uchun standart qiymat",
     "fun main() {\n    val name: String? = null\n    println(name ?: \"guest\")\n    val len = name?.length ?: 0\n    println(len)\n\n    fun need(x: Int?): Int {\n        val v = x ?: return -1\n        return v\n    }\n    println(need(null))\n}",
     "Справа можно поставить не только значение, но и `return` или `throw`: `val id = intent ?: return`.",
     "O‘ng tomonga qiymatdan tashqari `return` yoki `throw` ham qo‘yish mumkin: `val id = intent ?: return`.",
     1,
     {
      "run": true,
      "out": "guest\n0\n-1"
     }
    ],
    [
     "!!",
     "Утверждает «тут не null»; при null бросает NullPointerException",
     "«Bu yerda null emas» deb tasdiqlaydi; null bo‘lsa NullPointerException tashlaydi",
     "fun main() {\n    val a: String? = \"text\"\n    println(a!!.length)\n\n    val b: String? = null\n    try {\n        println(b!!.length)\n    } catch (e: NullPointerException) {\n        println(\"NPE\")\n    }\n}",
     "Это «аварийный выход»: старайтесь обходиться без `!!`, используя `?.`, `?:` и `let`. Каждый `!!` — возможное падение приложения.",
     "Bu «favqulodda chiqish»: `!!`siz, `?.`, `?:` va `let` bilan ishlashga harakat qiling. Har bir `!!` — ilovaning ehtimoliy qulashi.",
     2,
     {
      "run": true,
      "out": "4\nNPE"
     }
    ],
    [
     "Array",
     "Массив фиксированного размера",
     "O‘lchami qat’iy massiv",
     "fun main() {\n    val arr = arrayOf(3, 1, 2)\n    arr[0] = 10\n    println(arr.joinToString())\n    println(arr.size)\n    val zeros = IntArray(3)\n    println(zeros.contentToString())\n    arr.sort()\n    println(arr.toList())\n}",
     "Размер массива менять нельзя, элементы — можно. Чаще используют списки (`List`), они гибче.",
     "Massiv o‘lchamini o‘zgartirib bo‘lmaydi, elementlarni esa mumkin. Odatda ro‘yxatlar (`List`) ko‘proq ishlatiladi, ular moslashuvchan.",
     2,
     {
      "run": true,
      "out": "10, 1, 2\n3\n[0, 0, 0]\n[1, 2, 10]"
     }
    ],
    [
     "Pair",
     "Пара значений (и Triple — тройка)",
     "Ikkita qiymat jufti (Triple — uchlik)",
     "fun main() {\n    val p = \"age\" to 20\n    println(p)\n    val (key, value) = p\n    println(\"$key=$value\")\n    val t = Triple(1, \"a\", true)\n    println(t.second)\n}",
     "Запись `a to b` создаёт `Pair`. Удобно, чтобы вернуть из функции два значения или построить `Map`.",
     "`a to b` yozuvi `Pair` yaratadi. Funksiyadan ikkita qiymat qaytarish yoki `Map` qurish uchun qulay.",
     2,
     {
      "run": true,
      "out": "(age, 20)\nage=20\na"
     }
    ],
    [
     "..",
     "Диапазон: 1..5, until, downTo, step",
     "Oraliq: 1..5, until, downTo, step",
     "fun main() {\n    println((1..5).toList())\n    println((1 until 5).toList())\n    println((10 downTo 1 step 3).toList())\n    println(3 in 1..5)\n    println(('a'..'e').joinToString(\"\"))\n}",
     "`1..5` включает правую границу, `1 until 5` — нет. Диапазоны работают и с символами.",
     "`1..5` o‘ng chegarani o‘z ichiga oladi, `1 until 5` — yo‘q. Oraliqlar belgilar bilan ham ishlaydi.",
     1,
     {
      "run": true,
      "out": "[1, 2, 3, 4, 5]\n[1, 2, 3, 4]\n[10, 7, 4, 1]\ntrue\nabcde"
     }
    ]
   ]
  },
  {
   "id": "col",
   "title": {
    "ru": "Коллекции и их функции",
    "uz": "Kolleksiyalar va ularning funksiyalari"
   },
   "short": {
    "ru": "Коллекции",
    "uz": "Kolleksiyalar"
   },
   "desc": {
    "ru": "Списки, множества, словари и мощные функции для работы с ними: map, filter, groupBy и другие.",
    "uz": "Ro‘yxatlar, to‘plamlar, lug‘atlar va ular bilan ishlash uchun kuchli funksiyalar: map, filter, groupBy va boshqalar."
   },
   "items": [
    [
     "listOf",
     "Неизменяемый список",
     "O‘zgarmas ro‘yxat",
     "fun main() {\n    val list = listOf(\"a\", \"b\", \"c\")\n    println(list)\n    println(list[1])\n    println(list.size)\n    println(\"b\" in list)\n    println(list.getOrNull(10))\n}",
     "`List` только читается: `add` у него нет. Выход за границы через `[]` бросает ошибку, а `getOrNull` вернёт `null`.",
     "`List` faqat o‘qiladi: unda `add` yo‘q. `[]` bilan chegaradan chiqsangiz xato chiqadi, `getOrNull` esa `null` qaytaradi.",
     1,
     {
      "run": true,
      "out": "[a, b, c]\nb\n3\ntrue\nnull"
     }
    ],
    [
     "mutableListOf",
     "Изменяемый список",
     "O‘zgartiriladigan ro‘yxat",
     "fun main() {\n    val list = mutableListOf(1, 2)\n    list.add(3)\n    list.remove(1)\n    list[0] = 20\n    list.addAll(listOf(4, 5))\n    println(list)\n    list.clear()\n    println(list.isEmpty())\n}",
     "Переменная может быть `val`, а список всё равно меняется: `val` защищает ссылку, а не содержимое.",
     "O‘zgaruvchi `val` bo‘lsa ham ro‘yxat o‘zgaraveradi: `val` havolani himoya qiladi, mazmunni emas.",
     1,
     {
      "run": true,
      "out": "[20, 3, 4, 5]\ntrue"
     }
    ],
    [
     "setOf",
     "Множество: без повторов",
     "To‘plam: takrorlarsiz",
     "fun main() {\n    val set = setOf(1, 2, 2, 3, 3)\n    println(set)\n    println(set.size)\n    println(2 in set)\n    println(set union setOf(9))\n    println(set intersect setOf(2, 3, 4))\n}",
     "Проверка `in` в множестве работает очень быстро. Для удаления дублей из списка используйте `toSet()` или `distinct()`.",
     "To‘plamda `in` tekshiruvi juda tez ishlaydi. Ro‘yxatdan takrorlarni olib tashlash uchun `toSet()` yoki `distinct()` ishlating.",
     2,
     {
      "run": true,
      "out": "[1, 2, 3]\n3\ntrue\n[1, 2, 3, 9]\n[2, 3]"
     }
    ],
    [
     "mapOf",
     "Словарь: пары «ключ — значение»",
     "Lug‘at: «kalit — qiymat» juftlari",
     "fun main() {\n    val ages = mapOf(\"Ali\" to 20, \"Vali\" to 25)\n    println(ages[\"Ali\"])\n    println(ages[\"Zoir\"])\n    println(ages.getOrDefault(\"Zoir\", 0))\n    for ((name, age) in ages) println(\"$name: $age\")\n    println(ages.keys)\n    println(ages.values)\n}",
     "Обращение `map[key]` возвращает `null`, если ключа нет. Пары создаются через `to`.",
     "`map[key]` kalit bo‘lmasa `null` qaytaradi. Juftlar `to` orqali yaratiladi.",
     1,
     {
      "run": true,
      "out": "20\nnull\n0\nAli: 20\nVali: 25\n[Ali, Vali]\n[20, 25]"
     }
    ],
    [
     "mutableMapOf",
     "Изменяемый словарь",
     "O‘zgartiriladigan lug‘at",
     "fun main() {\n    val stock = mutableMapOf(\"apple\" to 3)\n    stock[\"pear\"] = 5\n    stock[\"apple\"] = stock.getValue(\"apple\") + 2\n    stock.remove(\"pear\")\n    println(stock)\n\n    val counts = mutableMapOf<Char, Int>()\n    for (c in \"hello\") counts[c] = (counts[c] ?: 0) + 1\n    println(counts)\n}",
     "Запись `map[key] = value` добавляет или заменяет пару. Типичная задача — подсчёт повторов.",
     "`map[key] = value` yozuvi juftni qo‘shadi yoki almashtiradi. Odatiy vazifa — takrorlarni sanash.",
     2,
     {
      "run": true,
      "out": "{apple=5}\n{h=1, e=1, l=2, o=1}"
     }
    ],
    [
     "map",
     "Преобразует каждый элемент и возвращает новый список",
     "Har bir elementni o‘zgartirib, yangi ro‘yxat qaytaradi",
     "fun main() {\n    val nums = listOf(1, 2, 3)\n    println(nums.map { it * 2 })\n    println(nums.map { \"n$it\" })\n    println(nums.mapIndexed { i, x -> i * x })\n}",
     "В лямбде единственный параметр называется `it`. Исходный список не меняется.",
     "Lambdada yagona parametr `it` deb ataladi. Asl ro‘yxat o‘zgarmaydi.",
     1,
     {
      "run": true,
      "out": "[2, 4, 6]\n[n1, n2, n3]\n[0, 2, 6]"
     }
    ],
    [
     "filter",
     "Оставляет только подходящие элементы",
     "Faqat mos elementlarni qoldiradi",
     "fun main() {\n    val nums = listOf(5, -1, 8, 0, -3)\n    println(nums.filter { it > 0 })\n    println(nums.filterNot { it > 0 })\n    println(listOf(\"a\", null, \"b\").filterNotNull())\n}",
     "`filterNotNull()` убирает все `null` и меняет тип списка на `List<T>`.",
     "`filterNotNull()` barcha `null`larni olib tashlaydi va ro‘yxat turini `List<T>`ga o‘zgartiradi.",
     1,
     {
      "run": true,
      "out": "[5, 8]\n[-1, 0, -3]\n[a, b]"
     }
    ],
    [
     "forEach",
     "Выполняет действие для каждого элемента",
     "Har bir element uchun amalni bajaradi",
     "fun main() {\n    listOf(\"a\", \"b\").forEach { println(it) }\n    listOf(\"x\", \"y\").forEachIndexed { i, s -> println(\"$i: $s\") }\n}",
     "Результата `forEach` не возвращает. Если нужен новый список — берите `map`.",
     "`forEach` natija qaytarmaydi. Yangi ro‘yxat kerak bo‘lsa — `map` oling.",
     1,
     {
      "run": true,
      "out": "a\nb\n0: x\n1: y"
     }
    ],
    [
     "fold",
     "Сворачивает коллекцию в одно значение (reduce — без начального)",
     "Kolleksiyani bitta qiymatga aylantiradi (reduce — boshlang‘ich qiymatsiz)",
     "fun main() {\n    val nums = listOf(1, 2, 3, 4)\n    println(nums.reduce { acc, x -> acc + x })\n    println(nums.fold(10) { acc, x -> acc + x })\n    println(nums.fold(\"\") { acc, x -> acc + x })\n}",
     "`fold` принимает начальное значение и работает с пустым списком; `reduce` на пустом списке бросает ошибку.",
     "`fold` boshlang‘ich qiymat oladi va bo‘sh ro‘yxat bilan ishlaydi; `reduce` bo‘sh ro‘yxatda xato tashlaydi.",
     2,
     {
      "run": true,
      "out": "10\n20\n1234"
     }
    ],
    [
     "sum",
     "Сумма, среднее, количество, максимум и минимум",
     "Yig‘indi, o‘rtacha, soni, maksimum va minimum",
     "fun main() {\n    val nums = listOf(4, 8, 15)\n    println(nums.sum())\n    println(nums.average())\n    println(nums.count { it > 5 })\n    println(nums.maxOrNull())\n    println(nums.minOrNull())\n    println(nums.sumOf { it * 2 })\n}",
     "`maxOrNull()` и `minOrNull()` возвращают `null` для пустого списка, а не падают.",
     "`maxOrNull()` va `minOrNull()` bo‘sh ro‘yxatda xato bermay, `null` qaytaradi.",
     1,
     {
      "run": true,
      "out": "27\n9.0\n2\n15\n4\n54"
     }
    ],
    [
     "sorted",
     "Сортировка: sorted, sortedBy, sortedWith",
     "Saralash: sorted, sortedBy, sortedWith",
     "fun main() {\n    val nums = listOf(3, 1, 2)\n    println(nums.sorted())\n    println(nums.sortedDescending())\n    val words = listOf(\"pear\", \"fig\", \"banana\")\n    println(words.sortedBy { it.length })\n    println(words.sortedByDescending { it.length })\n    println(words.sortedWith(compareBy({ it.length }, { it })))\n}",
     "`sorted` создаёт новый список. Чтобы отсортировать на месте, у `MutableList` есть `sort()`.",
     "`sorted` yangi ro‘yxat yaratadi. Joyida saralash uchun `MutableList`da `sort()` bor.",
     1,
     {
      "run": true,
      "out": "[1, 2, 3]\n[3, 2, 1]\n[fig, pear, banana]\n[banana, pear, fig]\n[fig, pear, banana]"
     }
    ],
    [
     "groupBy",
     "Группирует элементы по ключу в Map",
     "Elementlarni kalit bo‘yicha Map’ga guruhlaydi",
     "fun main() {\n    val words = listOf(\"apple\", \"avocado\", \"banana\", \"blueberry\", \"cherry\")\n    println(words.groupBy { it.first() })\n    println(words.groupBy { it.length }.mapValues { it.value.size })\n}",
     "Результат — словарь, где значение — список элементов группы. `mapValues` превращает группы, например в их размеры.",
     "Natija — lug‘at, qiymati guruh elementlari ro‘yxati. `mapValues` guruhlarni, masalan, o‘lchamlariga aylantiradi.",
     2,
     {
      "run": true,
      "out": "{a=[apple, avocado], b=[banana, blueberry], c=[cherry]}\n{5=1, 7=1, 6=2, 9=1}"
     }
    ],
    [
     "first",
     "Первый/последний элемент или первый подходящий",
     "Birinchi/oxirgi element yoki birinchi mos element",
     "fun main() {\n    val nums = listOf(5, 8, 12)\n    println(nums.first())\n    println(nums.last())\n    println(nums.first { it > 6 })\n    println(nums.firstOrNull { it > 100 })\n    println(nums.find { it % 2 == 0 })\n}",
     "`first { }` бросает ошибку, если ничего не найдено. `firstOrNull { }` и `find { }` вернут `null`.",
     "Hech narsa topilmasa `first { }` xato tashlaydi. `firstOrNull { }` va `find { }` `null` qaytaradi.",
     1,
     {
      "run": true,
      "out": "5\n12\n8\nnull\n8"
     }
    ],
    [
     "any",
     "Проверки any, all, none для условия",
     "Shart uchun any, all, none tekshiruvlari",
     "fun main() {\n    val nums = listOf(2, 4, 6)\n    println(nums.any { it > 5 })\n    println(nums.all { it % 2 == 0 })\n    println(nums.none { it < 0 })\n    println(emptyList<Int>().all { it > 0 })\n}",
     "Для пустой коллекции `all` и `none` возвращают `true`, а `any` — `false`.",
     "Bo‘sh kolleksiyada `all` va `none` `true`, `any` esa `false` qaytaradi.",
     2,
     {
      "run": true,
      "out": "true\ntrue\ntrue\ntrue"
     }
    ],
    [
     "take",
     "Берёт или отбрасывает часть: take, drop, chunked",
     "Bir qismini oladi yoki tashlaydi: take, drop, chunked",
     "fun main() {\n    val nums = (1..6).toList()\n    println(nums.take(2))\n    println(nums.drop(4))\n    println(nums.takeLast(2))\n    println(nums.chunked(4))\n    println(nums.windowed(3).first())\n}",
     "`chunked(n)` режет список на части по `n` элементов — удобно для страниц и сеток.",
     "`chunked(n)` ro‘yxatni `n` elementli qismlarga bo‘ladi — sahifalar va setkalar uchun qulay.",
     2,
     {
      "run": true,
      "out": "[1, 2]\n[5, 6]\n[5, 6]\n[[1, 2, 3, 4], [5, 6]]\n[1, 2, 3]"
     }
    ],
    [
     "joinToString",
     "Склеивает элементы в строку",
     "Elementlarni satrga birlashtiradi",
     "fun main() {\n    val list = listOf(\"a\", \"b\", \"c\")\n    println(list.joinToString())\n    println(list.joinToString(\" | \"))\n    println(list.joinToString(prefix = \"[\", postfix = \"]\", separator = \"-\"))\n}",
     "По умолчанию разделитель — запятая с пробелом. Есть параметры `prefix`, `postfix`, `limit`.",
     "Sukut bo‘yicha ajratuvchi — vergul va probel. `prefix`, `postfix`, `limit` parametrlari bor.",
     1,
     {
      "run": true,
      "out": "a, b, c\na | b | c\n[a-b-c]"
     }
    ],
    [
     "zip",
     "Объединяет два списка в пары",
     "Ikki ro‘yxatni juftlarga birlashtiradi",
     "fun main() {\n    val names = listOf(\"Ali\", \"Vali\")\n    val ages = listOf(20, 25)\n    println(names.zip(ages))\n    println(names.zip(ages) { n, a -> \"$n($a)\" })\n    println(names.zip(ages).toMap())\n}",
     "Длина результата равна длине более короткого списка.",
     "Natija uzunligi qisqaroq ro‘yxat uzunligiga teng.",
     2,
     {
      "run": true,
      "out": "[(Ali, 20), (Vali, 25)]\n[Ali(20), Vali(25)]\n{Ali=20, Vali=25}"
     }
    ],
    [
     "flatMap",
     "Разворачивает списки списков в один",
     "Ro‘yxatlar ro‘yxatini bitta ro‘yxatga yoyadi",
     "fun main() {\n    val lists = listOf(listOf(1, 2), listOf(3), listOf(4, 5))\n    println(lists.flatten())\n    println(lists.flatMap { it.map { x -> x * 10 } })\n}",
     "`flatMap` — это `map`, а затем `flatten`. Нужен, когда каждый элемент превращается в список.",
     "`flatMap` — bu `map`, so‘ng `flatten`. Har bir element ro‘yxatga aylanganda kerak bo‘ladi.",
     3,
     {
      "run": true,
      "out": "[1, 2, 3, 4, 5]\n[10, 20, 30, 40, 50]"
     }
    ],
    [
     "distinct",
     "Убирает повторяющиеся элементы",
     "Takrorlanuvchi elementlarni olib tashlaydi",
     "fun main() {\n    println(listOf(1, 2, 2, 3, 1).distinct())\n    println(listOf(\"apple\", \"avocado\", \"banana\").distinctBy { it.first() })\n}",
     "Порядок первых вхождений сохраняется. `distinctBy` сравнивает по ключу.",
     "Birinchi uchragan tartib saqlanadi. `distinctBy` kalit bo‘yicha solishtiradi.",
     2,
     {
      "run": true,
      "out": "[1, 2, 3]\n[apple, banana]"
     }
    ],
    [
     "partition",
     "Делит список на два по условию",
     "Ro‘yxatni shart bo‘yicha ikkiga bo‘ladi",
     "fun main() {\n    val (even, odd) = (1..6).partition { it % 2 == 0 }\n    println(even)\n    println(odd)\n}",
     "Возвращает `Pair` из двух списков, поэтому результат удобно «разобрать» сразу на две переменные.",
     "Ikki ro‘yxatdan iborat `Pair` qaytaradi, shuning uchun natijani darrov ikki o‘zgaruvchiga «ajratish» qulay.",
     2,
     {
      "run": true,
      "out": "[2, 4, 6]\n[1, 3, 5]"
     }
    ],
    [
     "associate",
     "Строит Map из элементов: associateWith, associateBy",
     "Elementlardan Map quradi: associateWith, associateBy",
     "fun main() {\n    val words = listOf(\"one\", \"three\")\n    println(words.associateWith { it.length })\n    println(words.associateBy { it.first() })\n    println(words.associate { it to it.uppercase() })\n}",
     "`associateWith` — элемент становится ключом, `associateBy` — элемент становится значением, а ключ вычисляется.",
     "`associateWith` — element kalit bo‘ladi, `associateBy` — element qiymat bo‘ladi, kalit esa hisoblanadi.",
     3,
     {
      "run": true,
      "out": "{one=3, three=5}\n{o=one, t=three}\n{one=ONE, three=THREE}"
     }
    ],
    [
     "asSequence",
     "Ленивая последовательность: вычисляет только нужное",
     "Dangasa ketma-ketlik: faqat kerakli qismini hisoblaydi",
     "fun main() {\n    val result = (1..1_000_000).asSequence()\n        .map { println(\"map $it\"); it * 2 }\n        .filter { it % 3 == 0 }\n        .first()\n    println(result)\n}",
     "Обычный список обработал бы все миллион элементов, а `Sequence` остановился сразу после первого подходящего. Полезно на больших данных.",
     "Oddiy ro‘yxat million elementning hammasini ishlardi, `Sequence` esa birinchi mosida darrov to‘xtadi. Katta ma’lumotlarda foydali.",
     3,
     {
      "run": true,
      "out": "map 1\nmap 2\nmap 3\n6"
     }
    ]
   ]
  },
  {
   "id": "fn",
   "title": {
    "ru": "Стандартные функции",
    "uz": "Standart funksiyalar"
   },
   "short": {
    "ru": "Функции",
    "uz": "Funksiyalar"
   },
   "desc": {
    "ru": "Функции, которые вы будете писать каждый день: вывод, проверки, scope-функции (let, apply, also, run), лямбды и расширения.",
    "uz": "Har kuni yoziladigan funksiyalar: chiqarish, tekshiruvlar, scope-funksiyalar (let, apply, also, run), lambdalar va kengaytmalar."
   },
   "items": [
    [
     "println",
     "Выводит значение и переводит строку (print — без перевода)",
     "Qiymatni chiqaradi va qatorni o‘tkazadi (print — o‘tkazmasdan)",
     "fun main() {\n    println(\"with newline\")\n    print(\"no newline, \")\n    print(\"same line\\n\")\n    println(listOf(1, 2))\n    println()\n    println(42)\n}",
     "Принимает любой тип. В Android для отладки используют не `println`, а `Log.d(...)` — вывод виден в Logcat.",
     "Istalgan turni qabul qiladi. Android’da sinash uchun `println` emas, `Log.d(...)` ishlatiladi — natija Logcat’da ko‘rinadi.",
     1,
     {
      "run": true,
      "out": "with newline\nno newline, same line\n[1, 2]\n\n42"
     }
    ],
    [
     "readln",
     "Читает строку, введённую пользователем",
     "Foydalanuvchi kiritgan satrni o‘qiydi",
     "fun main() {\n    print(\"Your name: \")\n    val name = readln()\n    println(\"Hello, $name!\")\n\n    val n = readln().toInt()\n    println(n * 2)\n}",
     "`readln()` бросает ошибку при конце ввода, а `readlnOrNull()` вернёт `null`. На телефоне ввод идёт не из консоли, а из полей на экране.",
     "Kiritish tugaganda `readln()` xato tashlaydi, `readlnOrNull()` esa `null` qaytaradi. Telefonda kiritish konsoldan emas, ekrandagi maydonlardan bo‘ladi.",
     1,
     {
      "noRun": true
     }
    ],
    [
     "repeat",
     "Повторяет блок кода n раз",
     "Kod blokini n marta takrorlaydi",
     "fun main() {\n    repeat(3) { i ->\n        println(\"hello $i\")\n    }\n}",
     "Номер повторения (с нуля) приходит в лямбду как параметр.",
     "Takrorlash raqami (noldan) lambdaga parametr sifatida keladi.",
     1,
     {
      "run": true,
      "out": "hello 0\nhello 1\nhello 2"
     }
    ],
    [
     "require",
     "Проверяет аргументы (require) и состояние (check)",
     "Argumentlar (require) va holatni (check) tekshiradi",
     "fun setAge(age: Int) {\n    require(age >= 0) { \"age must be >= 0, got $age\" }\n    println(\"age = $age\")\n}\n\nfun main() {\n    setAge(5)\n    try { setAge(-1) } catch (e: IllegalArgumentException) { println(e.message) }\n    try { check(false) { \"bad state\" } } catch (e: IllegalStateException) { println(e.message) }\n}",
     "`require` проверяет то, что передал вызывающий (`IllegalArgumentException`), `check` — внутреннее состояние (`IllegalStateException`).",
     "`require` chaqiruvchi uzatganini tekshiradi (`IllegalArgumentException`), `check` — ichki holatni (`IllegalStateException`).",
     2,
     {
      "run": true,
      "out": "age = 5\nage must be >= 0, got -1\nbad state"
     }
    ],
    [
     "let",
     "Выполняет блок для значения; с ?. защищает от null",
     "Qiymat uchun blokni bajaradi; ?. bilan null’dan himoya qiladi",
     "fun main() {\n    val name: String? = \"kotlin\"\n    name?.let { println(it.uppercase()) }\n\n    val n: String? = null\n    n?.let { println(\"never printed\") }\n\n    val length = name?.let { it.length } ?: 0\n    println(length)\n}",
     "Самый частый приём: `x?.let { ... }` — «если не null, сделай это». Внутри значение доступно как `it`.",
     "Eng ko‘p uchraydigan usul: `x?.let { ... }` — «null bo‘lmasa, buni qil». Ichida qiymat `it` sifatida mavjud.",
     1,
     {
      "run": true,
      "out": "KOTLIN\n6"
     }
    ],
    [
     "apply",
     "Настраивает объект и возвращает его самого",
     "Obyektni sozlaydi va uning o‘zini qaytaradi",
     "class Config {\n    var host = \"\"\n    var port = 0\n}\n\nfun main() {\n    val c = Config().apply {\n        host = \"localhost\"\n        port = 8080\n    }\n    println(\"${c.host}:${c.port}\")\n}",
     "Внутри блока объект доступен как `this`, поэтому поля задают без префикса. Идеально для создания и настройки в одном выражении.",
     "Blok ichida obyekt `this` sifatida mavjud, shuning uchun maydonlar prefikssiz beriladi. Yaratish va sozlashni bitta ifodada bajarish uchun ideal.",
     2,
     {
      "run": true,
      "out": "localhost:8080"
     }
    ],
    [
     "also",
     "Выполняет побочное действие и возвращает исходный объект",
     "Qo‘shimcha amalni bajaradi va asl obyektni qaytaradi",
     "fun main() {\n    val list = mutableListOf(1, 2, 3)\n        .also { println(\"before: $it\") }\n        .apply { add(4) }\n    println(list)\n}",
     "Внутри объект называется `it`. Подходит для логирования посреди цепочки вызовов.",
     "Ichida obyekt `it` deb ataladi. Chaqiruvlar zanjiri o‘rtasida log yuritish uchun mos.",
     2,
     {
      "run": true,
      "out": "before: [1, 2, 3]\n[1, 2, 3, 4]"
     }
    ],
    [
     "run",
     "Выполняет блок и возвращает результат блока (with — похоже)",
     "Blokni bajaradi va blok natijasini qaytaradi (with — o‘xshash)",
     "fun main() {\n    val text = \"kotlin\"\n    val result = text.run { length * 2 }\n    println(result)\n\n    val s = with(StringBuilder()) {\n        append(\"a\")\n        append(\"b\")\n        toString()\n    }\n    println(s)\n}",
     "`run` и `with` дают доступ к объекту как к `this` и возвращают последнее выражение. `apply` же возвращает сам объект.",
     "`run` va `with` obyektga `this` sifatida kirish beradi va oxirgi ifodani qaytaradi. `apply` esa obyektning o‘zini qaytaradi.",
     3,
     {
      "run": true,
      "out": "12\nab"
     }
    ],
    [
     "takeIf",
     "Возвращает значение, если условие верно, иначе null",
     "Shart to‘g‘ri bo‘lsa qiymatni, aks holda null qaytaradi",
     "fun main() {\n    val age = 17\n    println(age.takeIf { it >= 18 })\n    println(age.takeUnless { it >= 18 })\n    println(\"42\".toIntOrNull()?.takeIf { it > 10 })\n}",
     "Хорошо сочетается с `?.` и `?:`: проверка и значение по умолчанию в одну цепочку.",
     "`?.` va `?:` bilan yaxshi birikadi: tekshiruv va standart qiymat bitta zanjirda.",
     3,
     {
      "run": true,
      "out": "null\n17\n42"
     }
    ],
    [
     "buildString",
     "Собирает строку по частям внутри блока",
     "Satrni blok ichida bo‘lak-bo‘lak yig‘adi",
     "fun main() {\n    val s = buildString {\n        append(\"Hello\")\n        append(\", \")\n        appendLine(\"world\")\n        append(\"!\")\n    }\n    println(s)\n}",
     "Удобнее и быстрее, чем склеивать строки через `+` в цикле.",
     "Siklda satrlarni `+` bilan yopishtirishdan qulayroq va tezroq.",
     3,
     {
      "run": true,
      "out": "Hello, world\n!"
     }
    ],
    [
     "lambda",
     "Функция-значение: { параметры -> тело }",
     "Qiymat-funksiya: { parametrlar -> tana }",
     "fun applyTwice(x: Int, f: (Int) -> Int): Int = f(f(x))\n\nfun main() {\n    println(applyTwice(3) { it * 2 })\n    val add = { a: Int, b: Int -> a + b }\n    println(add(2, 3))\n    val names = listOf(\"b\", \"a\")\n    println(names.sortedBy { it })\n}",
     "Если лямбда — последний аргумент, её выносят за скобки. Если параметр один, его можно не называть: он будет `it`.",
     "Lambda oxirgi argument bo‘lsa, qavsdan tashqariga chiqariladi. Parametr bitta bo‘lsa, nom berish shart emas: u `it` bo‘ladi.",
     2,
     {
      "run": true,
      "out": "12\n5\n[a, b]"
     }
    ],
    [
     "fun Type.name()",
     "Функция-расширение: добавляет метод существующему типу",
     "Kengaytma funksiya: mavjud turga yangi metod qo‘shadi",
     "fun String.isPalindrome(): Boolean = this == this.reversed()\n\nfun Int.isEven() = this % 2 == 0\n\nfun main() {\n    println(\"level\".isPalindrome())\n    println(\"kotlin\".isPalindrome())\n    println(4.isEven())\n}",
     "Исходный класс не меняется: расширение — это обычная функция, которая выглядит как метод. Так устроено множество функций Android KTX.",
     "Asl klass o‘zgarmaydi: kengaytma — metodga o‘xshab ko‘rinadigan oddiy funksiya. Android KTX’ning ko‘p funksiyalari shunday tuzilgan.",
     2,
     {
      "run": true,
      "out": "true\nfalse\ntrue"
     }
    ]
   ]
  },
  {
   "id": "co",
   "title": {
    "ru": "Корутины и Flow",
    "uz": "Korutinlar va Flow"
   },
   "short": {
    "ru": "Корутины",
    "uz": "Korutinlar"
   },
   "desc": {
    "ru": "Асинхронный код без «лестницы» callback’ов: сеть, база данных и долгие задачи в Android пишутся именно так.",
    "uz": "Callback’lar «zinapoyasi»siz asinxron kod: Android’da tarmoq, ma’lumotlar bazasi va uzoq vazifalar aynan shunday yoziladi."
   },
   "items": [
    [
     "suspend",
     "Функция, которую можно приостановить, не блокируя поток",
     "Oqimni bloklamay to‘xtatib turish mumkin bo‘lgan funksiya",
     "import kotlinx.coroutines.*\n\nsuspend fun loadUser(): String {\n    delay(100)\n    return \"Anvar\"\n}\n\nfun main() = runBlocking {\n    println(\"loading...\")\n    val user = loadUser()\n    println(\"user = $user\")\n}",
     "`suspend`-функцию можно вызвать только из корутины или другой `suspend`-функции. Код выглядит последовательным, но поток не блокируется.",
     "`suspend` funksiyani faqat korutindan yoki boshqa `suspend` funksiyadan chaqirish mumkin. Kod ketma-ket ko‘rinadi, lekin oqim bloklanmaydi.",
     2,
     {
      "run": true,
      "out": "loading...\nuser = Anvar"
     }
    ],
    [
     "runBlocking",
     "Запускает корутину и блокирует текущий поток до конца",
     "Korutinni ishga tushiradi va tugaguncha joriy oqimni bloklaydi",
     "import kotlinx.coroutines.*\n\nfun main() {\n    println(\"start\")\n    runBlocking {\n        delay(200)\n        println(\"inside coroutine\")\n    }\n    println(\"end\")\n}",
     "Нужен в `main` и тестах. В Android-приложении `runBlocking` в основном потоке не используют: экран зависнет.",
     "`main` va testlarda kerak. Android ilovasida asosiy oqimda `runBlocking` ishlatilmaydi: ekran qotib qoladi.",
     2,
     {
      "run": true,
      "out": "start\ninside coroutine\nend"
     }
    ],
    [
     "launch",
     "Запускает корутину «и забывает» (возвращает Job)",
     "Korutinni ishga tushiradi va «unutadi» (Job qaytaradi)",
     "import kotlinx.coroutines.*\n\nfun main() = runBlocking {\n    val job1 = launch { delay(200); println(\"task 1 done\") }\n    val job2 = launch { delay(100); println(\"task 2 done\") }\n    println(\"launched both\")\n    joinAll(job1, job2)\n    println(\"all done\")\n}",
     "Задачи работают параллельно: вторая закончилась раньше, хотя запущена позже. В Android обычно пишут `viewModelScope.launch { ... }`.",
     "Vazifalar parallel ishlaydi: ikkinchisi keyin ishga tushsa ham oldinroq tugadi. Android’da odatda `viewModelScope.launch { ... }` yoziladi.",
     2,
     {
      "run": true,
      "out": "launched both\ntask 2 done\ntask 1 done\nall done"
     }
    ],
    [
     "async",
     "Запускает корутину, которая вернёт результат (await)",
     "Natija qaytaradigan korutinni ishga tushiradi (await)",
     "import kotlinx.coroutines.*\n\nsuspend fun fetch(x: Int): Int {\n    delay(100)\n    return x * 10\n}\n\nfun main() = runBlocking {\n    val a = async { fetch(1) }\n    val b = async { fetch(2) }\n    println(a.await() + b.await())\n}",
     "Два запроса выполняются одновременно, поэтому ждём примерно 100 мс, а не 200. Результат берут через `await()`.",
     "Ikki so‘rov bir vaqtda bajariladi, shuning uchun 200 emas, taxminan 100 ms kutamiz. Natija `await()` orqali olinadi.",
     3,
     {
      "run": true,
      "out": "30"
     }
    ],
    [
     "delay",
     "Приостанавливает корутину на время без блокировки потока",
     "Korutinni oqimni bloklamay, ma’lum vaqtga to‘xtatadi",
     "import kotlinx.coroutines.*\n\nfun main() = runBlocking {\n    repeat(3) {\n        println(\"tick $it\")\n        delay(100)\n    }\n}",
     "В отличие от `Thread.sleep`, поток остаётся свободным и может выполнять другие корутины.",
     "`Thread.sleep`dan farqli, oqim bo‘sh qoladi va boshqa korutinlarni bajara oladi.",
     1,
     {
      "run": true,
      "out": "tick 0\ntick 1\ntick 2"
     }
    ],
    [
     "withContext",
     "Переключает корутину на другой поток (диспетчер)",
     "Korutinni boshqa oqimga (dispatcher’ga) o‘tkazadi",
     "import kotlinx.coroutines.*\n\nsuspend fun heavy(): Int = withContext(Dispatchers.Default) {\n    (1..1000).sum()\n}\n\nfun main() = runBlocking {\n    println(heavy())\n}",
     "Так тяжёлую работу уносят с главного потока и возвращают результат обратно. Главное правило Android: UI нельзя блокировать.",
     "Og‘ir ishni asosiy oqimdan olib chiqib, natijani qaytarish shunday bajariladi. Android’ning asosiy qoidasi: UI’ni bloklab bo‘lmaydi.",
     3,
     {
      "run": true,
      "out": "500500"
     }
    ],
    [
     "Dispatchers",
     "Определяют, на каком потоке выполняется корутина",
     "Korutina qaysi oqimda bajarilishini belgilaydi",
     "import kotlinx.coroutines.*\n\nfun main() = runBlocking {\n    println(Dispatchers.Default)\n    println(Dispatchers.IO)\n    val r = withContext(Dispatchers.IO) { \"read file\" }\n    println(r)\n}",
     "`Main` — интерфейс Android, `IO` — сеть и файлы, `Default` — тяжёлые вычисления. `Dispatchers.Main` есть только в Android и на десктопе с UI.",
     "`Main` — Android interfeysi, `IO` — tarmoq va fayllar, `Default` — og‘ir hisob-kitoblar. `Dispatchers.Main` faqat Android’da va UI’li kompyuterda bor.",
     3,
     {
      "run": true,
      "out": "Dispatchers.Default\nDispatchers.IO\nread file"
     }
    ],
    [
     "Job",
     "Управляет корутиной: join, cancel, isActive",
     "Korutinni boshqaradi: join, cancel, isActive",
     "import kotlinx.coroutines.*\n\nfun main() = runBlocking {\n    val job = launch {\n        repeat(5) {\n            println(\"working $it\")\n            delay(100)\n        }\n    }\n    delay(250)\n    job.cancel()\n    job.join()\n    println(\"cancelled: ${job.isCancelled}\")\n}",
     "Отмена кооперативна: корутина останавливается в ближайшей точке приостановки (`delay`, `yield`). `viewModelScope` отменяет всё сам при уничтожении ViewModel.",
     "Bekor qilish kooperativ: korutina eng yaqin to‘xtash nuqtasida (`delay`, `yield`) to‘xtaydi. `viewModelScope` ViewModel yo‘q qilinganda hammasini o‘zi bekor qiladi.",
     3,
     {
      "run": true,
      "out": "working 0\nworking 1\nworking 2\ncancelled: true"
     }
    ],
    [
     "flow",
     "Поток значений, которые приходят со временем",
     "Vaqt o‘tishi bilan keladigan qiymatlar oqimi",
     "import kotlinx.coroutines.*\nimport kotlinx.coroutines.flow.*\n\nfun numbers(): Flow<Int> = flow {\n    for (i in 1..3) {\n        delay(100)\n        emit(i)\n    }\n}\n\nfun main() = runBlocking {\n    numbers().map { it * it }.collect { println(it) }\n}",
     "`Flow` ленив: ничего не происходит, пока не вызван `collect`. К нему применимы привычные `map`, `filter`, `take`.",
     "`Flow` dangasa: `collect` chaqirilmaguncha hech narsa bo‘lmaydi. Unga odatiy `map`, `filter`, `take` qo‘llanadi.",
     3,
     {
      "run": true,
      "out": "1\n4\n9"
     }
    ],
    [
     "StateFlow",
     "Поток, хранящий текущее состояние (замена LiveData)",
     "Joriy holatni saqlaydigan oqim (LiveData o‘rniga)",
     "import kotlinx.coroutines.*\nimport kotlinx.coroutines.flow.*\n\nfun main() = runBlocking {\n    val counter = MutableStateFlow(0)\n    counter.value = 1\n    counter.update { it + 10 }\n    println(counter.value)\n\n    val job = launch { counter.take(2).collect { println(\"got $it\") } }\n    delay(50)\n    counter.value = 99\n    job.join()\n}",
     "Новый подписчик сразу получает текущее значение. В ViewModel хранят `MutableStateFlow`, а наружу отдают только `StateFlow`.",
     "Yangi obunachi joriy qiymatni darhol oladi. ViewModel’da `MutableStateFlow` saqlanadi, tashqariga esa faqat `StateFlow` beriladi.",
     3,
     {
      "run": true,
      "out": "11\ngot 11\ngot 99"
     }
    ]
   ]
  },
  {
   "id": "an",
   "title": {
    "ru": "Основы Android",
    "uz": "Android asoslari"
   },
   "short": {
    "ru": "Android",
    "uz": "Android"
   },
   "desc": {
    "ru": "Строительные блоки Android-приложения: компоненты, манифест, ресурсы, хранение данных, сеть и фоновая работа. Эти примеры нельзя запустить на сайте: их место — Android Studio.",
    "uz": "Android ilovasining qurilish bloklari: komponentlar, manifest, resurslar, ma’lumot saqlash, tarmoq va fon ishlari. Bu misollarni saytda ishga tushirib bo‘lmaydi: ularning joyi — Android Studio."
   },
   "items": [
    [
     "Activity",
     "Один экран приложения",
     "Ilovaning bitta ekrani",
     "class MainActivity : AppCompatActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_main)\n    }\n}",
     "Каждая `Activity` должна быть объявлена в `AndroidManifest.xml`. В современных приложениях часто остаётся одна `Activity`, а экраны — это Compose или фрагменты.",
     "Har bir `Activity` `AndroidManifest.xml`da e’lon qilinishi shart. Zamonaviy ilovalarda ko‘pincha bitta `Activity` qoladi, ekranlar esa Compose yoki fragmentlar bo‘ladi.",
     1,
     {}
    ],
    [
     "Activity lifecycle",
     "Жизненный цикл: onCreate → onStart → onResume … onDestroy",
     "Hayot sikli: onCreate → onStart → onResume … onDestroy",
     "class MainActivity : AppCompatActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) { super.onCreate(savedInstanceState); Log.d(\"LC\", \"onCreate\") }\n    override fun onStart()   { super.onStart();   Log.d(\"LC\", \"onStart\") }\n    override fun onResume()  { super.onResume();  Log.d(\"LC\", \"onResume\") }\n    override fun onPause()   { Log.d(\"LC\", \"onPause\");   super.onPause() }\n    override fun onStop()    { Log.d(\"LC\", \"onStop\");    super.onStop() }\n    override fun onDestroy() { Log.d(\"LC\", \"onDestroy\"); super.onDestroy() }\n}",
     "При повороте экрана `Activity` пересоздаётся: `onDestroy`, затем снова `onCreate`. Поэтому состояние хранят в `ViewModel`, а не в полях Activity.",
     "Ekran burilganda `Activity` qayta yaratiladi: `onDestroy`, so‘ng yana `onCreate`. Shuning uchun holat Activity maydonlarida emas, `ViewModel`da saqlanadi.",
     1,
     {}
    ],
    [
     "AndroidManifest.xml",
     "Паспорт приложения: компоненты, разрешения, иконка",
     "Ilova pasporti: komponentlar, ruxsatlar, ikonka",
     "<manifest xmlns:android=\"http://schemas.android.com/apk/res/android\">\n    <uses-permission android:name=\"android.permission.INTERNET\" />\n\n    <application\n        android:label=\"@string/app_name\"\n        android:icon=\"@mipmap/ic_launcher\"\n        android:theme=\"@style/Theme.MyApp\">\n\n        <activity android:name=\".MainActivity\" android:exported=\"true\">\n            <intent-filter>\n                <action android:name=\"android.intent.action.MAIN\" />\n                <category android:name=\"android.intent.category.LAUNCHER\" />\n            </intent-filter>\n        </activity>\n    </application>\n</manifest>",
     "Блок `intent-filter` с `MAIN` и `LAUNCHER` делает `Activity` стартовой. Для компонентов с фильтрами атрибут `exported` обязателен.",
     "`MAIN` va `LAUNCHER`li `intent-filter` bloki `Activity`ni boshlang‘ich qiladi. Filtrli komponentlar uchun `exported` atributi majburiy.",
     1,
     {
      "lang": "xml"
     }
    ],
    [
     "Intent (explicit)",
     "Открывает конкретный экран и передаёт ему данные",
     "Aniq ekranni ochadi va unga ma’lumot uzatadi",
     "// in MainActivity\nval intent = Intent(this, DetailActivity::class.java).apply {\n    putExtra(\"USER_ID\", 42)\n}\nstartActivity(intent)\n\n// in DetailActivity\nval id = intent.getIntExtra(\"USER_ID\", -1)",
     "Явный `Intent` называет класс получателя. Передавайте только небольшие данные (id, строки): большие объекты в `Intent` не помещаются.",
     "Aniq `Intent` qabul qiluvchi klassni ko‘rsatadi. Faqat kichik ma’lumotlarni (id, satr) uzating: katta obyektlar `Intent`ga sig‘maydi.",
     1,
     {}
    ],
    [
     "Intent (implicit)",
     "Просит систему найти приложение для действия",
     "Tizimdan amal uchun ilova topishni so‘raydi",
     "val open = Intent(Intent.ACTION_VIEW, Uri.parse(\"https://kotlinlang.org\"))\nstartActivity(open)\n\nval share = Intent(Intent.ACTION_SEND).apply {\n    type = \"text/plain\"\n    putExtra(Intent.EXTRA_TEXT, \"Hello from my app\")\n}\nstartActivity(Intent.createChooser(share, \"Share via\"))",
     "Неявный `Intent` описывает действие, а не получателя: система покажет подходящие приложения (браузер, почта, мессенджеры).",
     "Oshkormas `Intent` qabul qiluvchini emas, amalni tasvirlaydi: tizim mos ilovalarni (brauzer, pochta, messenjerlar) ko‘rsatadi.",
     2,
     {}
    ],
    [
     "Fragment",
     "Часть экрана со своим жизненным циклом",
     "Ekranning o‘z hayot siklli qismi",
     "class HomeFragment : Fragment(R.layout.fragment_home) {\n    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {\n        super.onViewCreated(view, savedInstanceState)\n        view.findViewById<TextView>(R.id.title).text = \"Home\"\n    }\n}",
     "С `Fragment` работают через `onViewCreated`, а не `onCreate`: именно там у фрагмента уже есть View. В Compose фрагменты нужны реже.",
     "`Fragment` bilan `onCreate` emas, `onViewCreated`da ishlanadi: aynan shu yerda fragmentda View tayyor bo‘ladi. Compose’da fragmentlar kamroq kerak.",
     2,
     {}
    ],
    [
     "Service",
     "Компонент для работы без экрана",
     "Ekransiz ishlaydigan komponent",
     "class DownloadService : Service() {\n    override fun onBind(intent: Intent?): IBinder? = null\n\n    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {\n        // do work here\n        return START_NOT_STICKY\n    }\n}",
     "Сервис по умолчанию работает в главном потоке! Тяжёлую работу выносят в корутины, а длительные фоновые задачи сейчас лучше отдать `WorkManager`.",
     "Servis sukut bo‘yicha asosiy oqimda ishlaydi! Og‘ir ish korutinlarga olib chiqiladi, uzoq fon vazifalarini esa hozir `WorkManager`ga berish yaxshiroq.",
     3,
     {}
    ],
    [
     "BroadcastReceiver",
     "Принимает системные и свои сообщения (broadcast)",
     "Tizim va o‘z xabarlarini (broadcast) qabul qiladi",
     "class BatteryReceiver : BroadcastReceiver() {\n    override fun onReceive(context: Context, intent: Intent) {\n        Log.d(\"Battery\", \"Action: ${intent.action}\")\n    }\n}\n\n// register in code:\nContextCompat.registerReceiver(\n    this,\n    BatteryReceiver(),\n    IntentFilter(Intent.ACTION_BATTERY_LOW),\n    ContextCompat.RECEIVER_NOT_EXPORTED\n)",
     "`onReceive` должен выполняться очень быстро (секунды). Многие системные события нельзя ловить через манифест, их регистрируют в коде.",
     "`onReceive` juda tez (soniyalar ichida) bajarilishi kerak. Ko‘p tizim hodisalarini manifest orqali ushlab bo‘lmaydi, ular kodda ro‘yxatdan o‘tkaziladi.",
     3,
     {}
    ],
    [
     "Context",
     "Доступ к ресурсам и системным службам; Application — один на процесс",
     "Resurslar va tizim xizmatlariga kirish; Application — jarayonga bitta",
     "class MyApp : Application() {\n    override fun onCreate() {\n        super.onCreate()\n        // runs once when the process starts\n    }\n}\n// Manifest: <application android:name=\".MyApp\" ...>\n\nval appName = applicationContext.getString(R.string.app_name)",
     "`Activity` — это тоже `Context`. Не храните `Activity` в статических полях: это утечка памяти. Для долгоживущих объектов берите `applicationContext`.",
     "`Activity` ham `Context`. `Activity`ni statik maydonlarda saqlamang: bu xotira oqishi. Uzoq yashovchi obyektlar uchun `applicationContext` oling.",
     2,
     {}
    ],
    [
     "Bundle",
     "Хранилище пар ключ-значение для сохранения состояния",
     "Holatni saqlash uchun kalit-qiymat juftlari",
     "override fun onSaveInstanceState(outState: Bundle) {\n    super.onSaveInstanceState(outState)\n    outState.putInt(\"counter\", counter)\n}\n\noverride fun onCreate(savedInstanceState: Bundle?) {\n    super.onCreate(savedInstanceState)\n    counter = savedInstanceState?.getInt(\"counter\") ?: 0\n}",
     "`Bundle` переживает и поворот экрана, и убийство процесса системой, но рассчитан на мелкие данные. Для остального используйте `ViewModel` и базу данных.",
     "`Bundle` ekran burilishi va tizim jarayonni o‘chirishidan ham omon qoladi, lekin kichik ma’lumotlar uchun mo‘ljallangan. Qolganlari uchun `ViewModel` va ma’lumotlar bazasidan foydalaning.",
     2,
     {}
    ],
    [
     "View Binding",
     "Безопасный доступ к View из разметки без findViewById",
     "Maketdagi View’larga findViewById’siz xavfsiz kirish",
     "// build.gradle.kts:  android { buildFeatures { viewBinding = true } }\n\nclass MainActivity : AppCompatActivity() {\n    private lateinit var binding: ActivityMainBinding\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        binding = ActivityMainBinding.inflate(layoutInflater)\n        setContentView(binding.root)\n        binding.button.setOnClickListener { binding.title.text = \"Clicked\" }\n    }\n}",
     "Класс `ActivityMainBinding` генерируется из `activity_main.xml`. Опечатка в id становится ошибкой компиляции, а не падением в рантайме.",
     "`ActivityMainBinding` klassi `activity_main.xml`dan generatsiya qilinadi. Id’dagi xato ishlash vaqtida qulash emas, kompilyatsiya xatosi bo‘ladi.",
     2,
     {}
    ],
    [
     "Layout XML",
     "Описание экрана в XML: LinearLayout, TextView, Button",
     "Ekranning XML’dagi tavsifi: LinearLayout, TextView, Button",
     "<LinearLayout xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    android:layout_width=\"match_parent\"\n    android:layout_height=\"match_parent\"\n    android:orientation=\"vertical\"\n    android:padding=\"16dp\">\n\n    <TextView\n        android:id=\"@+id/title\"\n        android:layout_width=\"wrap_content\"\n        android:layout_height=\"wrap_content\"\n        android:text=\"@string/hello\"\n        android:textSize=\"20sp\" />\n\n    <Button\n        android:id=\"@+id/button\"\n        android:layout_width=\"match_parent\"\n        android:layout_height=\"wrap_content\"\n        android:text=\"Click me\" />\n</LinearLayout>",
     "Размеры задавайте в `dp` (для отступов и блоков) и `sp` (для текста): так интерфейс одинаково выглядит на разных экранах и шрифтах.",
     "O‘lchamlarni `dp` (chekinish va bloklar uchun) va `sp` (matn uchun) da bering: shunda interfeys turli ekran va shriftlarda bir xil ko‘rinadi.",
     1,
     {
      "lang": "xml"
     }
    ],
    [
     "strings.xml",
     "Строковые ресурсы: перевод интерфейса на другие языки",
     "Satr resurslari: interfeysni boshqa tillarga tarjima qilish",
     "<resources>\n    <string name=\"app_name\">My App</string>\n    <string name=\"hello\">Hello, %1$s!</string>\n\n    <plurals name=\"items\">\n        <item quantity=\"one\">%d item</item>\n        <item quantity=\"other\">%d items</item>\n    </plurals>\n</resources>\n\n<!-- Kotlin: getString(R.string.hello, \"Anvar\")\n     Translations: res/values-ru/strings.xml, res/values-uz/strings.xml -->",
     "Не пишите тексты прямо в коде и разметке. Для каждого языка создаётся своя папка: `values-ru`, `values-uz`, и Android выбирает нужную сам.",
     "Matnlarni to‘g‘ridan-to‘g‘ri kod va maketga yozmang. Har bir til uchun alohida papka ochiladi: `values-ru`, `values-uz`, Android kerakligini o‘zi tanlaydi.",
     1,
     {
      "lang": "xml"
     }
    ],
    [
     "RecyclerView",
     "Эффективный прокручиваемый список (Adapter + ViewHolder)",
     "Samarali aylantiriladigan ro‘yxat (Adapter + ViewHolder)",
     "class UserAdapter(private val items: List<String>) :\n    RecyclerView.Adapter<UserAdapter.VH>() {\n\n    class VH(view: View) : RecyclerView.ViewHolder(view) {\n        val text: TextView = view.findViewById(R.id.text)\n    }\n\n    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): VH {\n        val v = LayoutInflater.from(parent.context).inflate(R.layout.item_user, parent, false)\n        return VH(v)\n    }\n\n    override fun onBindViewHolder(holder: VH, position: Int) {\n        holder.text.text = items[position]\n    }\n\n    override fun getItemCount() = items.size\n}\n\n// recyclerView.layoutManager = LinearLayoutManager(this)\n// recyclerView.adapter = UserAdapter(listOf(\"Ali\", \"Vali\"))",
     "`RecyclerView` переиспользует строки при прокрутке, поэтому не тормозит на тысячах элементов. В Compose то же делает `LazyColumn`.",
     "`RecyclerView` aylantirishda qatorlarni qayta ishlatadi, shuning uchun minglab elementda ham sekinlashmaydi. Compose’da buni `LazyColumn` bajaradi.",
     2,
     {}
    ],
    [
     "ViewModel",
     "Хранит состояние экрана и переживает поворот",
     "Ekran holatini saqlaydi va burilishdan omon qoladi",
     "class CounterViewModel : ViewModel() {\n    private val _count = MutableStateFlow(0)\n    val count: StateFlow<Int> = _count.asStateFlow()\n\n    fun increment() { _count.value++ }\n}\n\n// in Activity or Fragment\nprivate val viewModel: CounterViewModel by viewModels()",
     "`ViewModel` не знает про Activity и View. Он живёт, пока экран «нужен», и отдаёт наружу только неизменяемые `StateFlow`/`LiveData`.",
     "`ViewModel` Activity va View haqida bilmaydi. U ekran «kerak» ekan yashaydi va tashqariga faqat o‘zgarmas `StateFlow`/`LiveData` beradi.",
     2,
     {}
    ],
    [
     "LiveData",
     "Наблюдаемое значение, учитывающее жизненный цикл",
     "Hayot siklini hisobga oladigan kuzatiladigan qiymat",
     "class NameViewModel : ViewModel() {\n    private val _name = MutableLiveData(\"Anvar\")\n    val name: LiveData<String> = _name\n\n    fun rename(newName: String) { _name.value = newName }\n}\n\n// in Activity\nviewModel.name.observe(this) { title.text = it }",
     "Подписчик получает обновления только пока экран активен. В новых проектах вместо `LiveData` чаще берут `StateFlow`.",
     "Obunachi yangilanishlarni faqat ekran faol bo‘lganda oladi. Yangi loyihalarda `LiveData` o‘rniga ko‘pincha `StateFlow` olinadi.",
     2,
     {}
    ],
    [
     "Toast / Snackbar",
     "Короткие сообщения пользователю",
     "Foydalanuvchiga qisqa xabarlar",
     "Toast.makeText(this, \"Saved\", Toast.LENGTH_SHORT).show()\n\nSnackbar.make(binding.root, \"Item deleted\", Snackbar.LENGTH_LONG)\n    .setAction(\"UNDO\") { restoreItem() }\n    .show()",
     "`Snackbar` лучше: у него есть кнопка действия (например, «Отменить»). `Toast` исчезает сам и не принимает нажатий.",
     "`Snackbar` yaxshiroq: unda amal tugmasi bor (masalan, «Bekor qilish»). `Toast` o‘zi yo‘qoladi va bosishni qabul qilmaydi.",
     1,
     {}
    ],
    [
     "SharedPreferences",
     "Простое хранилище настроек (пары ключ-значение)",
     "Sozlamalar uchun oddiy saqlash (kalit-qiymat juftlari)",
     "val prefs = getSharedPreferences(\"settings\", Context.MODE_PRIVATE)\nprefs.edit().putBoolean(\"dark\", true).apply()\nval dark = prefs.getBoolean(\"dark\", false)",
     "Подходит для пары флагов. Для новых проектов Google рекомендует `DataStore`: он асинхронный и безопаснее.",
     "Bir nechta bayroq uchun mos. Yangi loyihalar uchun Google `DataStore`ni tavsiya qiladi: u asinxron va xavfsizroq.",
     2,
     {}
    ],
    [
     "DataStore",
     "Современное асинхронное хранилище настроек на Flow",
     "Flow asosidagi zamonaviy asinxron sozlamalar saqlagichi",
     "val Context.dataStore by preferencesDataStore(name = \"settings\")\nval DARK = booleanPreferencesKey(\"dark\")\n\nsuspend fun saveDark(context: Context, value: Boolean) {\n    context.dataStore.edit { it[DARK] = value }\n}\n\nfun darkFlow(context: Context): Flow<Boolean> =\n    context.dataStore.data.map { it[DARK] ?: false }",
     "Чтение возвращает `Flow`: интерфейс сам обновится при изменении настройки. Запись — `suspend`, поэтому главный поток не блокируется.",
     "O‘qish `Flow` qaytaradi: sozlama o‘zgarganda interfeys o‘zi yangilanadi. Yozish — `suspend`, shuning uchun asosiy oqim bloklanmaydi.",
     3,
     {}
    ],
    [
     "@Entity",
     "Таблица базы данных Room в виде класса",
     "Room ma’lumotlar bazasi jadvali klass ko‘rinishida",
     "@Entity(tableName = \"users\")\ndata class User(\n    @PrimaryKey(autoGenerate = true) val id: Int = 0,\n    val name: String,\n    val age: Int\n)",
     "Один класс — одна таблица, одно поле — один столбец. `autoGenerate = true` заставляет Room самому выдавать `id`.",
     "Bitta klass — bitta jadval, bitta maydon — bitta ustun. `autoGenerate = true` Room’ga `id`ni o‘zi berishni buyuradi.",
     2,
     {}
    ],
    [
     "@Dao",
     "Интерфейс запросов к базе: @Insert, @Query, @Delete",
     "Bazaga so‘rovlar interfeysi: @Insert, @Query, @Delete",
     "@Dao\ninterface UserDao {\n    @Insert\n    suspend fun insert(user: User)\n\n    @Query(\"SELECT * FROM users WHERE age >= :minAge ORDER BY name\")\n    fun adults(minAge: Int = 18): Flow<List<User>>\n\n    @Delete\n    suspend fun delete(user: User)\n}",
     "Room проверяет SQL ещё при компиляции. Запрос с `Flow` сам присылает новый список при каждом изменении таблицы.",
     "Room SQL’ni kompilyatsiya vaqtidayoq tekshiradi. `Flow`li so‘rov jadval har o‘zgarganda yangi ro‘yxatni o‘zi yuboradi.",
     2,
     {}
    ],
    [
     "RoomDatabase",
     "Точка входа в базу данных Room",
     "Room ma’lumotlar bazasiga kirish nuqtasi",
     "@Database(entities = [User::class], version = 1)\nabstract class AppDatabase : RoomDatabase() {\n    abstract fun userDao(): UserDao\n}\n\nval db = Room.databaseBuilder(context, AppDatabase::class.java, \"app.db\").build()\nval dao = db.userDao()",
     "Экземпляр базы создают один раз на всё приложение (синглтон или через Hilt). При смене структуры таблиц увеличивают `version` и пишут миграцию.",
     "Baza nusxasi butun ilova uchun bir marta yaratiladi (singleton yoki Hilt orqali). Jadval tuzilishi o‘zgarsa, `version` oshiriladi va migratsiya yoziladi.",
     3,
     {}
    ],
    [
     "Retrofit",
     "HTTP-клиент: описываете API интерфейсом",
     "HTTP-klient: API’ni interfeys bilan tavsiflaysiz",
     "interface ApiService {\n    @GET(\"users/{id}\")\n    suspend fun getUser(@Path(\"id\") id: Int): UserDto\n}\n\nval api = Retrofit.Builder()\n    .baseUrl(\"https://api.example.com/\")\n    .addConverterFactory(GsonConverterFactory.create())\n    .build()\n    .create(ApiService::class.java)",
     "Не забудьте `INTERNET` в манифесте. Вызов `suspend`-функции делайте из корутины, например из `viewModelScope`.",
     "Manifestda `INTERNET` ruxsatini unutmang. `suspend` funksiyani korutindan, masalan `viewModelScope`dan chaqiring.",
     2,
     {}
    ],
    [
     "Permissions",
     "Запрос опасного разрешения во время работы",
     "Xavfli ruxsatni ishlash vaqtida so‘rash",
     "private val cameraPermission = registerForActivityResult(\n    ActivityResultContracts.RequestPermission()\n) { granted ->\n    if (granted) openCamera() else showMessage(\"Permission denied\")\n}\n\nfun onCameraClick() {\n    cameraPermission.launch(Manifest.permission.CAMERA)\n}",
     "Разрешение нужно объявить в манифесте и запросить у пользователя. Если он отказал, приложение должно продолжить работать хотя бы частично.",
     "Ruxsat manifestda e’lon qilinishi va foydalanuvchidan so‘ralishi kerak. U rad etsa, ilova hech bo‘lmasa qisman ishlashda davom etishi lozim.",
     2,
     {}
    ],
    [
     "Notification",
     "Уведомление: канал + построитель",
     "Bildirishnoma: kanal + quruvchi",
     "val channel = NotificationChannel(\"news\", \"News\", NotificationManager.IMPORTANCE_DEFAULT)\ngetSystemService(NotificationManager::class.java).createNotificationChannel(channel)\n\nval notification = NotificationCompat.Builder(this, \"news\")\n    .setSmallIcon(R.drawable.ic_notification)\n    .setContentTitle(\"Hello\")\n    .setContentText(\"You have a new message\")\n    .build()\nNotificationManagerCompat.from(this).notify(1, notification)",
     "С Android 8 уведомление без канала не показывается, а с Android 13 нужно ещё разрешение `POST_NOTIFICATIONS`.",
     "Android 8 dan boshlab kanalsiz bildirishnoma ko‘rsatilmaydi, Android 13 dan esa `POST_NOTIFICATIONS` ruxsati ham kerak.",
     3,
     {}
    ],
    [
     "WorkManager",
     "Надёжные фоновые задачи, которые переживут перезапуск",
     "Qayta ishga tushishdan omon qoladigan ishonchli fon vazifalari",
     "class SyncWorker(ctx: Context, params: WorkerParameters) : CoroutineWorker(ctx, params) {\n    override suspend fun doWork(): Result {\n        // sync data\n        return Result.success()\n    }\n}\n\nval request = PeriodicWorkRequestBuilder<SyncWorker>(1, TimeUnit.HOURS).build()\nWorkManager.getInstance(context).enqueue(request)",
     "Минимальный период повторения — 15 минут. Система сама выбирает точное время, чтобы экономить батарею.",
     "Takrorlashning eng kichik davri — 15 daqiqa. Tizim batareyani tejash uchun aniq vaqtni o‘zi tanlaydi.",
     3,
     {}
    ],
    [
     "Log",
     "Запись сообщений в Logcat для отладки",
     "Sinash uchun Logcat’ga xabar yozish",
     "Log.d(\"MainActivity\", \"user clicked button\")\nLog.i(\"MainActivity\", \"loaded 10 items\")\nLog.e(\"MainActivity\", \"something failed\", exception)",
     "Первый аргумент — тег для фильтра в Logcat, уровни: `v`, `d`, `i`, `w`, `e`. Не логируйте пароли и личные данные.",
     "Birinchi argument — Logcat’da filtrlash uchun teg, darajalar: `v`, `d`, `i`, `w`, `e`. Parol va shaxsiy ma’lumotlarni log qilmang.",
     1,
     {}
    ],
    [
     "build.gradle.kts",
     "Настройка сборки модуля: версии SDK и зависимости",
     "Modul yig‘ilishini sozlash: SDK versiyalari va bog‘liqliklar",
     "android {\n    namespace = \"com.example.myapp\"\n    compileSdk = 35\n\n    defaultConfig {\n        applicationId = \"com.example.myapp\"\n        minSdk = 24\n        targetSdk = 35\n        versionCode = 1\n        versionName = \"1.0\"\n    }\n}\n\ndependencies {\n    implementation(\"androidx.core:core-ktx:1.15.0\")\n    implementation(\"androidx.appcompat:appcompat:1.7.0\")\n    testImplementation(\"junit:junit:4.13.2\")\n}",
     "`minSdk` — самая старая поддерживаемая версия Android. Номера версий в примере условные: актуальные смотрите на developer.android.com.",
     "`minSdk` — qo‘llab-quvvatlanadigan eng eski Android versiyasi. Misoldagi versiya raqamlari shartli: dolzarblarini developer.android.com’dan ko‘ring.",
     2,
     {}
    ],
    [
     "adb",
     "Командная строка для работы с устройством и эмулятором",
     "Qurilma va emulyator bilan ishlash uchun buyruq qatori",
     "adb devices\nadb install app-debug.apk\nadb logcat -s MainActivity\nadb shell am start -n com.example.myapp/.MainActivity\nadb uninstall com.example.myapp",
     "`adb devices` показывает подключённые устройства. Для телефона включите «Отладку по USB» в параметрах разработчика.",
     "`adb devices` ulangan qurilmalarni ko‘rsatadi. Telefon uchun dasturchi sozlamalarida «USB orqali nosozliklarni tuzatish»ni yoqing.",
     2,
     {
      "lang": "bash"
     }
    ],
    [
     "Hilt",
     "Внедрение зависимостей: объекты приходят «сами»",
     "Bog‘liqliklarni kiritish: obyektlar «o‘zi» keladi",
     "@HiltAndroidApp\nclass MyApp : Application()\n\n@AndroidEntryPoint\nclass MainActivity : AppCompatActivity() {\n    @Inject lateinit var repo: UserRepository\n}\n\nclass UserRepository @Inject constructor(private val api: ApiService)",
     "Классы получают нужное через конструктор и не создают зависимости сами, поэтому их легко тестировать. Это уровень «Продвинутое».",
     "Klasslar kerakli narsani konstruktor orqali oladi va bog‘liqliklarni o‘zi yaratmaydi, shuning uchun ularni sinash oson. Bu «Ilg‘or» daraja.",
     3,
     {}
    ],
    [
     "viewModelScope",
     "Корутины, привязанные к жизни ViewModel",
     "ViewModel hayotiga bog‘langan korutinlar",
     "class UsersViewModel(private val repo: UserRepository) : ViewModel() {\n    fun load() {\n        viewModelScope.launch {\n            val users = repo.fetchUsers()   // suspend call\n            // update the state here\n        }\n    }\n}",
     "Когда `ViewModel` уничтожается, все запущенные в `viewModelScope` корутины отменяются автоматически, и утечек не возникает.",
     "`ViewModel` yo‘q qilinganda `viewModelScope`da ishga tushgan barcha korutinlar avtomatik bekor qilinadi, oqish bo‘lmaydi.",
     2,
     {}
    ]
   ]
  },
  {
   "id": "cm",
   "title": {
    "ru": "Jetpack Compose",
    "uz": "Jetpack Compose"
   },
   "short": {
    "ru": "Compose",
    "uz": "Compose"
   },
   "desc": {
    "ru": "Современный способ строить интерфейс Android прямо на Kotlin, без XML. Интерфейс — это функции, а состояние — переменные.",
    "uz": "Android interfeysini XML’siz, to‘g‘ridan-to‘g‘ri Kotlin’da qurishning zamonaviy usuli. Interfeys — funksiyalar, holat — o‘zgaruvchilar."
   },
   "items": [
    [
     "@Composable",
     "Помечает функцию, которая описывает кусок интерфейса",
     "Interfeys bo‘lagini tasvirlovchi funksiyani belgilaydi",
     "@Composable\nfun Greeting(name: String) {\n    Text(text = \"Hello, $name!\")\n}",
     "Имена composable-функций пишут с заглавной буквы. Функция ничего не «возвращает»: она описывает, что нарисовать.",
     "Composable funksiyalar nomi bosh harf bilan yoziladi. Funksiya hech narsa «qaytarmaydi»: u nimani chizishni tasvirlaydi.",
     1,
     {}
    ],
    [
     "setContent",
     "Подключает Compose к Activity",
     "Compose’ni Activity’ga ulaydi",
     "class MainActivity : ComponentActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContent {\n            MyAppTheme {\n                Greeting(\"Android\")\n            }\n        }\n    }\n}",
     "Вместо `setContentView(R.layout...)` вызывают `setContent { ... }`. Файлов разметки XML больше не нужно.",
     "`setContentView(R.layout...)` o‘rniga `setContent { ... }` chaqiriladi. XML maket fayllari endi kerak emas.",
     1,
     {}
    ],
    [
     "Text",
     "Показывает текст",
     "Matnni ko‘rsatadi",
     "Text(\n    text = \"Title\",\n    fontSize = 24.sp,\n    fontWeight = FontWeight.Bold,\n    color = MaterialTheme.colorScheme.primary,\n    maxLines = 2,\n    overflow = TextOverflow.Ellipsis\n)",
     "Размер шрифта задают в `sp`, отступы — в `dp`. Цвета и стили лучше брать из `MaterialTheme`, тогда работает тёмная тема.",
     "Shrift o‘lchami `sp`da, chekinishlar `dp`da beriladi. Rang va uslublarni `MaterialTheme`dan olgan yaxshi, shunda qorong‘i mavzu ishlaydi.",
     1,
     {}
    ],
    [
     "Button",
     "Кнопка с содержимым-лямбдой",
     "Mazmuni lambda bo‘lgan tugma",
     "Button(onClick = { /* do something */ }) {\n    Text(\"Click me\")\n}\n\nOutlinedButton(onClick = { }) {\n    Text(\"Outlined\")\n}",
     "Внутрь кнопки можно положить что угодно: текст, иконку, `Row` с тем и другим.",
     "Tugma ichiga istalgan narsani qo‘yish mumkin: matn, ikonka, ikkalasini ham o‘z ichiga olgan `Row`.",
     1,
     {}
    ],
    [
     "Modifier",
     "Цепочка настроек: размер, отступы, фон, нажатие",
     "Sozlamalar zanjiri: o‘lcham, chekinish, fon, bosish",
     "Text(\n    text = \"Hi\",\n    modifier = Modifier\n        .fillMaxWidth()\n        .padding(16.dp)\n        .background(Color.LightGray)\n        .clickable { /* on click */ }\n)",
     "Порядок важен: `padding` перед `background` даст отступ снаружи фона, а после него — внутри. Читайте цепочку сверху вниз.",
     "Tartib muhim: `background`dan oldingi `padding` fon tashqarisida, keyingisi esa ichkarisida chekinish beradi. Zanjirni yuqoridan pastga o‘qing.",
     1,
     {}
    ],
    [
     "Column",
     "Располагает элементы вертикально",
     "Elementlarni vertikal joylashtiradi",
     "Column(\n    modifier = Modifier.fillMaxSize().padding(16.dp),\n    verticalArrangement = Arrangement.spacedBy(8.dp),\n    horizontalAlignment = Alignment.CenterHorizontally\n) {\n    Text(\"First\")\n    Text(\"Second\")\n}",
     "`Arrangement` управляет расстановкой вдоль оси, `Alignment` — выравниванием поперёк неё.",
     "`Arrangement` o‘q bo‘ylab joylashtirishni, `Alignment` esa unga ko‘ndalang tekislashni boshqaradi.",
     1,
     {}
    ],
    [
     "Row",
     "Располагает элементы горизонтально",
     "Elementlarni gorizontal joylashtiradi",
     "Row(\n    modifier = Modifier.fillMaxWidth(),\n    horizontalArrangement = Arrangement.SpaceBetween,\n    verticalAlignment = Alignment.CenterVertically\n) {\n    Text(\"Left\")\n    Text(\"Right\")\n}",
     "Аналог горизонтального `LinearLayout`. `Modifier.weight(1f)` отдаёт элементу всё свободное место.",
     "Gorizontal `LinearLayout` analogi. `Modifier.weight(1f)` elementga barcha bo‘sh joyni beradi.",
     1,
     {}
    ],
    [
     "Box",
     "Накладывает элементы друг на друга",
     "Elementlarni bir-birining ustiga qo‘yadi",
     "Box(modifier = Modifier.size(120.dp)) {\n    Image(painterResource(R.drawable.photo), contentDescription = null)\n    Text(\"Label\", modifier = Modifier.align(Alignment.BottomEnd))\n}",
     "Последний элемент рисуется сверху. `align` внутри `Box` ставит элемент в угол или в центр.",
     "Oxirgi element ustida chiziladi. `Box` ichidagi `align` elementni burchakka yoki markazga qo‘yadi.",
     2,
     {}
    ],
    [
     "Spacer",
     "Пустой элемент для отступа между соседями",
     "Qo‘shnilar orasida masofa uchun bo‘sh element",
     "Column {\n    Text(\"Above\")\n    Spacer(modifier = Modifier.height(16.dp))\n    Text(\"Below\")\n}",
     "Часто `Spacer` заменяют на `Arrangement.spacedBy(...)` в `Column`/`Row`: так отступы одинаковые автоматически.",
     "Ko‘pincha `Spacer` o‘rniga `Column`/`Row`da `Arrangement.spacedBy(...)` ishlatiladi: shunda masofalar avtomatik bir xil bo‘ladi.",
     1,
     {}
    ],
    [
     "Image",
     "Показывает картинку из ресурсов",
     "Resurslardagi rasmni ko‘rsatadi",
     "Image(\n    painter = painterResource(R.drawable.logo),\n    contentDescription = \"App logo\",\n    modifier = Modifier.size(96.dp),\n    contentScale = ContentScale.Crop\n)",
     "`contentDescription` читают программы экранного доступа для незрячих. Для чисто декоративных картинок ставьте `null`. Картинки из сети грузят через Coil.",
     "`contentDescription`ni ko‘zi ojizlar uchun ekranni o‘qish dasturlari o‘qiydi. Faqat bezak rasmlarga `null` qo‘ying. Tarmoqdagi rasmlar Coil orqali yuklanadi.",
     2,
     {}
    ],
    [
     "TextField",
     "Поле ввода текста",
     "Matn kiritish maydoni",
     "var text by remember { mutableStateOf(\"\") }\n\nOutlinedTextField(\n    value = text,\n    onValueChange = { text = it },\n    label = { Text(\"Name\") },\n    singleLine = true\n)",
     "Поле само не хранит текст: вы передаёте `value` и сами обновляете его в `onValueChange`. Так состояние остаётся у вас.",
     "Maydon matnni o‘zi saqlamaydi: siz `value` berasiz va uni `onValueChange`da o‘zingiz yangilaysiz. Shunday holat sizda qoladi.",
     2,
     {}
    ],
    [
     "Card",
     "Карточка с рамкой и тенью",
     "Ramka va soyali karta",
     "Card(\n    modifier = Modifier.fillMaxWidth().padding(8.dp),\n    elevation = CardDefaults.cardElevation(4.dp)\n) {\n    Column(Modifier.padding(16.dp)) {\n        Text(\"Title\", style = MaterialTheme.typography.titleMedium)\n        Text(\"Description\")\n    }\n}",
     "Это готовый компонент Material 3. Внутри `Card` обычно кладут `Column`, чтобы расположить содержимое.",
     "Bu Material 3’ning tayyor komponenti. `Card` ichiga odatda mazmunni joylashtirish uchun `Column` qo‘yiladi.",
     2,
     {}
    ],
    [
     "LazyColumn",
     "Прокручиваемый список: рисует только видимые элементы",
     "Aylantiriladigan ro‘yxat: faqat ko‘rinadigan elementlarni chizadi",
     "@Composable\nfun UserList(users: List<String>) {\n    LazyColumn {\n        items(users) { user ->\n            Text(user, modifier = Modifier.padding(16.dp))\n        }\n    }\n}",
     "Замена `RecyclerView` без адаптеров и холдеров. Для тысяч элементов используйте именно `LazyColumn`, а не обычный `Column`.",
     "Adapter va holder’siz `RecyclerView` o‘rnini bosadi. Minglab element uchun oddiy `Column` emas, aynan `LazyColumn` ishlating.",
     2,
     {}
    ],
    [
     "remember",
     "Запоминает значение между перерисовками (с mutableStateOf)",
     "Qiymatni qayta chizishlar orasida eslab qoladi (mutableStateOf bilan)",
     "@Composable\nfun Counter() {\n    var count by remember { mutableStateOf(0) }\n    Button(onClick = { count++ }) {\n        Text(\"Clicked $count times\")\n    }\n}",
     "Когда `count` меняется, Compose сам перерисовывает функцию. Без `remember` значение сбрасывалось бы в ноль при каждой перерисовке.",
     "`count` o‘zgarganda Compose funksiyani o‘zi qayta chizadi. `remember`siz qiymat har qayta chizishda nolga qaytardi.",
     1,
     {}
    ],
    [
     "rememberSaveable",
     "Как remember, но переживает поворот экрана",
     "remember kabi, lekin ekran burilishidan omon qoladi",
     "@Composable\nfun SaveableCounter() {\n    var count by rememberSaveable { mutableStateOf(0) }\n    Button(onClick = { count++ }) {\n        Text(\"Count: $count\")\n    }\n}",
     "Обычный `remember` теряется при повороте экрана, а `rememberSaveable` кладёт значение в `Bundle`. Для сложных объектов лучше `ViewModel`.",
     "Oddiy `remember` ekran burilganda yo‘qoladi, `rememberSaveable` esa qiymatni `Bundle`ga joylaydi. Murakkab obyektlar uchun `ViewModel` yaxshiroq.",
     2,
     {}
    ],
    [
     "State hoisting",
     "Подъём состояния: экран хранит, компонент только показывает",
     "Holatni ko‘tarish: ekran saqlaydi, komponent faqat ko‘rsatadi",
     "@Composable\nfun CounterScreen() {\n    var count by remember { mutableStateOf(0) }\n    CounterView(count = count, onIncrement = { count++ })\n}\n\n@Composable\nfun CounterView(count: Int, onIncrement: () -> Unit) {\n    Button(onClick = onIncrement) { Text(\"Count: $count\") }\n}",
     "Компонент получает значение и лямбду-событие, а своего состояния не имеет. Его легко переиспользовать, тестировать и смотреть в `@Preview`.",
     "Komponent qiymat va hodisa-lambdani oladi, o‘z holati bo‘lmaydi. Uni qayta ishlatish, sinash va `@Preview`da ko‘rish oson.",
     2,
     {}
    ],
    [
     "LaunchedEffect",
     "Запускает корутину при входе в композицию или смене ключа",
     "Kompozitsiyaga kirganda yoki kalit o‘zgarganda korutinni ishga tushiradi",
     "@Composable\nfun Profile(userId: Int, viewModel: ProfileViewModel) {\n    LaunchedEffect(userId) {\n        viewModel.load(userId)     // runs again when userId changes\n    }\n}",
     "Побочные действия (загрузка, подписки) нельзя писать прямо в теле composable: оно выполняется много раз. Для этого и нужен `LaunchedEffect`.",
     "Yon ta’sirlarni (yuklash, obunalar) composable tanasiga to‘g‘ridan-to‘g‘ri yozib bo‘lmaydi: u ko‘p marta bajariladi. Buning uchun `LaunchedEffect` kerak.",
     3,
     {}
    ],
    [
     "Scaffold",
     "Каркас экрана: верхняя панель, кнопка, содержимое",
     "Ekran skeleti: yuqori panel, tugma, mazmun",
     "@OptIn(ExperimentalMaterial3Api::class)\n@Composable\nfun HomeScreen() {\n    Scaffold(\n        topBar = { TopAppBar(title = { Text(\"Home\") }) },\n        floatingActionButton = {\n            FloatingActionButton(onClick = { }) {\n                Icon(Icons.Default.Add, contentDescription = \"Add\")\n            }\n        }\n    ) { innerPadding ->\n        Box(Modifier.padding(innerPadding)) { Text(\"Content\") }\n    }\n}",
     "Обязательно применяйте `innerPadding` к содержимому, иначе оно уедет под верхнюю панель.",
     "Mazmunga `innerPadding`ni albatta qo‘llang, aks holda u yuqori panel ostida qolib ketadi.",
     2,
     {}
    ],
    [
     "MaterialTheme",
     "Тема приложения: цвета, шрифты, формы",
     "Ilova mavzusi: ranglar, shriftlar, shakllar",
     "@Composable\nfun MyAppTheme(content: @Composable () -> Unit) {\n    MaterialTheme(\n        colorScheme = if (isSystemInDarkTheme()) darkColorScheme() else lightColorScheme(),\n        content = content\n    )\n}",
     "Всё приложение оборачивают в тему один раз. `isSystemInDarkTheme()` узнаёт, включил ли пользователь тёмный режим.",
     "Butun ilova mavzu bilan bir marta o‘raladi. `isSystemInDarkTheme()` foydalanuvchi qorong‘i rejimni yoqqanini aniqlaydi.",
     2,
     {}
    ],
    [
     "NavHost",
     "Навигация между экранами в Compose",
     "Compose’da ekranlar orasida navigatsiya",
     "val navController = rememberNavController()\n\nNavHost(navController, startDestination = \"home\") {\n    composable(\"home\") {\n        HomeScreen(onOpen = { id -> navController.navigate(\"detail/$id\") })\n    }\n    composable(\"detail/{id}\") { backStackEntry ->\n        val id = backStackEntry.arguments?.getString(\"id\")\n        DetailScreen(id)\n    }\n}",
     "Каждый экран — это маршрут-строка. Кнопка «Назад» работает автоматически. Передавайте только id, а данные грузите на новом экране.",
     "Har bir ekran — marshrut-satr. «Orqaga» tugmasi avtomatik ishlaydi. Faqat id uzating, ma’lumotni yangi ekranda yuklang.",
     3,
     {}
    ],
    [
     "collectAsStateWithLifecycle",
     "Подписывает Compose на StateFlow из ViewModel",
     "Compose’ni ViewModel’dagi StateFlow’ga obuna qiladi",
     "@Composable\nfun CounterScreen(viewModel: CounterViewModel = viewModel()) {\n    val count by viewModel.count.collectAsStateWithLifecycle()\n    Text(\"Count: $count\")\n}",
     "Когда состояние в `ViewModel` меняется, экран обновляется сам. Подписка автоматически останавливается, пока приложение свёрнуто.",
     "`ViewModel`dagi holat o‘zgarganda ekran o‘zi yangilanadi. Ilova yig‘ilgan paytda obuna avtomatik to‘xtaydi.",
     3,
     {}
    ],
    [
     "@Preview",
     "Показывает composable в Android Studio без запуска",
     "Composable’ni Android Studio’da ishga tushirmay ko‘rsatadi",
     "@Preview(showBackground = true)\n@Composable\nfun GreetingPreview() {\n    MyAppTheme {\n        Greeting(\"Android\")\n    }\n}",
     "Превью работает только для функций без параметров. Поэтому и нужно «поднимать» состояние: компонент с параметрами легко показать в превью.",
     "Preview faqat parametrsiz funksiyalar uchun ishlaydi. Shuning uchun holatni «ko‘tarish» kerak: parametrli komponentni previewda ko‘rsatish oson.",
     1,
     {}
    ]
   ]
  }
 ],
 "roadmap": [
  {
   "sec": "kw",
   "title": {
    "ru": "Основы Kotlin",
    "uz": "Kotlin asoslari"
   },
   "text": {
    "ru": "val и var, типы, if и when, циклы, функции. Пишите маленькие программы и запускайте их.",
    "uz": "val va var, turlar, if va when, sikllar, funksiyalar. Kichik dasturlar yozing va ishga tushiring."
   }
  },
  {
   "sec": "ty",
   "title": {
    "ru": "Null-безопасность",
    "uz": "Null-xavfsizlik"
   },
   "text": {
    "ru": "Типы со знаком ?, операторы ?. и ?:. Именно они защищают приложения от падений.",
    "uz": "? belgili turlar, ?. va ?: operatorlari. Ilovalarni qulashdan aynan ular himoya qiladi."
   }
  },
  {
   "sec": "col",
   "title": {
    "ru": "Коллекции и лямбды",
    "uz": "Kolleksiyalar va lambdalar"
   },
   "text": {
    "ru": "map, filter, groupBy: с их помощью большую часть циклов можно заменить одной строкой.",
    "uz": "map, filter, groupBy: ular yordamida sikllarning ko‘pini bitta qator bilan almashtirish mumkin."
   }
  },
  {
   "sec": "co",
   "title": {
    "ru": "Корутины и Flow",
    "uz": "Korutinlar va Flow"
   },
   "text": {
    "ru": "Фоновая работа без callback’ов. Без них не обходится ни один запрос в сеть.",
    "uz": "Callback’siz fon ishlari. Tarmoqqa birorta so‘rov ham ularsiz bo‘lmaydi."
   }
  },
  {
   "sec": "an",
   "title": {
    "ru": "Основы Android",
    "uz": "Android asoslari"
   },
   "text": {
    "ru": "Activity, жизненный цикл, манифест, ресурсы. Теперь ставьте Android Studio и запускайте эмулятор.",
    "uz": "Activity, hayot sikli, manifest, resurslar. Endi Android Studio’ni o‘rnating va emulyatorni ishga tushiring."
   }
  },
  {
   "sec": "an",
   "title": {
    "ru": "Данные и сеть",
    "uz": "Ma’lumotlar va tarmoq"
   },
   "text": {
    "ru": "Room, DataStore, Retrofit. Приложение начинает хранить данные и ходить в интернет.",
    "uz": "Room, DataStore, Retrofit. Ilova ma’lumot saqlay boshlaydi va internetga chiqadi."
   }
  },
  {
   "sec": "cm",
   "title": {
    "ru": "Compose и архитектура",
    "uz": "Compose va arxitektura"
   },
   "text": {
    "ru": "Интерфейс на Compose, состояние во ViewModel, зависимости через Hilt. Так пишут современные приложения.",
    "uz": "Compose’da interfeys, ViewModel’da holat, Hilt orqali bog‘liqliklar. Zamonaviy ilovalar shunday yoziladi."
   }
  }
 ]
};
