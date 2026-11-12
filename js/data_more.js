/* data_more.js — extra details per entry (RU/UZ/EN): "more", "mistake" and "related" (entry names). */
window.KD_MORE = {
 "an:Activity": {
  "more": {
   "ru": "`Activity` — компонент, экземпляром которого управляет система: вы не вызываете конструктор сами, а запускаете экран через `Intent`. В примере `setContentView` подключает разметку, а `AppCompatActivity` даёт совместимость со старыми версиями Android и поддержку тем. Вся инициализация экрана обычно происходит в `onCreate`, не забывайте вызывать `super.onCreate`.",
   "uz": "`Activity` — nusxasini tizim o‘zi boshqaradigan komponent: konstruktorni o‘zingiz chaqirmaysiz, ekranni `Intent` orqali ochasiz. Misolda `setContentView` maketni ulaydi, `AppCompatActivity` esa Android’ning eski versiyalari bilan moslik va mavzular qo‘llovini beradi. Ekranni sozlash odatda `onCreate`da bajariladi, `super.onCreate`ni chaqirishni unutmang.",
   "en": "An `Activity` is a component whose instances are managed by the system: you never call its constructor yourself, you launch a screen with an `Intent`. In the example, `setContentView` attaches the layout, while `AppCompatActivity` provides compatibility with older Android versions and theme support. Screen setup normally happens in `onCreate`, and you must call `super.onCreate`."
  },
  "mistake": {
   "ru": "Пытаются создать экран через `MainActivity()` и вызвать его методы напрямую. Так жизненный цикл не запустится; открывайте экраны через `startActivity` с `Intent`.",
   "uz": "Ekranni `MainActivity()` bilan yaratib, uning metodlarini to‘g‘ridan-to‘g‘ri chaqirishga urinishadi. Bunda hayot sikli ishga tushmaydi; ekranlarni `Intent` bilan `startActivity` orqali oching.",
   "en": "Trying to create a screen with `MainActivity()` and call its methods directly. The lifecycle will not start that way; open screens with `startActivity` and an `Intent`."
  },
  "related": [
   "Activity lifecycle",
   "AndroidManifest.xml",
   "Intent (explicit)",
   "Fragment"
  ]
 },
 "an:Activity lifecycle": {
  "more": {
   "ru": "Методы идут парами: `onCreate`/`onDestroy` охватывают всё время жизни, `onStart`/`onStop` — пока экран виден, `onResume`/`onPause` — пока он на переднем плане и принимает ввод. Поэтому в `onResume` запускают то, что нужно только при активном экране, а в `onPause` это освобождают. Обратите внимание: в примере `super` вызывается первым при «входе» и последним при «выходе».",
   "uz": "Metodlar juft-juft keladi: `onCreate`/`onDestroy` butun yashash davrini qamraydi, `onStart`/`onStop` — ekran ko‘rinib turgan payt, `onResume`/`onPause` — ekran oldingi planda bo‘lib, kiritishni qabul qiladigan payt. Shuning uchun faqat faol ekranga kerak narsa `onResume`da boshlanib, `onPause`da bo‘shatiladi. E’tibor bering: misolda `super` «kirishda» birinchi, «chiqishda» oxirgi chaqiriladi.",
   "en": "The methods come in pairs: `onCreate`/`onDestroy` span the whole lifetime, `onStart`/`onStop` cover the time the screen is visible, and `onResume`/`onPause` cover the time it is in the foreground and accepts input. So you start things that are needed only while the screen is active in `onResume` and release them in `onPause`. Note that in the example `super` is called first when entering and last when leaving."
  },
  "mistake": {
   "ru": "Рассчитывают, что `onDestroy` вызовется всегда, и сохраняют там важные данные. Если система убьёт процесс, он не сработает; сохраняйте данные заранее, например в `onStop`, `ViewModel` или базе.",
   "uz": "`onDestroy` har doim chaqiriladi deb o‘ylab, muhim ma’lumotni shu yerda saqlashadi. Tizim jarayonni o‘chirsa, u ishlamaydi; ma’lumotni oldindan, masalan `onStop`, `ViewModel` yoki bazada saqlang.",
   "en": "Assuming `onDestroy` is always called and saving important data there. If the system kills the process it will not run; save data earlier, for example in `onStop`, a `ViewModel` or a database."
  },
  "related": [
   "Activity",
   "ViewModel",
   "Bundle",
   "Fragment"
  ]
 },
 "an:AndroidManifest.xml": {
  "more": {
   "ru": "Манифест сообщает системе, что есть в приложении, ещё до запуска кода: `Activity`, `Service`, `BroadcastReceiver`, нужные разрешения, имя, иконку и тему. Атрибут `android:name=\".MainActivity\"` с точкой в начале отсчитывается от пакета приложения. Манифесты подключённых библиотек автоматически объединяются с вашим при сборке. Разрешение `INTERNET` относится к обычным и выдаётся без запроса у пользователя.",
   "uz": "Manifest dastur kodi ishga tushmasdanoq tizimga ilovada nimalar borligini aytadi: `Activity`, `Service`, `BroadcastReceiver`, kerakli ruxsatlar, nom, ikonka va mavzu. Boshida nuqta bor `android:name=\".MainActivity\"` ilova paketiga nisbatan hisoblanadi. Ulangan kutubxonalar manifestlari yig‘ishda sizniki bilan avtomatik birlashtiriladi. `INTERNET` ruxsati oddiy ruxsatlarga kiradi va foydalanuvchidan so‘ralmasdan beriladi.",
   "en": "The manifest tells the system what the app contains before any of your code runs: `Activity`, `Service`, `BroadcastReceiver`, required permissions, the name, icon and theme. The `android:name=\".MainActivity\"` value with a leading dot is resolved relative to the app’s package. The manifests of included libraries are merged into yours automatically at build time. The `INTERNET` permission is a normal one and is granted without asking the user."
  },
  "mistake": {
   "ru": "Создают новую `Activity` и забывают объявить её в манифесте: при `startActivity` приложение падает с `ActivityNotFoundException`. Добавляйте тег `<activity>` сразу при создании класса.",
   "uz": "Yangi `Activity` yaratib, uni manifestda e’lon qilishni unutishadi: `startActivity`da ilova `ActivityNotFoundException` bilan qulaydi. `<activity>` tegini klassni yaratishdayoq qo‘shing.",
   "en": "Creating a new `Activity` and forgetting to declare it in the manifest: `startActivity` then crashes the app with `ActivityNotFoundException`. Add the `<activity>` tag as soon as you create the class."
  },
  "related": [
   "Activity",
   "Permissions",
   "Service",
   "BroadcastReceiver"
  ]
 },
 "an:Intent (explicit)": {
  "more": {
   "ru": "В конструктор `Intent(this, DetailActivity::class.java)` передают контекст и класс цели, поэтому система точно знает, какой экран открыть. Данные добавляются парами ключ-значение через `putExtra` и хранятся внутри `Intent` в `Bundle`. На другой стороне их читают через `getIntExtra` и аналоги: второй аргумент — значение по умолчанию, если ключа нет.",
   "uz": "`Intent(this, DetailActivity::class.java)` konstruktoriga kontekst va maqsad klassi beriladi, shuning uchun tizim qaysi ekranni ochishni aniq biladi. Ma’lumotlar `putExtra` orqali kalit-qiymat juftlari sifatida qo‘shiladi va `Intent` ichida `Bundle`da saqlanadi. Narigi tomonda ular `getIntExtra` va shunga o‘xshash metodlar bilan o‘qiladi: ikkinchi argument kalit bo‘lmasa qaytariladigan standart qiymat.",
   "en": "The `Intent(this, DetailActivity::class.java)` constructor takes a context and the target class, so the system knows exactly which screen to open. Data is added as key-value pairs with `putExtra` and stored inside the `Intent` in a `Bundle`. On the other side you read it with `getIntExtra` and its siblings: the second argument is the default value used when the key is missing."
  },
  "mistake": {
   "ru": "Опечатка в строковом ключе или неверный тип при чтении молча даёт значение по умолчанию (`-1` в примере). Выносите ключи в константы и проверяйте результат.",
   "uz": "Satr kalitidagi xato yoki o‘qishda noto‘g‘ri tur jimgina standart qiymatni (misolda `-1`) beradi. Kalitlarni konstantalarga chiqaring va natijani tekshiring.",
   "en": "A typo in the string key or a wrong type on read silently gives the default value (`-1` in the example). Put keys into constants and check the result."
  },
  "related": [
   "Intent (implicit)",
   "Activity",
   "Bundle",
   "AndroidManifest.xml"
  ]
 },
 "an:Intent (implicit)": {
  "more": {
   "ru": "Вы задаёте действие (`ACTION_VIEW`, `ACTION_SEND`) и данные или тип, а система ищет компоненты, чьи `intent-filter` подходят. `Intent.createChooser` всегда показывает список выбора, не позволяя запомнить одно приложение по умолчанию. Так ваше приложение может использовать чужие возможности, не зная, что именно установлено на устройстве.",
   "uz": "Siz amalni (`ACTION_VIEW`, `ACTION_SEND`) va ma’lumot yoki turini berasiz, tizim esa `intent-filter`i mos komponentlarni qidiradi. `Intent.createChooser` har doim tanlash ro‘yxatini ko‘rsatadi va bitta ilovani standart qilib eslab qolishga yo‘l qo‘ymaydi. Shu tariqa ilovangiz qurilmada aynan nima o‘rnatilganini bilmasdan, boshqa ilovalar imkoniyatidan foydalanadi.",
   "en": "You specify an action (`ACTION_VIEW`, `ACTION_SEND`) plus data or a type, and the system looks for components whose `intent-filter` matches. `Intent.createChooser` always shows a picker, so the user cannot make one app the permanent default. This lets your app use other apps’ capabilities without knowing what is actually installed on the device."
  },
  "mistake": {
   "ru": "Вызывают `startActivity` без обработки случая, когда подходящего приложения нет, и получают `ActivityNotFoundException`. Оберните вызов в `try/catch` и покажите пользователю сообщение.",
   "uz": "Mos ilova bo‘lmagan holatni hisobga olmay `startActivity`ni chaqirishadi va `ActivityNotFoundException` olishadi. Chaqiruvni `try/catch`ga o‘rab, foydalanuvchiga xabar ko‘rsating.",
   "en": "Calling `startActivity` without handling the case where no suitable app exists, which throws `ActivityNotFoundException`. Wrap the call in `try/catch` and show the user a message."
  },
  "related": [
   "Intent (explicit)",
   "Activity",
   "AndroidManifest.xml",
   "BroadcastReceiver"
  ]
 },
 "an:Fragment": {
  "more": {
   "ru": "`Fragment` живёт внутри `Activity` и позволяет собирать экран из переиспользуемых частей или переключать экраны в одной `Activity`. У него два жизненных цикла: самого фрагмента и его View, которое может пересоздаваться, пока фрагмент жив. В примере разметка передаётся прямо в конструктор `Fragment(R.layout.fragment_home)`, поэтому отдельно переопределять `onCreateView` не нужно.",
   "uz": "`Fragment` `Activity` ichida yashaydi va ekranni qayta ishlatiladigan qismlardan yig‘ish yoki bitta `Activity`da ekranlarni almashtirish imkonini beradi. Uning ikkita hayot sikli bor: fragmentning o‘zi va uning View’si, u fragment tirik ekan qayta yaratilishi mumkin. Misolda maket to‘g‘ridan-to‘g‘ri `Fragment(R.layout.fragment_home)` konstruktoriga beriladi, shuning uchun `onCreateView`ni alohida qayta yozish shart emas.",
   "en": "A `Fragment` lives inside an `Activity` and lets you build a screen from reusable parts or switch screens within one `Activity`. It has two lifecycles: the fragment’s own and that of its View, which can be recreated while the fragment stays alive. In the example the layout is passed straight to the `Fragment(R.layout.fragment_home)` constructor, so there is no need to override `onCreateView` separately."
  },
  "mistake": {
   "ru": "Подписываются на `LiveData` во фрагменте с `this` вместо `viewLifecycleOwner`: при пересоздании View накапливаются дубли подписчиков. Внутри `onViewCreated` используйте `viewLifecycleOwner`.",
   "uz": "Fragmentda `LiveData`ga `viewLifecycleOwner` o‘rniga `this` bilan obuna bo‘lishadi: View qayta yaratilganda obunachilar takrorlanib to‘planadi. `onViewCreated` ichida `viewLifecycleOwner`dan foydalaning.",
   "en": "Observing `LiveData` in a fragment with `this` instead of `viewLifecycleOwner`: when the View is recreated, duplicate observers pile up. Inside `onViewCreated` use `viewLifecycleOwner`."
  },
  "related": [
   "Activity",
   "View Binding",
   "ViewModel",
   "NavHost"
  ]
 },
 "an:Service": {
  "more": {
   "ru": "Сервис не имеет интерфейса и запускается через `startService` или `startForegroundService`, либо привязывается через `onBind`. Здесь `onBind` возвращает `null`, значит, привязка не поддерживается. Значение, которое возвращает `onStartCommand`, говорит системе, что делать после убийства сервиса: `START_NOT_STICKY` означает не перезапускать его. Для длительной видимой работы, например воспроизведения музыки, используют foreground-сервис с уведомлением.",
   "uz": "Servisning interfeysi yo‘q, u `startService` yoki `startForegroundService` bilan ishga tushiriladi yoki `onBind` orqali bog‘lanadi. Bu yerda `onBind` `null` qaytaradi, ya’ni bog‘lanish qo‘llab-quvvatlanmaydi. `onStartCommand` qaytargan qiymat servis o‘chirilgandan keyin tizim nima qilishini bildiradi: `START_NOT_STICKY` uni qayta ishga tushirmaslikni anglatadi. Uzoq va sezilarli ishlar, masalan musiqa ijrosi uchun bildirishnomali foreground servis ishlatiladi.",
   "en": "A service has no UI and is started with `startService` or `startForegroundService`, or bound through `onBind`. Here `onBind` returns `null`, so binding is not supported. The value returned by `onStartCommand` tells the system what to do after the service is killed: `START_NOT_STICKY` means do not restart it. For long, user-visible work such as playing music, a foreground service with a notification is used."
  },
  "mistake": {
   "ru": "Забывают остановить сервис после работы, и он остаётся в памяти. Вызывайте `stopSelf()` по завершении задачи.",
   "uz": "Ish tugagach servisni to‘xtatishni unutishadi va u xotirada qolib ketadi. Vazifa tugagach `stopSelf()` ni chaqiring.",
   "en": "Forgetting to stop the service after the work is done, so it stays in memory. Call `stopSelf()` when the task finishes."
  },
  "related": [
   "WorkManager",
   "launch",
   "Notification",
   "BroadcastReceiver"
  ]
 },
 "an:BroadcastReceiver": {
  "more": {
   "ru": "`onReceive` вызывается в главном потоке, а сам объект приёмника годится только на время этого вызова, поэтому долгую работу передают в `WorkManager`. Регистрацию в коде делают парой с отменой, например в `onStart`/`onStop`. Флаг `RECEIVER_NOT_EXPORTED` означает, что приёмник не принимает сообщения от других приложений, а системные доходят.",
   "uz": "`onReceive` asosiy oqimda chaqiriladi, qabul qiluvchi obyekt esa faqat shu chaqiruv davomida yaroqli, shuning uchun uzoq ishlar `WorkManager`ga topshiriladi. Kodda ro‘yxatdan o‘tkazish bekor qilish bilan juft bajariladi, masalan `onStart`/`onStop`da. `RECEIVER_NOT_EXPORTED` bayrog‘i qabul qiluvchi boshqa ilovalar xabarlarini qabul qilmasligini bildiradi, tizim xabarlari esa yetib keladi.",
   "en": "`onReceive` runs on the main thread, and the receiver object is only valid for the duration of that call, so long work is handed to `WorkManager`. Registration in code is paired with unregistration, for example in `onStart`/`onStop`. The `RECEIVER_NOT_EXPORTED` flag means the receiver does not accept messages from other apps, while system broadcasts still arrive."
  },
  "mistake": {
   "ru": "Регистрируют приёмник в коде и не отменяют регистрацию: это утечка `Activity`. Вызывайте `unregisterReceiver` в парном методе жизненного цикла.",
   "uz": "Qabul qiluvchini kodda ro‘yxatdan o‘tkazib, bekor qilmaydilar: bu `Activity` oqishiga olib keladi. `unregisterReceiver`ni hayot siklining juft metodida chaqiring.",
   "en": "Registering a receiver in code and never unregistering it, which leaks the `Activity`. Call `unregisterReceiver` in the matching lifecycle method."
  },
  "related": [
   "Intent (implicit)",
   "Service",
   "WorkManager",
   "Context"
  ]
 },
 "an:Context": {
  "more": {
   "ru": "`Context` — абстрактный класс, через который получают ресурсы, системные службы, файлы и запускают компоненты. Его наследники — `Application`, `Activity` и `Service`. Подкласс `Application` указывают в манифесте в `android:name`, и его `onCreate` вызывается один раз при старте процесса. `Context` у `Activity` несёт тему экрана, а у `applicationContext` её нет.",
   "uz": "`Context` — resurslar, tizim xizmatlari va fayllarga kirish hamda komponentlarni ishga tushirish uchun abstrakt klass. Uning avlodlari: `Application`, `Activity` va `Service`. `Application` quyi klassi manifestda `android:name` orqali ko‘rsatiladi va uning `onCreate`i jarayon boshlanganda bir marta chaqiriladi. `Activity` konteksti ekran mavzusini tashiydi, `applicationContext`da esa u yo‘q.",
   "en": "`Context` is an abstract class used to get resources, system services and files and to start components. Its subclasses include `Application`, `Activity` and `Service`. An `Application` subclass is named in the manifest via `android:name`, and its `onCreate` runs once when the process starts. An `Activity`’s `Context` carries the screen’s theme, while `applicationContext` does not."
  },
  "mistake": {
   "ru": "Передают `applicationContext` при показе диалога или построении интерфейса: диалог упадёт, а оформление не применится. Для UI используйте `Context` самой `Activity`.",
   "uz": "Dialog ko‘rsatishda yoki interfeys qurishda `applicationContext`ni beradilar: dialog qulaydi, bezak esa qo‘llanmaydi. UI uchun `Activity`ning o‘z `Context`idan foydalaning.",
   "en": "Passing `applicationContext` when showing a dialog or building UI: the dialog crashes and the theming is not applied. For UI use the `Activity`’s own `Context`."
  },
  "related": [
   "Activity",
   "Service",
   "AndroidManifest.xml",
   "strings.xml"
  ]
 },
 "an:Bundle": {
  "more": {
   "ru": "`Bundle` — отображение строковых ключей на значения: примитивы, строки, `Parcelable` и `Serializable`. Он нужен не только для `onSaveInstanceState`: через него передаются аргументы фрагментов, а внутри `Intent` лежат extras. Метод `getInt` без значения вернёт 0, а `savedInstanceState` равен `null` при первом запуске, поэтому в примере стоит `?.` и `?: 0`.",
   "uz": "`Bundle` — satr kalitlarini qiymatlarga bog‘laydigan to‘plam: primitivlar, satrlar, `Parcelable` va `Serializable`. U faqat `onSaveInstanceState` uchun emas: fragment argumentlari u orqali uzatiladi, `Intent` ichidagi extras ham shu. Qiymat yo‘q bo‘lsa `getInt` 0 qaytaradi, birinchi ishga tushirishda `savedInstanceState` esa `null`, shuning uchun misolda `?.` va `?: 0` bor.",
   "en": "A `Bundle` maps string keys to values: primitives, strings, `Parcelable` and `Serializable`. It is not only for `onSaveInstanceState`: fragment arguments travel through it, and `Intent` extras are stored in one. `getInt` returns 0 when the key is missing, and `savedInstanceState` is `null` on the first launch, which is why the example uses `?.` and `?: 0`."
  },
  "mistake": {
   "ru": "Кладут в `Bundle` большие данные, например списки или `Bitmap`: возможен `TransactionTooLargeException`. Сохраняйте только идентификаторы и небольшое состояние, остальное держите во `ViewModel` или базе.",
   "uz": "`Bundle`ga katta ma’lumotlarni, masalan ro‘yxat yoki `Bitmap`ni solishadi: `TransactionTooLargeException` yuz berishi mumkin. Faqat identifikator va kichik holatni saqlang, qolganini `ViewModel` yoki bazada tuting.",
   "en": "Putting large data such as lists or a `Bitmap` into a `Bundle`: it can cause `TransactionTooLargeException`. Save only ids and small state, and keep the rest in a `ViewModel` or a database."
  },
  "related": [
   "Activity lifecycle",
   "ViewModel",
   "Intent (explicit)",
   "SharedPreferences"
  ]
 },
 "an:View Binding": {
  "more": {
   "ru": "Для каждого файла разметки генерируется класс: имя берётся из имени файла в PascalCase с суффиксом `Binding`, а id вида `my_button` становятся свойствами `myButton`. Включается флагом `viewBinding = true` в Gradle. В отличие от `findViewById`, свойства уже имеют правильный тип, без приведения. Корень разметки доступен как `binding.root`.",
   "uz": "Har bir maket fayli uchun klass generatsiya qilinadi: nomi fayl nomidan PascalCase’da `Binding` qo‘shimchasi bilan olinadi, `my_button` ko‘rinishidagi id’lar esa `myButton` xossalariga aylanadi. U Gradle’da `viewBinding = true` bayrog‘i bilan yoqiladi. `findViewById`dan farqli, xossalar to‘g‘ri turga ega, turni o‘zgartirish shart emas. Maket ildizi `binding.root` sifatida mavjud.",
   "en": "A class is generated for each layout file: its name comes from the file name in PascalCase with a `Binding` suffix, and ids like `my_button` become properties named `myButton`. It is enabled with `viewBinding = true` in Gradle. Unlike `findViewById`, the properties already have the correct type, with no casting. The layout root is available as `binding.root`."
  },
  "mistake": {
   "ru": "Во фрагменте держат `binding` после `onDestroyView`: View остаётся в памяти. Обнуляйте ссылку в `onDestroyView`.",
   "uz": "Fragmentda `binding`ni `onDestroyView`dan keyin ham ushlab turishadi: View xotirada qoladi. Havolani `onDestroyView`da `null`ga tenglang.",
   "en": "Keeping `binding` in a fragment after `onDestroyView`, so the View stays in memory. Set the reference to `null` in `onDestroyView`."
  },
  "related": [
   "Layout XML",
   "Fragment",
   "Activity",
   "@Composable"
  ]
 },
 "an:Layout XML": {
  "more": {
   "ru": "Корневой элемент объявляет пространство имён `xmlns:android`. Запись `@+id/title` создаёт новый id в классе `R`, а `@string/hello` ссылается на готовый ресурс. `match_parent` растягивает элемент на всё доступное место, `wrap_content` подгоняет под содержимое. В `LinearLayout` дочерние элементы идут один за другим в направлении `orientation`.",
   "uz": "Ildiz element `xmlns:android` nomlar fazosini e’lon qiladi. `@+id/title` yozuvi `R` klassida yangi id yaratadi, `@string/hello` esa tayyor resursga havola qiladi. `match_parent` elementni mavjud joyning hammasiga cho‘zadi, `wrap_content` mazmuniga moslaydi. `LinearLayout`da ichki elementlar `orientation` yo‘nalishida birin-ketin joylashadi.",
   "en": "The root element declares the `xmlns:android` namespace. The `@+id/title` syntax creates a new id in the `R` class, while `@string/hello` refers to an existing resource. `match_parent` stretches an element to fill the available space, and `wrap_content` fits it to its content. In a `LinearLayout`, child elements follow one another in the direction set by `orientation`."
  },
  "mistake": {
   "ru": "Пропускают `layout_width` или `layout_height` у элемента: при загрузке разметки приложение падает с `InflateException`. Эти два атрибута обязательны для каждого View.",
   "uz": "Elementda `layout_width` yoki `layout_height`ni tushirib qoldirishadi: maket yuklanganda ilova `InflateException` bilan qulaydi. Bu ikki atribut har bir View uchun majburiy.",
   "en": "Omitting `layout_width` or `layout_height` on an element: inflating the layout crashes the app with `InflateException`. These two attributes are required for every View."
  },
  "related": [
   "View Binding",
   "strings.xml",
   "RecyclerView",
   "Column"
  ]
 },
 "an:strings.xml": {
  "more": {
   "ru": "Подстановки вида `%1$s` позволяют менять порядок аргументов в разных языках, а `plurals` задают формы множественного числа, которые читают через `getQuantityString`. Если перевода нет, Android берёт строку из `res/values/strings.xml`, поэтому он должен быть полным. К тексту обращаются как `R.string.hello` в коде и `@string/hello` в разметке.",
   "uz": "`%1$s` ko‘rinishidagi o‘rinbosarlar turli tillarda argumentlar tartibini o‘zgartirish imkonini beradi, `plurals` esa ko‘plik shakllarini beradi va ular `getQuantityString` bilan o‘qiladi. Tarjima bo‘lmasa, Android satrni `res/values/strings.xml`dan oladi, shuning uchun u to‘liq bo‘lishi kerak. Matnga kodda `R.string.hello`, maketda `@string/hello` orqali murojaat qilinadi.",
   "en": "Placeholders like `%1$s` let different languages reorder arguments, and `plurals` define plural forms that you read with `getQuantityString`. If a translation is missing, Android falls back to the string in `res/values/strings.xml`, so that file must be complete. Text is referenced as `R.string.hello` in code and `@string/hello` in layouts."
  },
  "mistake": {
   "ru": "Пишут в `strings.xml` одиночный апостроф без экранирования, и сборка падает с ошибкой. Ставьте перед ним обратную косую черту или берите весь текст в двойные кавычки.",
   "uz": "`strings.xml`ga bitta apostrofni ekranlamasdan yozishadi va yig‘ish xato bilan to‘xtaydi. Uning oldiga teskari kesma chiziq qo‘ying yoki butun matnni qo‘sh qo‘shtirnoqqa oling.",
   "en": "Writing a single apostrophe in `strings.xml` without escaping it, which breaks the build. Put a backslash before it or wrap the whole text in double quotes."
  },
  "related": [
   "Layout XML",
   "Context",
   "Activity",
   "Text"
  ]
 },
 "an:RecyclerView": {
  "more": {
   "ru": "Работают три части: `Adapter` создаёт и заполняет строки, `ViewHolder` хранит найденные View, чтобы не вызывать `findViewById` снова, а `LayoutManager` расставляет элементы. `onCreateViewHolder` вызывается редко, `onBindViewHolder` — часто, при каждом показе строки. `false` в `inflate` значит, что View не добавляется в родителя: это сделает сам `RecyclerView`.",
   "uz": "Uch qism ishlaydi: `Adapter` qatorlarni yaratadi va to‘ldiradi, `ViewHolder` topilgan View’larni saqlaydi, shunda `findViewById` qayta chaqirilmaydi, `LayoutManager` esa elementlarni joylashtiradi. `onCreateViewHolder` kam chaqiriladi, `onBindViewHolder` — tez-tez, qator har safar ko‘rsatilganda. `inflate`dagi `false` View ota-onaga qo‘shilmasligini bildiradi: buni `RecyclerView`ning o‘zi qiladi.",
   "en": "Three parts work together: the `Adapter` creates and fills rows, the `ViewHolder` keeps the found Views so `findViewById` is not called again, and the `LayoutManager` arranges the items. `onCreateViewHolder` is called rarely, while `onBindViewHolder` is called often, each time a row is shown. The `false` in `inflate` means the View is not attached to the parent: `RecyclerView` does that itself."
  },
  "mistake": {
   "ru": "После каждого изменения вызывают `notifyDataSetChanged()`: список перерисовывается целиком и без анимаций. Используйте `ListAdapter` с `DiffUtil` или точечные методы `notifyItemInserted` и подобные.",
   "uz": "Har bir o‘zgarishdan keyin `notifyDataSetChanged()`ni chaqirishadi: ro‘yxat butunlay va animatsiyasiz qayta chiziladi. `DiffUtil`li `ListAdapter` yoki `notifyItemInserted` kabi aniq metodlardan foydalaning.",
   "en": "Calling `notifyDataSetChanged()` after every change, which redraws the whole list without animations. Use `ListAdapter` with `DiffUtil` or targeted methods such as `notifyItemInserted`."
  },
  "related": [
   "LazyColumn",
   "Layout XML",
   "View Binding",
   "ViewModel"
  ]
 },
 "an:ViewModel": {
  "more": {
   "ru": "`ViewModel` привязан к владельцу, например `Activity`, фрагменту или экрану навигации, и очищается, когда владелец окончательно уходит. Делегат `by viewModels()` получает его через `ViewModelProvider`. В примере внутри лежит изменяемый `MutableStateFlow`, а наружу отдаётся только чтение через `asStateFlow()`. Для корутин здесь есть `viewModelScope`. Процесс может быть убит, тогда состояние нужно сохранять через `SavedStateHandle`.",
   "uz": "`ViewModel` egasiga, masalan `Activity`, fragment yoki navigatsiya ekraniga bog‘lanadi va ega butunlay ketganda tozalanadi. `by viewModels()` delegati uni `ViewModelProvider` orqali oladi. Misolda ichkarida o‘zgaruvchan `MutableStateFlow` turadi, tashqariga esa `asStateFlow()` orqali faqat o‘qish beriladi. Korutinlar uchun bu yerda `viewModelScope` bor. Jarayon o‘chirilishi mumkin, shunda holatni `SavedStateHandle` orqali saqlash kerak.",
   "en": "A `ViewModel` is tied to an owner such as an `Activity`, a fragment or a navigation destination, and is cleared when that owner is gone for good. The `by viewModels()` delegate obtains it through `ViewModelProvider`. In the example the mutable `MutableStateFlow` stays inside, and only a read-only view is exposed via `asStateFlow()`. For coroutines there is `viewModelScope`. The process can be killed, in which case state should be saved via `SavedStateHandle`."
  },
  "mistake": {
   "ru": "Передают во `ViewModel` `Activity`, `View` или их `Context`: он переживает экран, и возникает утечка памяти. Передавайте только данные и нужные зависимости.",
   "uz": "`ViewModel`ga `Activity`, `View` yoki ularning `Context`ini uzatishadi: u ekrandan uzoq yashaydi va xotira oqishi yuz beradi. Faqat ma’lumot va kerakli bog‘liqliklarni bering.",
   "en": "Passing an `Activity`, a `View` or their `Context` into a `ViewModel`: it outlives the screen and causes a memory leak. Pass only data and the dependencies it needs."
  },
  "related": [
   "StateFlow",
   "LiveData",
   "viewModelScope",
   "Hilt"
  ]
 },
 "an:LiveData": {
  "more": {
   "ru": "`observe(this)` принимает `LifecycleOwner`: данные доставляются, когда он в состоянии `STARTED` или `RESUMED`, а при `DESTROYED` подписка снимается сама. Новый подписчик сразу получает последнее значение. Во `ViewModel` хранят `MutableLiveData`, а наружу отдают `LiveData`, как в примере: изменять значение снаружи нельзя.",
   "uz": "`observe(this)` `LifecycleOwner`ni qabul qiladi: ma’lumot u `STARTED` yoki `RESUMED` holatida bo‘lganda yetkaziladi, `DESTROYED`da esa obuna o‘zi bekor bo‘ladi. Yangi obunachi darhol oxirgi qiymatni oladi. `ViewModel`da `MutableLiveData` saqlanadi, tashqariga misoldagidek `LiveData` beriladi: qiymatni tashqaridan o‘zgartirib bo‘lmaydi.",
   "en": "`observe(this)` takes a `LifecycleOwner`: values are delivered while it is in the `STARTED` or `RESUMED` state, and the subscription is removed automatically at `DESTROYED`. A new observer immediately receives the latest value. A `ViewModel` keeps a `MutableLiveData` and exposes a `LiveData`, as in the example, so the value cannot be changed from outside."
  },
  "mistake": {
   "ru": "Присваивают `value` из фонового потока: это бросает исключение. Из фона используйте `postValue` или переключитесь на главный поток через `withContext(Dispatchers.Main)`.",
   "uz": "`value`ni fon oqimidan tayinlashadi: bu istisno chiqaradi. Fondan `postValue`dan foydalaning yoki `withContext(Dispatchers.Main)` bilan asosiy oqimga o‘ting.",
   "en": "Assigning `value` from a background thread, which throws an exception. From the background use `postValue` or switch to the main thread with `withContext(Dispatchers.Main)`."
  },
  "related": [
   "ViewModel",
   "StateFlow",
   "Activity lifecycle",
   "withContext"
  ]
 },
 "an:Toast / Snackbar": {
  "more": {
   "ru": "`Toast` создаётся статическим `makeText` и показывается поверх экрана, не привязываясь к макету. `Snackbar` строится от `View`: он ищет подходящего родителя в иерархии, поэтому ему нужен корневой элемент, как `binding.root` в примере. Используйте `Toast` для совсем коротких подтверждений, а `Snackbar` — когда пользователю может понадобиться ответить на сообщение.",
   "uz": "`Toast` statik `makeText` orqali yaratiladi va maketga bog‘lanmasdan ekran ustida ko‘rsatiladi. `Snackbar` esa `View` asosida quriladi: u ierarxiyada mos ota elementni qidiradi, shuning uchun misoldagi `binding.root` kabi ildiz element kerak. Juda qisqa tasdiqlar uchun `Toast`, foydalanuvchi xabarga javob berishi mumkin bo‘lsa `Snackbar` ishlating.",
   "en": "`Toast` is created by the static `makeText` and shown over the screen without being tied to your layout. `Snackbar` is built from a `View`: it looks for a suitable parent in the hierarchy, so it needs a root view such as `binding.root` in the example. Use `Toast` for very brief confirmations and `Snackbar` when the user may want to respond to the message."
  },
  "mistake": {
   "ru": "Забыть вызвать `.show()`: объект `Toast` или `Snackbar` создаётся, но на экране ничего не появляется. Всегда заканчивайте цепочку вызовом `show()`.",
   "uz": "`.show()` ni chaqirishni unutish: `Toast` yoki `Snackbar` obyekti yaratiladi, lekin ekranda hech narsa chiqmaydi. Zanjirni doim `show()` bilan yakunlang.",
   "en": "Forgetting to call `.show()`: the `Toast` or `Snackbar` object is created but nothing appears on screen. Always end the chain with `show()`."
  },
  "related": [
   "Activity",
   "View Binding",
   "Context",
   "Notification"
  ]
 },
 "an:SharedPreferences": {
  "more": {
   "ru": "Данные хранятся в XML-файле в приватной папке приложения, а `edit()` возвращает редактор, в котором изменения накапливаются до вызова `apply()` или `commit()`. `apply()` обновляет значения в памяти сразу и записывает на диск в фоне, а `commit()` пишет синхронно и возвращает `Boolean`. Хранить стоит только простые типы: числа, строки, флаги и наборы строк.",
   "uz": "Ma’lumotlar ilovaning shaxsiy papkasidagi XML faylda saqlanadi, `edit()` esa muharrirni qaytaradi: o‘zgarishlar `apply()` yoki `commit()` chaqirilguncha to‘planadi. `apply()` qiymatlarni xotirada darhol yangilaydi va diskka fonda yozadi, `commit()` esa sinxron yozadi hamda `Boolean` qaytaradi. Faqat oddiy turlarni saqlash kerak: sonlar, satrlar, bayroqlar va satrlar to‘plami.",
   "en": "The data lives in an XML file in the app’s private folder, and `edit()` returns an editor that collects changes until you call `apply()` or `commit()`. `apply()` updates the in-memory values immediately and writes to disk in the background, while `commit()` writes synchronously and returns a `Boolean`. Store only simple types: numbers, strings, flags and string sets."
  },
  "mistake": {
   "ru": "Вызвать `putBoolean(...)` и не завершить правку через `apply()` или `commit()`: значение не сохранится. Кроме того, `commit()` в главном потоке может подвесить интерфейс, поэтому обычно берут `apply()`.",
   "uz": "`putBoolean(...)` ni chaqirib, tahrirni `apply()` yoki `commit()` bilan yakunlamaslik: qiymat saqlanmaydi. Bundan tashqari, asosiy oqimda `commit()` interfeysni qotirib qo‘yishi mumkin, shuning uchun odatda `apply()` olinadi.",
   "en": "Calling `putBoolean(...)` without finishing the edit with `apply()` or `commit()`: the value is not saved. Also, `commit()` on the main thread can freeze the UI, so `apply()` is usually the better choice."
  },
  "related": [
   "DataStore",
   "Context",
   "Bundle",
   "@Entity"
  ]
 },
 "an:DataStore": {
  "more": {
   "ru": "Preferences `DataStore` хранит пары «ключ — значение», а ключи типизированы: `booleanPreferencesKey`, `stringPreferencesKey` и другие. Блок `edit { ... }` выполняется как транзакция, так что изменения применяются целиком. В `Flow` можно собрать данные в `ViewModel` и превратить их в `StateFlow`, чтобы интерфейс всегда видел актуальную настройку.",
   "uz": "Preferences `DataStore` «kalit — qiymat» juftlarini saqlaydi, kalitlar esa turlangan: `booleanPreferencesKey`, `stringPreferencesKey` va boshqalar. `edit { ... }` bloki tranzaksiya sifatida bajariladi, shuning uchun o‘zgarishlar butunlay qo‘llanadi. `Flow` ma’lumotlarini `ViewModel`da yig‘ib, `StateFlow`ga aylantirish mumkin, shunda interfeys doim dolzarb sozlamani ko‘radi.",
   "en": "Preferences `DataStore` stores key-value pairs, and the keys are typed: `booleanPreferencesKey`, `stringPreferencesKey` and so on. The `edit { ... }` block runs as a transaction, so changes are applied as a whole. You can collect the `Flow` in a `ViewModel` and turn it into a `StateFlow` so the UI always sees the current setting."
  },
  "mistake": {
   "ru": "Создавать `DataStore` для одного и того же файла в нескольких местах: это приводит к ошибке. Объявляйте делегат `preferencesDataStore` один раз на верхнем уровне файла, как в примере.",
   "uz": "Bitta fayl uchun `DataStore`ni bir nechta joyda yaratish: bu xatoga olib keladi. `preferencesDataStore` delegatini misoldagidek fayl yuqori darajasida bir marta e’lon qiling.",
   "en": "Creating a `DataStore` for the same file in several places: this causes an error. Declare the `preferencesDataStore` delegate once at the top level of a file, as in the example."
  },
  "related": [
   "flow",
   "StateFlow",
   "SharedPreferences",
   "suspend"
  ]
 },
 "an:@Entity": {
  "more": {
   "ru": "Имя таблицы по умолчанию совпадает с именем класса, а `tableName` позволяет задать своё. Каждая сущность обязана иметь первичный ключ, его отмечают `@PrimaryKey`. Название столбца можно изменить через `@ColumnInfo`, а поля, которые не нужно хранить, помечают `@Ignore`.",
   "uz": "Jadval nomi odatda klass nomi bilan bir xil, `tableName` esa o‘zingizning nomingizni berishga imkon beradi. Har bir entity birlamchi kalitga ega bo‘lishi shart, u `@PrimaryKey` bilan belgilanadi. Ustun nomini `@ColumnInfo` orqali o‘zgartirish mumkin, saqlanmaydigan maydonlar esa `@Ignore` bilan belgilanadi.",
   "en": "By default the table name matches the class name, and `tableName` lets you set your own. Every entity must have a primary key, marked with `@PrimaryKey`. A column name can be changed with `@ColumnInfo`, and fields that should not be stored are marked `@Ignore`."
  },
  "mistake": {
   "ru": "Написать `@Entity`-класс, но не добавить его в список `entities` аннотации `@Database`: Room не узнает о таблице, и сборка завершится ошибкой.",
   "uz": "`@Entity` klassini yozib, uni `@Database` annotatsiyasining `entities` ro‘yxatiga qo‘shmaslik: Room jadval haqida bilmaydi va yig‘ish xato bilan tugaydi.",
   "en": "Writing an `@Entity` class but not adding it to the `entities` list of the `@Database` annotation: Room does not know about the table and the build fails."
  },
  "related": [
   "@Dao",
   "RoomDatabase",
   "data",
   "SharedPreferences"
  ]
 },
 "an:@Dao": {
  "more": {
   "ru": "`@Dao` описывает, что делать с данными, а реализацию генерирует Room. Помимо `@Insert`, `@Query` и `@Delete`, есть `@Update` для обновления строк. Параметры в SQL подставляются через двоеточие, как `:minAge` в примере. Функции с `suspend` Room выполняет вне главного потока, а `Flow` удобно собирать в `ViewModel`.",
   "uz": "`@Dao` ma’lumotlar bilan nima qilishni tasvirlaydi, amalga oshirishni esa Room yaratadi. `@Insert`, `@Query` va `@Delete`dan tashqari, qatorlarni yangilash uchun `@Update` bor. SQL’dagi parametrlar misoldagi `:minAge` kabi ikki nuqta bilan beriladi. `suspend` funksiyalarni Room asosiy oqimdan tashqarida bajaradi, `Flow`ni esa `ViewModel`da yig‘ish qulay.",
   "en": "`@Dao` describes what to do with the data, and Room generates the implementation. Besides `@Insert`, `@Query` and `@Delete` there is `@Update` for modifying rows. SQL parameters are bound with a colon, like `:minAge` in the example. Room runs `suspend` functions off the main thread, and a `Flow` is convenient to collect in a `ViewModel`."
  },
  "mistake": {
   "ru": "Вызывать обычную функцию DAO (не `suspend` и без `Flow`) из главного потока: по умолчанию Room бросит исключение. Делайте такие функции `suspend` или возвращайте `Flow`.",
   "uz": "DAO’ning oddiy funksiyasini (`suspend`siz va `Flow`siz) asosiy oqimdan chaqirish: Room odatda istisno tashlaydi. Bunday funksiyalarni `suspend` qiling yoki `Flow` qaytaring.",
   "en": "Calling a plain DAO function (neither `suspend` nor returning `Flow`) from the main thread: by default Room throws an exception. Make such functions `suspend` or return a `Flow`."
  },
  "related": [
   "@Entity",
   "RoomDatabase",
   "flow",
   "suspend"
  ]
 },
 "an:RoomDatabase": {
  "more": {
   "ru": "Вы описываете абстрактный класс, а реализацию создаёт Room на этапе компиляции. Аннотация `@Database` перечисляет все сущности и версию схемы. Доступ к таблицам идёт через абстрактные функции, возвращающие DAO, как `userDao()` в примере. Вызов `build()` довольно затратный, поэтому результат хранят и переиспользуют.",
   "uz": "Siz abstrakt klassni tasvirlaysiz, amalga oshirishni esa Room kompilyatsiya vaqtida yaratadi. `@Database` annotatsiyasi barcha entity’larni va sxema versiyasini sanab o‘tadi. Jadvallarga misoldagi `userDao()` kabi DAO qaytaruvchi abstrakt funksiyalar orqali kiriladi. `build()` chaqiruvi ancha og‘ir, shuning uchun natija saqlanib, qayta ishlatiladi.",
   "en": "You declare an abstract class and Room generates the implementation at compile time. The `@Database` annotation lists all entities and the schema version. Tables are accessed through abstract functions that return a DAO, like `userDao()` in the example. Calling `build()` is fairly expensive, so the result is stored and reused."
  },
  "mistake": {
   "ru": "Изменить поля `@Entity`, но не увеличить `version` и не написать миграцию: приложение упадёт на устройстве с уже созданной базой. Не используйте `fallbackToDestructiveMigration()` без нужды: он удаляет данные.",
   "uz": "`@Entity` maydonlarini o‘zgartirib, `version`ni oshirmaslik va migratsiya yozmaslik: baza allaqachon yaratilgan qurilmada ilova qulaydi. `fallbackToDestructiveMigration()` ni keraksiz ishlatmang: u ma’lumotlarni o‘chirib yuboradi.",
   "en": "Changing `@Entity` fields without increasing `version` or writing a migration: the app crashes on a device that already has the database. Avoid `fallbackToDestructiveMigration()` unless needed: it deletes the data."
  },
  "related": [
   "@Entity",
   "@Dao",
   "Hilt",
   "Context"
  ]
 },
 "an:Retrofit": {
  "more": {
   "ru": "Аннотации вроде `@GET` и `@Path` описывают запрос, а Retrofit создаёт реализацию интерфейса через `create`. Фабрика конвертеров, в примере `GsonConverterFactory`, превращает JSON в объекты, такие как `UserDto`. Функции с `suspend` Retrofit умеет выполнять без блокировки главного потока, так что отдельно переключать диспетчер обычно не нужно.",
   "uz": "`@GET` va `@Path` kabi annotatsiyalar so‘rovni tasvirlaydi, Retrofit esa `create` orqali interfeysning amalga oshirilishini yaratadi. Konverter fabrikasi, misolda `GsonConverterFactory`, JSON’ni `UserDto` kabi obyektlarga aylantiradi. `suspend` funksiyalarni Retrofit asosiy oqimni bloklamasdan bajara oladi, shuning uchun dispetcherni alohida almashtirish odatda shart emas.",
   "en": "Annotations like `@GET` and `@Path` describe the request, and Retrofit creates the interface implementation through `create`. A converter factory, `GsonConverterFactory` in the example, turns JSON into objects such as `UserDto`. Retrofit can run `suspend` functions without blocking the main thread, so you usually don’t need to switch dispatchers yourself."
  },
  "mistake": {
   "ru": "Указать `baseUrl` без завершающего `/`: Retrofit выбросит исключение при сборке. Адрес должен заканчиваться слэшем, как `\"https://api.example.com/\"`.",
   "uz": "`baseUrl`ni oxirgi `/`siz berish: Retrofit yig‘ishda istisno tashlaydi. Manzil `\"https://api.example.com/\"` kabi slesh bilan tugashi kerak.",
   "en": "Giving a `baseUrl` without a trailing `/`: Retrofit throws an exception when building. The address must end with a slash, like `\"https://api.example.com/\"`."
  },
  "related": [
   "viewModelScope",
   "suspend",
   "Hilt",
   "AndroidManifest.xml"
  ]
 },
 "an:Permissions": {
  "more": {
   "ru": "Современный способ — `registerForActivityResult` с контрактом `RequestPermission`: результат приходит в лямбду, а не в старый `onRequestPermissionsResult`. Метод `launch` запускает системный диалог. Если пользователь уже отказал, `shouldShowRequestPermissionRationale` подскажет, что стоит объяснить, зачем нужно разрешение.",
   "uz": "Zamonaviy usul — `RequestPermission` kontrakti bilan `registerForActivityResult`: natija eski `onRequestPermissionsResult`ga emas, lambdaga keladi. `launch` metodi tizim dialogini ochadi. Foydalanuvchi avval rad etgan bo‘lsa, `shouldShowRequestPermissionRationale` ruxsat nega kerakligini tushuntirish lozimligini bildiradi.",
   "en": "The modern way is `registerForActivityResult` with the `RequestPermission` contract: the result arrives in a lambda instead of the old `onRequestPermissionsResult`. The `launch` method opens the system dialog. If the user has already refused, `shouldShowRequestPermissionRationale` hints that you should explain why the permission is needed."
  },
  "mistake": {
   "ru": "Вызывать `registerForActivityResult` внутри обработчика нажатия: это приведёт к исключению. Регистрируйте контракт заранее, как поле класса, а в обработчике вызывайте только `launch`.",
   "uz": "`registerForActivityResult`ni bosish ishlovchisi ichida chaqirish: bu istisnoga olib keladi. Kontraktni oldindan klass maydoni sifatida ro‘yxatdan o‘tkazing, ishlovchida esa faqat `launch` chaqiring.",
   "en": "Calling `registerForActivityResult` inside a click handler: this throws an exception. Register the contract in advance as a class field and call only `launch` in the handler."
  },
  "related": [
   "AndroidManifest.xml",
   "Activity",
   "Notification",
   "Intent (implicit)"
  ]
 },
 "an:Notification": {
  "more": {
   "ru": "Канал задаёт важность и поведение группы уведомлений, а пользователь может менять его настройки в системе. Повторное создание канала с тем же идентификатором безопасно, поэтому его часто создают при старте приложения. `NotificationCompat.Builder` собирает содержимое, а `notify` с числовым id показывает или обновляет уведомление.",
   "uz": "Kanal bildirishnomalar guruhining muhimligi va xatti-harakatini belgilaydi, foydalanuvchi esa uning sozlamalarini tizimda o‘zgartirishi mumkin. Kanalni o‘sha identifikator bilan qayta yaratish xavfsiz, shuning uchun uni ko‘pincha ilova ishga tushganda yaratishadi. `NotificationCompat.Builder` mazmunni yig‘adi, raqamli id bilan `notify` esa bildirishnomani ko‘rsatadi yoki yangilaydi.",
   "en": "A channel defines the importance and behavior of a group of notifications, and the user can change its settings in the system. Creating a channel again with the same id is safe, so it is often created at app start. `NotificationCompat.Builder` assembles the content, and `notify` with a numeric id shows or updates the notification."
  },
  "mistake": {
   "ru": "Объявить `POST_NOTIFICATIONS` в манифесте, но не запросить его во время работы на Android 13+: уведомления не появятся. Запрашивайте разрешение так же, как другие опасные.",
   "uz": "`POST_NOTIFICATIONS` ni manifestda e’lon qilib, Android 13+ da ishlash vaqtida so‘ramaslik: bildirishnomalar chiqmaydi. Ruxsatni boshqa xavfli ruxsatlar kabi so‘rang.",
   "en": "Declaring `POST_NOTIFICATIONS` in the manifest but not requesting it at runtime on Android 13+: notifications do not appear. Request it like any other dangerous permission."
  },
  "related": [
   "Permissions",
   "Service",
   "WorkManager",
   "Context"
  ]
 },
 "an:WorkManager": {
  "more": {
   "ru": "`CoroutineWorker` выполняет `doWork` как `suspend`-функцию, а результат `Result.success()`, `Result.retry()` или `Result.failure()` сообщает, что делать дальше. К задаче можно добавить ограничения, например наличие сети или зарядку. `WorkManager` подходит для отложенной работы, которая должна выполниться обязательно, но не точно в заданную секунду.",
   "uz": "`CoroutineWorker` `doWork`ni `suspend` funksiya sifatida bajaradi, `Result.success()`, `Result.retry()` yoki `Result.failure()` natijasi esa keyin nima qilishni bildiradi. Vazifaga cheklovlar qo‘shish mumkin, masalan tarmoq yoki zaryadlash. `WorkManager` albatta bajarilishi kerak, lekin aniq berilgan soniyada bo‘lishi shart bo‘lmagan kechiktirilgan ishlar uchun mos.",
   "en": "`CoroutineWorker` runs `doWork` as a `suspend` function, and the result `Result.success()`, `Result.retry()` or `Result.failure()` says what to do next. You can attach constraints to the task, such as network availability or charging. `WorkManager` suits deferrable work that must eventually run but not at an exact second."
  },
  "mistake": {
   "ru": "Ставить периодическую задачу через `enqueue` при каждом запуске приложения: так накапливаются дубликаты. Используйте `enqueueUniquePeriodicWork`, чтобы работа с одним именем существовала в единственном экземпляре.",
   "uz": "Davriy vazifani ilova har ishga tushganda `enqueue` bilan qo‘yish: shunda dublikatlar to‘planadi. Bir nomdagi ish yagona nusxada bo‘lishi uchun `enqueueUniquePeriodicWork` ishlating.",
   "en": "Enqueuing a periodic task with `enqueue` on every app start: duplicates pile up. Use `enqueueUniquePeriodicWork` so that work with a given name exists only once."
  },
  "related": [
   "suspend",
   "Service",
   "Notification",
   "launch"
  ]
 },
 "an:Log": {
  "more": {
   "ru": "Уровни идут по возрастанию важности: `v` для подробностей, `d` для отладки, `i` для информации, `w` для предупреждений и `e` для ошибок. Если передать исключение третьим аргументом, как в `Log.e`, в Logcat выведется и его стек вызовов. Тег удобно задавать константой, чтобы потом фильтровать вывод в Logcat.",
   "uz": "Darajalar muhimlik bo‘yicha o‘sib boradi: `v` tafsilotlar uchun, `d` sinash uchun, `i` ma’lumot uchun, `w` ogohlantirishlar uchun va `e` xatolar uchun. `Log.e` dagidek istisno uchinchi argument sifatida berilsa, Logcat’ga uning chaqiruvlar steki ham chiqadi. Logcat’da keyin filtrlash uchun tegni konstanta qilib berish qulay.",
   "en": "The levels rise in importance: `v` for verbose details, `d` for debugging, `i` for information, `w` for warnings and `e` for errors. If you pass an exception as the third argument, as in `Log.e`, Logcat also prints its stack trace. It is handy to define the tag as a constant so you can filter the Logcat output later."
  },
  "mistake": {
   "ru": "Считать, что вызовы `Log` исчезают в релизной сборке: сами по себе они остаются. Убирайте их правилами R8 или оберткой и не выводите в лог ничего секретного.",
   "uz": "`Log` chaqiruvlari reliz yig‘ilmasida yo‘qoladi deb o‘ylash: o‘z-o‘zidan ular qoladi. Ularni R8 qoidalari yoki o‘ram bilan olib tashlang va logga hech qanday maxfiy narsa yozmang.",
   "en": "Assuming `Log` calls vanish in a release build: on their own they stay. Remove them with R8 rules or a wrapper, and never write anything secret to the log."
  },
  "related": [
   "println",
   "adb",
   "Toast / Snackbar",
   "Activity lifecycle"
  ]
 },
 "an:build.gradle.kts": {
  "more": {
   "ru": "Расширение `.kts` означает, что скрипт написан на Kotlin, поэтому работают подсказки и проверка типов в IDE. `compileSdk` задаёт версию API, с которой компилируется код, а `targetSdk` сообщает системе, под какое поведение приложение протестировано. Конфигурации `implementation` и `testImplementation` определяют, попадёт ли библиотека в приложение или только в тесты.",
   "uz": "`.kts` kengaytmasi skript Kotlin’da yozilganini bildiradi, shuning uchun IDE’da maslahatlar va tur tekshiruvi ishlaydi. `compileSdk` kod kompilyatsiya qilinadigan API versiyasini, `targetSdk` esa ilova qaysi xatti-harakatga moslab sinalganini tizimga bildiradi. `implementation` va `testImplementation` konfiguratsiyalari kutubxona ilovaga tushishini yoki faqat testlarga tushishini belgilaydi.",
   "en": "The `.kts` extension means the script is written in Kotlin, so IDE completion and type checking work. `compileSdk` sets the API version the code is compiled against, while `targetSdk` tells the system which behavior the app has been tested for. The `implementation` and `testImplementation` configurations decide whether a library goes into the app or only into tests."
  },
  "mistake": {
   "ru": "Изменить файл и забыть выполнить синхронизацию Gradle: IDE продолжит работать со старой конфигурацией. После правок нажмите «Sync Now».",
   "uz": "Faylni o‘zgartirib, Gradle sinxronlashini bajarishni unutish: IDE eski konfiguratsiya bilan ishlashda davom etadi. Tahrirlardan keyin «Sync Now» ni bosing.",
   "en": "Editing the file and forgetting to run a Gradle sync: the IDE keeps working with the old configuration. After changes, click “Sync Now”."
  },
  "related": [
   "AndroidManifest.xml",
   "adb",
   "Hilt",
   "Retrofit"
  ]
 },
 "an:adb": {
  "more": {
   "ru": "`adb` — это Android Debug Bridge, программа из Android SDK Platform-Tools, которая связывает компьютер с устройством. Команда `adb shell` открывает оболочку устройства, а `adb shell am start` запускает экран приложения, как в примере. Через `adb logcat` можно смотреть журнал, а ключ `-s` оставляет записи только с нужным тегом.",
   "uz": "`adb` — Android Debug Bridge, Android SDK Platform-Tools tarkibidagi dastur bo‘lib, kompyuterni qurilma bilan bog‘laydi. `adb shell` buyrug‘i qurilma qobig‘ini ochadi, `adb shell am start` esa misoldagidek ilova ekranini ishga tushiradi. `adb logcat` orqali jurnalni ko‘rish mumkin, `-s` kaliti esa faqat kerakli tegdagi yozuvlarni qoldiradi.",
   "en": "`adb` is the Android Debug Bridge, a tool from the Android SDK Platform-Tools that connects your computer to a device. The `adb shell` command opens a shell on the device, and `adb shell am start` launches an app screen as in the example. `adb logcat` shows the log, and the `-s` option keeps only entries with the tag you need."
  },
  "mistake": {
   "ru": "Запускать команды, когда подключено несколько устройств или эмуляторов: `adb` ответит ошибкой. Укажите нужное устройство ключом `-s` с его серийным номером из `adb devices`.",
   "uz": "Bir nechta qurilma yoki emulyator ulangan paytda buyruq berish: `adb` xato bilan javob beradi. Kerakli qurilmani `adb devices` dagi seriya raqami bilan `-s` kaliti orqali ko‘rsating.",
   "en": "Running commands when several devices or emulators are connected: `adb` answers with an error. Pick the device with the `-s` option and its serial number from `adb devices`."
  },
  "related": [
   "Log",
   "build.gradle.kts",
   "Activity",
   "Intent (explicit)"
  ]
 },
 "an:Hilt": {
  "more": {
   "ru": "Hilt построен на Dagger и сам генерирует код внедрения. `@HiltAndroidApp` создаёт контейнер на уровне приложения, `@AndroidEntryPoint` позволяет внедрять зависимости в `Activity` и другие компоненты Android, а `@Inject constructor` объясняет, как создать класс. Для интерфейсов и чужих классов, таких как `Retrofit`, пишут модуль с `@Module` и `@Provides`.",
   "uz": "Hilt Dagger asosida qurilgan va kiritish kodini o‘zi yaratadi. `@HiltAndroidApp` ilova darajasida konteyner yaratadi, `@AndroidEntryPoint` `Activity` va boshqa Android komponentlariga bog‘liqliklarni kiritishga imkon beradi, `@Inject constructor` esa klassni qanday yaratishni tushuntiradi. Interfeyslar va `Retrofit` kabi begona klasslar uchun `@Module` va `@Provides` bilan modul yoziladi.",
   "en": "Hilt is built on Dagger and generates the injection code itself. `@HiltAndroidApp` creates an app-level container, `@AndroidEntryPoint` lets you inject dependencies into an `Activity` and other Android components, and `@Inject constructor` tells Hilt how to create a class. For interfaces and third-party classes such as `Retrofit` you write a module with `@Module` and `@Provides`."
  },
  "mistake": {
   "ru": "Забыть `@AndroidEntryPoint` на `Activity` или не указать класс `Application` в манифесте: поля с `@Inject` не инициализируются и приложение упадёт.",
   "uz": "`Activity`da `@AndroidEntryPoint`ni unutish yoki `Application` klassini manifestda ko‘rsatmaslik: `@Inject` maydonlari initsializatsiya qilinmaydi va ilova qulaydi.",
   "en": "Forgetting `@AndroidEntryPoint` on an `Activity` or not registering the `Application` class in the manifest: `@Inject` fields are not initialized and the app crashes."
  },
  "related": [
   "ViewModel",
   "Retrofit",
   "RoomDatabase",
   "lateinit"
  ]
 },
 "an:viewModelScope": {
  "more": {
   "ru": "`viewModelScope` — готовый `CoroutineScope` из библиотеки `lifecycle-viewmodel-ktx`. По умолчанию он работает на `Dispatchers.Main.immediate`, поэтому обновлять состояние можно прямо в `launch`. Тяжёлые вычисления выносят через `withContext`. Так как `ViewModel` переживает поворот экрана, запрос не перезапускается при каждом повороте.",
   "uz": "`viewModelScope` — `lifecycle-viewmodel-ktx` kutubxonasidagi tayyor `CoroutineScope`. U odatda `Dispatchers.Main.immediate` da ishlaydi, shuning uchun holatni to‘g‘ridan-to‘g‘ri `launch` ichida yangilash mumkin. Og‘ir hisob-kitoblar `withContext` orqali chiqariladi. `ViewModel` ekran burilishidan omon qolgani uchun so‘rov har burilishda qayta ishga tushmaydi.",
   "en": "`viewModelScope` is a ready-made `CoroutineScope` from the `lifecycle-viewmodel-ktx` library. By default it runs on `Dispatchers.Main.immediate`, so you can update state right inside `launch`. Heavy computation is moved out with `withContext`. Because a `ViewModel` survives screen rotation, the request is not restarted on every rotation."
  },
  "mistake": {
   "ru": "Не ловить исключения в `launch`: необработанная ошибка в `viewModelScope` обрушит приложение. Оборачивайте рискованные вызовы, например сетевые, в `try/catch`.",
   "uz": "`launch` ichida istisnolarni ushlamaslik: `viewModelScope` dagi ishlov berilmagan xato ilovani qulatadi. Xavfli chaqiruvlarni, masalan tarmoq chaqiruvlarini, `try/catch` ichiga oling.",
   "en": "Not catching exceptions in `launch`: an unhandled error in `viewModelScope` crashes the app. Wrap risky calls, such as network ones, in `try/catch`."
  },
  "related": [
   "ViewModel",
   "launch",
   "Dispatchers",
   "StateFlow"
  ]
 },
 "cm:@Composable": {
  "more": {
   "ru": "Аннотация `@Composable` сообщает компилятору Compose, что функция участвует в построении интерфейса. Такие функции можно вызывать только из других composable-функций, а Compose может вызывать их повторно (рекомпозиция), когда меняется состояние, которое они читают. Поэтому тело функции стоит держать быстрым и без побочных эффектов.",
   "uz": "`@Composable` annotatsiyasi Compose kompilyatoriga funksiya interfeysni qurishda ishtirok etishini bildiradi. Bunday funksiyalarni faqat boshqa composable funksiyalardan chaqirish mumkin, Compose esa ular o‘qiydigan holat o‘zgarganda ularni qayta chaqirishi mumkin (rekompozitsiya). Shuning uchun funksiya tanasi tez va yon ta’sirlarsiz bo‘lgani ma’qul.",
   "en": "The `@Composable` annotation tells the Compose compiler that a function takes part in building the UI. Such functions can only be called from other composable functions, and Compose may call them again (recomposition) when state they read changes. So keep the body fast and free of side effects."
  },
  "mistake": {
   "ru": "Вызов composable-функции, например `Text(...)`, из обычной функции или из лямбды `onClick` не скомпилируется. Чтобы показать что-то по нажатию, меняйте состояние, а интерфейс пусть реагирует на него.",
   "uz": "Composable funksiyani, masalan `Text(...)`ni, oddiy funksiyadan yoki `onClick` lambdasidan chaqirish kompilyatsiya bo‘lmaydi. Bosilganda nimadir ko‘rsatish uchun holatni o‘zgartiring, interfeys esa unga javob bersin.",
   "en": "Calling a composable such as `Text(...)` from a regular function or from an `onClick` lambda will not compile. To show something on click, change state and let the UI react to it."
  },
  "related": [
   "setContent",
   "remember",
   "@Preview"
  ]
 },
 "cm:setContent": {
  "more": {
   "ru": "`setContent` определяет корневую композицию для `ComponentActivity`: лямбда внутри описывает весь интерфейс экрана. Обычно в неё сразу кладут тему приложения, как `MyAppTheme` в примере, а дальше строят дерево из composable-функций. Для постепенной миграции Compose можно встраивать и в обычные View-экраны через `ComposeView`.",
   "uz": "`setContent` `ComponentActivity` uchun ildiz kompozitsiyani belgilaydi: ichidagi lambda ekranning butun interfeysini tasvirlaydi. Odatda unga darhol ilova mavzusi qo‘yiladi, misoldagi `MyAppTheme` kabi, so‘ng composable funksiyalardan daraxt quriladi. Compose’ni asta-sekin joriy qilish uchun uni oddiy View ekranlarga `ComposeView` orqali ham joylash mumkin.",
   "en": "`setContent` defines the root composition of a `ComponentActivity`: the lambda inside describes the whole screen UI. Usually the app theme goes right inside it, like `MyAppTheme` in the example, and the tree of composable functions is built below. For gradual migration, Compose can also be embedded into classic View screens with `ComposeView`."
  },
  "mistake": {
   "ru": "Не вызывайте `setContent` повторно для каждого нового экрана: вся навигация и смена содержимого должны происходить внутри одной композиции, например через `NavHost`.",
   "uz": "Har bir yangi ekran uchun `setContent`ni qayta chaqirmang: butun navigatsiya va mazmun almashinuvi bitta kompozitsiya ichida, masalan `NavHost` orqali, bo‘lishi kerak.",
   "en": "Do not call `setContent` again for every new screen: all navigation and content switching should happen inside one composition, for example with `NavHost`."
  },
  "related": [
   "Activity",
   "@Composable",
   "MaterialTheme",
   "Layout XML"
  ]
 },
 "cm:Text": {
  "more": {
   "ru": "`Text` — базовый composable для вывода строки. Помимо `fontSize`, `fontWeight` и `color` у него есть параметр `style`, куда удобно передавать готовые стили темы, например `MaterialTheme.typography.titleMedium`. Ограничение `maxLines` вместе с `overflow = TextOverflow.Ellipsis` обрезает длинный текст многоточием, как в примере.",
   "uz": "`Text` satrni ko‘rsatish uchun asosiy composable. `fontSize`, `fontWeight` va `color`dan tashqari unda `style` parametri bor, unga mavzuning tayyor uslublarini, masalan `MaterialTheme.typography.titleMedium`ni, berish qulay. `maxLines` bilan `overflow = TextOverflow.Ellipsis` misoldagidek uzun matnni ko‘p nuqta bilan qisqartiradi.",
   "en": "`Text` is the basic composable for showing a string. Besides `fontSize`, `fontWeight` and `color` it has a `style` parameter, handy for passing ready theme styles such as `MaterialTheme.typography.titleMedium`. `maxLines` together with `overflow = TextOverflow.Ellipsis` trims long text with an ellipsis, as in the example."
  },
  "mistake": {
   "ru": "Размер шрифта нельзя задать числом: `fontSize = 24` не скомпилируется. Нужна единица измерения, например `24.sp`.",
   "uz": "Shrift o‘lchamini oddiy son bilan berib bo‘lmaydi: `fontSize = 24` kompilyatsiya bo‘lmaydi. O‘lchov birligi kerak, masalan `24.sp`.",
   "en": "You cannot pass a plain number as font size: `fontSize = 24` will not compile. You need a unit, for example `24.sp`."
  },
  "related": [
   "Modifier",
   "MaterialTheme",
   "strings.xml"
  ]
 },
 "cm:Button": {
  "more": {
   "ru": "У `Button` два главных параметра: `onClick` и лямбда содержимого в конце. Так как содержимое — обычная лямбда, кнопка не ограничена текстом. Рядом есть варианты `OutlinedButton`, `TextButton` и `IconButton`; параметр `enabled = false` делает кнопку неактивной.",
   "uz": "`Button`ning ikkita asosiy parametri bor: `onClick` va oxiridagi mazmun lambdasi. Mazmun oddiy lambda bo‘lgani uchun tugma faqat matn bilan cheklanmaydi. Yonida `OutlinedButton`, `TextButton` va `IconButton` variantlari bor; `enabled = false` tugmani nofaol qiladi.",
   "en": "`Button` has two main parameters: `onClick` and a trailing content lambda. Because the content is an ordinary lambda, a button is not limited to text. There are also `OutlinedButton`, `TextButton` and `IconButton` variants, and `enabled = false` disables the button."
  },
  "mistake": {
   "ru": "Запись `onClick = viewModel.save()` вызывает функцию сразу при композиции, а не при нажатии. Передавайте лямбду: `onClick = { viewModel.save() }`.",
   "uz": "`onClick = viewModel.save()` yozuvi funksiyani bosilganda emas, kompozitsiya paytida darhol chaqiradi. Lambda bering: `onClick = { viewModel.save() }`.",
   "en": "Writing `onClick = viewModel.save()` calls the function immediately during composition, not on click. Pass a lambda: `onClick = { viewModel.save() }`."
  },
  "related": [
   "Text",
   "remember",
   "Row"
  ]
 },
 "cm:Modifier": {
  "more": {
   "ru": "`Modifier` неизменяемый: каждый вызов вроде `.padding(16.dp)` возвращает новый модификатор, дополняющий цепочку. Модификаторы применяются по порядку и влияют на размер, внешний вид и поведение элемента. По соглашению собственные composable-функции принимают параметр `modifier: Modifier = Modifier`, чтобы вызывающий мог их настраивать.",
   "uz": "`Modifier` o‘zgarmas: `.padding(16.dp)` kabi har bir chaqiruv zanjirni to‘ldiruvchi yangi modifikatorni qaytaradi. Modifikatorlar tartib bilan qo‘llanadi va elementning o‘lchamiga, ko‘rinishiga hamda xatti-harakatiga ta’sir qiladi. Odatga ko‘ra, o‘z composable funksiyalaringiz `modifier: Modifier = Modifier` parametrini qabul qiladi, shunda chaqiruvchi ularni sozlay oladi.",
   "en": "`Modifier` is immutable: each call such as `.padding(16.dp)` returns a new modifier that extends the chain. Modifiers are applied in order and affect an element's size, appearance and behavior. By convention your own composables accept a `modifier: Modifier = Modifier` parameter so the caller can customize them."
  },
  "mistake": {
   "ru": "Если поставить `clickable` после `padding`, область отступа не будет реагировать на нажатие. Чтобы отступ тоже был нажимаемым, ставьте `clickable` раньше `padding`.",
   "uz": "`clickable`ni `padding`dan keyin qo‘ysangiz, chekinish maydoni bosishga javob bermaydi. Chekinish ham bosiladigan bo‘lishi uchun `clickable`ni `padding`dan oldin qo‘ying.",
   "en": "If you put `clickable` after `padding`, the padding area will not react to taps. To make the padding clickable too, place `clickable` before `padding`."
  },
  "related": [
   "Column",
   "Box",
   "Text",
   "Spacer"
  ]
 },
 "cm:Column": {
  "more": {
   "ru": "`Column` ставит дочерние элементы друг под другом. Параметр `verticalArrangement` задаёт расстановку по вертикали, например `Arrangement.spacedBy(8.dp)` добавляет одинаковые промежутки, а `horizontalAlignment` выравнивает детей по горизонтали. Внутри лямбды доступен `Modifier.weight`, который распределяет свободную высоту между элементами.",
   "uz": "`Column` bola elementlarni birining ostiga ikkinchisini joylashtiradi. `verticalArrangement` vertikal joylashtirishni belgilaydi, masalan `Arrangement.spacedBy(8.dp)` bir xil oraliq qo‘shadi, `horizontalAlignment` esa bolalarni gorizontal tekislaydi. Lambda ichida `Modifier.weight` mavjud, u bo‘sh balandlikni elementlar orasida taqsimlaydi.",
   "en": "`Column` places its children one below another. `verticalArrangement` controls vertical placement, for example `Arrangement.spacedBy(8.dp)` adds equal gaps, while `horizontalAlignment` aligns the children horizontally. Inside the lambda `Modifier.weight` is available and distributes the free height among elements."
  },
  "mistake": {
   "ru": "`Column` сам не прокручивается: длинное содержимое просто обрежется. Добавьте `Modifier.verticalScroll(...)` для короткого содержимого или используйте `LazyColumn` для длинных списков.",
   "uz": "`Column` o‘zi aylantirilmaydi: uzun mazmun shunchaki kesilib qoladi. Qisqa mazmun uchun `Modifier.verticalScroll(...)` qo‘shing, uzun ro‘yxatlar uchun esa `LazyColumn` ishlating.",
   "en": "`Column` does not scroll by itself: long content is simply cut off. Add `Modifier.verticalScroll(...)` for short content or use `LazyColumn` for long lists."
  },
  "related": [
   "Row",
   "LazyColumn",
   "Box"
  ]
 },
 "cm:Row": {
  "more": {
   "ru": "`Row` работает как `Column`, только по горизонтали: `horizontalArrangement` управляет расстановкой вдоль строки, а `verticalAlignment` выравнивает элементы по вертикали. `Arrangement.SpaceBetween`, как в примере, прижимает первый элемент к началу, последний к концу и распределяет свободное место между ними.",
   "uz": "`Row` `Column` kabi ishlaydi, faqat gorizontal: `horizontalArrangement` qator bo‘ylab joylashtirishni boshqaradi, `verticalAlignment` esa elementlarni vertikal tekislaydi. Misoldagi `Arrangement.SpaceBetween` birinchi elementni boshiga, oxirgisini oxiriga yaqinlashtiradi va bo‘sh joyni ular orasida taqsimlaydi.",
   "en": "`Row` works like `Column` but horizontally: `horizontalArrangement` controls placement along the row and `verticalAlignment` aligns elements vertically. `Arrangement.SpaceBetween`, as in the example, pushes the first element to the start, the last to the end, and spreads the free space between them."
  },
  "mistake": {
   "ru": "Длинный текст в `Row` может выдавить соседние элементы за границы экрана. Дайте тексту `Modifier.weight(1f)` и ограничьте `maxLines`, чтобы он сжимался.",
   "uz": "`Row`dagi uzun matn qo‘shni elementlarni ekran chegarasidan chiqarib yuborishi mumkin. Matnga `Modifier.weight(1f)` bering va `maxLines`ni cheklang, shunda u siqiladi.",
   "en": "Long text in a `Row` can push neighboring elements off the screen. Give the text `Modifier.weight(1f)` and limit `maxLines` so it shrinks."
  },
  "related": [
   "Column",
   "Box",
   "Spacer",
   "Modifier"
  ]
 },
 "cm:Box": {
  "more": {
   "ru": "`Box` — аналог `FrameLayout`: все дети рисуются в одной области, по умолчанию в левом верхнем углу. Параметр `contentAlignment` задаёт выравнивание для всех детей сразу, а `Modifier.align` — для конкретного. `Box` также удобен как простой контейнер с фоном или размером вокруг одного элемента.",
   "uz": "`Box` `FrameLayout` analogi: barcha bolalar bitta maydonda, odatda chap yuqori burchakda chiziladi. `contentAlignment` barcha bolalar uchun tekislashni, `Modifier.align` esa alohida element uchun tekislashni belgilaydi. `Box` bitta element atrofida fon yoki o‘lchamli oddiy konteyner sifatida ham qulay.",
   "en": "`Box` is the analog of `FrameLayout`: all children are drawn in the same area, by default in the top-left corner. `contentAlignment` sets alignment for all children at once, while `Modifier.align` does it for one specific child. `Box` is also handy as a simple container with a background or size around a single element."
  },
  "mistake": {
   "ru": "Не ждите, что элементы в `Box` встанут друг за другом: они накладываются. Для последовательного расположения нужны `Column` или `Row`.",
   "uz": "`Box`dagi elementlar ketma-ket joylashadi deb o‘ylamang: ular bir-birining ustiga tushadi. Ketma-ket joylashtirish uchun `Column` yoki `Row` kerak.",
   "en": "Do not expect elements in a `Box` to follow one another: they overlap. For sequential layout you need `Column` or `Row`."
  },
  "related": [
   "Column",
   "Image",
   "Modifier"
  ]
 },
 "cm:Spacer": {
  "more": {
   "ru": "`Spacer` ничего не рисует, а только занимает место, заданное модификаторами: `Modifier.height(16.dp)` в `Column` или `Modifier.width(8.dp)` в `Row`. Если нужен разный отступ между конкретными элементами, `Spacer` удобнее, чем `spacedBy`. А `Spacer(Modifier.weight(1f))` отодвигает следующие элементы к краю.",
   "uz": "`Spacer` hech narsa chizmaydi, faqat modifikatorlar bilan berilgan joyni egallaydi: `Column`da `Modifier.height(16.dp)` yoki `Row`da `Modifier.width(8.dp)`. Muayyan elementlar orasida turlicha masofa kerak bo‘lsa, `Spacer` `spacedBy`dan qulayroq. `Spacer(Modifier.weight(1f))` esa keyingi elementlarni chetga suradi.",
   "en": "`Spacer` draws nothing; it only takes up the space set by modifiers: `Modifier.height(16.dp)` in a `Column` or `Modifier.width(8.dp)` in a `Row`. When you need a different gap between specific elements, `Spacer` is handier than `spacedBy`. And `Spacer(Modifier.weight(1f))` pushes the following elements to the edge."
  },
  "mistake": {
   "ru": "`Spacer` без модификатора размера невидим и не даёт никакого отступа. Всегда задавайте `height` или `width`, либо `weight`.",
   "uz": "O‘lcham modifikatorisiz `Spacer` ko‘rinmaydi va hech qanday masofa bermaydi. Doim `height` yoki `width`, yoki `weight` bering.",
   "en": "A `Spacer` without a size modifier is invisible and gives no gap. Always set `height` or `width`, or `weight`."
  },
  "related": [
   "Column",
   "Row",
   "Modifier"
  ]
 },
 "cm:Image": {
  "more": {
   "ru": "`Image` принимает `painter`: `painterResource` загружает drawable из ресурсов, в том числе векторные. Параметр `contentScale` решает, как картинка вписывается в отведённый размер: `Crop` заполняет область и обрезает лишнее, `Fit` сохраняет всю картинку целиком. Для изображений из сети чаще используют `AsyncImage` из библиотеки Coil.",
   "uz": "`Image` `painter` qabul qiladi: `painterResource` drawable’ni resurslardan, jumladan vektorlilarni ham yuklaydi. `contentScale` rasm berilgan o‘lchamga qanday joylashishini hal qiladi: `Crop` maydonni to‘ldiradi va ortiqchasini kesadi, `Fit` esa rasmni butunlay saqlaydi. Tarmoqdagi rasmlar uchun ko‘pincha Coil kutubxonasidagi `AsyncImage` ishlatiladi.",
   "en": "`Image` takes a `painter`: `painterResource` loads a drawable from resources, including vector ones. `contentScale` decides how the picture fits into the given size: `Crop` fills the area and cuts the excess, `Fit` keeps the whole picture. For network images, `AsyncImage` from the Coil library is commonly used."
  },
  "mistake": {
   "ru": "Не ставьте `contentDescription = null` для картинок, несущих смысл, например иконки действия: экранное чтение их пропустит. `null` подходит только для декоративных изображений.",
   "uz": "Ma’no tashuvchi rasmlarga, masalan harakat ikonkalariga, `contentDescription = null` qo‘ymang: ekranni o‘qish dasturi ularni o‘tkazib yuboradi. `null` faqat bezak rasmlar uchun mos.",
   "en": "Do not set `contentDescription = null` on images that carry meaning, such as action icons: screen readers will skip them. `null` fits only decorative images."
  },
  "related": [
   "Box",
   "Modifier",
   "Text"
  ]
 },
 "cm:TextField": {
  "more": {
   "ru": "`TextField` и `OutlinedTextField` из Material 3 отличаются только оформлением: у второго есть рамка. Параметр `label` задаёт подпись, `singleLine = true` запрещает перенос строки, а `keyboardOptions` выбирает тип клавиатуры. Состояние обычно хранят в `remember`, а чтобы текст не пропадал при повороте экрана, в `rememberSaveable`.",
   "uz": "Material 3’dagi `TextField` va `OutlinedTextField` faqat bezagi bilan farq qiladi: ikkinchisida ramka bor. `label` yorliqni beradi, `singleLine = true` qator ko‘chirishni taqiqlaydi, `keyboardOptions` esa klaviatura turini tanlaydi. Holat odatda `remember`da saqlanadi, matn ekran burilganda yo‘qolmasligi uchun esa `rememberSaveable`da.",
   "en": "Material 3 `TextField` and `OutlinedTextField` differ only in looks: the second has a border. `label` sets the caption, `singleLine = true` forbids line breaks, and `keyboardOptions` picks the keyboard type. State is usually kept in `remember`, and in `rememberSaveable` so the text is not lost on screen rotation."
  },
  "mistake": {
   "ru": "Если в `onValueChange` не обновить состояние, поле «не печатает»: на экране остаётся прежний `value`. Всегда присваивайте новое значение, как `text = it`.",
   "uz": "`onValueChange`da holatni yangilamasangiz, maydon «yozmaydi»: ekranda avvalgi `value` qoladi. Doim yangi qiymatni o‘zlashtiring, masalan `text = it`.",
   "en": "If you do not update the state in `onValueChange`, the field seems not to type: the old `value` stays on screen. Always assign the new value, like `text = it`."
  },
  "related": [
   "remember",
   "State hoisting",
   "Button",
   "rememberSaveable"
  ]
 },
 "cm:Card": {
  "more": {
   "ru": "В Material 3 есть три варианта: `Card` (заливка), `ElevatedCard` (с выраженной тенью) и `OutlinedCard` (с обводкой). Форму и цвета настраивают через параметры `shape` и `colors`, а высоту тени через `CardDefaults`. У `Card` есть перегрузка с `onClick`, которая делает всю карточку нажимаемой.",
   "uz": "Material 3’da uchta variant bor: `Card` (to‘ldirilgan), `ElevatedCard` (yaqqol soyali) va `OutlinedCard` (chizig‘li). Shakl va ranglar `shape` va `colors` parametrlari bilan, soya balandligi esa `CardDefaults` orqali sozlanadi. `Card`ning `onClick` bilan ortiqcha yuklangan varianti bor, u butun kartani bosiladigan qiladi.",
   "en": "Material 3 has three variants: `Card` (filled), `ElevatedCard` (with a pronounced shadow) and `OutlinedCard` (with an outline). Shape and colors are set via the `shape` and `colors` parameters, and shadow height via `CardDefaults`. `Card` has an overload with `onClick` that makes the whole card tappable."
  },
  "mistake": {
   "ru": "Не смешивайте импорты: `Card` из `androidx.compose.material` (Material 2) и из `androidx.compose.material3` имеют разные параметры, например для тени. Используйте один вариант на весь проект.",
   "uz": "Importlarni aralashtirmang: `androidx.compose.material` (Material 2) va `androidx.compose.material3`dagi `Card`ning parametrlari, masalan soya uchun, boshqacha. Butun loyihada bitta variantdan foydalaning.",
   "en": "Do not mix imports: `Card` from `androidx.compose.material` (Material 2) and from `androidx.compose.material3` have different parameters, for example for the shadow. Use one variant across the whole project."
  },
  "related": [
   "Column",
   "MaterialTheme",
   "LazyColumn",
   "Modifier"
  ]
 },
 "cm:LazyColumn": {
  "more": {
   "ru": "Содержимое `LazyColumn` описывается DSL-блоком: `items(list) { ... }` для коллекций, `item { ... }` для одиночного элемента. Compose создаёт только те элементы, что видны на экране или рядом с ним. Параметр `key` в `items` задаёт стабильный идентификатор, чтобы при изменении списка состояние элементов не путалось, а `LazyListState` позволяет управлять прокруткой.",
   "uz": "`LazyColumn` mazmuni DSL blok bilan tavsiflanadi: kolleksiyalar uchun `items(list) { ... }`, bitta element uchun `item { ... }`. Compose faqat ekranda yoki uning yaqinida ko‘rinadigan elementlarni yaratadi. `items`dagi `key` barqaror identifikator beradi, shunda ro‘yxat o‘zgarganda elementlar holati aralashib ketmaydi, `LazyListState` esa aylantirishni boshqarishga imkon beradi.",
   "en": "The content of `LazyColumn` is described with a DSL block: `items(list) { ... }` for collections, `item { ... }` for a single element. Compose creates only the elements visible on screen or near it. The `key` parameter in `items` provides a stable identifier so element state does not get mixed up when the list changes, and `LazyListState` lets you control scrolling."
  },
  "mistake": {
   "ru": "Не вкладывайте `LazyColumn` в `Column` с `verticalScroll`: при бесконечной высоте приложение упадёт с ошибкой. Дайте списку ограниченную высоту или оставьте единственный прокручиваемый контейнер.",
   "uz": "`LazyColumn`ni `verticalScroll` li `Column` ichiga joylamang: cheksiz balandlikda ilova xato bilan yiqiladi. Ro‘yxatga cheklangan balandlik bering yoki bitta aylantiriladigan konteyner qoldiring.",
   "en": "Do not nest a `LazyColumn` inside a `Column` with `verticalScroll`: with infinite height the app will crash with an error. Give the list a bounded height or keep a single scrollable container."
  },
  "related": [
   "Column",
   "RecyclerView",
   "Card",
   "remember"
  ]
 },
 "cm:remember": {
  "more": {
   "ru": "`remember` хранит значение в композиции, пока composable остаётся на экране. Если передать ключи, `remember(key) { ... }` пересчитает значение при их смене. Оператор `by` в примере работает через делегаты `getValue` и `setValue`, поэтому `count` можно читать и менять без `.value`; для этого нужны соответствующие импорты.",
   "uz": "`remember` qiymatni composable ekranda turgan ekan, kompozitsiyada saqlaydi. Kalitlar berilsa, `remember(key) { ... }` ular o‘zgarganda qiymatni qayta hisoblaydi. Misoldagi `by` operatori `getValue` va `setValue` delegatlari orqali ishlaydi, shuning uchun `count`ni `.value`siz o‘qish va o‘zgartirish mumkin; buning uchun mos importlar kerak.",
   "en": "`remember` stores a value in the composition while the composable stays on screen. If you pass keys, `remember(key) { ... }` recalculates the value when they change. The `by` operator in the example works through the `getValue` and `setValue` delegates, so `count` can be read and changed without `.value`; this needs the corresponding imports."
  },
  "mistake": {
   "ru": "`remember { 0 }` без `mutableStateOf` запомнит число, но изменения не вызовут перерисовку. Для значений, от которых зависит интерфейс, оборачивайте их в `mutableStateOf`.",
   "uz": "`mutableStateOf`siz `remember { 0 }` sonni eslab qoladi, lekin o‘zgarishlar qayta chizishni chaqirmaydi. Interfeys bog‘liq bo‘lgan qiymatlarni `mutableStateOf`ga o‘rang.",
   "en": "`remember { 0 }` without `mutableStateOf` remembers the number, but changes will not trigger a redraw. Wrap values the UI depends on in `mutableStateOf`."
  },
  "related": [
   "rememberSaveable",
   "State hoisting",
   "ViewModel"
  ]
 },
 "cm:rememberSaveable": {
  "more": {
   "ru": "`rememberSaveable` сохраняет значение в сохранённом состоянии экрана, поэтому оно переживает не только поворот, но и пересоздание процесса системой. Из коробки поддерживаются типы, которые можно положить в `Bundle`: числа, строки и подобные. Для собственных классов задают `Saver`, либо хранят данные во `ViewModel`.",
   "uz": "`rememberSaveable` qiymatni ekranning saqlangan holatida saqlaydi, shuning uchun u burilishdan tashqari, tizim jarayonni qayta yaratganda ham omon qoladi. `Bundle`ga joylanadigan turlar, ya’ni sonlar, satrlar va shunga o‘xshashlar tayyor qo‘llab-quvvatlanadi. O‘z sinflaringiz uchun `Saver` beriladi yoki ma’lumot `ViewModel`da saqlanadi.",
   "en": "`rememberSaveable` stores the value in the screen's saved state, so it survives not only rotation but also process recreation by the system. Types that fit into a `Bundle`, such as numbers and strings, work out of the box. For your own classes you provide a `Saver`, or keep the data in a `ViewModel`."
  },
  "mistake": {
   "ru": "Не кладите в `rememberSaveable` большие списки или объекты, которые нельзя сохранить в `Bundle`: будет ошибка или лишняя нагрузка. Для таких данных используйте `Saver` или `ViewModel`.",
   "uz": "`rememberSaveable`ga katta ro‘yxatlarni yoki `Bundle`ga saqlab bo‘lmaydigan obyektlarni qo‘ymang: xato yoki ortiqcha yuklama bo‘ladi. Bunday ma’lumotlar uchun `Saver` yoki `ViewModel`dan foydalaning.",
   "en": "Do not put large lists or objects that cannot be saved to a `Bundle` into `rememberSaveable`: you will get an error or extra load. Use a `Saver` or a `ViewModel` for such data."
  },
  "related": [
   "remember",
   "ViewModel",
   "Bundle",
   "State hoisting"
  ]
 },
 "cm:State hoisting": {
  "more": {
   "ru": "State hoisting — паттерн, при котором состояние спускается вниз как параметр, а события поднимаются вверх как лямбды. Это даёт однонаправленный поток данных: `CounterScreen` владеет `count`, а `CounterView` лишь показывает его и сообщает о нажатии. Состояние поднимают до ближайшего общего родителя тех, кто его читает или меняет.",
   "uz": "State hoisting — holat parametr sifatida pastga tushadigan, hodisalar esa lambda sifatida yuqoriga ko‘tariladigan andoza. Bu bir yo‘nalishli ma’lumot oqimini beradi: `CounterScreen` `count`ga egalik qiladi, `CounterView` esa uni faqat ko‘rsatadi va bosilganini xabar qiladi. Holat uni o‘qiydigan yoki o‘zgartiradigan elementlarning eng yaqin umumiy ota-onasigacha ko‘tariladi.",
   "en": "State hoisting is a pattern where state flows down as parameters and events flow up as lambdas. This gives a unidirectional data flow: `CounterScreen` owns `count`, while `CounterView` only displays it and reports the click. State is hoisted to the nearest common parent of the components that read or change it."
  },
  "mistake": {
   "ru": "Не передавайте вниз сам изменяемый объект состояния, чтобы дочерний компонент менял его напрямую. Передавайте значение и лямбду-событие, тогда источник изменений остаётся один.",
   "uz": "Bola komponent to‘g‘ridan-to‘g‘ri o‘zgartirishi uchun o‘zgaruvchan holat obyektining o‘zini pastga uzatmang. Qiymat va hodisa-lambdani uzating, shunda o‘zgarishlar manbai bitta qoladi.",
   "en": "Do not pass the mutable state object itself down for a child to change directly. Pass the value and an event lambda, so there remains a single source of changes."
  },
  "related": [
   "remember",
   "ViewModel",
   "@Preview",
   "TextField"
  ]
 },
 "cm:LaunchedEffect": {
  "more": {
   "ru": "`LaunchedEffect` запускает suspend-код в корутине, привязанной к композиции. Когда composable уходит с экрана, корутина отменяется, а при смене ключа отменяется и запускается заново. Ключ `Unit` или `true` означает один запуск за время жизни composable в композиции.",
   "uz": "`LaunchedEffect` suspend kodni kompozitsiyaga bog‘langan korutinda ishga tushiradi. Composable ekrandan ketganda korutin bekor qilinadi, kalit o‘zgarganda esa bekor qilinib, qaytadan ishga tushadi. `Unit` yoki `true` kaliti composable kompozitsiyada turgan davrda bitta ishga tushirishni bildiradi.",
   "en": "`LaunchedEffect` runs suspend code in a coroutine tied to the composition. When the composable leaves the screen the coroutine is cancelled, and when the key changes it is cancelled and started again. A key of `Unit` or `true` means a single run for as long as the composable stays in the composition."
  },
  "mistake": {
   "ru": "Если эффект зависит от значения, а ключом поставлен `Unit`, он не перезапустится при смене значения. Включайте в ключи всё, от чего зависит работа, как `userId` в примере.",
   "uz": "Effekt qiymatga bog‘liq bo‘lib, kalit sifatida `Unit` qo‘yilsa, qiymat o‘zgarganda u qayta ishga tushmaydi. Ishga bog‘liq bo‘lgan hamma narsani kalitga kiriting, misoldagi `userId` kabi.",
   "en": "If the effect depends on a value but the key is `Unit`, it will not restart when the value changes. Include everything the work depends on in the keys, like `userId` in the example."
  },
  "related": [
   "launch",
   "viewModelScope",
   "remember",
   "collectAsStateWithLifecycle"
  ]
 },
 "cm:Scaffold": {
  "more": {
   "ru": "`Scaffold` реализует типичную структуру Material-экрана и имеет слоты `topBar`, `bottomBar`, `snackbarHost` и `floatingActionButton`. Лямбда содержимого получает `PaddingValues` с размерами занятых панелей, чтобы основной контент не перекрывался. Так вся раскладка экрана собирается в одном месте.",
   "uz": "`Scaffold` Material ekranning odatiy tuzilmasini amalga oshiradi va `topBar`, `bottomBar`, `snackbarHost` hamda `floatingActionButton` slotlariga ega. Mazmun lambdasi band panellar o‘lchamlari bilan `PaddingValues` oladi, shunda asosiy mazmun ustma-ust tushmaydi. Shu tariqa ekranning butun joylashuvi bir joyda yig‘iladi.",
   "en": "`Scaffold` implements the typical Material screen structure with `topBar`, `bottomBar`, `snackbarHost` and `floatingActionButton` slots. The content lambda receives `PaddingValues` with the sizes of the occupied bars so the main content is not overlapped. This way the whole screen layout is assembled in one place."
  },
  "mistake": {
   "ru": "Для прокручиваемого списка передавайте `innerPadding` в `contentPadding` у `LazyColumn`, а не в `Modifier.padding`: тогда список прокручивается под панелями, а первый и последний элементы не прячутся.",
   "uz": "Aylantiriladigan ro‘yxat uchun `innerPadding`ni `Modifier.padding`ga emas, `LazyColumn`ning `contentPadding`iga bering: shunda ro‘yxat panellar ostida aylanadi, birinchi va oxirgi elementlar esa yashirinmaydi.",
   "en": "For a scrollable list, pass `innerPadding` to the `contentPadding` of `LazyColumn` instead of `Modifier.padding`: the list then scrolls under the bars while the first and last items stay visible."
  },
  "related": [
   "MaterialTheme",
   "Column",
   "LazyColumn",
   "NavHost"
  ]
 },
 "cm:MaterialTheme": {
  "more": {
   "ru": "`MaterialTheme` раздаёт вложенным composable-функциям три набора: `colorScheme`, `typography` и `shapes`. Читать их можно как `MaterialTheme.colorScheme.primary`, поэтому смена схемы автоматически меняет все цвета. На Android 12 и новее можно использовать динамические цвета через `dynamicLightColorScheme` и `dynamicDarkColorScheme`.",
   "uz": "`MaterialTheme` ichki composable funksiyalarga uchta to‘plamni tarqatadi: `colorScheme`, `typography` va `shapes`. Ularni `MaterialTheme.colorScheme.primary` kabi o‘qish mumkin, shuning uchun sxemani almashtirish barcha ranglarni avtomatik o‘zgartiradi. Android 12 va undan yangisida `dynamicLightColorScheme` va `dynamicDarkColorScheme` orqali dinamik ranglardan foydalanish mumkin.",
   "en": "`MaterialTheme` provides three sets to nested composables: `colorScheme`, `typography` and `shapes`. You read them as `MaterialTheme.colorScheme.primary`, so switching the scheme changes all colors automatically. On Android 12 and newer you can use dynamic colors via `dynamicLightColorScheme` and `dynamicDarkColorScheme`."
  },
  "mistake": {
   "ru": "Жёстко заданные цвета вроде `Color(0xFF000000)` не меняются в тёмной теме, и текст может стать нечитаемым. Берите цвета из `MaterialTheme.colorScheme`.",
   "uz": "`Color(0xFF000000)` kabi qat’iy berilgan ranglar qorong‘i mavzuda o‘zgarmaydi va matn o‘qib bo‘lmaydigan bo‘lib qolishi mumkin. Ranglarni `MaterialTheme.colorScheme`dan oling.",
   "en": "Hard-coded colors like `Color(0xFF000000)` do not change in dark theme, and text may become unreadable. Take colors from `MaterialTheme.colorScheme`."
  },
  "related": [
   "Text",
   "Scaffold",
   "Card",
   "setContent"
  ]
 },
 "cm:NavHost": {
  "more": {
   "ru": "`NavHost` из библиотеки Navigation Compose показывает composable, соответствующий текущему маршруту, а `NavController` из `rememberNavController()` управляет переходами и стеком возврата. Вызов `navigate(route)` открывает новый экран, а `popBackStack()` возвращает назад. Часть маршрута в фигурных скобках, как `{id}`, становится аргументом, который читают из `backStackEntry`.",
   "uz": "Navigation Compose kutubxonasidagi `NavHost` joriy marshrutga mos composable’ni ko‘rsatadi, `rememberNavController()`dan olingan `NavController` esa o‘tishlar va orqaga qaytish stekini boshqaradi. `navigate(route)` chaqiruvi yangi ekranni ochadi, `popBackStack()` esa orqaga qaytaradi. Marshrutning `{id}` kabi jingalak qavsdagi qismi argumentga aylanadi, uni `backStackEntry`dan o‘qiladi.",
   "en": "`NavHost` from the Navigation Compose library shows the composable matching the current route, while the `NavController` from `rememberNavController()` manages transitions and the back stack. `navigate(route)` opens a new screen and `popBackStack()` goes back. A part of the route in braces, like `{id}`, becomes an argument read from the `backStackEntry`."
  },
  "mistake": {
   "ru": "Не передавайте `NavController` глубоко во все composable. Лучше пробрасывать лямбды вроде `onOpen`, как в примере: так экраны проще тестировать и показывать в превью.",
   "uz": "`NavController`ni barcha composable’larga chuqur uzatmang. Misoldagi `onOpen` kabi lambdalarni uzatgan yaxshi: shunda ekranlarni sinash va previewda ko‘rsatish osonroq.",
   "en": "Do not pass the `NavController` deep into every composable. It is better to pass lambdas like `onOpen`, as in the example: screens are then easier to test and show in previews."
  },
  "related": [
   "Intent (explicit)",
   "State hoisting",
   "ViewModel"
  ]
 },
 "cm:collectAsStateWithLifecycle": {
  "more": {
   "ru": "Функция превращает `StateFlow` в `State`, который читает composable, и перерисовывает его при новых значениях. По умолчанию сбор потока идёт, пока жизненный цикл находится как минимум в состоянии `STARTED`. Для обычного `Flow` понадобится начальное значение, а у `StateFlow` оно уже есть.",
   "uz": "Funksiya `StateFlow`ni composable o‘qiydigan `State`ga aylantiradi va yangi qiymatlarda uni qayta chizadi. Odatda oqimni yig‘ish hayot sikli kamida `STARTED` holatida bo‘lganda davom etadi. Oddiy `Flow` uchun boshlang‘ich qiymat kerak, `StateFlow`da u allaqachon bor.",
   "en": "The function turns a `StateFlow` into a `State` that a composable reads and redraws on new values. By default the flow is collected while the lifecycle is at least in the `STARTED` state. A plain `Flow` needs an initial value, while a `StateFlow` already has one."
  },
  "mistake": {
   "ru": "Для потока из `ViewModel` на Android лучше не использовать `collectAsState`: он продолжает собирать данные, пока composable в композиции, даже когда приложение в фоне. Берите версию с учётом жизненного цикла.",
   "uz": "Android’da `ViewModel`dagi oqim uchun `collectAsState`dan foydalanmagan ma’qul: u composable kompozitsiyada ekan, ilova fonda bo‘lsa ham ma’lumot yig‘ishda davom etadi. Hayot siklini hisobga oladigan variantni oling.",
   "en": "For a flow from a `ViewModel` on Android, prefer not to use `collectAsState`: it keeps collecting while the composable is in the composition, even when the app is in the background. Use the lifecycle-aware version."
  },
  "related": [
   "StateFlow",
   "ViewModel",
   "flow",
   "LiveData"
  ]
 },
 "cm:@Preview": {
  "more": {
   "ru": "`@Preview` нужна только для среды разработки: Android Studio рисует composable прямо в редакторе без запуска приложения. У аннотации есть параметры вроде `showBackground`, `name` и `uiMode`, а на одну функцию можно повесить несколько превью, например для светлой и тёмной темы. Из-за этого в превью удобно проверять разные состояния экрана.",
   "uz": "`@Preview` faqat dasturlash muhiti uchun kerak: Android Studio composable’ni ilovani ishga tushirmasdan to‘g‘ridan-to‘g‘ri muharrirda chizadi. Annotatsiyada `showBackground`, `name` va `uiMode` kabi parametrlar bor, bitta funksiyaga bir nechta preview, masalan yorug‘ va qorong‘i mavzu uchun, qo‘yish mumkin. Shuning uchun previewda ekranning turli holatlarini tekshirish qulay.",
   "en": "`@Preview` is only for the development environment: Android Studio renders the composable right in the editor without running the app. The annotation has parameters such as `showBackground`, `name` and `uiMode`, and you can put several previews on one function, for example for light and dark theme. That makes it convenient to check different screen states in previews."
  },
  "mistake": {
   "ru": "Если не обернуть содержимое превью в тему приложения, оно выглядит иначе, чем в приложении: цвета и шрифты по умолчанию. Оборачивайте его в `MyAppTheme`, как в примере.",
   "uz": "Preview mazmunini ilova mavzusiga o‘ramasangiz, u ilovadagidan boshqacha ko‘rinadi: standart ranglar va shriftlar bilan. Misoldagidek uni `MyAppTheme`ga o‘rang.",
   "en": "If you do not wrap the preview content in the app theme, it looks different from the app: default colors and fonts. Wrap it in `MyAppTheme`, as in the example."
  },
  "related": [
   "@Composable",
   "MaterialTheme",
   "State hoisting"
  ]
 },
 "col:listOf": {
  "more": {
   "ru": "`listOf` возвращает `List<T>` — интерфейс только для чтения. Тип элементов выводится сам: в примере это `List<String>`. Элементы доступны по индексу, а `in` проверяет наличие значения. Пустой список создаёт `emptyList<T>()`, а изменяемую копию — `toMutableList()`.",
   "uz": "`listOf` faqat o‘qish uchun mo‘ljallangan `List<T>` interfeysini qaytaradi. Elementlar turi o‘zi aniqlanadi: misolda bu `List<String>`. Elementlarga indeks orqali murojaat qilinadi, `in` esa qiymat borligini tekshiradi. Bo‘sh ro‘yxatni `emptyList<T>()`, o‘zgartiriladigan nusxani esa `toMutableList()` yaratadi.",
   "en": "`listOf` returns `List<T>`, a read-only interface. The element type is inferred: in the example it is `List<String>`. Elements are accessed by index, and `in` checks whether a value is present. Use `emptyList<T>()` for an empty list and `toMutableList()` to get a modifiable copy."
  },
  "mistake": {
   "ru": "Считать `List` навсегда неизменяемым: это лишь доступ только для чтения, и если у кого-то есть ссылка на изменяемый список, содержимое может меняться. Для надёжной защиты делайте копию через `toList()`.",
   "uz": "`List`ni butunlay o‘zgarmas deb hisoblash: bu faqat o‘qish uchun ruxsat, birov o‘zgartiriladigan ro‘yxatga havola ushlab tursa, mazmun o‘zgarishi mumkin. Ishonchli himoya uchun `toList()` bilan nusxa oling.",
   "en": "Assuming a `List` can never change: it is only a read-only view, so if someone holds a reference to the underlying mutable list, the contents can still change. For real protection, make a copy with `toList()`."
  },
  "related": [
   "mutableListOf",
   "setOf",
   "Array",
   "map"
  ]
 },
 "col:mutableListOf": {
  "more": {
   "ru": "`mutableListOf` создаёт `MutableList<T>`, в котором можно добавлять, удалять и заменять элементы. В примере `remove(1)` удаляет значение `1`, а не элемент с индексом 1; удаление по индексу делает `removeAt`. Добавлять элементы удобно и оператором `+=`, а целую коллекцию — через `addAll`.",
   "uz": "`mutableListOf` elementlarni qo‘shish, o‘chirish va almashtirish mumkin bo‘lgan `MutableList<T>` yaratadi. Misolda `remove(1)` indeksi 1 bo‘lgan elementni emas, `1` qiymatini o‘chiradi; indeks bo‘yicha o‘chirishni `removeAt` bajaradi. Element qo‘shish uchun `+=` operatori ham qulay, butun kolleksiya uchun esa `addAll` bor.",
   "en": "`mutableListOf` creates a `MutableList<T>` where you can add, remove and replace elements. In the example `remove(1)` removes the value `1`, not the element at index 1; removing by index is done with `removeAt`. The `+=` operator is also handy for adding an element, and `addAll` adds a whole collection."
  },
  "mistake": {
   "ru": "Удалять элементы из списка прямо внутри цикла `for` по нему же: это приводит к `ConcurrentModificationException`. Используйте `removeAll { }` или перебирайте копию списка.",
   "uz": "Ro‘yxatdan elementlarni o‘sha ro‘yxat bo‘ylab yurgan `for` sikli ichida o‘chirish: bu `ConcurrentModificationException`ga olib keladi. `removeAll { }` dan foydalaning yoki ro‘yxat nusxasi bo‘ylab yuring.",
   "en": "Removing elements from a list inside a `for` loop over that same list: this leads to `ConcurrentModificationException`. Use `removeAll { }` or iterate over a copy of the list."
  },
  "related": [
   "listOf",
   "mutableMapOf",
   "val",
   "forEach"
  ]
 },
 "col:setOf": {
  "more": {
   "ru": "`setOf` возвращает `Set<T>`, где каждый элемент встречается один раз; порядок элементов при переборе сохраняется таким, как вы его задали. Элементы сравниваются через `equals` и `hashCode`. Инфиксные функции `union`, `intersect` и `subtract` строят новое множество, как в примере, не меняя исходное.",
   "uz": "`setOf` har bir element bir martadan uchraydigan `Set<T>` qaytaradi; aylanib chiqishda elementlar tartibi siz bergan tartibda saqlanadi. Elementlar `equals` va `hashCode` orqali solishtiriladi. `union`, `intersect` va `subtract` infiks funksiyalari misoldagidek yangi to‘plam quradi, asl to‘plamni o‘zgartirmaydi.",
   "en": "`setOf` returns a `Set<T>` in which each element appears once; iteration keeps the order in which you listed the elements. Elements are compared using `equals` and `hashCode`. The infix functions `union`, `intersect` and `subtract` build a new set, as in the example, without changing the original."
  },
  "mistake": {
   "ru": "Класть в множество объекты своего класса без `equals` и `hashCode`: дубликаты не распознаются. Сделайте класс `data class` или переопределите эти методы.",
   "uz": "To‘plamga `equals` va `hashCode` yozilmagan o‘z sinfingiz obyektlarini solish: takrorlar aniqlanmaydi. Sinfni `data class` qiling yoki bu metodlarni qayta yozing.",
   "en": "Putting objects of your own class into a set without `equals` and `hashCode`: duplicates are not detected. Make the class a `data class` or override those methods."
  },
  "related": [
   "distinct",
   "listOf",
   "mutableListOf",
   "mapOf"
  ]
 },
 "col:mapOf": {
  "more": {
   "ru": "`mapOf` создаёт неизменяемый `Map<K, V>`; ключи уникальны, а при повторе ключа побеждает последнее значение. Выражение `\"Ali\" to 20` создаёт `Pair`. Так как `ages[\"Ali\"]` имеет тип `Int?`, для обязательного ключа есть `getValue`, а для запасного значения — `getOrDefault` или `?:`. Перебор через `(name, age)` разбирает пару на части.",
   "uz": "`mapOf` o‘zgarmas `Map<K, V>` yaratadi; kalitlar noyob, kalit takrorlansa oxirgi qiymat qoladi. `\"Ali\" to 20` ifodasi `Pair` hosil qiladi. `ages[\"Ali\"]` turi `Int?` bo‘lgani uchun majburiy kalit uchun `getValue`, zaxira qiymat uchun `getOrDefault` yoki `?:` bor. `(name, age)` bilan aylanish juftni qismlarga ajratadi.",
   "en": "`mapOf` creates a read-only `Map<K, V>`; keys are unique, and if a key repeats the last value wins. The expression `\"Ali\" to 20` creates a `Pair`. Since `ages[\"Ali\"]` has type `Int?`, use `getValue` for a required key and `getOrDefault` or `?:` for a fallback. Looping with `(name, age)` destructures each pair."
  },
  "mistake": {
   "ru": "Писать `ages[\"Ali\"] + 1`: код не скомпилируется, потому что значение может быть `null`. Задайте запасное значение через `?: 0` или используйте `getValue`, если ключ точно есть.",
   "uz": "`ages[\"Ali\"] + 1` deb yozish: qiymat `null` bo‘lishi mumkin bo‘lgani uchun kod kompilyatsiya bo‘lmaydi. `?: 0` bilan zaxira qiymat bering yoki kalit aniq bor bo‘lsa `getValue` ishlating.",
   "en": "Writing `ages[\"Ali\"] + 1`: the code will not compile because the value may be `null`. Provide a fallback with `?: 0`, or use `getValue` when the key is certain to exist."
  },
  "related": [
   "mutableMapOf",
   "Pair",
   "associate",
   "groupBy"
  ]
 },
 "col:mutableMapOf": {
  "more": {
   "ru": "`mutableMapOf` создаёт `MutableMap<K, V>`: присваивание по ключу добавляет или заменяет значение, а `remove` убирает пару. Метод `getValue` бросает исключение, если ключа нет, поэтому в счётчике из примера используют `(counts[c] ?: 0) + 1`. Порядок вывода совпадает с порядком первой вставки ключей.",
   "uz": "`mutableMapOf` `MutableMap<K, V>` yaratadi: kalit bo‘yicha qiymat berish qiymatni qo‘shadi yoki almashtiradi, `remove` esa juftni olib tashlaydi. Kalit bo‘lmasa `getValue` istisno tashlaydi, shu sabab misoldagi hisoblagichda `(counts[c] ?: 0) + 1` ishlatiladi. Chiqarish tartibi kalitlar birinchi marta qo‘shilgan tartibga mos keladi.",
   "en": "`mutableMapOf` creates a `MutableMap<K, V>`: assigning by key adds or replaces a value, and `remove` deletes a pair. `getValue` throws an exception if the key is missing, which is why the counter in the example uses `(counts[c] ?: 0) + 1`. The output order matches the order in which keys were first inserted."
  },
  "mistake": {
   "ru": "Создавать пустой словарь как `mutableMapOf()` без типов: компилятор не сможет вывести `K` и `V`. Укажите их явно, как `mutableMapOf<Char, Int>()`.",
   "uz": "Bo‘sh lug‘atni turlarsiz `mutableMapOf()` deb yaratish: kompilyator `K` va `V` ni aniqlay olmaydi. Ularni `mutableMapOf<Char, Int>()` kabi aniq ko‘rsating.",
   "en": "Creating an empty map as `mutableMapOf()` without types: the compiler cannot infer `K` and `V`. Specify them explicitly, as in `mutableMapOf<Char, Int>()`."
  },
  "related": [
   "mapOf",
   "mutableListOf",
   "for",
   "?:"
  ]
 },
 "col:map": {
  "more": {
   "ru": "`map` всегда возвращает список той же длины, а его тип определяется результатом лямбды: в примере из `List<Int>` получаются и `List<Int>`, и `List<String>`. `mapIndexed` дополнительно передаёт индекс. Если нужно заодно выбросить `null`, есть `mapNotNull`.",
   "uz": "`map` har doim bir xil uzunlikdagi ro‘yxat qaytaradi, uning turi esa lambda natijasiga bog‘liq: misolda `List<Int>` dan ham `List<Int>`, ham `List<String>` hosil bo‘ladi. `mapIndexed` qo‘shimcha ravishda indeksni ham uzatadi. `null`larni ham tashlab ketish kerak bo‘lsa, `mapNotNull` bor.",
   "en": "`map` always returns a list of the same length, and its type is determined by the lambda result: in the example a `List<Int>` produces both a `List<Int>` and a `List<String>`. `mapIndexed` also passes the index. If you also want to drop `null` results, there is `mapNotNull`."
  },
  "mistake": {
   "ru": "Вызывать `map` ради побочных действий вроде `println`: создаётся ненужный список. Для действий без результата используйте `forEach`.",
   "uz": "`map`ni `println` kabi yon ta’sirlar uchun chaqirish: keraksiz ro‘yxat yaratiladi. Natijasiz amallar uchun `forEach` ishlating.",
   "en": "Calling `map` just for side effects such as `println`: it builds an unneeded list. For actions without a result, use `forEach`."
  },
  "related": [
   "filter",
   "forEach",
   "flatMap",
   "asSequence"
  ]
 },
 "col:filter": {
  "more": {
   "ru": "`filter` принимает условие и возвращает новый список из элементов, для которых оно истинно; `filterNot` делает обратное. Часто его сочетают с `map` в цепочку. Для отбора по типу есть `filterIsInstance<T>()`, а для словарей `filter` работает с парами.",
   "uz": "`filter` shart qabul qiladi va u rost bo‘lgan elementlardan yangi ro‘yxat qaytaradi; `filterNot` buning teskarisini qiladi. Uni ko‘pincha `map` bilan zanjirga ulashadi. Tur bo‘yicha saralash uchun `filterIsInstance<T>()` bor, lug‘atlarda esa `filter` juftlar bilan ishlaydi.",
   "en": "`filter` takes a condition and returns a new list of the elements for which it is true; `filterNot` does the opposite. It is often chained with `map`. To select by type there is `filterIsInstance<T>()`, and on maps `filter` works with entries."
  },
  "mistake": {
   "ru": "Писать `list.filter { ... }.first()` ради одного элемента: `filter` сначала строит целый список. Короче и эффективнее `first { ... }` или `firstOrNull { ... }`.",
   "uz": "Bitta element uchun `list.filter { ... }.first()` yozish: `filter` avval butun ro‘yxatni quradi. `first { ... }` yoki `firstOrNull { ... }` qisqaroq va samaraliroq.",
   "en": "Writing `list.filter { ... }.first()` to get one element: `filter` first builds a whole list. `first { ... }` or `firstOrNull { ... }` is shorter and more efficient."
  },
  "related": [
   "map",
   "partition",
   "first",
   "any"
  ]
 },
 "col:forEach": {
  "more": {
   "ru": "`forEach` принимает лямбду и вызывает её для каждого элемента по порядку; `forEachIndexed` добавляет индекс, как в примере. Он работает с любым `Iterable`, а для словаря лямбда получает пару ключ-значение. Обычный цикл `for` делает то же самое и бывает нагляднее.",
   "uz": "`forEach` lambda qabul qiladi va uni har bir element uchun tartib bilan chaqiradi; `forEachIndexed` misoldagidek indeks qo‘shadi. U har qanday `Iterable` bilan ishlaydi, lug‘atda esa lambda kalit-qiymat juftini oladi. Oddiy `for` sikli ham xuddi shuni bajaradi va ba’zan tushunarliroq bo‘ladi.",
   "en": "`forEach` takes a lambda and calls it for each element in order; `forEachIndexed` adds the index, as in the example. It works on any `Iterable`, and for a map the lambda receives a key-value pair. A plain `for` loop does the same and is sometimes clearer."
  },
  "mistake": {
   "ru": "Писать `return` внутри `forEach`, думая, что это переход к следующему элементу: так выходит вся внешняя функция. Для пропуска элемента используйте `return@forEach` или обычный цикл.",
   "uz": "`forEach` ichida `return` yozib, bu keyingi elementga o‘tish deb o‘ylash: bunda butun tashqi funksiyadan chiqib ketiladi. Elementni o‘tkazib yuborish uchun `return@forEach` yoki oddiy sikldan foydalaning.",
   "en": "Writing `return` inside `forEach` expecting it to move to the next element: it exits the whole enclosing function. To skip an element, use `return@forEach` or a regular loop."
  },
  "related": [
   "map",
   "for",
   "filter",
   "repeat"
  ]
 },
 "col:fold": {
  "more": {
   "ru": "В `fold` лямбда получает накопленное значение `acc` и очередной элемент и возвращает новое `acc`. Тип результата определяется начальным значением, поэтому `fold(\"\")` собирает строку из чисел, как в примере. У `reduce` первый элемент служит началом, и результат того же типа, что элементы.",
   "uz": "`fold`da lambda to‘plangan `acc` qiymatini va navbatdagi elementni oladi hamda yangi `acc` qaytaradi. Natija turi boshlang‘ich qiymatga bog‘liq, shuning uchun `fold(\"\")` misoldagidek sonlardan satr yig‘adi. `reduce`da birinchi element boshlanish vazifasini bajaradi va natija elementlar bilan bir xil turda bo‘ladi.",
   "en": "In `fold` the lambda receives the accumulated value `acc` and the next element and returns the new `acc`. The result type is set by the initial value, so `fold(\"\")` builds a string from numbers, as in the example. In `reduce` the first element serves as the start, and the result has the same type as the elements."
  },
  "mistake": {
   "ru": "Забывать, что тип результата задаёт начальное значение: `fold(0)` для списка `Double` не скомпилируется. Берите `fold(0.0)`.",
   "uz": "Natija turini boshlang‘ich qiymat belgilashini unutish: `Double` ro‘yxati uchun `fold(0)` kompilyatsiya bo‘lmaydi. `fold(0.0)` oling.",
   "en": "Forgetting that the initial value sets the result type: `fold(0)` on a list of `Double` will not compile. Use `fold(0.0)`."
  },
  "related": [
   "sum",
   "map",
   "joinToString",
   "filter"
  ]
 },
 "col:sum": {
  "more": {
   "ru": "`sum()` складывает числа, а `average()` всегда возвращает `Double`, поэтому в примере выходит `9.0`. Для списка объектов используйте `sumOf { }` с выбором числового поля. `count { }` считает элементы по условию, как в примере, где подходят `8` и `15`.",
   "uz": "`sum()` sonlarni qo‘shadi, `average()` esa doim `Double` qaytaradi, shuning uchun misolda `9.0` chiqadi. Obyektlar ro‘yxati uchun raqamli maydonni tanlaydigan `sumOf { }` ishlating. `count { }` shart bo‘yicha elementlarni sanaydi, misolda `8` va `15` mos keladi.",
   "en": "`sum()` adds numbers, and `average()` always returns a `Double`, which is why the example prints `9.0`. For a list of objects, use `sumOf { }` to pick a numeric field. `count { }` counts elements matching a condition; in the example `8` and `15` match."
  },
  "mistake": {
   "ru": "Вызывать `sum()` у списка объектов или строк: такой вызов не скомпилируется. Используйте `sumOf { it.price }`, указав нужное числовое поле.",
   "uz": "Obyektlar yoki satrlar ro‘yxatida `sum()` chaqirish: bunday chaqiruv kompilyatsiya bo‘lmaydi. Kerakli raqamli maydonni ko‘rsatib, `sumOf { it.price }` ishlating.",
   "en": "Calling `sum()` on a list of objects or strings: it will not compile. Use `sumOf { it.price }` with the numeric field you need."
  },
  "related": [
   "fold",
   "sorted",
   "map",
   "first"
  ]
 },
 "col:sorted": {
  "more": {
   "ru": "`sorted` упорядочивает по естественному порядку элементов, `sortedBy` — по ключу из лямбды, а `sortedWith` принимает компаратор. Комбинация `compareBy({ it.length }, { it })` из примера сначала сравнивает длину, а при равенстве — сами строки. Сортировка устойчива: равные по ключу элементы сохраняют прежний порядок.",
   "uz": "`sorted` elementlarni tabiiy tartibda joylaydi, `sortedBy` lambdadan olingan kalit bo‘yicha, `sortedWith` esa komparator qabul qiladi. Misoldagi `compareBy({ it.length }, { it })` avval uzunlikni, teng bo‘lsa satrlarning o‘zini solishtiradi. Saralash barqaror: kaliti teng elementlar avvalgi tartibini saqlaydi.",
   "en": "`sorted` orders by the elements' natural order, `sortedBy` by a key from the lambda, and `sortedWith` takes a comparator. The `compareBy({ it.length }, { it })` combination in the example compares length first and the strings themselves on ties. Sorting is stable: elements with equal keys keep their previous order."
  },
  "mistake": {
   "ru": "Вызывать `nums.sorted()` и не использовать результат: исходный список остаётся прежним. Сохраните результат в переменную или сортируйте `MutableList` на месте через `sort()`.",
   "uz": "`nums.sorted()` ni chaqirib, natijani ishlatmaslik: asl ro‘yxat avvalgicha qoladi. Natijani o‘zgaruvchiga saqlang yoki `MutableList`ni `sort()` bilan joyida saralang.",
   "en": "Calling `nums.sorted()` and ignoring the result: the original list stays as it was. Store the result in a variable, or sort a `MutableList` in place with `sort()`."
  },
  "related": [
   "filter",
   "groupBy",
   "distinct",
   "listOf"
  ]
 },
 "col:groupBy": {
  "more": {
   "ru": "`groupBy` вызывает лямбду для каждого элемента и складывает элементы с одинаковым ключом в один список. Порядок ключей — по первому появлению: в примере `5`, `7`, `6`, `9`. Если нужны только количества, есть `groupingBy { }.eachCount()`, а вторая лямбда `groupBy` позволяет сразу преобразовывать значения.",
   "uz": "`groupBy` lambdani har bir element uchun chaqiradi va kaliti bir xil elementlarni bitta ro‘yxatga joylaydi. Kalitlar tartibi birinchi uchrashiga qarab: misolda `5`, `7`, `6`, `9`. Faqat sonlar kerak bo‘lsa, `groupingBy { }.eachCount()` bor, `groupBy`ning ikkinchi lambdasi esa qiymatlarni darrov o‘zgartirishga imkon beradi.",
   "en": "`groupBy` calls the lambda for each element and puts elements with the same key into one list. Keys appear in order of first occurrence: `5`, `7`, `6`, `9` in the example. If you only need counts, there is `groupingBy { }.eachCount()`, and a second lambda in `groupBy` lets you transform the values right away."
  },
  "mistake": {
   "ru": "Ожидать, что ключи результата будут отсортированы: они идут в порядке первого появления. Если нужна сортировка, вызовите `toSortedMap()`.",
   "uz": "Natija kalitlari saralangan bo‘ladi deb kutish: ular birinchi uchrash tartibida keladi. Saralash kerak bo‘lsa, `toSortedMap()` ni chaqiring.",
   "en": "Expecting the result keys to be sorted: they follow the order of first occurrence. If you need sorting, call `toSortedMap()`."
  },
  "related": [
   "associate",
   "partition",
   "mapOf",
   "map"
  ]
 },
 "col:first": {
  "more": {
   "ru": "`first()` и `last()` берут крайние элементы, а вариант с лямбдой ищет первый подходящий. `find` — это синоним `firstOrNull` с условием. Без условия `first()` на пустом списке бросает `NoSuchElementException`, поэтому для возможно пустых данных берите `firstOrNull()` и обрабатывайте `null` через `?:`.",
   "uz": "`first()` va `last()` chekka elementlarni oladi, lambdali variant esa birinchi mos elementni qidiradi. `find` — shartli `firstOrNull`ning sinonimi. Shartsiz `first()` bo‘sh ro‘yxatda `NoSuchElementException` tashlaydi, shuning uchun bo‘sh bo‘lishi mumkin ma’lumotda `firstOrNull()` oling va `null`ni `?:` bilan qayta ishlang.",
   "en": "`first()` and `last()` take the end elements, while the lambda variant finds the first matching one. `find` is a synonym for `firstOrNull` with a condition. Without a condition, `first()` on an empty list throws `NoSuchElementException`, so for possibly empty data use `firstOrNull()` and handle `null` with `?:`."
  },
  "mistake": {
   "ru": "Вызывать `first()` у списка, который может оказаться пустым, например после `filter`: приложение упадёт с исключением. Используйте `firstOrNull()` и запасное значение.",
   "uz": "Bo‘sh bo‘lib qolishi mumkin ro‘yxatda, masalan `filter`dan keyin, `first()` chaqirish: dastur istisno bilan to‘xtaydi. `firstOrNull()` va zaxira qiymatdan foydalaning.",
   "en": "Calling `first()` on a list that may be empty, for example after `filter`: the app crashes with an exception. Use `firstOrNull()` with a fallback value."
  },
  "related": [
   "filter",
   "take",
   "any",
   "Int?"
  ]
 },
 "col:any": {
  "more": {
   "ru": "`any` истинно, если условию отвечает хотя бы один элемент, `all` — если все, `none` — если ни одного. Проверка останавливается, как только результат ясен, поэтому дальше элементы не просматриваются. Без лямбды `any()` просто проверяет, что коллекция не пуста.",
   "uz": "`any` kamida bitta element shartga mos bo‘lsa rost, `all` hammasi mos bo‘lsa, `none` esa hech biri mos bo‘lmasa rost bo‘ladi. Natija aniq bo‘lishi bilan tekshiruv to‘xtaydi, qolgan elementlar ko‘rilmaydi. Lambdasiz `any()` kolleksiya bo‘sh emasligini tekshiradi.",
   "en": "`any` is true if at least one element matches, `all` if every element matches, and `none` if no element matches. The check stops as soon as the result is known, so the remaining elements are not examined. Without a lambda, `any()` simply checks that the collection is not empty."
  },
  "mistake": {
   "ru": "Ждать, что `all` на пустой коллекции вернёт `false`: она вернёт `true`, как показывает последняя строка примера. Если пустая коллекция недопустима, отдельно проверьте `isNotEmpty()`.",
   "uz": "Bo‘sh kolleksiyada `all` `false` qaytaradi deb kutish: misolning oxirgi qatori ko‘rsatganidek, u `true` qaytaradi. Bo‘sh kolleksiya mumkin bo‘lmasa, alohida `isNotEmpty()` ni tekshiring.",
   "en": "Expecting `all` on an empty collection to return `false`: it returns `true`, as the last line of the example shows. If an empty collection is not acceptable, check `isNotEmpty()` separately."
  },
  "related": [
   "filter",
   "first",
   "partition",
   "sum"
  ]
 },
 "col:take": {
  "more": {
   "ru": "`take(n)` берёт первые `n` элементов, `drop(n)` пропускает их, а `takeLast` и `dropLast` работают с конца. Если `n` больше размера списка, ошибки нет: вернётся всё, что есть. `windowed(3)` строит скользящие окна по три элемента со сдвигом на один, в отличие от `chunked`.",
   "uz": "`take(n)` dastlabki `n` ta elementni oladi, `drop(n)` ularni o‘tkazib yuboradi, `takeLast` va `dropLast` esa oxiridan ishlaydi. `n` ro‘yxat o‘lchamidan katta bo‘lsa, xato chiqmaydi: bor narsa qaytadi. `windowed(3)` `chunked`dan farqli ravishda bir qadam siljiydigan uchta elementli oynalar quradi.",
   "en": "`take(n)` takes the first `n` elements, `drop(n)` skips them, and `takeLast` and `dropLast` work from the end. If `n` exceeds the list size there is no error: you simply get what exists. Unlike `chunked`, `windowed(3)` builds sliding windows of three elements shifting by one."
  },
  "mistake": {
   "ru": "Путать `chunked` и `windowed`: `chunked(3)` делит на непересекающиеся части, а `windowed(3)` даёт перекрывающиеся окна. Выбирайте по задаче: страницы — `chunked`, скользящие значения — `windowed`.",
   "uz": "`chunked` va `windowed`ni adashtirish: `chunked(3)` kesishmaydigan qismlarga bo‘ladi, `windowed(3)` esa ustma-ust tushadigan oynalar beradi. Vazifaga qarab tanlang: sahifalar uchun `chunked`, siljuvchi qiymatlar uchun `windowed`.",
   "en": "Confusing `chunked` and `windowed`: `chunked(3)` splits into non-overlapping parts, while `windowed(3)` gives overlapping windows. Choose by task: pages call for `chunked`, sliding values for `windowed`."
  },
  "related": [
   "filter",
   "first",
   "sorted",
   "asSequence"
  ]
 },
 "col:joinToString": {
  "more": {
   "ru": "`joinToString` превращает любую коллекцию в одну строку, и все параметры именованные, как `separator` в примере. Есть и лямбда `transform`, которая задаёт, как каждый элемент превратится в текст. Параметр `limit` обрезает вывод и добавляет многоточие, по умолчанию `...`.",
   "uz": "`joinToString` har qanday kolleksiyani bitta satrga aylantiradi, parametrlari nomli, misoldagi `separator` kabi. Har bir element matnga qanday aylanishini belgilaydigan `transform` lambdasi ham bor. `limit` parametri chiqishni qisqartiradi va ko‘p nuqta qo‘shadi, sukut bo‘yicha `...`.",
   "en": "`joinToString` turns any collection into a single string, and its parameters are named, like `separator` in the example. There is also a `transform` lambda that defines how each element becomes text. The `limit` parameter truncates the output and adds an ellipsis, `...` by default."
  },
  "mistake": {
   "ru": "Ждать читаемого текста от списка своих объектов: каждый элемент превращается через `toString()`. Передайте `transform`, например `joinToString { it.name }`.",
   "uz": "O‘z obyektlaringiz ro‘yxatidan o‘qiladigan matn kutish: har bir element `toString()` orqali aylantiriladi. `transform` bering, masalan `joinToString { it.name }`.",
   "en": "Expecting readable text from a list of your own objects: each element is converted via `toString()`. Pass a `transform`, for example `joinToString { it.name }`."
  },
  "related": [
   "map",
   "buildString",
   "fold",
   "forEach"
  ]
 },
 "col:zip": {
  "more": {
   "ru": "`zip` попарно соединяет элементы по одинаковым индексам и возвращает `List<Pair>`. Вторая форма принимает лямбду и сразу собирает из пары своё значение, как `Ali(20)` в примере. Обратная операция — `unzip`, а `zipWithNext` соединяет соседние элементы одного списка.",
   "uz": "`zip` bir xil indeksdagi elementlarni juft-juft qilib birlashtiradi va `List<Pair>` qaytaradi. Ikkinchi shakl lambda qabul qilib, juftdan darrov o‘z qiymatini yig‘adi, misoldagi `Ali(20)` kabi. Teskari amal — `unzip`, `zipWithNext` esa bitta ro‘yxatning qo‘shni elementlarini birlashtiradi.",
   "en": "`zip` pairs up elements at the same indexes and returns a `List<Pair>`. The second form takes a lambda and builds your own value from each pair, like `Ali(20)` in the example. The reverse operation is `unzip`, and `zipWithNext` combines neighbouring elements of one list."
  },
  "mistake": {
   "ru": "Считать, что списки разной длины вызовут ошибку: лишние элементы длинного списка молча отбрасываются, и данные теряются. Сравнивайте размеры заранее.",
   "uz": "Turli uzunlikdagi ro‘yxatlar xatoga olib keladi deb o‘ylash: uzun ro‘yxatning ortiqcha elementlari indamay tashlab yuboriladi va ma’lumot yo‘qoladi. O‘lchamlarni oldindan solishtiring.",
   "en": "Assuming lists of different lengths cause an error: the extra elements of the longer list are silently dropped and data is lost. Compare the sizes beforehand."
  },
  "related": [
   "Pair",
   "associate",
   "mapOf",
   "map"
  ]
 },
 "col:flatMap": {
  "more": {
   "ru": "`flatten` просто склеивает вложенные коллекции в одну, а `flatMap` сначала превращает каждый элемент в коллекцию, как `it.map { x -> x * 10 }` в примере, и потом склеивает результаты. Порядок сохраняется. Типичный случай — собрать все дочерние элементы из списка родителей.",
   "uz": "`flatten` ichma-ich kolleksiyalarni oddiygina bittaga yopishtiradi, `flatMap` esa avval har bir elementni kolleksiyaga aylantiradi, misoldagi `it.map { x -> x * 10 }` kabi, so‘ng natijalarni yopishtiradi. Tartib saqlanadi. Odatiy holat — ota-onalar ro‘yxatidan barcha bolalarni yig‘ish.",
   "en": "`flatten` simply joins nested collections into one, while `flatMap` first turns each element into a collection, like `it.map { x -> x * 10 }` in the example, and then joins the results. Order is preserved. A typical case is gathering all children from a list of parents."
  },
  "mistake": {
   "ru": "Использовать `map`, когда лямбда возвращает список: получится `List<List<T>>`, а не плоский список. Замените на `flatMap` или добавьте `flatten()`.",
   "uz": "Lambda ro‘yxat qaytarganda `map` ishlatish: yassi ro‘yxat emas, `List<List<T>>` hosil bo‘ladi. `flatMap` bilan almashtiring yoki `flatten()` qo‘shing.",
   "en": "Using `map` when the lambda returns a list: you get a `List<List<T>>`, not a flat list. Switch to `flatMap` or add `flatten()`."
  },
  "related": [
   "map",
   "filter",
   "listOf",
   "asSequence"
  ]
 },
 "col:distinct": {
  "more": {
   "ru": "`distinct` возвращает список без повторов, сравнивая элементы через `equals` и `hashCode`. `distinctBy` оставляет первый элемент для каждого ключа: в примере сохраняется `apple`, а `avocado` отбрасывается, так как ключ `a` уже был. Если порядок не важен, `toSet()` даёт то же с типом `Set`.",
   "uz": "`distinct` takrorlarsiz ro‘yxat qaytaradi, elementlarni `equals` va `hashCode` orqali solishtiradi. `distinctBy` har bir kalit uchun birinchi elementni qoldiradi: misolda `apple` qoladi, `avocado` esa `a` kaliti avval bo‘lgani uchun tashlanadi. Tartib muhim bo‘lmasa, `toSet()` xuddi shuni `Set` turida beradi.",
   "en": "`distinct` returns a list without repeats, comparing elements via `equals` and `hashCode`. `distinctBy` keeps the first element for each key: in the example `apple` stays and `avocado` is dropped because the key `a` was already seen. If order does not matter, `toSet()` gives the same with a `Set` type."
  },
  "mistake": {
   "ru": "Рассчитывать, что `distinctBy` оставит последний элемент группы: остаётся первый. Если нужен последний, предварительно переверните список через `reversed()`.",
   "uz": "`distinctBy` guruhning oxirgi elementini qoldiradi deb hisoblash: birinchisi qoladi. Oxirgisi kerak bo‘lsa, avval ro‘yxatni `reversed()` bilan teskari aylantiring.",
   "en": "Expecting `distinctBy` to keep the last element of a group: it keeps the first. If you need the last one, reverse the list first with `reversed()`."
  },
  "related": [
   "setOf",
   "groupBy",
   "filter",
   "listOf"
  ]
 },
 "col:partition": {
  "more": {
   "ru": "`partition` за один проход делит коллекцию на две: в первой элементы, для которых условие истинно, во второй остальные. Это быстрее и короче, чем два вызова `filter` и `filterNot`. Если групп больше двух, используйте `groupBy`.",
   "uz": "`partition` kolleksiyani bir o‘tishda ikkiga bo‘ladi: birinchisida shart rost bo‘lgan elementlar, ikkinchisida qolganlari. Bu `filter` va `filterNot`ni ikki marta chaqirishdan tezroq va qisqaroq. Guruhlar ikkitadan ko‘p bo‘lsa, `groupBy` ishlating.",
   "en": "`partition` splits a collection in two in a single pass: the first list holds elements for which the condition is true, the second holds the rest. It is shorter and faster than calling `filter` and `filterNot` separately. If there are more than two groups, use `groupBy`."
  },
  "mistake": {
   "ru": "Перепутать порядок переменных при разборе: первая получает подходящие элементы, вторая нет. Называйте их осмысленно, как `even` и `odd`, чтобы не ошибиться.",
   "uz": "Ajratishda o‘zgaruvchilar tartibini adashtirish: birinchisi mos elementlarni, ikkinchisi mos kelmaganlarni oladi. Adashmaslik uchun ularni `even` va `odd` kabi ma’noli nomlang.",
   "en": "Mixing up the order of variables when destructuring: the first gets the matching elements, the second gets the rest. Name them meaningfully, like `even` and `odd`, to avoid mistakes."
  },
  "related": [
   "filter",
   "groupBy",
   "Pair",
   "any"
  ]
 },
 "col:associate": {
  "more": {
   "ru": "`associateWith` использует элемент как ключ и вычисляет значение, `associateBy` вычисляет ключ, а элемент оставляет значением. Самый общий вариант — `associate`, где лямбда возвращает готовую `Pair`. Все три удобны, чтобы превратить список в словарь для быстрого поиска по ключу.",
   "uz": "`associateWith` elementni kalit qiladi va qiymatni hisoblaydi, `associateBy` kalitni hisoblaydi, elementni esa qiymat qilib qoldiradi. Eng umumiy variant — `associate`, unda lambda tayyor `Pair` qaytaradi. Uchalasi ham ro‘yxatni kalit bo‘yicha tez qidiriladigan lug‘atga aylantirish uchun qulay.",
   "en": "`associateWith` uses the element as the key and computes the value, while `associateBy` computes the key and keeps the element as the value. The most general form is `associate`, where the lambda returns a ready-made `Pair`. All three are handy for turning a list into a map for fast lookup by key."
  },
  "mistake": {
   "ru": "Не учитывать повторяющиеся ключи: в `associateBy` последний элемент молча заменяет предыдущие, и данные теряются. Если ключи могут совпасть, используйте `groupBy`.",
   "uz": "Takrorlanuvchi kalitlarni hisobga olmaslik: `associateBy`da oxirgi element oldingilarini indamay almashtiradi va ma’lumot yo‘qoladi. Kalitlar mos tushishi mumkin bo‘lsa, `groupBy` ishlating.",
   "en": "Ignoring duplicate keys: in `associateBy` the last element silently replaces earlier ones and data is lost. If keys may collide, use `groupBy`."
  },
  "related": [
   "groupBy",
   "mapOf",
   "zip",
   "Pair"
  ]
 },
 "col:asSequence": {
  "more": {
   "ru": "Операции `Sequence` выполняются лениво: каждый элемент проходит всю цепочку целиком, прежде чем возьмётся следующий. Вычисления запускает терминальная операция вроде `first()`, `toList()` или `sum()`. Поэтому в примере напечатаны только `map 1`, `map 2` и `map 3`: на числе 3 получилось `6`, которое делится на 3.",
   "uz": "`Sequence` amallari dangasa bajariladi: har bir element keyingisi olinmasdan oldin butun zanjirdan o‘tadi. Hisoblashni `first()`, `toList()` yoki `sum()` kabi terminal amal ishga tushiradi. Shu sabab misolda faqat `map 1`, `map 2` va `map 3` chop etildi: 3 sonida 3 ga bo‘linadigan `6` hosil bo‘ldi.",
   "en": "`Sequence` operations run lazily: each element goes through the whole chain before the next one is taken. A terminal operation such as `first()`, `toList()` or `sum()` triggers the computation. That is why the example prints only `map 1`, `map 2` and `map 3`: for the number 3 the result was `6`, which is divisible by 3."
  },
  "mistake": {
   "ru": "Построить цепочку `Sequence` без терминальной операции: ничего не выполнится. Заканчивайте её вызовом вроде `toList()` или `first()`.",
   "uz": "`Sequence` zanjirini terminal amalsiz qurish: hech narsa bajarilmaydi. Uni `toList()` yoki `first()` kabi chaqiruv bilan tugating.",
   "en": "Building a `Sequence` chain without a terminal operation: nothing runs. End it with a call such as `toList()` or `first()`."
  },
  "related": [
   "map",
   "filter",
   "first",
   "take"
  ]
 },
 "fn:println": {
  "more": {
   "ru": "`println(x)` преобразует значение в строку через `toString()` и добавляет перевод строки; `println()` без аргументов выводит просто пустую строку. `print` оставляет курсор на той же строке, поэтому в примере `print(\"same line\\n\")` с символом `\\n` ведёт себя как `println`. Коллекции печатаются в виде `[1, 2]`.",
   "uz": "`println(x)` qiymatni `toString()` orqali satrga aylantiradi va oxiriga qator o‘tkazish qo‘shadi; argumentsiz `println()` esa shunchaki bo‘sh qator chiqaradi. `print` kursorni o‘sha qatorda qoldiradi, shuning uchun misoldagi `print(\"same line\\n\")` `\\n` belgisi bilan `println` kabi ishlaydi. Kolleksiyalar `[1, 2]` ko‘rinishida chiqadi.",
   "en": "`println(x)` converts the value to a string via `toString()` and appends a line break; `println()` with no arguments just prints an empty line. `print` leaves the cursor on the same line, so `print(\"same line\\n\")` in the example behaves like `println` thanks to the `\\n`. Collections print in the form `[1, 2]`."
  },
  "mistake": {
   "ru": "Забыть, что `print` не переносит строку: несколько вызовов подряд слипнутся в одну строку. Если нужен перенос, используйте `println` или добавьте `\\n`.",
   "uz": "`print` qatorni o‘tkazmasligini unutish: ketma-ket chaqiruvlar bitta qatorga yopishib qoladi. Qator o‘tishi kerak bo‘lsa, `println` ishlating yoki `\\n` qo‘shing.",
   "en": "Forgetting that `print` does not add a line break: several calls in a row glue together on one line. Use `println` or add `\\n` when you need a break."
  },
  "related": [
   "readln",
   "Log",
   "buildString",
   "String"
  ]
 },
 "fn:readln": {
  "more": {
   "ru": "`readln()` читает одну строку из стандартного ввода и возвращает `String` без `null`, поэтому результат можно сразу использовать. Для чисел строку преобразуют вручную: `toInt()`, `toDouble()` и т. д., как в примере. Функция подходит для консольных программ, учебных задач и олимпиадного кода.",
   "uz": "`readln()` standart kiritishdan bitta satrni o‘qiydi va `null` bo‘lmagan `String` qaytaradi, shuning uchun natijani darhol ishlatish mumkin. Sonlar uchun satr qo‘lda aylantiriladi: misoldagidek `toInt()`, `toDouble()` va hokazo. Funksiya konsol dasturlari, o‘quv masalalari va olimpiada kodi uchun mos.",
   "en": "`readln()` reads one line from standard input and returns a non-null `String`, so you can use the result right away. For numbers you convert the string yourself with `toInt()`, `toDouble()` and so on, as in the example. It suits console programs, learning exercises and competitive-programming code."
  },
  "mistake": {
   "ru": "Вызывать `readln().toInt()` без проверки: если пользователь введёт не число, будет `NumberFormatException`. Безопаснее `readln().toIntOrNull()` и обработка `null`.",
   "uz": "`readln().toInt()` ni tekshirmasdan chaqirish: foydalanuvchi son kiritmasa, `NumberFormatException` chiqadi. Xavfsizroq yo‘li — `readln().toIntOrNull()` va `null`ni qayta ishlash.",
   "en": "Calling `readln().toInt()` without checking: if the user types something that is not a number you get a `NumberFormatException`. Safer to use `readln().toIntOrNull()` and handle `null`."
  },
  "related": [
   "println",
   "Int",
   "String",
   "?:"
  ]
 },
 "fn:repeat": {
  "more": {
   "ru": "`repeat` — обычная функция с параметрами `times: Int` и лямбдой `(Int) -> Unit`, а не ключевое слово языка. Она удобна, когда нужен просто счётчик без диапазона и без `for`. Если параметр не нужен, его можно не называть, а чтобы пропустить итерацию, пишут `return@repeat`.",
   "uz": "`repeat` — tilning kalit so‘zi emas, `times: Int` parametri va `(Int) -> Unit` lambdasi bo‘lgan oddiy funksiya. U diapazon va `for`siz oddiy hisoblagich kerak bo‘lganda qulay. Parametr kerak bo‘lmasa, unga nom bermasa ham bo‘ladi, iteratsiyani o‘tkazib yuborish uchun esa `return@repeat` yoziladi.",
   "en": "`repeat` is an ordinary function taking `times: Int` and a lambda `(Int) -> Unit`, not a language keyword. It is handy when you just need a counter without a range or a `for` loop. If you do not need the parameter you can leave it unnamed, and to skip an iteration you write `return@repeat`."
  },
  "mistake": {
   "ru": "Ожидать, что номер повторения начнётся с 1: индекс идёт с 0, поэтому в примере выведутся `hello 0`, `hello 1`, `hello 2`. Если нужна нумерация с 1, используйте `it + 1`.",
   "uz": "Takrorlash raqami 1 dan boshlanadi deb o‘ylash: indeks 0 dan boshlanadi, shuning uchun misolda `hello 0`, `hello 1`, `hello 2` chiqadi. 1 dan boshlab sanash kerak bo‘lsa, `it + 1` ishlating.",
   "en": "Expecting the repetition number to start at 1: the index starts at 0, so the example prints `hello 0`, `hello 1`, `hello 2`. Use `it + 1` if you want numbering from 1."
  },
  "related": [
   "for",
   "lambda",
   "forEach",
   "while"
  ]
 },
 "fn:require": {
  "more": {
   "ru": "Сообщение об ошибке передаётся лямбдой и вычисляется только если проверка провалилась, поэтому строка не собирается впустую. Есть также `requireNotNull` и `checkNotNull`: они проверяют на `null` и заодно сужают тип до не-null. Такие проверки в начале функции документируют её контракт и останавливают программу раньше, чем неверные данные причинят вред.",
   "uz": "Xato xabari lambda orqali beriladi va faqat tekshiruv o‘tmaganda hisoblanadi, shuning uchun satr bekorga yig‘ilmaydi. `requireNotNull` va `checkNotNull` ham bor: ular `null`ni tekshiradi va turni `null` bo‘lmagan turga toraytiradi. Funksiya boshidagi bunday tekshiruvlar uning shartnomasini hujjatlashtiradi va noto‘g‘ri ma’lumotlar zarar yetkazishidan oldin dasturni to‘xtatadi.",
   "en": "The error message is passed as a lambda and is evaluated only if the check fails, so no string is built needlessly. There are also `requireNotNull` and `checkNotNull`, which check for `null` and narrow the type to non-null. Such checks at the start of a function document its contract and stop the program before bad data can do harm."
  },
  "mistake": {
   "ru": "Путать два вызова: `check` для проверки аргументов даёт `IllegalStateException`, хотя виноват вызывающий. Аргументы проверяйте через `require`, а состояние объекта — через `check`.",
   "uz": "Ikki chaqiruvni adashtirish: argumentlarni `check` bilan tekshirsangiz, aybdor chaqiruvchi bo‘lsa ham `IllegalStateException` chiqadi. Argumentlarni `require` bilan, obyekt holatini esa `check` bilan tekshiring.",
   "en": "Mixing the two up: validating arguments with `check` gives an `IllegalStateException` even though the caller is at fault. Validate arguments with `require` and object state with `check`."
  },
  "related": [
   "try",
   "throw",
   "!!",
   "Nothing"
  ]
 },
 "fn:let": {
  "more": {
   "ru": "`let` передаёт объект в лямбду как параметр и возвращает результат лямбды, а не сам объект. Поэтому его удобно использовать для преобразования, как в `name?.let { it.length }`. Если `it` неудобно, параметру можно дать имя: `name?.let { n -> n.length }`; это особенно полезно во вложенных `let`.",
   "uz": "`let` obyektni lambdaga parametr sifatida uzatadi va obyektning o‘zini emas, lambda natijasini qaytaradi. Shuning uchun uni `name?.let { it.length }` kabi aylantirish uchun ishlatish qulay. `it` noqulay bo‘lsa, parametrga nom berish mumkin: `name?.let { n -> n.length }`; bu ayniqsa ichma-ich `let`larda foydali.",
   "en": "`let` passes the object into the lambda as a parameter and returns the lambda's result, not the object itself. That makes it handy for transformations, as in `name?.let { it.length }`. If `it` is unclear you can name the parameter: `name?.let { n -> n.length }`; this helps especially in nested `let` calls."
  },
  "mistake": {
   "ru": "Писать `x?.let { ... } ?: other` как замену `if/else`: если лямбда вернёт `null`, выполнится и ветка `?:`. Когда нужна именно развилка, надёжнее обычный `if`.",
   "uz": "`x?.let { ... } ?: other` ni `if/else` o‘rniga yozish: lambda `null` qaytarsa, `?:` tarmog‘i ham bajariladi. Aniq ikki yo‘l kerak bo‘lsa, oddiy `if` ishonchliroq.",
   "en": "Writing `x?.let { ... } ?: other` as a replacement for `if/else`: if the lambda returns `null`, the `?:` branch runs too. When you really need a fork, a plain `if` is more reliable."
  },
  "related": [
   "?.",
   "?:",
   "apply",
   "run"
  ]
 },
 "fn:apply": {
  "more": {
   "ru": "`apply` — функция-расширение, которая вызывает лямбду с получателем и возвращает сам объект, а не результат лямбды. Благодаря этому его удобно ставить сразу после конструктора, как `Config().apply { ... }` в примере. Это основа стиля «настроил и отдал», например для создания и настройки `Intent` или объектов-билдеров.",
   "uz": "`apply` — kengaytma funksiya: u lambdani qabul qiluvchi bilan chaqiradi va lambda natijasini emas, obyektning o‘zini qaytaradi. Shu sababli uni misoldagi `Config().apply { ... }` kabi to‘g‘ridan-to‘g‘ri konstruktordan keyin qo‘yish qulay. Bu «sozla va ber» uslubining asosi, masalan `Intent` yoki builder obyektlarini yaratish va sozlashda.",
   "en": "`apply` is an extension function that calls the lambda with a receiver and returns the object itself rather than the lambda's result. That is why it fits right after a constructor, like `Config().apply { ... }` in the example. It underlies the configure-and-return style, for instance when creating and setting up an `Intent` or builder objects."
  },
  "mistake": {
   "ru": "Ожидать, что `apply` вернёт последнее выражение блока: он всегда возвращает сам объект. Если нужно значение из блока, используйте `run` или `let`.",
   "uz": "`apply` blokning oxirgi ifodasini qaytaradi deb o‘ylash: u doim obyektning o‘zini qaytaradi. Blokdan qiymat kerak bo‘lsa, `run` yoki `let` ishlating.",
   "en": "Expecting `apply` to return the last expression of the block: it always returns the object itself. If you need a value from the block, use `run` or `let`."
  },
  "related": [
   "also",
   "run",
   "let",
   "class"
  ]
 },
 "fn:also": {
  "more": {
   "ru": "`also` похож на `apply`, но передаёт объект как параметр `it`, а не как `this`. Это подчёркивает, что вы лишь «смотрите» на объект и делаете что-то рядом: печатаете, проверяете, сохраняете. Результат лямбды отбрасывается, а дальше по цепочке идёт исходный объект, как после `also` в примере.",
   "uz": "`also` `apply`ga o‘xshaydi, lekin obyektni `this` emas, `it` parametri sifatida uzatadi. Bu obyektga faqat «qarab» turib, yoniga biror ish qilayotganingizni ko‘rsatadi: chop etish, tekshirish, saqlash. Lambda natijasi tashlab yuboriladi, zanjir bo‘ylab esa asl obyekt davom etadi, misoldagi `also`dan keyin bo‘lgani kabi.",
   "en": "`also` is similar to `apply`, but passes the object as the parameter `it` rather than `this`. This signals that you are only looking at the object and doing something on the side: printing, validating, saving. The lambda's result is discarded and the original object continues down the chain, as after `also` in the example."
  },
  "mistake": {
   "ru": "Пытаться получить значение из `also`: результат лямбды игнорируется, и цепочка продолжается с исходным объектом. Для вычисления нового значения нужен `let` или `run`.",
   "uz": "`also`dan qiymat olishga urinish: lambda natijasi e’tiborga olinmaydi va zanjir asl obyekt bilan davom etadi. Yangi qiymat hisoblash uchun `let` yoki `run` kerak.",
   "en": "Trying to get a value out of `also`: the lambda's result is ignored and the chain continues with the original object. To compute a new value you need `let` or `run`."
  },
  "related": [
   "apply",
   "let",
   "Log",
   "mutableListOf"
  ]
 },
 "fn:run": {
  "more": {
   "ru": "`run` бывает двух видов: как расширение `text.run { ... }` с доступом к объекту через `this` и как обычный блок `run { ... }`, который просто группирует выражения и возвращает последнее. `with(obj) { ... }` делает то же, что расширение `run`, но объект передаётся аргументом, как в примере со `StringBuilder`. Это удобно, когда нужно вычислить значение, обращаясь к членам объекта без префикса.",
   "uz": "`run` ikki xil bo‘ladi: `text.run { ... }` kengaytmasi sifatida (obyektga `this` orqali kiriladi) va oddiy `run { ... }` bloki sifatida, u shunchaki ifodalarni guruhlaydi va oxirgisini qaytaradi. `with(obj) { ... }` kengaytma `run` bilan bir xil ishlaydi, faqat obyekt argument sifatida beriladi, `StringBuilder` misolidagidek. Obyekt a’zolariga prefikssiz murojaat qilib qiymat hisoblash kerak bo‘lganda qulay.",
   "en": "`run` comes in two forms: the extension `text.run { ... }` with access to the object through `this`, and the plain `run { ... }` block that just groups expressions and returns the last one. `with(obj) { ... }` does the same as the extension `run`, but the object is passed as an argument, as in the `StringBuilder` example. It is handy when you compute a value while using the object's members without a prefix."
  },
  "mistake": {
   "ru": "Закончить блок вызовом вроде `println(...)` и удивиться, что результат — `Unit`: `run` возвращает значение последней строки. Поставьте нужное выражение последним.",
   "uz": "Blokni `println(...)` kabi chaqiruv bilan tugatib, natija `Unit` bo‘lganiga hayron bo‘lish: `run` oxirgi qator qiymatini qaytaradi. Kerakli ifodani oxirgi qatorga qo‘ying.",
   "en": "Ending the block with a call like `println(...)` and being surprised that the result is `Unit`: `run` returns the value of its last line. Put the expression you need last."
  },
  "related": [
   "apply",
   "let",
   "also",
   "buildString"
  ]
 },
 "fn:takeIf": {
  "more": {
   "ru": "`takeIf` превращает проверку в выражение: если лямбда вернула `true`, вы получаете сам объект, иначе `null`. У него есть зеркальный вариант `takeUnless`, который возвращает объект при `false`, как видно в примере с возрастом 17. Это позволяет не заводить временную переменную и не писать отдельный `if`.",
   "uz": "`takeIf` tekshiruvni ifodaga aylantiradi: lambda `true` qaytarsa, obyektning o‘zini olasiz, aks holda `null`. Uning teskari varianti `takeUnless` bor: u `false` bo‘lganda obyektni qaytaradi, 17 yoshli misolda ko‘rinib turibdi. Bu vaqtinchalik o‘zgaruvchi kiritmaslik va alohida `if` yozmaslik imkonini beradi.",
   "en": "`takeIf` turns a check into an expression: if the lambda returns `true` you get the object itself, otherwise `null`. Its mirror image `takeUnless` returns the object when the lambda is `false`, as the age 17 example shows. This saves you from introducing a temporary variable or writing a separate `if`."
  },
  "mistake": {
   "ru": "Забыть, что результат стал nullable (`Int?`) и обращаться к нему напрямую: код не скомпилируется. Обрабатывайте результат через `?.`, `?:` или `let`.",
   "uz": "Natija nullable (`Int?`) bo‘lib qolganini unutib, unga to‘g‘ridan-to‘g‘ri murojaat qilish: kod kompilyatsiya bo‘lmaydi. Natijani `?.`, `?:` yoki `let` bilan qayta ishlang.",
   "en": "Forgetting that the result is now nullable (`Int?`) and using it directly: the code will not compile. Handle the result with `?.`, `?:` or `let`."
  },
  "related": [
   "let",
   "?.",
   "?:",
   "Int?"
  ]
 },
 "fn:buildString": {
  "more": {
   "ru": "Внутри блока `this` — это `StringBuilder`, поэтому доступны `append`, `appendLine` и другие его методы, а в конце функция возвращает готовую `String`. `appendLine` добавляет текст и перевод строки; в примере после него `append(\"!\")` попадает уже на новую строку. Удобно собирать сообщения, отчёты и JSON-подобный текст из условий и циклов.",
   "uz": "Blok ichida `this` — `StringBuilder`, shuning uchun `append`, `appendLine` va boshqa metodlari mavjud, oxirida esa funksiya tayyor `String` qaytaradi. `appendLine` matn va qator o‘tkazishni qo‘shadi; misolda undan keyingi `append(\"!\")` yangi qatorga tushadi. Shartlar va sikllardan xabarlar, hisobotlar va JSON’simon matn yig‘ish qulay.",
   "en": "Inside the block `this` is a `StringBuilder`, so `append`, `appendLine` and its other methods are available, and at the end the function returns the finished `String`. `appendLine` adds text and a line break; in the example, the following `append(\"!\")` lands on a new line. It is convenient for assembling messages, reports and JSON-like text from conditions and loops."
  },
  "mistake": {
   "ru": "Склеивать внутри блока строки через `+`, например `append(a + b)`: так создаётся лишняя временная строка. Пишите `append(a).append(b)` или отдельные вызовы `append`.",
   "uz": "Blok ichida satrlarni `+` bilan yopishtirish, masalan `append(a + b)`: bu ortiqcha vaqtinchalik satr yaratadi. `append(a).append(b)` yoki alohida `append` chaqiruvlarini yozing.",
   "en": "Concatenating strings with `+` inside the block, like `append(a + b)`: this creates an extra temporary string. Write `append(a).append(b)` or separate `append` calls instead."
  },
  "related": [
   "String",
   "joinToString",
   "apply",
   "\"$x ${y}\""
  ]
 },
 "fn:lambda": {
  "more": {
   "ru": "Тип лямбды записывается как `(Int) -> Int`, а результатом становится последнее выражение тела, `return` не нужен. Лямбду можно сохранить в переменную, как `add` в примере, передать в функцию или вернуть из неё. Она также может обращаться к переменным из окружающего кода: это называется замыканием.",
   "uz": "Lambda turi `(Int) -> Int` shaklida yoziladi, natija esa tananing oxirgi ifodasi bo‘ladi, `return` kerak emas. Lambdani misoldagi `add` kabi o‘zgaruvchiga saqlash, funksiyaga uzatish yoki funksiyadan qaytarish mumkin. U atrofdagi koddagi o‘zgaruvchilarga ham murojaat qila oladi: bu yopilma (closure) deyiladi.",
   "en": "A lambda's type is written like `(Int) -> Int`, and its result is the last expression of the body, so no `return` is needed. You can store a lambda in a variable, like `add` in the example, pass it to a function or return it from one. It can also use variables from the surrounding code, which is called a closure."
  },
  "mistake": {
   "ru": "Писать обычный `return` внутри лямбды, переданной в `forEach`: он завершит всю внешнюю функцию. Чтобы выйти только из лямбды, используйте метку: `return@forEach`.",
   "uz": "`forEach`ga uzatilgan lambda ichida oddiy `return` yozish: u butun tashqi funksiyani tugatadi. Faqat lambdadan chiqish uchun yorliqdan foydalaning: `return@forEach`.",
   "en": "Writing a plain `return` inside a lambda passed to `forEach`: it ends the whole enclosing function. To leave only the lambda, use a label: `return@forEach`."
  },
  "related": [
   "fun",
   "forEach",
   "map",
   "fun Type.name()"
  ]
 },
 "fn:fun Type.name()": {
  "more": {
   "ru": "Внутри расширения `this` указывает на объект, у которого вызвали функцию, поэтому в примере `this.reversed()` работает со строкой. Расширение определяется статически, по объявленному типу переменной, и полиморфизма не даёт. Если у класса есть член с той же сигнатурой, всегда побеждает член, а не расширение.",
   "uz": "Kengaytma ichida `this` funksiya chaqirilgan obyektga ishora qiladi, shuning uchun misolda `this.reversed()` satr bilan ishlaydi. Kengaytma statik, o‘zgaruvchining e’lon qilingan turi bo‘yicha aniqlanadi va polimorfizm bermaydi. Klassda xuddi shu imzoli a’zo bo‘lsa, doim a’zo yutadi, kengaytma emas.",
   "en": "Inside an extension, `this` points to the object the function was called on, so in the example `this.reversed()` works on the string. An extension is resolved statically, by the declared type of the variable, and gives no polymorphism. If a class has a member with the same signature, the member always wins over the extension."
  },
  "mistake": {
   "ru": "Думать, что расширение может обратиться к `private`-членам класса или переопределить метод: оно видит только публичный API и решается по статическому типу.",
   "uz": "Kengaytma klassning `private` a’zolariga murojaat qila oladi yoki metodni override qiladi deb o‘ylash: u faqat ochiq API’ni ko‘radi va statik tur bo‘yicha aniqlanadi.",
   "en": "Thinking an extension can access a class's `private` members or override a method: it sees only the public API and is resolved by the static type."
  },
  "related": [
   "fun",
   "lambda",
   "class",
   "open"
  ]
 },
 "co:suspend": {
  "more": {
   "ru": "Компилятор превращает `suspend`-функцию в конечный автомат и добавляет скрытый параметр-продолжение, поэтому выполнение может остановиться в точке приостановки и позже продолжиться. В примере `loadUser()` вызывается как обычная функция, и результат сразу присваивается переменной. Ключевое слово лишь разрешает приостановки внутри функции.",
   "uz": "Kompilyator `suspend` funksiyani chekli avtomatga aylantiradi va yashirin davom parametrini qo‘shadi, shuning uchun bajarilish to‘xtash nuqtasida to‘xtab, keyin davom etishi mumkin. Misolda `loadUser()` oddiy funksiya kabi chaqiriladi va natija darhol o‘zgaruvchiga beriladi. Kalit so‘z faqat funksiya ichida to‘xtashlarga ruxsat beradi.",
   "en": "The compiler turns a `suspend` function into a state machine and adds a hidden continuation parameter, so execution can stop at a suspension point and resume later. In the example, `loadUser()` is called like an ordinary function and its result is assigned straight to a variable. The keyword only permits suspension points inside the function."
  },
  "mistake": {
   "ru": "Считать, что `suspend` сам переносит работу в фоновый поток. Он этого не делает: тяжёлую или блокирующую работу нужно явно переносить через `withContext`.",
   "uz": "`suspend` ishni o‘zi fon oqimiga o‘tkazadi deb o‘ylash. U buni qilmaydi: og‘ir yoki bloklovchi ishni `withContext` orqali aniq ko‘chirish kerak.",
   "en": "Assuming `suspend` itself moves work to a background thread. It does not: heavy or blocking work must be moved explicitly with `withContext`."
  },
  "related": [
   "delay",
   "withContext",
   "launch",
   "runBlocking"
  ]
 },
 "co:runBlocking": {
  "more": {
   "ru": "`runBlocking` — мост между обычным кодом и корутинами: он создаёт корутину, а вызывающий поток ждёт её завершения и получает результат. В примере `end` выводится только после окончания блока. Внутри можно запускать дочерние корутины через `launch` и `async`, и функция дождётся и их.",
   "uz": "`runBlocking` — oddiy kod va korutinlar orasidagi ko‘prik: u korutina yaratadi, chaqiruvchi oqim esa uning tugashini kutadi va natijani oladi. Misolda `end` faqat blok tugagandan keyin chiqadi. Ichida `launch` va `async` orqali bolalar korutinlarni ishga tushirish mumkin, funksiya ularni ham kutadi.",
   "en": "`runBlocking` is a bridge between ordinary code and coroutines: it creates a coroutine, and the calling thread waits for it to finish and gets the result. In the example `end` is printed only after the block completes. Inside you can start child coroutines with `launch` and `async`, and the function waits for them too."
  },
  "mistake": {
   "ru": "Вызывать `runBlocking` из `suspend`-функции или обработчика на главном потоке: он занимает поток и может привести к зависанию. Внутри корутин используйте `withContext` или просто вызывайте `suspend`-функции.",
   "uz": "`runBlocking`ni `suspend` funksiyadan yoki asosiy oqimdagi ishlovchidan chaqirish: u oqimni band qiladi va qotib qolishga olib kelishi mumkin. Korutinlar ichida `withContext` ishlating yoki `suspend` funksiyalarni oddiy chaqiring.",
   "en": "Calling `runBlocking` from a `suspend` function or a main-thread handler: it ties up the thread and can cause freezes. Inside coroutines use `withContext` or simply call `suspend` functions."
  },
  "related": [
   "launch",
   "suspend",
   "async",
   "Dispatchers"
  ]
 },
 "co:launch": {
  "more": {
   "ru": "`launch` — построитель корутин, который возвращает `Job` и не даёт результата. Он вызывается на `CoroutineScope`, и такая корутина становится дочерней: её отмена и ошибки связаны с родителем. В примере `joinAll` ждёт обе задачи, а `launched both` выводится сразу, так как `launch` не блокирует вызывающий код.",
   "uz": "`launch` — korutina quruvchisi: u `Job` qaytaradi va natija bermaydi. U `CoroutineScope` ustida chaqiriladi va bunday korutina bola bo‘ladi: uning bekor qilinishi va xatolari ota bilan bog‘langan. Misolda `joinAll` ikkala vazifani kutadi, `launched both` esa darhol chiqadi, chunki `launch` chaqiruvchi kodni bloklamaydi.",
   "en": "`launch` is a coroutine builder that returns a `Job` and produces no result. It is called on a `CoroutineScope`, and the coroutine becomes a child: its cancellation and errors are tied to the parent. In the example `joinAll` waits for both tasks, while `launched both` prints immediately because `launch` does not block the calling code."
  },
  "mistake": {
   "ru": "Пытаться получить значение из `launch`: он возвращает только `Job`. Когда нужен результат, используйте `async` и `await()`.",
   "uz": "`launch`dan qiymat olishga urinish: u faqat `Job` qaytaradi. Natija kerak bo‘lsa, `async` va `await()` ishlating.",
   "en": "Trying to get a value from `launch`: it returns only a `Job`. When you need a result, use `async` and `await()`."
  },
  "related": [
   "async",
   "Job",
   "viewModelScope",
   "runBlocking"
  ]
 },
 "co:async": {
  "more": {
   "ru": "`async` возвращает `Deferred` — разновидность `Job`, хранящую будущий результат. Корутина стартует сразу, а `await()` приостанавливает вызывающего до готовности значения. Это основной способ распараллелить независимые запросы и потом объединить их результаты, как сумма `a` и `b` в примере.",
   "uz": "`async` `Deferred` qaytaradi — bu kelajakdagi natijani saqlaydigan `Job` turi. Korutina darhol boshlanadi, `await()` esa qiymat tayyor bo‘lguncha chaqiruvchini to‘xtatib turadi. Bu mustaqil so‘rovlarni parallel bajarish va natijalarini birlashtirishning asosiy usuli, misoldagi `a` va `b` yig‘indisi kabi.",
   "en": "`async` returns a `Deferred`, a kind of `Job` that holds a future result. The coroutine starts right away, and `await()` suspends the caller until the value is ready. It is the main way to parallelize independent requests and then combine their results, like the sum of `a` and `b` in the example."
  },
  "mistake": {
   "ru": "Писать `async { ... }.await()` сразу в одной строке: запросы пойдут последовательно и выигрыша не будет. Сначала запустите все `async`, и только потом вызывайте `await()`.",
   "uz": "`async { ... }.await()` ni bir qatorda yozish: so‘rovlar ketma-ket bajariladi va foyda bo‘lmaydi. Avval barcha `async`larni ishga tushiring, keyin `await()` chaqiring.",
   "en": "Writing `async { ... }.await()` immediately in one line: the requests then run one after another and nothing is gained. Start all the `async` calls first and only then call `await()`."
  },
  "related": [
   "launch",
   "suspend",
   "withContext",
   "Job"
  ]
 },
 "co:delay": {
  "more": {
   "ru": "`delay` — `suspend`-функция: она приостанавливает только текущую корутину на заданное число миллисекунд, а затем возобновляет её. Поэтому вызывать её можно лишь из корутины или другой `suspend`-функции, как в примере с `repeat`. Это основа для пауз, повторных попыток и периодических задач, и она реагирует на отмену корутины.",
   "uz": "`delay` — `suspend` funksiya: u faqat joriy korutinani berilgan millisekundga to‘xtatadi, so‘ng davom ettiradi. Shuning uchun uni faqat korutindan yoki boshqa `suspend` funksiyadan chaqirish mumkin, `repeat` misolidagidek. U pauzalar, qayta urinishlar va davriy vazifalar uchun asos va korutina bekor qilinishiga javob beradi.",
   "en": "`delay` is a `suspend` function: it pauses only the current coroutine for the given number of milliseconds and then resumes it. That is why you can call it only from a coroutine or another `suspend` function, as in the `repeat` example. It is the basis for pauses, retries and periodic tasks, and it responds to coroutine cancellation."
  },
  "mistake": {
   "ru": "Использовать `Thread.sleep` внутри корутины: он блокирует поток целиком, и другие корутины на нём стоят. В корутинах паузу делают через `delay`.",
   "uz": "Korutina ichida `Thread.sleep` ishlatish: u oqimni butunlay bloklaydi va shu oqimdagi boshqa korutinlar kutib qoladi. Korutinlarda pauza `delay` bilan qilinadi.",
   "en": "Using `Thread.sleep` inside a coroutine: it blocks the whole thread, and other coroutines on it have to wait. In coroutines, pause with `delay`."
  },
  "related": [
   "suspend",
   "runBlocking",
   "launch",
   "repeat"
  ]
 },
 "co:withContext": {
  "more": {
   "ru": "`withContext` — `suspend`-функция: она временно меняет контекст (чаще всего диспетчер), выполняет блок, возвращает его результат и снова переключается назад. В отличие от `launch` и `async`, новой параллельной корутины она не создаёт, а вызывающий код просто ждёт. Поэтому ею удобно оборачивать отдельные тяжёлые участки внутри `suspend`-функций, как `heavy()` в примере.",
   "uz": "`withContext` — `suspend` funksiya: u kontekstni (ko‘pincha dispatcher’ni) vaqtincha o‘zgartiradi, blokni bajaradi, uning natijasini qaytaradi va yana orqaga o‘tadi. `launch` va `async`dan farqli, u yangi parallel korutina yaratmaydi, chaqiruvchi kod esa shunchaki kutadi. Shuning uchun uni `suspend` funksiyalar ichidagi alohida og‘ir qismlarni o‘rash uchun ishlatish qulay, misoldagi `heavy()` kabi.",
   "en": "`withContext` is a `suspend` function: it temporarily changes the context (most often the dispatcher), runs the block, returns its result and switches back. Unlike `launch` and `async`, it does not create a new parallel coroutine, and the calling code simply waits. That makes it handy for wrapping individual heavy sections inside `suspend` functions, like `heavy()` in the example."
  },
  "mistake": {
   "ru": "Выполнять блокирующие сетевые или файловые вызовы в `Dispatchers.Default`: он рассчитан на вычисления. Для блокирующего ввода-вывода берите `Dispatchers.IO`.",
   "uz": "Bloklovchi tarmoq yoki fayl chaqiruvlarini `Dispatchers.Default`da bajarish: u hisob-kitoblar uchun mo‘ljallangan. Bloklovchi kiritish-chiqarish uchun `Dispatchers.IO` oling.",
   "en": "Running blocking network or file calls on `Dispatchers.Default`: it is meant for computation. For blocking I/O use `Dispatchers.IO`."
  },
  "related": [
   "Dispatchers",
   "suspend",
   "launch",
   "viewModelScope"
  ]
 },
 "co:Dispatchers": {
  "more": {
   "ru": "Диспетчер входит в контекст корутины и решает, на каком потоке или пуле она работает. `Default` использует пул потоков, размер которого соответствует числу ядер процессора, а `IO` предназначен для блокирующих вызовов. Диспетчер передают в `launch` или `async`, либо меняют на время блока через `withContext`, как `Dispatchers.IO` в примере.",
   "uz": "Dispatcher korutina kontekstining bir qismi bo‘lib, u qaysi oqim yoki oqimlar to‘plamida ishlashini belgilaydi. `Default` oqimlar to‘plamidan foydalanadi, uning o‘lchami protsessor yadrolari soniga mos, `IO` esa bloklovchi chaqiruvlar uchun mo‘ljallangan. Dispatcher `launch` yoki `async`ga beriladi yoki blok davomida `withContext` orqali almashtiriladi, misoldagi `Dispatchers.IO` kabi.",
   "en": "A dispatcher is part of a coroutine's context and decides which thread or pool it runs on. `Default` uses a thread pool sized to the number of CPU cores, while `IO` is meant for blocking calls. You pass a dispatcher to `launch` or `async`, or switch it for the duration of a block with `withContext`, like `Dispatchers.IO` in the example."
  },
  "mistake": {
   "ru": "Запускать долгие блокирующие операции на `Dispatchers.Main` или занимать `Default` блокирующими вызовами: интерфейс подвисает, а вычисления голодают. Подбирайте диспетчер под тип работы.",
   "uz": "Uzoq bloklovchi amallarni `Dispatchers.Main`da ishga tushirish yoki `Default`ni bloklovchi chaqiruvlar bilan band qilish: interfeys qotadi, hisob-kitoblar esa kutib qoladi. Dispatcher’ni ish turiga qarab tanlang.",
   "en": "Running long blocking operations on `Dispatchers.Main` or tying up `Default` with blocking calls: the UI freezes and computations get starved. Pick the dispatcher to match the kind of work."
  },
  "related": [
   "withContext",
   "launch",
   "viewModelScope",
   "suspend"
  ]
 },
 "co:Job": {
  "more": {
   "ru": "`Job` — это дескриптор корутины, который возвращает `launch`. `cancel()` запрашивает отмену, `join()` приостанавливает вызывающего до завершения, а `isActive`, `isCancelled` и `isCompleted` показывают состояние. Задания образуют иерархию: отмена родителя отменяет всех детей, как в примере, где после `cancel` вывод `working` прекращается.",
   "uz": "`Job` — korutina tutqichi bo‘lib, uni `launch` qaytaradi. `cancel()` bekor qilishni so‘raydi, `join()` tugaguncha chaqiruvchini to‘xtatib turadi, `isActive`, `isCancelled` va `isCompleted` esa holatni ko‘rsatadi. Joblar ierarxiya hosil qiladi: ota bekor qilinsa, barcha bolalar ham bekor bo‘ladi, misolda `cancel`dan keyin `working` chiqishi to‘xtagani kabi.",
   "en": "A `Job` is a handle to a coroutine, returned by `launch`. `cancel()` requests cancellation, `join()` suspends the caller until completion, and `isActive`, `isCancelled` and `isCompleted` show the state. Jobs form a hierarchy: cancelling a parent cancels all its children, as in the example where `working` stops printing after `cancel`."
  },
  "mistake": {
   "ru": "Рассчитывать, что `cancel()` остановит корутину с плотным циклом вычислений без точек приостановки: она не прервётся. Периодически проверяйте `isActive` или вызывайте `ensureActive()`.",
   "uz": "To‘xtash nuqtalari yo‘q zich hisoblash siklidagi korutinani `cancel()` to‘xtatadi deb o‘ylash: u to‘xtamaydi. `isActive`ni vaqti-vaqti bilan tekshiring yoki `ensureActive()` chaqiring.",
   "en": "Expecting `cancel()` to stop a coroutine stuck in a tight computation loop with no suspension points: it will not stop. Check `isActive` periodically or call `ensureActive()`."
  },
  "related": [
   "launch",
   "viewModelScope",
   "delay",
   "async"
  ]
 },
 "co:flow": {
  "more": {
   "ru": "Построитель `flow { ... }` создаёт холодный поток: значения отправляются через `emit`, а сам блок можно приостанавливать, например `delay`. Операторы вроде `map` лишь описывают цепочку обработки, а выполнение начинается в `collect`, который сам является `suspend`-функцией. Так в примере выводятся 1, 4 и 9 с паузами между значениями.",
   "uz": "`flow { ... }` quruvchisi sovuq oqim yaratadi: qiymatlar `emit` orqali yuboriladi, blokning o‘zini esa to‘xtatib turish mumkin, masalan `delay`. `map` kabi operatorlar faqat qayta ishlash zanjirini tasvirlaydi, bajarilish esa o‘zi `suspend` funksiya bo‘lgan `collect`da boshlanadi. Misolda 1, 4 va 9 qiymatlar orasida pauzalar bilan shunday chiqadi.",
   "en": "The `flow { ... }` builder creates a cold stream: values are sent with `emit`, and the block itself may suspend, for example with `delay`. Operators like `map` only describe the processing chain, and execution begins in `collect`, which is itself a `suspend` function. That is how the example prints 1, 4 and 9 with pauses between values."
  },
  "mistake": {
   "ru": "Думать, что несколько вызовов `collect` делят один запуск: у холодного `Flow` каждый сборщик заново выполняет блок. Для общего состояния нужен `StateFlow` или `SharedFlow`.",
   "uz": "Bir necha `collect` chaqiruvi bitta ishga tushirishni bo‘lishadi deb o‘ylash: sovuq `Flow`da har bir yig‘uvchi blokni qaytadan bajaradi. Umumiy holat uchun `StateFlow` yoki `SharedFlow` kerak.",
   "en": "Thinking several `collect` calls share one run: with a cold `Flow` every collector executes the block again. For shared state you need `StateFlow` or `SharedFlow`."
  },
  "related": [
   "StateFlow",
   "suspend",
   "map",
   "collectAsStateWithLifecycle"
  ]
 },
 "co:StateFlow": {
  "more": {
   "ru": "`StateFlow` всегда имеет значение, доступное через `value`, и является горячим потоком: он существует независимо от подписчиков. Он пропускает подряд идущие равные значения, поэтому повторное присваивание того же значения подписчиков не будит. Для безопасного изменения на основе предыдущего значения есть `update { ... }`, как в примере.",
   "uz": "`StateFlow`da doim `value` orqali olinadigan qiymat bor va u issiq oqim: obunachilarga bog‘liq bo‘lmay mavjud bo‘ladi. U ketma-ket kelgan teng qiymatlarni o‘tkazib yuboradi, shuning uchun o‘sha qiymatni qayta berish obunachilarni uyg‘otmaydi. Oldingi qiymat asosida xavfsiz o‘zgartirish uchun misoldagidek `update { ... }` bor.",
   "en": "A `StateFlow` always has a value, available via `value`, and is a hot stream: it exists independently of subscribers. It skips consecutive equal values, so assigning the same value again does not wake subscribers. For safely changing based on the previous value there is `update { ... }`, as in the example."
  },
  "mistake": {
   "ru": "Изменять содержимое изменяемого объекта внутри `StateFlow` на месте: ссылка остаётся прежней, значения считаются равными, и подписчики ничего не получат. Присваивайте новый объект, например через `copy`.",
   "uz": "`StateFlow` ichidagi o‘zgaruvchan obyekt tarkibini joyida o‘zgartirish: havola o‘sha-o‘sha qoladi, qiymatlar teng hisoblanadi va obunachilar hech narsa olmaydi. Yangi obyektni bering, masalan `copy` orqali.",
   "en": "Mutating the contents of a mutable object inside a `StateFlow` in place: the reference stays the same, the values count as equal and subscribers receive nothing. Assign a new object, for example via `copy`."
  },
  "related": [
   "flow",
   "LiveData",
   "ViewModel",
   "collectAsStateWithLifecycle"
  ]
 },
 "kw:val": {
  "more": {
   "ru": "`val` можно инициализировать не сразу, а позже, один раз: `val x: Int` и дальше `x = 5`. Это удобно, когда значение зависит от условия. Тип обычно выводится из правой части, как у `age` в примере, но его можно указать явно: `val age: Int = 20`.",
   "uz": "`val` ni darhol emas, keyinroq bir marta qiymatlash ham mumkin: `val x: Int`, so‘ng `x = 5`. Bu qiymat shartga bog‘liq bo‘lganda qulay. Tur odatda o‘ng tomondan aniqlanadi, misoldagi `age` kabi, lekin uni aniq yozish ham mumkin: `val age: Int = 20`.",
   "en": "A `val` can also be initialized later, exactly once: `val x: Int` followed by `x = 5`. This is handy when the value depends on a condition. The type is usually inferred from the right-hand side, as with `age` in the example, but you can write it explicitly: `val age: Int = 20`."
  },
  "mistake": {
   "ru": "Думать, что `val` делает сам объект неизменяемым. Запрещено лишь переприсваивание ссылки: у `val list = mutableListOf(1)` элементы по-прежнему можно добавлять. Для настоящей неизменяемости берите `listOf` и подобные типы.",
   "uz": "`val` obyektning o‘zini o‘zgarmas qiladi deb o‘ylash. Faqat havolani qayta qiymatlash taqiqlanadi: `val list = mutableListOf(1)` ga elementlar qo‘shish mumkin. Haqiqiy o‘zgarmaslik uchun `listOf` kabi turlarni ishlating.",
   "en": "Assuming `val` makes the object itself immutable. Only reassigning the reference is forbidden: with `val list = mutableListOf(1)` you can still add elements. For real immutability use `listOf` and similar read-only types."
  },
  "related": [
   "var",
   "const",
   "lateinit"
  ]
 },
 "kw:var": {
  "more": {
   "ru": "`var` подходит для счётчиков, накопителей и состояния, которое действительно меняется. В классах `var` создаёт свойство с геттером и сеттером. Операторы `+=` и `++` из примера изменяют значение на месте, а сама переменная остаётся той же.",
   "uz": "`var` hisoblagichlar, jamg‘armalar va haqiqatan o‘zgaradigan holat uchun mos. Klasslarda `var` getter va setter bilan xususiyat yaratadi. Misoldagi `+=` va `++` operatorlari qiymatni joyida o‘zgartiradi, o‘zgaruvchining o‘zi esa o‘sha-o‘sha qoladi.",
   "en": "`var` suits counters, accumulators and state that really changes. In classes, `var` creates a property with a getter and a setter. The `+=` and `++` operators from the example update the value in place while the variable itself stays the same."
  },
  "mistake": {
   "ru": "Присвоить значение другого типа: после `var x = 0` запись `x = 1.5` не скомпилируется, потому что `x` имеет тип `Int`. Если нужен другой тип, объявите его явно, например `var x: Double = 0.0`.",
   "uz": "Boshqa turdagi qiymat berish: `var x = 0` dan keyin `x = 1.5` kompilyatsiya bo‘lmaydi, chunki `x` — `Int`. Boshqa tur kerak bo‘lsa, uni aniq e’lon qiling, masalan `var x: Double = 0.0`.",
   "en": "Assigning a value of another type: after `var x = 0`, the line `x = 1.5` does not compile because `x` is an `Int`. If you need another type, declare it explicitly, for example `var x: Double = 0.0`."
  },
  "related": [
   "val",
   "lateinit",
   "Int"
  ]
 },
 "kw:fun": {
  "more": {
   "ru": "Если функция ничего не возвращает, её тип — `Unit`, и писать его не нужно. Аргументы можно передавать по имени, например `greet(name = \"Anvar\")`, что удобно вместе со значениями по умолчанию. Функции можно объявлять на верхнем уровне файла, как `add` и `square` в примере, без всякого класса.",
   "uz": "Funksiya hech narsa qaytarmasa, uning turi `Unit` bo‘ladi va uni yozish shart emas. Argumentlarni nomi bilan berish mumkin, masalan `greet(name = \"Anvar\")`, bu standart qiymatlar bilan birga qulay. Funksiyalarni faylning yuqori darajasida, misoldagi `add` va `square` kabi, klasssiz e’lon qilish mumkin.",
   "en": "If a function returns nothing, its type is `Unit` and you do not have to write it. Arguments can be passed by name, for example `greet(name = \"Anvar\")`, which works nicely with default values. Functions can be declared at the top level of a file, like `add` and `square` in the example, without any class."
  },
  "mistake": {
   "ru": "Забыть указать тип возвращаемого значения у функции с блочным телом `{ ... }`: без явного типа она считается `Unit`, и `return a + b` не скомпилируется. Тип можно опускать только при форме `= выражение`.",
   "uz": "Blokli tana `{ ... }` li funksiyada qaytariladigan turni yozishni unutish: aniq tur bo‘lmasa, u `Unit` hisoblanadi va `return a + b` kompilyatsiya bo‘lmaydi. Turni faqat `= ifoda` shaklida tushirib qoldirish mumkin.",
   "en": "Forgetting the return type on a function with a block body `{ ... }`: without an explicit type it is treated as `Unit`, and `return a + b` will not compile. The type can be omitted only in the `= expression` form."
  },
  "related": [
   "return",
   "lambda",
   "vararg",
   "fun Type.name()"
  ]
 },
 "kw:if": {
  "more": {
   "ru": "Когда `if` используется как выражение, значением становится последнее выражение выбранного блока. Поэтому можно писать `val status = if (...) \"adult\" else \"minor\"`, как в примере. Условие должно быть строго типа `Boolean`: числа и `null` в условии не допускаются.",
   "uz": "`if` ifoda sifatida ishlatilsa, tanlangan blokning oxirgi ifodasi qiymat bo‘ladi. Shuning uchun misoldagidek `val status = if (...) \"adult\" else \"minor\"` yozish mumkin. Shart qat’iy `Boolean` turida bo‘lishi kerak: shartda son yoki `null` ishlatib bo‘lmaydi.",
   "en": "When `if` is used as an expression, the last expression of the chosen block becomes the value. That is why you can write `val status = if (...) \"adult\" else \"minor\"`, as in the example. The condition must be strictly of type `Boolean`: numbers and `null` are not allowed there."
  },
  "mistake": {
   "ru": "Использовать `if` как выражение без `else`: `val s = if (x > 0) \"plus\"` не скомпилируется, ведь для `x <= 0` значения нет. Если значение нужно, добавляйте ветку `else`.",
   "uz": "`if` ni `else`siz ifoda sifatida ishlatish: `val s = if (x > 0) \"plus\"` kompilyatsiya bo‘lmaydi, chunki `x <= 0` uchun qiymat yo‘q. Qiymat kerak bo‘lsa, `else` shoxchasini qo‘shing.",
   "en": "Using `if` as an expression without `else`: `val s = if (x > 0) \"plus\"` does not compile because there is no value for `x <= 0`. If you need a value, add an `else` branch."
  },
  "related": [
   "else",
   "when",
   "?:"
  ]
 },
 "kw:else": {
  "more": {
   "ru": "`else` относится к ближайшему `if`, а `else if` — это просто `else`, внутри которого стоит новый `if`. В примере проверки идут сверху вниз, и срабатывает первая истинная: для 75 это `B`. Ветка `else` есть также у `when` и означает «все остальные случаи».",
   "uz": "`else` eng yaqin `if` ga tegishli, `else if` esa shunchaki ichida yangi `if` turgan `else`. Misolda tekshiruvlar yuqoridan pastga bajariladi va birinchi rost bo‘lgani ishlaydi: 75 uchun bu `B`. `when` da ham `else` shoxchasi bor va u «qolgan barcha holatlar» ma’nosini beradi.",
   "en": "`else` belongs to the nearest `if`, and `else if` is simply an `else` containing a new `if`. In the example the checks run top to bottom and the first true one wins: for 75 that is `B`. `when` also has an `else` branch, meaning all remaining cases."
  },
  "mistake": {
   "ru": "В `if` без фигурных скобок вложенный `else` относится к ближайшему `if`, а не к тому, что вы имели в виду по отступам. Чтобы не ошибиться, ставьте фигурные скобки у вложенных условий.",
   "uz": "Figurali qavssiz `if` da ichki `else` chekinishdan siz o‘ylagan emas, eng yaqin `if` ga tegishli bo‘ladi. Adashmaslik uchun ichma-ich shartlarda figurali qavs qo‘ying.",
   "en": "In an `if` without braces, a nested `else` attaches to the nearest `if`, not to the one the indentation suggests. To avoid surprises, use braces for nested conditions."
  },
  "related": [
   "if",
   "when"
  ]
 },
 "kw:when": {
  "more": {
   "ru": "В отличие от `switch`, здесь не нужен `break`: выполняется первая подходящая ветка, провала в следующие нет. Несколько значений в одной ветке перечисляют через запятую: `1, 2 -> ...`. Без аргумента `when { ... }` работает как цепочка `if`–`else if` с произвольными условиями.",
   "uz": "`switch` dan farqli, bu yerda `break` kerak emas: birinchi mos shoxcha bajariladi, keyingisiga o‘tib ketish yo‘q. Bir shoxchadagi bir nechta qiymat vergul bilan yoziladi: `1, 2 -> ...`. Argumentsiz `when { ... }` ixtiyoriy shartlar bilan `if`–`else if` zanjiri kabi ishlaydi.",
   "en": "Unlike `switch`, there is no `break`: the first matching branch runs and there is no fall-through. Several values in one branch are separated by commas: `1, 2 -> ...`. Without an argument, `when { ... }` works like an `if`–`else if` chain with arbitrary conditions."
  },
  "mistake": {
   "ru": "Забыть `else`, когда `when` используется как выражение над `Any` или `Int`: компилятор потребует ветку по умолчанию. Исключение — `enum` и `sealed`, где достаточно перечислить все варианты.",
   "uz": "`when` `Any` yoki `Int` ustida ifoda sifatida ishlatilganda `else` ni unutish: kompilyator standart shoxchani talab qiladi. Istisno — `enum` va `sealed`, ularda barcha variantlarni sanab chiqish yetarli.",
   "en": "Forgetting `else` when `when` is used as an expression over `Any` or `Int`: the compiler demands a default branch. The exception is `enum` and `sealed`, where listing every variant is enough."
  },
  "related": [
   "if",
   "is",
   "in",
   "sealed"
  ]
 },
 "kw:for": {
  "more": {
   "ru": "`for` работает с любым объектом, у которого есть итератор: диапазоны, строки, коллекции. Шаг задают через `step`, например `1..10 step 2`, а индексы списка даёт `list.indices`. Деструктуризация `(index, value)` вместе с `withIndex()` избавляет от ручного счётчика, как в примере.",
   "uz": "`for` iteratori bor har qanday obyekt bilan ishlaydi: oraliq, satr, kolleksiya. Qadam `step` bilan beriladi, masalan `1..10 step 2`, ro‘yxat indekslarini esa `list.indices` beradi. Misoldagidek `(index, value)` destrukturizatsiyasi `withIndex()` bilan qo‘lda sanagich yozishdan qutqaradi.",
   "en": "`for` works with any object that has an iterator: ranges, strings, collections. The step is set with `step`, for example `1..10 step 2`, and `list.indices` gives a list's indices. Destructuring `(index, value)` with `withIndex()` removes the need for a manual counter, as in the example."
  },
  "mistake": {
   "ru": "Написать `for (i in 0..list.size)`: диапазон `..` включает правую границу, и на последнем шаге будет `IndexOutOfBoundsException`. Используйте `0 until list.size` или `list.indices`.",
   "uz": "`for (i in 0..list.size)` deb yozish: `..` oralig‘i o‘ng chegarani ham o‘z ichiga oladi va oxirgi qadamda `IndexOutOfBoundsException` chiqadi. `0 until list.size` yoki `list.indices` dan foydalaning.",
   "en": "Writing `for (i in 0..list.size)`: the `..` range includes its upper bound, so the last step throws `IndexOutOfBoundsException`. Use `0 until list.size` or `list.indices`."
  },
  "related": [
   "in",
   "while",
   "..",
   "repeat"
  ]
 },
 "kw:while": {
  "more": {
   "ru": "`while` подходит, когда число повторений заранее неизвестно: чтение до конца данных, ожидание условия. Значение, которое проверяется в условии, должно меняться внутри тела, как `n--` в примере. Бесконечный цикл `while (true)` обычно завершают через `break` или `return`.",
   "uz": "`while` takrorlar soni oldindan noma’lum bo‘lganda mos: ma’lumot tugaguncha o‘qish, shartni kutish. Shartda tekshiriladigan qiymat misoldagi `n--` kabi tana ichida o‘zgarishi kerak. Cheksiz `while (true)` sikli odatda `break` yoki `return` bilan tugatiladi.",
   "en": "`while` fits when the number of repetitions is not known in advance: reading until data ends, waiting for a condition. The value checked in the condition must change inside the body, like `n--` in the example. An infinite `while (true)` loop is usually ended with `break` or `return`."
  },
  "mistake": {
   "ru": "Забыть изменить переменную из условия: без `n--` в примере цикл будет бесконечным. Перед запуском убедитесь, что каждая итерация приближает условие к ложному значению.",
   "uz": "Shartdagi o‘zgaruvchini o‘zgartirishni unutish: misolda `n--` bo‘lmasa, sikl cheksiz ketadi. Ishga tushirishdan oldin har bir iteratsiya shartni yolg‘onga yaqinlashtirishiga ishonch hosil qiling.",
   "en": "Forgetting to change the variable used in the condition: without `n--` in the example the loop would never end. Before running, make sure each iteration moves the condition toward false."
  },
  "related": [
   "do",
   "for",
   "break"
  ]
 },
 "kw:do": {
  "more": {
   "ru": "Цикл `do { ... } while (условие)` сначала выполняет тело, затем проверяет условие. Переменные, объявленные внутри тела, видны и в условии после `while`, чего нет у обычного `while`. Классический пример — запрос ввода, который повторяют, пока ответ неверен.",
   "uz": "`do { ... } while (shart)` sikli avval tanani bajaradi, keyin shartni tekshiradi. Tana ichida e’lon qilingan o‘zgaruvchilar `while` dan keyingi shartda ham ko‘rinadi, oddiy `while` da bunday emas. Klassik misol — javob noto‘g‘ri bo‘lguncha takrorlanadigan ma’lumot so‘rash.",
   "en": "A `do { ... } while (condition)` loop runs the body first and then checks the condition. Variables declared inside the body are visible in the condition after `while`, unlike in a plain `while`. A classic use is asking for input repeatedly until the answer is valid."
  },
  "mistake": {
   "ru": "Ожидать, что при ложном условии тело не выполнится. В `do`–`while` тело всегда отработает хотя бы раз, даже если условие с самого начала ложно. Если нужна предварительная проверка, берите обычный `while`.",
   "uz": "Shart yolg‘on bo‘lsa, tana bajarilmaydi deb kutish. `do`–`while` da tana hech bo‘lmaganda bir marta bajariladi, shart boshidan yolg‘on bo‘lsa ham. Oldindan tekshiruv kerak bo‘lsa, oddiy `while` ishlating.",
   "en": "Expecting the body to be skipped when the condition is false. In `do`–`while` the body always runs at least once, even if the condition is false from the start. If you need a pre-check, use a plain `while`."
  },
  "related": [
   "while",
   "break",
   "continue"
  ]
 },
 "kw:break": {
  "more": {
   "ru": "`break` работает в `for`, `while` и `do`–`while`. Метка ставится перед циклом в виде `имя@`, а выход записывается как `break@имя`. В примере при `i * j == 4` завершаются оба цикла сразу, поэтому после `2*1=2` вывод обрывается.",
   "uz": "`break` `for`, `while` va `do`–`while` da ishlaydi. Yorliq sikldan oldin `nom@` ko‘rinishida qo‘yiladi, chiqish esa `break@nom` deb yoziladi. Misolda `i * j == 4` bo‘lganda ikkala sikl birdaniga tugaydi, shu sababli `2*1=2` dan keyin chiqish to‘xtaydi.",
   "en": "`break` works in `for`, `while` and `do`–`while`. A label is placed before the loop as `name@`, and the exit is written `break@name`. In the example, when `i * j == 4` both loops end at once, which is why output stops after `2*1=2`."
  },
  "mistake": {
   "ru": "Думать, что обычный `break` во вложенном цикле завершает оба цикла. Он выходит только из внутреннего, а внешний продолжает работу. Нужен выход из обоих — используйте метку `break@outer`.",
   "uz": "Ichma-ich siklda oddiy `break` ikkala siklni tugatadi deb o‘ylash. U faqat ichki sikldan chiqadi, tashqisi ishlashda davom etadi. Ikkalasidan chiqish kerak bo‘lsa, `break@outer` yorlig‘idan foydalaning.",
   "en": "Thinking a plain `break` in a nested loop ends both loops. It leaves only the inner one, and the outer loop keeps going. To exit both, use a label such as `break@outer`."
  },
  "related": [
   "continue",
   "for",
   "while",
   "return"
  ]
 },
 "kw:continue": {
  "more": {
   "ru": "`continue` часто заменяет вложенный `if`: вместо обёртывания всей логики в условие вы отсеиваете ненужные случаи в начале тела. Как и `break`, он принимает метку: `continue@outer` переходит к следующей итерации внешнего цикла. В примере чётные числа пропускаются, остаются 1, 3 и 5.",
   "uz": "`continue` ko‘pincha ichma-ich `if` o‘rnini bosadi: butun mantiqni shartga o‘rash o‘rniga keraksiz holatlarni tana boshida o‘tkazib yuborasiz. `break` kabi u ham yorliq qabul qiladi: `continue@outer` tashqi sikl keyingi iteratsiyasiga o‘tadi. Misolda juft sonlar o‘tkazib yuboriladi, 1, 3 va 5 qoladi.",
   "en": "`continue` often replaces a nested `if`: instead of wrapping all the logic in a condition, you filter out unwanted cases at the start of the body. Like `break`, it accepts a label: `continue@outer` jumps to the next iteration of the outer loop. In the example even numbers are skipped, leaving 1, 3 and 5."
  },
  "mistake": {
   "ru": "В цикле `while` поставить `continue` до изменения счётчика: итерация пропустится вместе с инкрементом, и цикл зависнет. Меняйте счётчик до `continue` либо используйте `for`.",
   "uz": "`while` siklida hisoblagichni o‘zgartirishdan oldin `continue` qo‘yish: iteratsiya inkrement bilan birga o‘tkazib yuboriladi va sikl qotib qoladi. Hisoblagichni `continue` dan oldin o‘zgartiring yoki `for` ishlating.",
   "en": "In a `while` loop, putting `continue` before the counter is updated: the iteration is skipped together with the increment and the loop hangs. Update the counter before `continue`, or use `for`."
  },
  "related": [
   "break",
   "for",
   "while"
  ]
 },
 "kw:return": {
  "more": {
   "ru": "`return` без значения допустим в функциях, возвращающих `Unit`. Это выражение имеет тип `Nothing`, поэтому его можно ставить справа от `?:`, например `val x = map[key] ?: return`. Ранний выход (guard) вроде `if (x < 0) return x` в примере делает код плоским и читаемым.",
   "uz": "`return` qiymatsiz `Unit` qaytaradigan funksiyalarda mumkin. Bu ifodaning turi `Nothing`, shuning uchun uni `?:` ning o‘ng tomoniga qo‘yish mumkin, masalan `val x = map[key] ?: return`. Misoldagi `if (x < 0) return x` kabi erta chiqish kodni tekis va o‘qishli qiladi.",
   "en": "A bare `return` is allowed in functions that return `Unit`. This expression has type `Nothing`, so it can go on the right of `?:`, for example `val x = map[key] ?: return`. An early exit like `if (x < 0) return x` in the example keeps code flat and readable."
  },
  "mistake": {
   "ru": "Забыть `return` в одной из веток функции с блочным телом и непустым типом: компилятор выдаст ошибку, что функция должна возвращать значение. Следите, чтобы все пути выполнения что-то возвращали.",
   "uz": "Blokli tanali va bo‘sh bo‘lmagan turli funksiyaning bir shoxchasida `return` ni unutish: kompilyator funksiya qiymat qaytarishi kerakligi haqida xato beradi. Barcha bajarilish yo‘llari nimadir qaytarishiga e’tibor bering.",
   "en": "Forgetting `return` in one branch of a block-body function with a non-Unit type: the compiler reports that the function must return a value. Make sure every execution path returns something."
  },
  "related": [
   "fun",
   "lambda",
   "break"
  ]
 },
 "kw:in": {
  "more": {
   "ru": "За `in` стоит вызов `contains`, поэтому оператор работает с любым типом, у которого есть такой метод, в том числе с вашим собственным. Он применяется и в ветках `when`, например `in 1..9 ->`. Диапазон `1..10` включает обе границы, а `1 until 10` исключает правую.",
   "uz": "`in` ortida `contains` chaqiruvi turadi, shuning uchun operator bunday metodga ega har qanday tur bilan, jumladan o‘zingizning turingiz bilan ham ishlaydi. U `when` shoxchalarida ham qo‘llanadi, masalan `in 1..9 ->`. `1..10` oralig‘i ikkala chegarani ham o‘z ichiga oladi, `1 until 10` esa o‘ng chegarani kiritmaydi.",
   "en": "Behind `in` is a call to `contains`, so the operator works with any type that has such a method, including your own. It is also used in `when` branches, for example `in 1..9 ->`. The range `1..10` includes both ends, while `1 until 10` excludes the upper one."
  },
  "mistake": {
   "ru": "Ожидать, что `10 in 1..10` вернёт `false`, потому что правая граница якобы не входит. Для `..` она входит. Если границу нужно исключить, пишите `1 until 10`.",
   "uz": "`10 in 1..10` `false` qaytaradi deb kutish, go‘yo o‘ng chegara kirmaydi. `..` uchun u kiradi. Chegarani chiqarib tashlash kerak bo‘lsa, `1 until 10` deb yozing.",
   "en": "Expecting `10 in 1..10` to return `false` because the upper bound supposedly does not count. With `..` it does. To exclude the bound, write `1 until 10`."
  },
  "related": [
   "..",
   "for",
   "is",
   "when"
  ]
 },
 "kw:is": {
  "more": {
   "ru": "Smart cast работает внутри ветки `if`, справа от `&&` и в ветках `when (x) { is String -> ... }`. Отрицательная форма — `!is`. Компилятор применяет приведение, только когда уверен, что значение не изменится между проверкой и использованием.",
   "uz": "Smart cast `if` shoxchasi ichida, `&&` ning o‘ng tomonida va `when (x) { is String -> ... }` shoxchalarida ishlaydi. Inkor shakli — `!is`. Kompilyator tur o‘zgartirishni faqat qiymat tekshiruv va ishlatish orasida o‘zgarmasligiga ishonch hosil qilganda qo‘llaydi.",
   "en": "Smart casts work inside an `if` branch, to the right of `&&`, and in `when (x) { is String -> ... }` branches. The negative form is `!is`. The compiler applies the cast only when it is sure the value cannot change between the check and the use."
  },
  "mistake": {
   "ru": "Рассчитывать на smart cast для изменяемого свойства класса (`var`): компилятор не уверен, что значение не изменится, и приведение не сработает. Сохраните значение в локальную `val` и проверяйте её.",
   "uz": "Klassning o‘zgaruvchan xususiyati (`var`) uchun smart cast ishlaydi deb hisoblash: kompilyator qiymat o‘zgarmasligiga ishonmaydi va tur o‘zgartirish ishlamaydi. Qiymatni lokal `val` ga saqlang va uni tekshiring.",
   "en": "Counting on a smart cast for a mutable class property (`var`): the compiler cannot be sure the value stays the same, so the cast does not apply. Copy the value into a local `val` and check that."
  },
  "related": [
   "as",
   "when",
   "Any"
  ]
 },
 "kw:as": {
  "more": {
   "ru": "Результат `as?` имеет nullable-тип, поэтому его удобно сочетать с `?.` и `?:`, например `(x as? String)?.length ?: 0`. Обычный `as` оправдан, когда вы точно знаете тип. Если тип нужно сначала проверить, лучше `is` со smart cast.",
   "uz": "`as?` natijasi nullable tur bo‘ladi, shuning uchun uni `?.` va `?:` bilan birga ishlatish qulay, masalan `(x as? String)?.length ?: 0`. Oddiy `as` turni aniq bilganingizda o‘rinli. Turni avval tekshirish kerak bo‘lsa, smart cast bilan `is` yaxshiroq.",
   "en": "The result of `as?` is a nullable type, so it combines well with `?.` and `?:`, for example `(x as? String)?.length ?: 0`. A plain `as` is justified when you know the type for sure. If you need to check the type first, `is` with a smart cast is better."
  },
  "mistake": {
   "ru": "Использовать `as` для данных, тип которых не гарантирован, например из сети или `Intent`: при несовпадении приложение упадёт с `ClassCastException`. Берите `as?` и обрабатывайте `null`.",
   "uz": "Turi kafolatlanmagan ma’lumotlar uchun, masalan tarmoq yoki `Intent` dan kelganlar uchun, `as` ishlatish: mos kelmasa, ilova `ClassCastException` bilan qulaydi. `as?` ni olib, `null` ni qayta ishlang.",
   "en": "Using `as` on data whose type is not guaranteed, such as data from the network or an `Intent`: on a mismatch the app crashes with `ClassCastException`. Use `as?` and handle `null`."
  },
  "related": [
   "is",
   "?:",
   "Any"
  ]
 },
 "kw:null": {
  "more": {
   "ru": "Для работы с `null` в Kotlin есть операторы: `?.` для безопасного вызова, `?:` для значения по умолчанию и `!!` для принудительного снятия `null`. Как показывает пример, `name?.length` вернёт `null`, если `name` равен `null`, а вызова не будет. Проверка `if (x != null)` тоже включает smart cast к ненулевому типу.",
   "uz": "Kotlin’da `null` bilan ishlash uchun operatorlar bor: xavfsiz chaqiruv uchun `?.`, standart qiymat uchun `?:` va `null` ni majburan olib tashlash uchun `!!`. Misolda ko‘rinib turibdiki, `name` `null` bo‘lsa, `name?.length` `null` qaytaradi va chaqiruv bajarilmaydi. `if (x != null)` tekshiruvi ham nullmas turga smart cast yoqadi.",
   "en": "Kotlin has operators for working with `null`: `?.` for a safe call, `?:` for a default value and `!!` for forcibly removing nullability. As the example shows, `name?.length` yields `null` when `name` is `null`, and no call is made. An `if (x != null)` check also enables a smart cast to the non-null type."
  },
  "mistake": {
   "ru": "Расставлять `!!` везде, чтобы заглушить ошибки компилятора. Если значение окажется `null`, будет брошен `NullPointerException`. Предпочитайте `?.`, `?:` или явную проверку на `null`.",
   "uz": "Kompilyator xatolarini bostirish uchun hamma joyga `!!` qo‘yish. Qiymat `null` bo‘lib chiqsa, `NullPointerException` tashlanadi. `?.`, `?:` yoki `null` ni aniq tekshirishni afzal ko‘ring.",
   "en": "Sprinkling `!!` everywhere to silence compiler errors. If the value turns out to be `null`, a `NullPointerException` is thrown. Prefer `?.`, `?:` or an explicit `null` check."
  },
  "related": [
   "Int?",
   "?.",
   "?:",
   "!!"
  ]
 },
 "kw:class": {
  "more": {
   "ru": "По умолчанию классы в Kotlin закрыты для наследования: чтобы от класса можно было наследоваться, его нужно пометить `open`. Основной конструктор пишется в заголовке, а код инициализации помещают в блок `init`. Экземпляр создаётся вызовом, как `Person(\"Anvar\", 20)` в примере.",
   "uz": "Kotlin’da klasslar sukut bo‘yicha meros olish uchun yopiq: klassdan meros olish mumkin bo‘lishi uchun uni `open` bilan belgilash kerak. Asosiy konstruktor sarlavhada yoziladi, initsializatsiya kodi esa `init` blokiga qo‘yiladi. Nusxa misoldagi `Person(\"Anvar\", 20)` kabi chaqiruv bilan yaratiladi.",
   "en": "By default Kotlin classes are closed for inheritance: to allow inheriting from a class, mark it `open`. The primary constructor goes in the header, and initialization code goes in an `init` block. An instance is created with a call, like `Person(\"Anvar\", 20)` in the example."
  },
  "mistake": {
   "ru": "Думать, что любой параметр основного конструктора становится свойством. Без `val` или `var` это просто параметр, и обратиться к нему как к `p.name` снаружи нельзя. Добавьте `val` или `var`, если свойство нужно.",
   "uz": "Asosiy konstruktorning har qanday parametri xususiyatga aylanadi deb o‘ylash. `val` yoki `var` bo‘lmasa, bu oddiy parametr va unga tashqaridan `p.name` deb murojaat qilib bo‘lmaydi. Xususiyat kerak bo‘lsa, `val` yoki `var` qo‘shing.",
   "en": "Thinking every primary-constructor parameter becomes a property. Without `val` or `var` it is just a parameter, and you cannot access it from outside as `p.name`. Add `val` or `var` if you want a property."
  },
  "related": [
   "data",
   "open",
   "object",
   "constructor"
  ]
 },
 "kw:data": {
  "more": {
   "ru": "Компилятор генерирует `equals`, `hashCode`, `toString`, `copy` и функции `componentN` только по свойствам из основного конструктора. Класс должен иметь хотя бы один параметр, и каждый параметр обязан быть `val` или `var`. Метод `copy` создаёт новый объект, меняя только указанные поля, как `age = 21` в примере.",
   "uz": "Kompilyator `equals`, `hashCode`, `toString`, `copy` va `componentN` funksiyalarini faqat asosiy konstruktordagi xususiyatlar bo‘yicha yaratadi. Klassda kamida bitta parametr bo‘lishi va har bir parametr `val` yoki `var` bo‘lishi shart. `copy` metodi misoldagi `age = 21` kabi faqat ko‘rsatilgan maydonlarni almashtirib, yangi obyekt yaratadi.",
   "en": "The compiler generates `equals`, `hashCode`, `toString`, `copy` and `componentN` functions only from the properties in the primary constructor. The class needs at least one parameter, and every parameter must be `val` or `var`. The `copy` method creates a new object, changing only the given fields, like `age = 21` in the example."
  },
  "mistake": {
   "ru": "Объявить свойство в теле `data`-класса и ждать, что оно попадёт в `equals`, `toString` и `copy`. Туда входят только свойства основного конструктора. Всё, что должно участвовать в сравнении, выносите в конструктор.",
   "uz": "`data` klass tanasida xususiyat e’lon qilib, u `equals`, `toString` va `copy` ga kiradi deb kutish. Ularga faqat asosiy konstruktor xususiyatlari kiradi. Taqqoslashda ishtirok etishi kerak bo‘lgan hamma narsani konstruktorga chiqaring.",
   "en": "Declaring a property in the body of a `data` class and expecting it to take part in `equals`, `toString` and `copy`. Only primary-constructor properties do. Move everything that should count in comparisons into the constructor."
  },
  "related": [
   "class",
   "sealed",
   "Pair",
   "object"
  ]
 },
 "kw:sealed": {
  "more": {
   "ru": "`sealed` класс или интерфейс ограничивает набор наследников: все они должны находиться в одном пакете и модуле. Поэтому компилятор знает полный список вариантов и может проверять `when` на полноту. В отличие от `enum`, у каждого наследника могут быть свои поля и свой тип: например, `Success` несёт данные, а `Loading` — нет.",
   "uz": "`sealed` klass yoki interfeys vorislar to‘plamini cheklaydi: ularning hammasi bitta paket va bitta modulda bo‘lishi kerak. Shuning uchun kompilyator barcha variantlarni biladi va `when` to‘liqligini tekshira oladi. `enum`dan farqi: har bir voris o‘z maydonlari va turiga ega bo‘lishi mumkin, masalan `Success` ma’lumot olib yuradi, `Loading` esa yo‘q.",
   "en": "A `sealed` class or interface restricts the set of subclasses: all of them must live in the same package and module. That is why the compiler knows the full list of variants and can check a `when` for exhaustiveness. Unlike `enum`, each subclass can have its own fields and its own type: for example, `Success` carries data while `Loading` does not."
  },
  "mistake": {
   "ru": "Добавлять ветку `else` в `when` по `sealed`-типу: она скрывает новые варианты, и компилятор не подскажет, где их забыли обработать. Перечисляйте все варианты явно.",
   "uz": "`sealed` tur bo‘yicha `when`ga `else` shoxini qo‘shish: u yangi variantlarni yashiradi va kompilyator ularni qayerda unutganingizni aytmaydi. Barcha variantlarni aniq sanab o‘ting.",
   "en": "Adding an `else` branch to a `when` over a `sealed` type: it hides new variants, and the compiler will not tell you where you forgot to handle them. List all the variants explicitly."
  },
  "related": [
   "enum",
   "when",
   "data",
   "object"
  ]
 },
 "kw:enum": {
  "more": {
   "ru": "`enum class` — это обычный класс с фиксированным набором экземпляров, поэтому у констант могут быть свойства (как `degrees`), методы и даже интерфейсы. `valueOf` ищет константу по имени и при неизвестном имени бросает `IllegalArgumentException`. Enum хорошо работает с `when`: компилятор проверяет, что учтены все значения.",
   "uz": "`enum class` — qat’iy nusxalar to‘plamiga ega oddiy klass, shuning uchun konstantalarda xususiyatlar (masalan `degrees`), metodlar va hatto interfeyslar bo‘lishi mumkin. `valueOf` konstantani nomi bo‘yicha qidiradi, nom noma’lum bo‘lsa `IllegalArgumentException` tashlaydi. Enum `when` bilan yaxshi ishlaydi: kompilyator barcha qiymatlar hisobga olinganini tekshiradi.",
   "en": "`enum class` is an ordinary class with a fixed set of instances, so constants can have properties (like `degrees`), methods and even interfaces. `valueOf` looks a constant up by name and throws `IllegalArgumentException` for an unknown name. Enums work well with `when`: the compiler checks that all values are covered."
  },
  "mistake": {
   "ru": "Использовать `ordinal` как постоянный идентификатор (например, сохранять в базу): при перестановке или добавлении констант числа сместятся. Храните `name` или отдельное явное поле.",
   "uz": "`ordinal`ni doimiy identifikator sifatida ishlatish (masalan, bazaga yozish): konstantalar tartibi o‘zgarsa yoki yangisi qo‘shilsa, raqamlar siljiydi. `name` yoki alohida maydonni saqlang.",
   "en": "Using `ordinal` as a permanent identifier (for example, saving it to a database): if constants are reordered or inserted, the numbers shift. Store the `name` or a separate explicit field instead."
  },
  "related": [
   "sealed",
   "when",
   "class",
   "data"
  ]
 },
 "kw:open": {
  "more": {
   "ru": "`open` нужен на двух уровнях: на классе (чтобы от него наследовали) и на методе (чтобы его переопределяли). Метод с `override` сам остаётся открытым для следующих наследников, пока вы не пометите его `final`. Закрытость по умолчанию защищает базовый класс от случайных поломок. Абстрактные члены и члены интерфейсов открыты автоматически.",
   "uz": "`open` ikki darajada kerak: klassda (undan meros olish uchun) va metodda (uni qayta aniqlash uchun). `override` qilingan metod keyingi vorislar uchun ochiq qoladi, uni `final` deb belgilamaguningizcha. Sukut bo‘yicha yopiqlik asosiy klassni tasodifiy buzilishdan himoya qiladi. Abstrakt a’zolar va interfeys a’zolari esa avtomatik ochiq.",
   "en": "`open` is needed at two levels: on the class (so it can be inherited) and on the method (so it can be overridden). A method marked `override` stays open for further subclasses until you mark it `final`. Being closed by default protects a base class from accidental breakage. Abstract members and interface members are open automatically."
  },
  "mistake": {
   "ru": "Пометить `open` только класс и удивляться, что метод не переопределяется: без `open` на самом методе `override` даст ошибку компиляции. Ставьте `open` на каждый член, который разрешаете менять.",
   "uz": "Faqat klassni `open` qilib, metod qayta aniqlanmasligiga hayron bo‘lish: metodning o‘zida `open` bo‘lmasa, `override` kompilyatsiya xatosini beradi. O‘zgartirishga ruxsat bergan har bir a’zoga `open` qo‘ying.",
   "en": "Marking only the class `open` and wondering why a method cannot be overridden: without `open` on the method itself, `override` gives a compile error. Put `open` on every member you allow to be changed."
  },
  "related": [
   "override",
   "abstract",
   "class",
   "interface"
  ]
 },
 "kw:abstract": {
  "more": {
   "ru": "Абстрактный класс — это частичная заготовка: в нём могут быть и абстрактные члены без реализации, и обычные методы с кодом, и состояние (поля). В примере `describe()` вызывает `area()`, а конкретная реализация приходит из `Square`. Абстрактные члены автоматически `open`, писать это слово не нужно. От интерфейса отличается тем, что хранит состояние, но наследуется только от одного класса.",
   "uz": "Abstrakt klass — qisman tayyorlama: unda amalga oshirilmagan abstrakt a’zolar ham, kodli oddiy metodlar ham, holat (maydonlar) ham bo‘lishi mumkin. Misolda `describe()` `area()`ni chaqiradi, aniq amalga oshirish esa `Square`dan keladi. Abstrakt a’zolar avtomatik `open` bo‘ladi, alohida yozish shart emas. Interfeysdan farqi: holatni saqlaydi, lekin faqat bitta klassdan meros olinadi.",
   "en": "An abstract class is a partial blueprint: it can hold abstract members without implementation, ordinary methods with code, and state (fields). In the example `describe()` calls `area()`, while the concrete implementation comes from `Square`. Abstract members are automatically `open`, so you do not write that word. Unlike an interface, it can hold state, but a class can inherit from only one class."
  },
  "mistake": {
   "ru": "Пытаться создать экземпляр `Shape()` напрямую или забыть реализовать один из абстрактных членов в наследнике: компилятор выдаст ошибку. Реализуйте все члены или сделайте наследника тоже `abstract`.",
   "uz": "`Shape()`ni bevosita yaratishga urinish yoki voris klassda abstrakt a’zolardan birini amalga oshirishni unutish: kompilyator xato beradi. Hamma a’zoni amalga oshiring yoki vorisni ham `abstract` qiling.",
   "en": "Trying to instantiate `Shape()` directly, or forgetting to implement one of the abstract members in a subclass: the compiler reports an error. Implement every member or make the subclass `abstract` too."
  },
  "related": [
   "open",
   "interface",
   "override",
   "class"
  ]
 },
 "kw:interface": {
  "more": {
   "ru": "В интерфейсе можно объявлять и свойства (без хранимого поля), а методы с телом дают реализацию по умолчанию. Если класс реализует два интерфейса с одинаковым методом, его нужно переопределить и явно выбрать реализацию через `super<Имя>`. Интерфейсы не хранят состояние, поэтому их легко комбинировать; в Android ими описывают слушатели и колбэки.",
   "uz": "Interfeysda xususiyatlar ham e’lon qilinadi (saqlovchi maydonsiz), tanasi bor metodlar esa standart amalga oshirishni beradi. Klass bir xil metodli ikkita interfeysni amalga oshirsa, uni qayta aniqlab, `super<Nom>` orqali kerakli variantni aniq tanlash kerak. Interfeyslar holat saqlamaydi, shuning uchun ularni oson birlashtirish mumkin; Android’da ular tinglovchi va callback’larni tasvirlaydi.",
   "en": "An interface can also declare properties (without a backing field), and methods with a body provide a default implementation. If a class implements two interfaces with the same method, it must override it and pick the implementation explicitly via `super<Name>`. Interfaces do not hold state, so they combine easily; in Android they describe listeners and callbacks."
  },
  "mistake": {
   "ru": "Путать наследование класса и реализацию интерфейса: после имени родительского класса ставятся скобки (`Base()`), а после интерфейса — нет. Ошибка со скобками — типичная ошибка новичков.",
   "uz": "Klassdan meros olish bilan interfeysni amalga oshirishni adashtirish: ota klass nomidan keyin qavs qo‘yiladi (`Base()`), interfeysdan keyin esa yo‘q. Qavslardagi xato — yangi boshlovchilarning odatiy xatosi.",
   "en": "Confusing class inheritance with interface implementation: parentheses follow a parent class name (`Base()`) but not an interface name. A mistake with the parentheses is typical for beginners."
  },
  "related": [
   "abstract",
   "override",
   "by",
   "object"
  ]
 },
 "kw:object": {
  "more": {
   "ru": "`object` одновременно создаёт и класс, и его единственный экземпляр. Объект может наследовать классы и реализовывать интерфейсы. Анонимный `object : Interface { ... }` похож на анонимные классы Java и применяется, например, для слушателей. В примере `Logger` хранит своё состояние (`count`) на протяжении всей работы программы.",
   "uz": "`object` bir vaqtda klassni ham, uning yagona nusxasini ham yaratadi. Obyekt klassdan meros olishi va interfeyslarni amalga oshirishi mumkin. Anonim `object : Interface { ... }` Java’dagi anonim klasslarga o‘xshaydi va masalan tinglovchilar uchun ishlatiladi. Misolda `Logger` o‘z holatini (`count`) dastur ishlagan butun vaqt davomida saqlaydi.",
   "en": "`object` creates both a class and its single instance at once. An object can inherit from classes and implement interfaces. An anonymous `object : Interface { ... }` is similar to Java anonymous classes and is used, for example, for listeners. In the example, `Logger` keeps its state (`count`) for the whole run of the program."
  },
  "mistake": {
   "ru": "Хранить в `object` изменяемое состояние, связанное с `Context` или `Activity`: оно живёт весь процесс и приводит к утечкам памяти. Держите там только то, что действительно глобально.",
   "uz": "`object` ichida `Context` yoki `Activity`ga bog‘liq o‘zgaruvchan holatni saqlash: u butun jarayon davomida yashaydi va xotira oqishiga olib keladi. U yerda faqat haqiqatan global narsani saqlang.",
   "en": "Keeping mutable state tied to a `Context` or `Activity` inside an `object`: it lives for the whole process and causes memory leaks. Keep only what is truly global there."
  },
  "related": [
   "companion",
   "class",
   "interface",
   "lateinit"
  ]
 },
 "kw:companion": {
  "more": {
   "ru": "`companion object` — это не статика, а настоящий объект: у него может быть имя, он может реализовывать интерфейсы, а обращаются к нему через имя класса (`User.create`). Приватный конструктор вместе с фабричным методом в companion позволяет контролировать создание объектов, как в примере. Если из Java-кода нужен настоящий статический член, применяют аннотацию `@JvmStatic`.",
   "uz": "`companion object` statik a’zo emas, haqiqiy obyekt: uning nomi bo‘lishi, interfeyslarni amalga oshirishi mumkin va unga klass nomi orqali murojaat qilinadi (`User.create`). Maxfiy konstruktor va companion’dagi fabrika metodi obyektlar yaratilishini nazorat qilish imkonini beradi, misoldagidek. Java kodidan haqiqiy statik a’zo kerak bo‘lsa, `@JvmStatic` annotatsiyasi ishlatiladi.",
   "en": "A `companion object` is not static but a real object: it can have a name, it can implement interfaces, and it is accessed through the class name (`User.create`). A private constructor together with a factory method in the companion lets you control how objects are created, as in the example. If Java code needs a real static member, the `@JvmStatic` annotation is used."
  },
  "mistake": {
   "ru": "Обращаться к членам companion через экземпляр (`user.create(...)`): это не компилируется. Вызывайте через имя класса: `User.create(...)`.",
   "uz": "Companion a’zolariga nusxa orqali murojaat qilish (`user.create(...)`): bu kompilyatsiya bo‘lmaydi. Klass nomi orqali chaqiring: `User.create(...)`.",
   "en": "Accessing companion members through an instance (`user.create(...)`): this does not compile. Call them through the class name: `User.create(...)`."
  },
  "related": [
   "object",
   "const",
   "constructor",
   "private"
  ]
 },
 "kw:override": {
  "more": {
   "ru": "`override` работает и для свойств, и для членов интерфейсов; переопределённый член остаётся открытым, пока его не пометят `final`. Внутри можно вызвать реализацию родителя через `super.имя()`. В примере переопределены `toString`, `equals` и `hashCode` из `Any`: они уже `open`, поэтому писать `open` не нужно.",
   "uz": "`override` xususiyatlar va interfeys a’zolari uchun ham ishlaydi; qayta aniqlangan a’zo `final` deb belgilanmaguncha ochiq qoladi. Ichkarida ota klass amalga oshirishini `super.nom()` orqali chaqirish mumkin. Misolda `Any`dagi `toString`, `equals` va `hashCode` qayta aniqlangan: ular allaqachon `open`, shuning uchun `open` yozish shart emas.",
   "en": "`override` works for properties and interface members too; an overridden member stays open until it is marked `final`. Inside, you can call the parent implementation through `super.name()`. In the example, `toString`, `equals` and `hashCode` from `Any` are overridden: they are already `open`, so you do not write `open`."
  },
  "mistake": {
   "ru": "Написать `equals(other: Point)` вместо `equals(other: Any?)`: с `override` это ошибка компиляции, ведь сигнатура должна совпадать с родительской. Копируйте параметры точно.",
   "uz": "`equals(other: Any?)` o‘rniga `equals(other: Point)` yozish: `override` bilan bu kompilyatsiya xatosi, chunki imzo ota metodnikiga mos bo‘lishi shart. Parametrlarni aynan nusxalang.",
   "en": "Writing `equals(other: Point)` instead of `equals(other: Any?)`: with `override` this is a compile error, because the signature must match the parent one. Copy the parameters exactly."
  },
  "related": [
   "open",
   "abstract",
   "data",
   "interface"
  ]
 },
 "kw:init": {
  "more": {
   "ru": "У основного конструктора нет тела, поэтому логику инициализации помещают в `init`. В нём доступны параметры основного конструктора (как `initial`), даже если они не объявлены через `val` или `var`. Порядок важен: свойство, объявленное ниже блока `init`, на момент его выполнения ещё не инициализировано.",
   "uz": "Asosiy konstruktorda tana bo‘lmaydi, shuning uchun initsializatsiya mantiqi `init`ga qo‘yiladi. Unda asosiy konstruktor parametrlari (misoldagi `initial`) `val` yoki `var` bilan e’lon qilinmagan bo‘lsa ham mavjud. Tartib muhim: `init` blokidan pastda e’lon qilingan xususiyat uning bajarilish paytida hali initsializatsiya qilinmagan bo‘ladi.",
   "en": "The primary constructor has no body, so initialization logic goes into `init`. It can use the primary constructor parameters (like `initial`) even if they are not declared with `val` or `var`. Order matters: a property declared below an `init` block is not yet initialized when that block runs."
  },
  "mistake": {
   "ru": "Обращаться в `init` к свойству, объявленному ниже: оно ещё не инициализировано, и вы получите ошибку компиляции или неожиданное значение. Размещайте `init` после нужных свойств.",
   "uz": "`init`da pastroqda e’lon qilingan xususiyatga murojaat qilish: u hali initsializatsiya qilinmagan, kompilyatsiya xatosi yoki kutilmagan qiymat olasiz. `init` blokini kerakli xususiyatlardan keyin joylashtiring.",
   "en": "Accessing a property declared further below from `init`: it is not yet initialized, so you get a compile error or an unexpected value. Place `init` after the properties it needs."
  },
  "related": [
   "constructor",
   "class",
   "require",
   "lateinit"
  ]
 },
 "kw:constructor": {
  "more": {
   "ru": "У класса может быть один основной конструктор (в заголовке) и любое число вторичных. Если основной есть, каждый вторичный обязан делегировать ему через `this(...)`, напрямую или через другой вторичный. У основного конструктора слово `constructor` нужно только при модификаторе видимости или аннотации, например `class User private constructor(...)`.",
   "uz": "Klassda bitta asosiy konstruktor (sarlavhada) va istalgancha ikkilamchi konstruktor bo‘lishi mumkin. Asosiy konstruktor bo‘lsa, har bir ikkilamchi unga `this(...)` orqali, bevosita yoki boshqa ikkilamchi orqali, murojaat qilishi shart. Asosiy konstruktorda `constructor` so‘zi faqat ko‘rinish modifikatori yoki annotatsiya bo‘lganda kerak, masalan `class User private constructor(...)`.",
   "en": "A class can have one primary constructor (in the header) and any number of secondary ones. If a primary constructor exists, every secondary one must delegate to it via `this(...)`, directly or through another secondary constructor. For the primary constructor, the word `constructor` is needed only with a visibility modifier or an annotation, e.g. `class User private constructor(...)`."
  },
  "mistake": {
   "ru": "Писать несколько вторичных конструкторов вместо значений по умолчанию, например `class Person(val name: String, val age: Int = 0)`: так кода меньше. Для совместимости с Java есть `@JvmOverloads`.",
   "uz": "Standart qiymatlar o‘rniga bir nechta ikkilamchi konstruktor yozish, masalan `class Person(val name: String, val age: Int = 0)`: kod kamroq bo‘ladi. Java bilan moslik uchun `@JvmOverloads` bor.",
   "en": "Writing several secondary constructors instead of default values, e.g. `class Person(val name: String, val age: Int = 0)`: that is less code. For Java compatibility there is `@JvmOverloads`."
  },
  "related": [
   "init",
   "class",
   "companion",
   "data"
  ]
 },
 "kw:by": {
  "more": {
   "ru": "`by` встречается в двух формах. Делегирование класса (`class Report(...) : Printer by printer`) заставляет компилятор самому сгенерировать методы интерфейса, перенаправляя вызовы объекту. Делегирование свойства (`by lazy`, `by viewModels()`) передаёт чтение и запись свойства объекту-делегату с функциями `getValue`/`setValue`. По тому же принципу работает `by remember` в Compose.",
   "uz": "`by` ikki shaklda uchraydi. Klass delegatsiyasi (`class Report(...) : Printer by printer`) kompilyatorga interfeys metodlarini o‘zi yaratib, chaqiruvlarni obyektga yo‘naltirishni buyuradi. Xususiyat delegatsiyasi (`by lazy`, `by viewModels()`) xususiyatni o‘qish va yozishni `getValue`/`setValue` funksiyalari bor delegat obyektga topshiradi. Compose’dagi `by remember` ham shu tamoyilda ishlaydi.",
   "en": "`by` appears in two forms. Class delegation (`class Report(...) : Printer by printer`) makes the compiler generate the interface methods itself, forwarding calls to the object. Property delegation (`by lazy`, `by viewModels()`) hands reading and writing of the property to a delegate object with `getValue`/`setValue` functions. `by remember` in Compose works on the same principle."
  },
  "mistake": {
   "ru": "Ожидать, что `by lazy` пересчитает значение при следующем обращении: блок выполняется один раз, результат запоминается. Для меняющихся данных используйте обычное свойство или геттер.",
   "uz": "`by lazy` keyingi murojaatda qiymatni qayta hisoblaydi deb o‘ylash: blok bir marta bajariladi, natija eslab qolinadi. O‘zgaruvchan ma’lumot uchun oddiy xususiyat yoki getter ishlating.",
   "en": "Expecting `by lazy` to recompute the value on the next access: the block runs once and the result is remembered. For changing data use a regular property or a getter."
  },
  "related": [
   "lateinit",
   "val",
   "interface",
   "ViewModel"
  ]
 },
 "kw:lateinit": {
  "more": {
   "ru": "`lateinit` избавляет от необходимости делать свойство nullable и проверять его на `null` при каждом обращении, если вы гарантируете инициализацию до первого использования (например, в `onCreate`). Состояние можно проверить через `::title.isInitialized`, как в примере; такая проверка доступна только для свойств, видимых из текущего места кода. С примитивами (`Int`, `Boolean`) не работает.",
   "uz": "`lateinit` xususiyatni nullable qilish va har safar `null`ga tekshirish zaruratini olib tashlaydi, agar uni birinchi ishlatishdan oldin initsializatsiya qilishga kafolat bersangiz (masalan, `onCreate`da). Holatni `::title.isInitialized` bilan tekshirish mumkin, misoldagidek; bu tekshiruv faqat koddagi joydan ko‘rinadigan xususiyatlar uchun ishlaydi. `Int`, `Boolean` kabi primitivlar bilan ishlamaydi.",
   "en": "`lateinit` removes the need to make a property nullable and check it for `null` on every access, provided you guarantee initialization before first use (for example in `onCreate`). You can check the state via `::title.isInitialized`, as in the example; this check is available only for properties visible from the current place in the code. It does not work with primitives (`Int`, `Boolean`)."
  },
  "mistake": {
   "ru": "Применять `lateinit` к `val` или к `Int`: это ошибка компиляции. Для примитива берите значение по умолчанию, для неизменяемого значения — `by lazy`.",
   "uz": "`lateinit`ni `val` yoki `Int`ga qo‘llash: bu kompilyatsiya xatosi. Primitiv uchun standart qiymat, o‘zgarmas qiymat uchun `by lazy` ishlating.",
   "en": "Applying `lateinit` to a `val` or to an `Int`: this is a compile error. For a primitive use a default value, and for an immutable value use `by lazy`."
  },
  "related": [
   "by",
   "var",
   "null",
   "Int?"
  ]
 },
 "kw:const": {
  "more": {
   "ru": "Значение `const val` компилятор подставляет прямо в место использования, поэтому оно должно быть известно на этапе компиляции: литерал или выражение из других констант. Обычный `val` может вычисляться при запуске, например `val now = System.currentTimeMillis()`. `const` нельзя применить к локальной переменной, зато его можно использовать в аргументах аннотаций.",
   "uz": "`const val` qiymatini kompilyator ishlatilgan joyga to‘g‘ridan-to‘g‘ri qo‘yadi, shuning uchun u kompilyatsiya bosqichida ma’lum bo‘lishi kerak: literal yoki boshqa konstantalardan ifoda. Oddiy `val` dastur ishga tushganda hisoblanishi mumkin, masalan `val now = System.currentTimeMillis()`. `const`ni lokal o‘zgaruvchiga qo‘llab bo‘lmaydi, lekin uni annotatsiya argumentlarida ishlatish mumkin.",
   "en": "The compiler substitutes the value of a `const val` right where it is used, so it must be known at compile time: a literal or an expression made of other constants. A regular `val` can be computed at startup, e.g. `val now = System.currentTimeMillis()`. `const` cannot be applied to a local variable, but it can be used in annotation arguments."
  },
  "mistake": {
   "ru": "Пытаться пометить `const` объект или вычисляемое значение, например `const val list = listOf(1)`: компилятор откажет. Используйте обычный `val`.",
   "uz": "`const`ni obyektga yoki hisoblanuvchi qiymatga qo‘yishga urinish, masalan `const val list = listOf(1)`: kompilyator rad etadi. Oddiy `val` ishlating.",
   "en": "Trying to mark an object or a computed value as `const`, e.g. `const val list = listOf(1)`: the compiler refuses. Use a regular `val`."
  },
  "related": [
   "val",
   "object",
   "companion",
   "String"
  ]
 },
 "kw:vararg": {
  "more": {
   "ru": "`vararg` позволяет вызывать функцию с любым числом аргументов, например `sum(1, 2, 3)`; внутри параметр имеет тип `Array<out T>` (для `Int` — `IntArray`). В функции может быть только один `vararg`-параметр. По этому принципу объявлена, например, `listOf(...)`.",
   "uz": "`vararg` funksiyani istalgan sondagi argument bilan chaqirishga imkon beradi, masalan `sum(1, 2, 3)`; ichkarida parametr `Array<out T>` turiga ega (`Int` uchun `IntArray`). Funksiyada faqat bitta `vararg` parametri bo‘lishi mumkin. Masalan, `listOf(...)` ham shunday e’lon qilingan.",
   "en": "`vararg` lets you call a function with any number of arguments, e.g. `sum(1, 2, 3)`; inside, the parameter has type `Array<out T>` (`IntArray` for `Int`). A function can have only one `vararg` parameter. `listOf(...)`, for example, is declared this way."
  },
  "mistake": {
   "ru": "Передавать массив без `*`: `sum(arr)` не скомпилируется, потому что ожидаются отдельные числа. Добавьте spread-оператор: `sum(*arr)`.",
   "uz": "Massivni `*`siz uzatish: `sum(arr)` kompilyatsiya bo‘lmaydi, chunki alohida sonlar kutiladi. Spread operatorini qo‘shing: `sum(*arr)`.",
   "en": "Passing an array without `*`: `sum(arr)` will not compile because individual numbers are expected. Add the spread operator: `sum(*arr)`."
  },
  "related": [
   "Array",
   "listOf",
   "fun",
   "Int"
  ]
 },
 "kw:typealias": {
  "more": {
   "ru": "`typealias` — чисто компиляторный синоним: на деле код работает с исходным типом, и оба имени взаимозаменяемы. Например, `Handler` можно подставить везде, где ждут `(String) -> Unit`. Псевдоним может быть обобщённым (generic) и объявляется только на верхнем уровне файла.",
   "uz": "`typealias` faqat kompilyator darajasidagi sinonim: aslida kod asl tur bilan ishlaydi, ikkala nom bir-birini almashtiradi. Masalan, `Handler`ni `(String) -> Unit` kutilgan har joyga qo‘yish mumkin. Taxallus generic bo‘lishi mumkin va faqat fayl yuqori darajasida e’lon qilinadi.",
   "en": "`typealias` is purely a compiler-level synonym: in practice the code works with the original type, and both names are interchangeable. For example, `Handler` can be used anywhere `(String) -> Unit` is expected. An alias can be generic and is declared only at the top level of a file."
  },
  "mistake": {
   "ru": "Считать псевдоним новым типом: `typealias UserId = Int` не защитит от подстановки любого `Int`. Для настоящей типобезопасности нужен `value class` или обычный класс.",
   "uz": "Taxallusni yangi tur deb hisoblash: `typealias UserId = Int` istalgan `Int` qo‘yilishidan himoya qilmaydi. Haqiqiy tur xavfsizligi uchun `value class` yoki oddiy klass kerak.",
   "en": "Treating an alias as a new type: `typealias UserId = Int` will not stop any `Int` from being passed in. For real type safety you need a `value class` or a regular class."
  },
  "related": [
   "lambda",
   "mapOf",
   "class",
   "Pair"
  ]
 },
 "kw:try": {
  "more": {
   "ru": "Блок `finally` выполняется всегда — и при успехе, и при исключении. Значение выражения `try` — последнее выражение блока `try` или сработавшей ветки `catch`. Ветки `catch` проверяются сверху вниз, поэтому более частные типы исключений ставят раньше общих. Для освобождения ресурсов есть функция `use`.",
   "uz": "`finally` bloki doim bajariladi: muvaffaqiyat bo‘lsa ham, istisno bo‘lsa ham. `try` ifodasining qiymati — `try` bloki yoki ishga tushgan `catch` shoxining oxirgi ifodasi. `catch` shoxlari yuqoridan pastga tekshiriladi, shuning uchun aniqroq istisno turlarini umumiyroqlaridan oldin qo‘ying. Resurslarni bo‘shatish uchun `use` funksiyasi bor.",
   "en": "The `finally` block always runs, both on success and on an exception. The value of a `try` expression is the last expression of the `try` block or of the `catch` branch that ran. `catch` branches are checked from top to bottom, so more specific exception types go before general ones. For releasing resources there is the `use` function."
  },
  "mistake": {
   "ru": "Ловить слишком общий `Exception` (или `Throwable`) на всякий случай: так прячутся настоящие ошибки, а в корутинах можно перехватить и `CancellationException`, сломав отмену. Ловите конкретные типы.",
   "uz": "Har ehtimolga qarshi juda umumiy `Exception` (yoki `Throwable`)ni ushlash: haqiqiy xatolar yashirinadi, korutinlarda esa `CancellationException`ni ham ushlab, bekor qilishni buzish mumkin. Aniq turlarni ushlang.",
   "en": "Catching an overly general `Exception` (or `Throwable`) just in case: it hides real errors, and in coroutines you may also swallow `CancellationException` and break cancellation. Catch specific types."
  },
  "related": [
   "throw",
   "require",
   "Nothing",
   "runBlocking"
  ]
 },
 "kw:throw": {
  "more": {
   "ru": "`throw` — тоже выражение, его тип `Nothing`, поэтому его удобно ставить справа от `?:`, например `val x = map[k] ?: throw IllegalStateException(...)`. Бросать можно любой подтип `Throwable`. Исключение прерывает выполнение и поднимается вверх по стеку вызовов, пока не найдётся подходящий `catch`.",
   "uz": "`throw` ham ifoda, uning turi `Nothing`, shuning uchun uni `?:` o‘ng tomoniga qo‘yish qulay, masalan `val x = map[k] ?: throw IllegalStateException(...)`. Har qanday `Throwable` turini tashlash mumkin. Istisno bajarilishni to‘xtatadi va mos `catch` topilguncha chaqiruvlar steki bo‘ylab yuqoriga ko‘tariladi.",
   "en": "`throw` is also an expression, its type is `Nothing`, so it is handy on the right side of `?:`, e.g. `val x = map[k] ?: throw IllegalStateException(...)`. You can throw any subtype of `Throwable`. The exception interrupts execution and travels up the call stack until a matching `catch` is found."
  },
  "mistake": {
   "ru": "Бросать общий `Exception(...)`: вызывающему трудно понять причину. Используйте конкретные типы, например `IllegalArgumentException` или `IllegalStateException`, либо собственный класс исключения.",
   "uz": "Umumiy `Exception(...)` tashlash: chaqiruvchiga sababni ajratish qiyin. `IllegalArgumentException` yoki `IllegalStateException` kabi aniq turlarni yoki o‘z istisno klassingizni ishlating.",
   "en": "Throwing a generic `Exception(...)`: it is hard for the caller to tell the cause. Use specific types such as `IllegalArgumentException` or `IllegalStateException`, or your own exception class."
  },
  "related": [
   "try",
   "Nothing",
   "require",
   "?:"
  ]
 },
 "kw:private": {
  "more": {
   "ru": "В Kotlin четыре модификатора видимости: `private` (внутри класса или файла), `protected` (класс и наследники), `internal` (модуль) и `public`. Объявление верхнего уровня с `private` видно только внутри своего файла. `protected` для верхнего уровня недоступен.",
   "uz": "Kotlin’da to‘rtta ko‘rinish modifikatori bor: `private` (klass yoki fayl ichida), `protected` (klass va vorislar), `internal` (modul) va `public`. Yuqori darajadagi `private` e’lon faqat o‘z faylida ko‘rinadi. `protected` yuqori daraja uchun mavjud emas.",
   "en": "Kotlin has four visibility modifiers: `private` (inside a class or file), `protected` (the class and its subclasses), `internal` (the module) and `public`. A top-level declaration marked `private` is visible only inside its own file. `protected` is not available at top level."
  },
  "mistake": {
   "ru": "Оставлять всё `public` по умолчанию: детали реализации утекают наружу, и потом их трудно менять. Сначала делайте члены `private` и открывайте только то, что нужно другим.",
   "uz": "Hamma narsani sukut bo‘yicha `public` qoldirish: amalga oshirish tafsilotlari tashqariga chiqib ketadi va keyin ularni o‘zgartirish qiyin. Avval a’zolarni `private` qiling, faqat boshqalarga kerakini oching.",
   "en": "Leaving everything `public` by default: implementation details leak out and become hard to change later. Make members `private` first and expose only what others need."
  },
  "related": [
   "class",
   "companion",
   "override",
   "val"
  ]
 },
 "ty:Int": {
  "more": {
   "ru": "`Int` занимает 32 бита и хранит значения примерно от -2,1 до 2,1 млрд; границы доступны как `Int.MIN_VALUE` и `Int.MAX_VALUE`. Неявного расширения в Kotlin нет: `Int` нельзя просто присвоить переменной типа `Long` или `Double`, нужно вызвать `toLong()` или `toDouble()`, как `a.toDouble() / 2` в примере. Остаток от деления даёт оператор `%`.",
   "uz": "`Int` 32 bit joy egallaydi va taxminan -2,1 dan 2,1 mlrdgacha qiymat saqlaydi; chegaralari `Int.MIN_VALUE` va `Int.MAX_VALUE` orqali olinadi. Kotlin’da yashirin kengaytirish yo‘q: `Int`ni `Long` yoki `Double` turidagi o‘zgaruvchiga shunchaki berib bo‘lmaydi, misoldagi `a.toDouble() / 2` kabi `toLong()` yoki `toDouble()` chaqirish kerak. Bo‘lish qoldig‘ini `%` operatori beradi.",
   "en": "`Int` takes 32 bits and holds values from about -2.1 to 2.1 billion; the bounds are available as `Int.MIN_VALUE` and `Int.MAX_VALUE`. Kotlin has no implicit widening: you cannot simply assign an `Int` to a `Long` or `Double` variable, you must call `toLong()` or `toDouble()`, as in `a.toDouble() / 2` in the example. The remainder of a division comes from the `%` operator."
  },
  "mistake": {
   "ru": "Вычисление процента как `done / total * 100` с двумя `Int` даёт 0, потому что деление целочисленное. Переведите одно из чисел в `Double` до деления: `done * 100.0 / total`.",
   "uz": "Foizni ikkita `Int` bilan `done / total * 100` deb hisoblasangiz, natija 0 bo‘ladi, chunki bo‘lish butun sonli. Bo‘lishdan oldin sonlardan birini `Double`ga o‘giring: `done * 100.0 / total`.",
   "en": "Computing a percentage as `done / total * 100` with two `Int` values gives 0, because the division is integer division. Convert one operand to `Double` before dividing: `done * 100.0 / total`."
  },
  "related": [
   "Long",
   "Double",
   "Int?"
  ]
 },
 "ty:Long": {
  "more": {
   "ru": "`Long` хранит значения примерно до 9,2 квинтиллиона (`Long.MAX_VALUE`). Суффикс `L` обязателен только в записи литерала, но смешивать типы без преобразования нельзя: `Int` в `Long` переводит `toLong()`. `Long` стандартно используют для меток времени в миллисекундах, размеров файлов и идентификаторов из базы данных.",
   "uz": "`Long` taxminan 9,2 kvintillionggacha qiymat saqlaydi (`Long.MAX_VALUE`). `L` qo‘shimchasi faqat literal yozuvida kerak, ammo turlarni o‘zgartirmasdan aralashtirib bo‘lmaydi: `Int`ni `Long`ga `toLong()` o‘giradi. `Long` odatda millisekundlardagi vaqt tamg‘alari, fayl hajmlari va ma’lumotlar bazasi identifikatorlari uchun ishlatiladi.",
   "en": "`Long` holds values up to about 9.2 quintillion (`Long.MAX_VALUE`). The `L` suffix is only needed when writing a literal, but you cannot mix types without conversion: `toLong()` turns an `Int` into a `Long`. `Long` is the usual choice for millisecond timestamps, file sizes and database identifiers."
  },
  "mistake": {
   "ru": "Запись `val x: Long = 1_000_000 * 1_000_000` всё равно переполняется, потому что умножение выполняется в `Int` до присваивания. Поставьте `L` хотя бы у одного множителя, как в последней строке примера.",
   "uz": "`val x: Long = 1_000_000 * 1_000_000` yozuvi baribir to‘lib ketadi, chunki ko‘paytirish tayinlashdan oldin `Int`da bajariladi. Misoldagi oxirgi qatordagidek, hech bo‘lmaganda bitta ko‘paytuvchiga `L` qo‘ying.",
   "en": "Writing `val x: Long = 1_000_000 * 1_000_000` still overflows, because the multiplication happens in `Int` before the assignment. Put `L` on at least one operand, as in the last line of the example."
  },
  "related": [
   "Int",
   "Double",
   "const"
  ]
 },
 "ty:Double": {
  "more": {
   "ru": "`Double` следует стандарту IEEE 754: у него есть специальные значения `NaN` и бесконечность, а деление `1.0 / 0` даёт бесконечность, а не исключение. Литерал с точкой вроде `3.14` по умолчанию `Double`; для 32-битного `Float` нужен суффикс `f`. Для вывода с нужным числом знаков удобен `\"%.2f\".format(x)`.",
   "uz": "`Double` IEEE 754 standartiga amal qiladi: unda `NaN` va cheksizlik kabi maxsus qiymatlar bor, `1.0 / 0` esa istisno emas, cheksizlik beradi. `3.14` kabi nuqtali literal standart bo‘yicha `Double`; 32 bitli `Float` uchun `f` qo‘shimchasi kerak. Kerakli xonagacha chiqarish uchun `\"%.2f\".format(x)` qulay.",
   "en": "`Double` follows the IEEE 754 standard: it has special values `NaN` and infinity, and `1.0 / 0` gives infinity rather than an exception. A literal with a dot such as `3.14` is a `Double` by default; the 32-bit `Float` needs the `f` suffix. To print a chosen number of decimals, `\"%.2f\".format(x)` is handy."
  },
  "mistake": {
   "ru": "Сравнивать результаты вычислений через `==`, например `0.1 + 0.2 == 0.3`, нельзя: получится `false`. Сравнивайте по допуску: `abs(a - b) < 1e-9`.",
   "uz": "Hisoblash natijalarini `==` bilan, masalan `0.1 + 0.2 == 0.3` deb solishtirib bo‘lmaydi: natija `false` bo‘ladi. Ruxsat etilgan xato bilan solishtiring: `abs(a - b) < 1e-9`.",
   "en": "Do not compare computed results with `==`, for example `0.1 + 0.2 == 0.3`: it gives `false`. Compare with a tolerance instead: `abs(a - b) < 1e-9`."
  },
  "related": [
   "Int",
   "Long",
   "String"
  ]
 },
 "ty:Boolean": {
  "more": {
   "ru": "`Boolean` принимает только `true` или `false`: числа, строки и `null` в условии не работают, как в некоторых других языках, поэтому `if (1)` не скомпилируется. Есть также инфиксные функции `and`, `or` и `xor`, которые вычисляют обе стороны без ленивости. Результат сравнений вроде `5 > 3` тоже `Boolean`, его можно хранить в переменной.",
   "uz": "`Boolean` faqat `true` yoki `false` qabul qiladi: shartda sonlar, satrlar va `null` ishlamaydi, shuning uchun `if (1)` kompilyatsiya bo‘lmaydi. Shuningdek, ikkala tomonni ham dangasalarcha emas, to‘liq hisoblaydigan `and`, `or` va `xor` infiks funksiyalari bor. `5 > 3` kabi taqqoslash natijasi ham `Boolean`, uni o‘zgaruvchida saqlash mumkin.",
   "en": "`Boolean` accepts only `true` or `false`: numbers, strings and `null` do not work as conditions as in some other languages, so `if (1)` does not compile. There are also infix functions `and`, `or` and `xor` that evaluate both sides without laziness. The result of a comparison like `5 > 3` is also a `Boolean` and can be stored in a variable."
  },
  "mistake": {
   "ru": "Ставить вызов с побочным эффектом справа от `&&` или `||` и ожидать, что он выполнится всегда. Если левая часть уже решает исход, правая пропускается; такие вызовы лучше вынести в отдельную строку.",
   "uz": "Yon ta’sirli chaqiruvni `&&` yoki `||` ning o‘ng tomoniga qo‘yib, u doim bajariladi deb kutish. Chap qism natijani hal qilsa, o‘ng qism o‘tkazib yuboriladi; bunday chaqiruvlarni alohida qatorga chiqaring.",
   "en": "Putting a call with a side effect on the right of `&&` or `||` and expecting it to always run. If the left side already decides the outcome, the right side is skipped; move such calls to a separate line."
  },
  "related": [
   "if",
   "when",
   "while",
   "Int"
  ]
 },
 "ty:Char": {
  "more": {
   "ru": "`Char` хранит один 16-битный символ UTF-16. К символу можно прибавить число и получить другой `Char` (`c + 2` даёт `C`), а разность двух символов даёт `Int`. Проверки вроде `isDigit()` и `isLetter()` и преобразования `uppercaseChar()` помогают разбирать текст посимвольно.",
   "uz": "`Char` bitta 16 bitli UTF-16 belgisini saqlaydi. Belgiga son qo‘shib boshqa `Char` olish mumkin (`c + 2` natijasi `C`), ikki belgi ayirmasi esa `Int` beradi. `isDigit()` va `isLetter()` kabi tekshiruvlar hamda `uppercaseChar()` o‘zgartirishi matnni belgi-belgi tahlil qilishga yordam beradi.",
   "en": "`Char` holds a single 16-bit UTF-16 character. You can add a number to a character to get another `Char` (`c + 2` gives `C`), and the difference of two characters gives an `Int`. Checks like `isDigit()` and `isLetter()` and conversions like `uppercaseChar()` help process text character by character."
  },
  "mistake": {
   "ru": "Считать, что `'7'.code` равно 7: на самом деле это код символа, 55. Чтобы получить число, вызывайте `digitToInt()`.",
   "uz": "`'7'.code` 7 ga teng deb o‘ylash: aslida bu belgining kodi, ya’ni 55. Son olish uchun `digitToInt()` chaqiring.",
   "en": "Assuming `'7'.code` equals 7: it is actually the character code, 55. To get the number, call `digitToInt()`."
  },
  "related": [
   "String",
   "Int",
   ".."
  ]
 },
 "ty:String": {
  "more": {
   "ru": "`String` — последовательность символов `Char`, к которым можно обратиться по индексу `s[0]` или перебрать в цикле. Оператор `==` сравнивает содержимое строк, а `===` — ссылки. Метод `trimIndent()` убирает общий отступ в многострочном тексте, а при частом склеивании в цикле эффективнее `StringBuilder` или `buildString`.",
   "uz": "`String` — indeks bo‘yicha `s[0]` olish yoki tsiklda aylanib chiqish mumkin bo‘lgan `Char` belgilar ketma-ketligi. `==` operatori satrlar mazmunini, `===` esa havolalarni solishtiradi. `trimIndent()` metodi ko‘p qatorli matndagi umumiy bo‘shliqni olib tashlaydi, tsiklda tez-tez yopishtirishda esa `StringBuilder` yoki `buildString` samaraliroq.",
   "en": "`String` is a sequence of `Char` values that you can access by index `s[0]` or loop over. The `==` operator compares the contents of strings, while `===` compares references. The `trimIndent()` method removes the common indentation from multi-line text, and for frequent concatenation in a loop `StringBuilder` or `buildString` is more efficient."
  },
  "mistake": {
   "ru": "Пытаться изменить символ присваиванием `s[0] = 'x'`: это ошибка компиляции, строка неизменяема. Создайте новую строку, например через `replace` или `buildString`.",
   "uz": "Belgini `s[0] = 'x'` tayinlash bilan o‘zgartirmoqchi bo‘lish: bu kompilyatsiya xatosi, satr o‘zgarmas. Yangi satr yarating, masalan `replace` yoki `buildString` orqali.",
   "en": "Trying to change a character with `s[0] = 'x'`: this is a compile error, because the string is immutable. Create a new string instead, for example with `replace` or `buildString`."
  },
  "related": [
   "\"$x ${y}\"",
   "Char",
   "buildString",
   "joinToString"
  ]
 },
 "ty:\"$x ${y}\"": {
  "more": {
   "ru": "Шаблоны работают и в обычных строках, и в многострочных `\"\"\"`, и внутри `${}` можно вызывать функции или писать условия, как `${a + b}` в примере. Результат всегда `String`: значение приводится вызовом `toString()`. Это читаемее и обычно короче, чем сборка текста через `+` или `String.format`.",
   "uz": "Shablonlar oddiy satrlarda ham, ko‘p qatorli `\"\"\"` satrlarda ham ishlaydi, `${}` ichida esa misoldagi `${a + b}` kabi funksiyalarni chaqirish yoki shartlar yozish mumkin. Natija doim `String`: qiymat `toString()` chaqirilib o‘giriladi. Bu `+` yoki `String.format` bilan matn yig‘ishdan o‘qishga qulayroq va odatda qisqaroq.",
   "en": "Templates work in regular strings and in multi-line `\"\"\"` strings, and inside `${}` you can call functions or write conditions, like `${a + b}` in the example. The result is always a `String`: the value is converted with `toString()`. This is more readable and usually shorter than building text with `+` or `String.format`."
  },
  "mistake": {
   "ru": "Писать `\"$name.length\"` и ждать длину: подставится только `name`, а `.length` останется обычным текстом. Для выражений с вызовом или обращением к свойству нужны фигурные скобки: `\"${name.length}\"`.",
   "uz": "`\"$name.length\"` yozib uzunlikni kutish: faqat `name` qo‘yiladi, `.length` esa oddiy matn bo‘lib qoladi. Chaqiruv yoki xususiyatga murojaat qiluvchi ifodalar uchun figurali qavs kerak: `\"${name.length}\"`.",
   "en": "Writing `\"$name.length\"` and expecting the length: only `name` is substituted and `.length` stays as plain text. Expressions with a call or property access need braces: `\"${name.length}\"`."
  },
  "related": [
   "String",
   "buildString",
   "println",
   "joinToString"
  ]
 },
 "ty:Any": {
  "more": {
   "ru": "`Any` объявляет три общих метода: `equals()`, `hashCode()` и `toString()`, поэтому они есть у любого объекта. Сам `Any` не допускает `null`; тип, принимающий всё, включая `null`, записывается как `Any?`. Как в примере, `item::class.simpleName` показывает настоящий тип значения во время выполнения.",
   "uz": "`Any` uchta umumiy metodni e’lon qiladi: `equals()`, `hashCode()` va `toString()`, shuning uchun ular har qanday obyektda bor. `Any`ning o‘zi `null`ni qabul qilmaydi; `null`ni ham qabul qiladigan tur `Any?` deb yoziladi. Misoldagidek, `item::class.simpleName` qiymatning ishlash vaqtidagi haqiqiy turini ko‘rsatadi.",
   "en": "`Any` declares three common methods, `equals()`, `hashCode()` and `toString()`, so every object has them. `Any` itself does not allow `null`; the type that accepts everything including `null` is written `Any?`. As in the example, `item::class.simpleName` shows the actual runtime type of a value."
  },
  "mistake": {
   "ru": "Использовать `Any` везде, чтобы «не думать о типах», а потом приводить значения вручную. Лучше применять дженерики, интерфейсы или `sealed`-иерархии, чтобы компилятор проверял типы за вас.",
   "uz": "Turlar haqida o‘ylamaslik uchun hamma joyda `Any` ishlatib, keyin qiymatlarni qo‘lda o‘girish. Kompilyator turlarni siz uchun tekshirishi uchun generiklar, interfeyslar yoki `sealed` ierarxiyalardan foydalaning.",
   "en": "Using `Any` everywhere to avoid thinking about types and then casting values by hand. Prefer generics, interfaces or `sealed` hierarchies so the compiler checks the types for you."
  },
  "related": [
   "is",
   "as",
   "when",
   "Unit"
  ]
 },
 "ty:Unit": {
  "more": {
   "ru": "`Unit` — объект-одиночка с единственным значением, поэтому его можно сохранить в переменную и передать как обычное значение, что видно в примере. Благодаря этому `Unit` годится как аргумент дженерика, например `Result<Unit>`, а лямбда `() -> Unit` — стандартный тип обратного вызова без результата.",
   "uz": "`Unit` yagona qiymatga ega singleton obyekt, shuning uchun uni o‘zgaruvchiga saqlash va oddiy qiymatdek uzatish mumkin, buni misolda ko‘rish mumkin. Shu sababli `Unit` generik argument sifatida yaroqli, masalan `Result<Unit>`, `() -> Unit` lambda esa natijasiz callback uchun standart tur.",
   "en": "`Unit` is a singleton object with a single value, so it can be stored in a variable and passed around like any value, as the example shows. That is why `Unit` works as a generic argument, for example `Result<Unit>`, and a `() -> Unit` lambda is the standard type for a callback without a result."
  },
  "mistake": {
   "ru": "Ожидать, что функция без `return` вернёт «пустоту» и `println(r)` напечатает пустую строку. На деле печатается `kotlin.Unit`, а присваивать результат такой функции переменной обычно бессмысленно.",
   "uz": "`return`siz funksiya «bo‘shliq» qaytaradi va `println(r)` bo‘sh satr chiqaradi deb kutish. Aslida `kotlin.Unit` chiqadi, bunday funksiya natijasini o‘zgaruvchiga tayinlash esa odatda ma’nosiz.",
   "en": "Expecting a function without `return` to return emptiness and `println(r)` to print an empty line. It actually prints `kotlin.Unit`, and assigning the result of such a function to a variable is usually pointless."
  },
  "related": [
   "fun",
   "return",
   "Nothing",
   "lambda"
  ]
 },
 "ty:Nothing": {
  "more": {
   "ru": "`Nothing` — подтип любого типа, и у него не может быть ни одного значения. Поэтому `fail(\"boom\")` подходит там, где ждут `Int`, как в примере с `try`. Компилятор считает код после вызова такой функции недостижимым. К `Nothing` относятся и `TODO()`, и бесконечные функции.",
   "uz": "`Nothing` — har qanday turning kichik turi va uning birorta ham qiymati bo‘lishi mumkin emas. Shu sababli `fail(\"boom\")` misoldagi `try` kabi `Int` kutilgan joyga to‘g‘ri keladi. Kompilyator bunday funksiya chaqirilgandan keyingi kodni yetib bo‘lmaydigan deb hisoblaydi. `TODO()` ham, cheksiz ishlaydigan funksiyalar ham `Nothing`ga kiradi.",
   "en": "`Nothing` is a subtype of every type, and it can have no values at all. That is why `fail(\"boom\")` fits where an `Int` is expected, as in the `try` example. The compiler treats code after a call to such a function as unreachable. `TODO()` and functions that never finish also return `Nothing`."
  },
  "mistake": {
   "ru": "Объявить функцию с типом `Nothing`, но оставить путь, где она завершается нормально: это ошибка компиляции. Каждая ветка должна бросать исключение или работать бесконечно.",
   "uz": "Funksiyani `Nothing` turi bilan e’lon qilib, uning odatdagidek tugaydigan yo‘lini qoldirish: bu kompilyatsiya xatosi. Har bir tarmoq istisno tashlashi yoki cheksiz ishlashi kerak.",
   "en": "Declaring a function with type `Nothing` but leaving a path where it finishes normally: this is a compile error. Every branch must throw an exception or run forever."
  },
  "related": [
   "throw",
   "Unit",
   "?:",
   "try"
  ]
 },
 "ty:Int?": {
  "more": {
   "ru": "Знак `?` после любого типа делает его nullable, и компилятор заставит обработать `null` до использования значения. После проверки `if (b != null)` переменная автоматически приводится к `Int` (smart cast), если она не может измениться между проверкой и использованием. На JVM `Int?` хранится как объект-обёртка, а не как примитив.",
   "uz": "Istalgan tur ortidagi `?` belgisi uni nullable qiladi, kompilyator esa qiymatdan foydalanishdan oldin `null`ni qayta ishlashni talab qiladi. `if (b != null)` tekshiruvidan keyin o‘zgaruvchi tekshiruv bilan foydalanish orasida o‘zgara olmasa, avtomatik `Int`ga o‘tadi (smart cast). JVM’da `Int?` primitiv emas, o‘ram obyekt sifatida saqlanadi.",
   "en": "A `?` after any type makes it nullable, and the compiler forces you to handle `null` before using the value. After an `if (b != null)` check the variable is automatically treated as `Int` (smart cast), as long as it cannot change between the check and the use. On the JVM `Int?` is stored as a wrapper object, not as a primitive."
  },
  "mistake": {
   "ru": "Вызывать метод прямо на `Int?`, например `a.plus(1)`: код не скомпилируется. Используйте `?.`, проверку на `null` или значение по умолчанию через `?:`.",
   "uz": "Metodni to‘g‘ridan-to‘g‘ri `Int?` ustida, masalan `a.plus(1)` deb chaqirish: kod kompilyatsiya bo‘lmaydi. `?.`, `null` tekshiruvi yoki `?:` orqali standart qiymatdan foydalaning.",
   "en": "Calling a method directly on an `Int?`, for example `a.plus(1)`: the code will not compile. Use `?.`, a `null` check, or a default value via `?:`."
  },
  "related": [
   "?.",
   "?:",
   "!!",
   "null"
  ]
 },
 "ty:?.": {
  "more": {
   "ru": "Оператор `?.` вызывает метод или читает свойство, только если слева не `null`; иначе всё выражение даёт `null`. Тип результата всегда nullable, например `Int?` для `length` в примере. Его часто сочетают с `let`: `x?.let { ... }` выполнит блок лишь для ненулевого значения. Присваивание тоже допустимо: `a?.b = 1`.",
   "uz": "`?.` operatori metodni chaqiradi yoki xususiyatni faqat chap tomon `null` bo‘lmaganda o‘qiydi; aks holda butun ifoda `null` beradi. Natija turi doim nullable, masalan misoldagi `length` uchun `Int?`. Uni ko‘pincha `let` bilan birga ishlatishadi: `x?.let { ... }` blokni faqat `null` bo‘lmagan qiymat uchun bajaradi. Tayinlash ham mumkin: `a?.b = 1`.",
   "en": "The `?.` operator calls a method or reads a property only when the left side is not `null`; otherwise the whole expression yields `null`. The result type is always nullable, for example `Int?` for `length` in the example. It is often combined with `let`: `x?.let { ... }` runs the block only for a non-null value. Assignment works too: `a?.b = 1`."
  },
  "mistake": {
   "ru": "Забыть, что результат цепочки nullable, и написать `u.address?.city?.length + 1`: это не скомпилируется. Добавьте значение по умолчанию: `(u.address?.city?.length ?: 0) + 1`.",
   "uz": "Zanjir natijasi nullable ekanini unutib, `u.address?.city?.length + 1` deb yozish: bu kompilyatsiya bo‘lmaydi. Standart qiymat qo‘shing: `(u.address?.city?.length ?: 0) + 1`.",
   "en": "Forgetting that the result of the chain is nullable and writing `u.address?.city?.length + 1`: this will not compile. Add a default value: `(u.address?.city?.length ?: 0) + 1`."
  },
  "related": [
   "?:",
   "!!",
   "let",
   "Int?"
  ]
 },
 "ty:?:": {
  "more": {
   "ru": "Оператор `?:` возвращает левую часть, если она не `null`, иначе вычисляет правую; правая часть при этом вычисляется лениво. Тип результата получается ненулевым, как `Int` в `name?.length ?: 0`. Так как `return` и `throw` имеют тип `Nothing`, они удобны для раннего выхода, как `val v = x ?: return -1` в примере.",
   "uz": "`?:` operatori chap qism `null` bo‘lmasa shuni qaytaradi, aks holda o‘ng qismni hisoblaydi; o‘ng qism dangasa hisoblanadi. Natija turi `null` bo‘lmagan bo‘ladi, masalan `name?.length ?: 0`dagi `Int`. `return` va `throw` `Nothing` turida bo‘lgani uchun ular erta chiqish uchun qulay, misoldagi `val v = x ?: return -1` kabi.",
   "en": "The `?:` operator returns the left side if it is not `null`, otherwise it evaluates the right side, which is computed lazily. The result type becomes non-null, like `Int` in `name?.length ?: 0`. Since `return` and `throw` have type `Nothing`, they are convenient for early exit, as in `val v = x ?: return -1` in the example."
  },
  "mistake": {
   "ru": "Писать `a?.length ?: 0 + 5`, ожидая `(длина или 0) + 5`: сложение выполняется раньше `?:`, и `+ 5` относится только к нулю. Ставьте скобки: `(a?.length ?: 0) + 5`.",
   "uz": "`a?.length ?: 0 + 5` yozib `(uzunlik yoki 0) + 5` kutish: qo‘shish `?:`dan oldin bajariladi, `+ 5` esa faqat nolga tegishli bo‘lib qoladi. Qavs qo‘ying: `(a?.length ?: 0) + 5`.",
   "en": "Writing `a?.length ?: 0 + 5` and expecting `(length or 0) + 5`: addition binds tighter than `?:`, so `+ 5` applies only to the zero. Use parentheses: `(a?.length ?: 0) + 5`."
  },
  "related": [
   "?.",
   "!!",
   "return",
   "throw"
  ]
 },
 "ty:!!": {
  "more": {
   "ru": "Оператор `!!` превращает `String?` в `String`: если значение `null`, бросается `NullPointerException`, как в примере. Он оправдан, когда вы точно знаете, что `null` быть не может, но компилятор этого не видит. Лучше `requireNotNull(x) { \"сообщение\" }`: при ошибке вы получите понятный текст вместо безликого NPE.",
   "uz": "`!!` operatori `String?`ni `String`ga aylantiradi: qiymat `null` bo‘lsa, misoldagidek `NullPointerException` tashlanadi. U `null` bo‘lishi mumkin emasligini aniq bilganingizda, kompilyator esa buni ko‘rmaganda o‘rinli. `requireNotNull(x) { \"xabar\" }` yaxshiroq: xatoda yuzsiz NPE o‘rniga tushunarli matn olasiz.",
   "en": "The `!!` operator turns `String?` into `String`: if the value is `null`, a `NullPointerException` is thrown, as in the example. It is justified when you know for sure that `null` is impossible but the compiler cannot see it. `requireNotNull(x) { \"message\" }` is better: on failure you get a meaningful text instead of a bare NPE."
  },
  "mistake": {
   "ru": "Расставлять `!!` по всей цепочке, как `a!!.b!!.c`, лишь бы заглушить ошибки компилятора. Это переносит проблему в рантайм; обработайте `null` через `?.`, `?:` или `let`.",
   "uz": "Kompilyator xatolarini o‘chirish uchun zanjir bo‘ylab `a!!.b!!.c` kabi `!!` qo‘yib chiqish. Bu muammoni ishlash vaqtiga ko‘chiradi; `null`ni `?.`, `?:` yoki `let` bilan qayta ishlang.",
   "en": "Scattering `!!` along a whole chain, like `a!!.b!!.c`, just to silence compiler errors. This moves the problem to runtime; handle `null` with `?.`, `?:` or `let` instead."
  },
  "related": [
   "?.",
   "?:",
   "let",
   "require"
  ]
 },
 "ty:Array": {
  "more": {
   "ru": "`Array<T>` создают через `arrayOf()` или конструктор, а для примитивов есть специализированные `IntArray`, `DoubleArray` и другие: они хранят значения без упаковки и экономнее по памяти. Индексация идёт с нуля, `arr.size` даёт длину, а `sort()` сортирует массив на месте. В отличие от него `sorted()` вернёт новый список.",
   "uz": "`Array<T>` `arrayOf()` yoki konstruktor orqali yaratiladi, primitivlar uchun esa maxsus `IntArray`, `DoubleArray` va boshqalar bor: ular qiymatlarni o‘ramsiz saqlaydi va xotirani tejaydi. Indekslash noldan boshlanadi, `arr.size` uzunlikni beradi, `sort()` esa massivni joyida saralaydi. Unga qarama-qarshi `sorted()` yangi ro‘yxat qaytaradi.",
   "en": "`Array<T>` is created with `arrayOf()` or a constructor, and for primitives there are specialized `IntArray`, `DoubleArray` and others: they store values without boxing and use less memory. Indexing starts at zero, `arr.size` gives the length, and `sort()` sorts the array in place. By contrast, `sorted()` returns a new list."
  },
  "mistake": {
   "ru": "Печатать массив через `println(arr)` или сравнивать массивы через `==`: первое выводит адрес вроде `[I@1b6d3586`, второе сравнивает ссылки. Используйте `contentToString()` и `contentEquals()`.",
   "uz": "Massivni `println(arr)` bilan chiqarish yoki `==` bilan solishtirish: birinchisi `[I@1b6d3586` kabi manzil chiqaradi, ikkinchisi havolalarni solishtiradi. `contentToString()` va `contentEquals()` dan foydalaning.",
   "en": "Printing an array with `println(arr)` or comparing arrays with `==`: the first prints an address like `[I@1b6d3586`, the second compares references. Use `contentToString()` and `contentEquals()`."
  },
  "related": [
   "listOf",
   "mutableListOf",
   "for",
   "sorted"
  ]
 },
 "ty:Pair": {
  "more": {
   "ru": "`Pair` — это data-класс с полями `first` и `second`, поэтому он поддерживает деструктуризацию `val (key, value) = p`, как в примере, и красиво печатается. `to` — обычная инфиксная функция, а не ключевое слово. `Pair` можно превратить в список через `toList()`, а список пар — в `Map` через `toMap()`.",
   "uz": "`Pair` — `first` va `second` maydonli data-klass, shuning uchun u misoldagi `val (key, value) = p` kabi destrukturizatsiyani qo‘llaydi va chiroyli chop etiladi. `to` kalit so‘z emas, oddiy infiks funksiya. `Pair`ni `toList()` bilan ro‘yxatga, juftlar ro‘yxatini esa `toMap()` bilan `Map`ga aylantirish mumkin.",
   "en": "`Pair` is a data class with fields `first` and `second`, so it supports destructuring `val (key, value) = p`, as in the example, and prints nicely. `to` is an ordinary infix function, not a keyword. A `Pair` can be turned into a list with `toList()`, and a list of pairs into a `Map` with `toMap()`."
  },
  "mistake": {
   "ru": "Часто возвращать `Pair<Int, Int>` и потом путаться, что значит `first` и `second`. Если значения несут смысл, заведите именованный `data class`: код станет читаемее.",
   "uz": "Tez-tez `Pair<Int, Int>` qaytarib, keyin `first` va `second` nimani anglatishini adashtirish. Qiymatlar ma’noga ega bo‘lsa, nomli `data class` yarating: kod o‘qishga qulayroq bo‘ladi.",
   "en": "Frequently returning `Pair<Int, Int>` and then getting confused about what `first` and `second` mean. If the values carry meaning, create a named `data class`: the code becomes more readable."
  },
  "related": [
   "data",
   "mapOf",
   "zip",
   "associate"
  ]
 },
 "ty:..": {
  "more": {
   "ru": "Запись `1..5` — это вызов `rangeTo`, который создаёт `IntRange`. Проверка `3 in 1..5` работает без перебора элементов. Начиная с Kotlin 1.9 есть и оператор `..<`, равный `until`. Диапазоны можно комбинировать с `step` и `downTo`, как `10 downTo 1 step 3`, и использовать в `for`.",
   "uz": "`1..5` yozuvi `IntRange` yaratuvchi `rangeTo` chaqiruvidir. `3 in 1..5` tekshiruvi elementlarni aylanib chiqmasdan ishlaydi. Kotlin 1.9 dan boshlab `until`ga teng `..<` operatori ham bor. Oraliqlarni `10 downTo 1 step 3` kabi `step` va `downTo` bilan birlashtirish va `for`da ishlatish mumkin.",
   "en": "The notation `1..5` is a call to `rangeTo` that creates an `IntRange`. The check `3 in 1..5` works without iterating over elements. Since Kotlin 1.9 there is also the `..<` operator, equal to `until`. Ranges can be combined with `step` and `downTo`, like `10 downTo 1 step 3`, and used in `for`."
  },
  "mistake": {
   "ru": "Писать `for (i in 5..1)` и ждать обратного отсчёта: такой диапазон пуст, цикл не выполнится ни разу. Для убывания используйте `5 downTo 1`.",
   "uz": "`for (i in 5..1)` yozib teskari sanashni kutish: bunday oraliq bo‘sh, tsikl bir marta ham bajarilmaydi. Kamayish uchun `5 downTo 1` ishlating.",
   "en": "Writing `for (i in 5..1)` and expecting a countdown: such a range is empty, so the loop never runs. For descending order use `5 downTo 1`."
  },
  "related": [
   "for",
   "in",
   "repeat",
   "while"
  ]
 }
};
