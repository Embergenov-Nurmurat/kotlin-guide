/* data_en.js — English texts: sections, roadmap and the description/note of every entry. */
window.KD_EN = {
 "sections": {
  "kw": {
   "title": "Kotlin keywords",
   "short": "Keywords",
   "desc": "The words and modifiers every Kotlin program is built from. Each example is a complete program you can run."
  },
  "ty": {
   "title": "Types and null safety",
   "short": "Types",
   "desc": "Kotlin’s core data types and protection from NullPointerException. In Kotlin everything is an object — there are no bare primitives."
  },
  "col": {
   "title": "Collections and their functions",
   "short": "Collections",
   "desc": "Lists, sets, maps and powerful functions for working with them: map, filter, groupBy and more."
  },
  "fn": {
   "title": "Standard functions",
   "short": "Functions",
   "desc": "Functions you will write every day: printing, checks, scope functions (let, apply, also, run), lambdas and extensions."
  },
  "co": {
   "title": "Coroutines and Flow",
   "short": "Coroutines",
   "desc": "Asynchronous code without a “pyramid” of callbacks: this is how networking, databases and long tasks are written on Android."
  },
  "an": {
   "title": "Android basics",
   "short": "Android",
   "desc": "The building blocks of an Android app: components, the manifest, resources, data storage, networking and background work. These examples can’t run on the site — they belong in Android Studio."
  },
  "cm": {
   "title": "Jetpack Compose",
   "short": "Compose",
   "desc": "The modern way to build Android UI directly in Kotlin, without XML. The UI is functions, and state is variables."
  }
 },
 "roadmap": [
  {
   "title": "Kotlin basics",
   "text": "val and var, types, if and when, loops, functions. Write small programs and run them."
  },
  {
   "title": "Null safety",
   "text": "Types with ?, the ?. and ?: operators. They are what protect apps from crashes."
  },
  {
   "title": "Collections and lambdas",
   "text": "map, filter, groupBy: with them most loops can be replaced by a single line."
  },
  {
   "title": "Coroutines and Flow",
   "text": "Background work without callbacks. No network request gets by without them."
  },
  {
   "title": "Android basics",
   "text": "Activity, the lifecycle, the manifest, resources. Now install Android Studio and launch an emulator."
  },
  {
   "title": "Data and networking",
   "text": "Room, DataStore, Retrofit. Your app starts storing data and going online."
  },
  {
   "title": "Compose and architecture",
   "text": "UI in Compose, state in a ViewModel, dependencies via Hilt. This is how modern apps are written."
  }
 ],
 "items": {
  "an:Activity": [
   "A single screen of the app",
   "Every `Activity` must be declared in `AndroidManifest.xml`. Modern apps often keep just one `Activity`, with screens built from Compose or fragments."
  ],
  "an:Activity lifecycle": [
   "Lifecycle: onCreate → onStart → onResume … onDestroy",
   "When the screen is rotated, the `Activity` is recreated: `onDestroy`, then `onCreate` again. That is why state is kept in a `ViewModel`, not in Activity fields."
  ],
  "an:AndroidManifest.xml": [
   "The app’s passport: components, permissions, icon",
   "The `intent-filter` block with `MAIN` and `LAUNCHER` makes an `Activity` the starting one. The `exported` attribute is required for components that have filters."
  ],
  "an:Intent (explicit)": [
   "Opens a specific screen and passes data to it",
   "An explicit `Intent` names the target class. Pass only small data (ids, strings): large objects do not fit into an `Intent`."
  ],
  "an:Intent (implicit)": [
   "Asks the system to find an app for an action",
   "An implicit `Intent` describes an action, not a recipient: the system shows suitable apps (browser, mail, messengers)."
  ],
  "an:Fragment": [
   "A part of a screen with its own lifecycle",
   "With a `Fragment` you work in `onViewCreated`, not `onCreate`: that is where the fragment already has its View. Fragments are needed less often in Compose."
  ],
  "an:Service": [
   "A component for work without a screen",
   "A service runs on the main thread by default! Heavy work goes into coroutines, and long background tasks are now better handed to `WorkManager`."
  ],
  "an:BroadcastReceiver": [
   "Receives system and custom messages (broadcasts)",
   "`onReceive` must finish very quickly (seconds). Many system events cannot be caught via the manifest and are registered in code."
  ],
  "an:Context": [
   "Access to resources and system services; Application is one per process",
   "An `Activity` is a `Context` too. Do not keep an `Activity` in static fields: that is a memory leak. For long-lived objects use `applicationContext`."
  ],
  "an:Bundle": [
   "A key-value store for saving state",
   "A `Bundle` survives both screen rotation and the system killing the process, but it is meant for small data. For everything else use a `ViewModel` and a database."
  ],
  "an:View Binding": [
   "Safe access to Views from the layout without findViewById",
   "The `ActivityMainBinding` class is generated from `activity_main.xml`. A typo in an id becomes a compile error, not a runtime crash."
  ],
  "an:Layout XML": [
   "Screen description in XML: LinearLayout, TextView, Button",
   "Set sizes in `dp` (for margins and blocks) and `sp` (for text): that way the interface looks the same on different screens and font settings."
  ],
  "an:strings.xml": [
   "String resources: translating the interface into other languages",
   "Do not write texts directly in code and layouts. A separate folder is created for each language: `values-ru`, `values-uz`, and Android picks the right one itself."
  ],
  "an:RecyclerView": [
   "An efficient scrollable list (Adapter + ViewHolder)",
   "`RecyclerView` reuses rows while scrolling, so it does not lag even with thousands of items. In Compose, `LazyColumn` does the same."
  ],
  "an:ViewModel": [
   "Holds screen state and survives rotation",
   "A `ViewModel` knows nothing about the Activity and Views. It lives while the screen is “needed” and exposes only immutable `StateFlow`/`LiveData`."
  ],
  "an:LiveData": [
   "An observable value that is aware of the lifecycle",
   "A subscriber receives updates only while the screen is active. In new projects `StateFlow` is more often chosen instead of `LiveData`."
  ],
  "an:Toast / Snackbar": [
   "Short messages to the user",
   "`Snackbar` is better: it has an action button (for example, “Undo”). `Toast` disappears on its own and does not accept taps."
  ],
  "an:SharedPreferences": [
   "Simple settings storage (key-value pairs)",
   "Good for a couple of flags. For new projects Google recommends `DataStore`: it is asynchronous and safer."
  ],
  "an:DataStore": [
   "A modern asynchronous settings store built on Flow",
   "Reading returns a `Flow`: the UI updates itself when a setting changes. Writing is `suspend`, so the main thread is not blocked."
  ],
  "an:@Entity": [
   "A Room database table as a class",
   "One class is one table, one field is one column. `autoGenerate = true` makes Room assign the `id` itself."
  ],
  "an:@Dao": [
   "A query interface for the database: @Insert, @Query, @Delete",
   "Room checks the SQL at compile time. A query returning `Flow` sends a new list on its own each time the table changes."
  ],
  "an:RoomDatabase": [
   "The entry point to a Room database",
   "Create the database instance once for the whole app (a singleton or via Hilt). When the table structure changes, increase `version` and write a migration."
  ],
  "an:Retrofit": [
   "An HTTP client: you describe the API with an interface",
   "Don’t forget the `INTERNET` permission in the manifest. Call a `suspend` function from a coroutine, for example from `viewModelScope`."
  ],
  "an:Permissions": [
   "Requesting a dangerous permission at runtime",
   "A permission must be declared in the manifest and requested from the user. If they refuse, the app should keep working at least partially."
  ],
  "an:Notification": [
   "A notification: channel + builder",
   "Since Android 8 a notification without a channel is not shown, and since Android 13 you also need the `POST_NOTIFICATIONS` permission."
  ],
  "an:WorkManager": [
   "Reliable background tasks that survive a restart",
   "The minimum repeat interval is 15 minutes. The system picks the exact time itself to save battery."
  ],
  "an:Log": [
   "Writing messages to Logcat for debugging",
   "The first argument is a tag for filtering in Logcat; the levels are `v`, `d`, `i`, `w`, `e`. Don’t log passwords or personal data."
  ],
  "an:build.gradle.kts": [
   "Module build configuration: SDK versions and dependencies",
   "`minSdk` is the oldest supported Android version. The version numbers in the example are illustrative: check developer.android.com for current ones."
  ],
  "an:adb": [
   "A command line for working with a device and an emulator",
   "`adb devices` lists connected devices. For a phone, enable “USB debugging” in developer options."
  ],
  "an:Hilt": [
   "Dependency injection: objects arrive “by themselves”",
   "Classes receive what they need through the constructor and don’t create dependencies themselves, which makes them easy to test. This is the “Advanced” level."
  ],
  "an:viewModelScope": [
   "Coroutines tied to the ViewModel’s life",
   "When the `ViewModel` is destroyed, all coroutines launched in `viewModelScope` are cancelled automatically, so there are no leaks."
  ],
  "cm:@Composable": [
   "Marks a function that describes a piece of the UI",
   "Composable function names are written with a capital letter. The function does not \"return\" anything: it describes what to draw."
  ],
  "cm:setContent": [
   "Connects Compose to an Activity",
   "Instead of `setContentView(R.layout...)` you call `setContent { ... }`. XML layout files are no longer needed."
  ],
  "cm:Text": [
   "Shows text",
   "Font size is set in `sp`, paddings in `dp`. It is better to take colors and styles from `MaterialTheme`, so dark theme works."
  ],
  "cm:Button": [
   "A button whose content is a lambda",
   "You can put anything inside a button: text, an icon, a `Row` with both."
  ],
  "cm:Modifier": [
   "A chain of settings: size, padding, background, click",
   "Order matters: `padding` before `background` gives space outside the background, and after it, inside. Read the chain from top to bottom."
  ],
  "cm:Column": [
   "Lays out elements vertically",
   "`Arrangement` controls placement along the axis, `Alignment` controls alignment across it."
  ],
  "cm:Row": [
   "Lays out elements horizontally",
   "The analog of a horizontal `LinearLayout`. `Modifier.weight(1f)` gives an element all the free space."
  ],
  "cm:Box": [
   "Stacks elements on top of each other",
   "The last element is drawn on top. `align` inside a `Box` puts an element in a corner or in the center."
  ],
  "cm:Spacer": [
   "An empty element for spacing between neighbors",
   "Often `Spacer` is replaced with `Arrangement.spacedBy(...)` in `Column`/`Row`: that way the gaps are equal automatically."
  ],
  "cm:Image": [
   "Shows an image from resources",
   "`contentDescription` is read by screen readers for blind users. For purely decorative images set `null`. Images from the network are loaded with Coil."
  ],
  "cm:TextField": [
   "A text input field",
   "The field does not store the text itself: you pass `value` and update it yourself in `onValueChange`. This way the state stays with you."
  ],
  "cm:Card": [
   "A card with a border and a shadow",
   "This is a ready-made Material 3 component. A `Column` is usually placed inside a `Card` to arrange the content."
  ],
  "cm:LazyColumn": [
   "A scrollable list: draws only the visible elements",
   "A replacement for `RecyclerView` without adapters and holders. For thousands of elements use exactly `LazyColumn`, not a plain `Column`."
  ],
  "cm:remember": [
   "Remembers a value between redraws (with mutableStateOf)",
   "When `count` changes, Compose redraws the function itself. Without `remember` the value would reset to zero on every redraw."
  ],
  "cm:rememberSaveable": [
   "Like remember, but survives screen rotation",
   "Plain `remember` is lost on screen rotation, while `rememberSaveable` puts the value into a `Bundle`. For complex objects a `ViewModel` is better."
  ],
  "cm:State hoisting": [
   "Lifting state up: the screen stores it, the component only displays it",
   "The component receives a value and an event lambda and has no state of its own. It is easy to reuse, test and view in `@Preview`."
  ],
  "cm:LaunchedEffect": [
   "Launches a coroutine when entering the composition or when the key changes",
   "Side effects (loading, subscriptions) must not be written directly in the body of a composable: it runs many times. That is what `LaunchedEffect` is for."
  ],
  "cm:Scaffold": [
   "A screen skeleton: top bar, button, content",
   "Be sure to apply `innerPadding` to the content, otherwise it will end up under the top bar."
  ],
  "cm:MaterialTheme": [
   "The app theme: colors, fonts, shapes",
   "The whole app is wrapped in a theme once. `isSystemInDarkTheme()` tells whether the user has turned on dark mode."
  ],
  "cm:NavHost": [
   "Navigation between screens in Compose",
   "Each screen is a string route. The Back button works automatically. Pass only an id and load the data on the new screen."
  ],
  "cm:collectAsStateWithLifecycle": [
   "Subscribes Compose to a StateFlow from a ViewModel",
   "When the state in the `ViewModel` changes, the screen updates itself. The subscription stops automatically while the app is minimized."
  ],
  "cm:@Preview": [
   "Shows a composable in Android Studio without running",
   "Preview works only for functions without parameters. That is why state needs to be \"hoisted\": a component with parameters is easy to show in a preview."
  ],
  "col:listOf": [
   "Immutable list",
   "`List` is read-only: it has no `add`. Going out of bounds with `[]` throws an error, while `getOrNull` returns `null`."
  ],
  "col:mutableListOf": [
   "Mutable list",
   "The variable can be `val` and the list still changes: `val` protects the reference, not the contents."
  ],
  "col:setOf": [
   "Set: no duplicates",
   "The `in` check on a set is very fast. To remove duplicates from a list, use `toSet()` or `distinct()`."
  ],
  "col:mapOf": [
   "Map: \"key — value\" pairs",
   "`map[key]` returns `null` if the key is missing. Pairs are created with `to`."
  ],
  "col:mutableMapOf": [
   "Mutable map",
   "The `map[key] = value` form adds or replaces a pair. A typical task is counting occurrences."
  ],
  "col:map": [
   "Transforms each element and returns a new list",
   "In the lambda the single parameter is called `it`. The original list is not changed."
  ],
  "col:filter": [
   "Keeps only the matching elements",
   "`filterNotNull()` removes all `null`s and changes the list type to `List<T>`."
  ],
  "col:forEach": [
   "Performs an action for each element",
   "`forEach` returns no result. If you need a new list, use `map`."
  ],
  "col:fold": [
   "Folds a collection into a single value (reduce — without an initial value)",
   "`fold` takes an initial value and works with an empty list; `reduce` throws an error on an empty list."
  ],
  "col:sum": [
   "Sum, average, count, maximum and minimum",
   "`maxOrNull()` and `minOrNull()` return `null` for an empty list instead of crashing."
  ],
  "col:sorted": [
   "Sorting: sorted, sortedBy, sortedWith",
   "`sorted` creates a new list. To sort in place, `MutableList` has `sort()`."
  ],
  "col:groupBy": [
   "Groups elements by key into a Map",
   "The result is a map whose value is a list of the group's elements. `mapValues` turns the groups into something else, for example their sizes."
  ],
  "col:first": [
   "First/last element or the first matching one",
   "`first { }` throws an error if nothing is found. `firstOrNull { }` and `find { }` return `null`."
  ],
  "col:any": [
   "any, all, none checks for a condition",
   "For an empty collection, `all` and `none` return `true`, and `any` returns `false`."
  ],
  "col:take": [
   "Takes or drops a part: take, drop, chunked",
   "`chunked(n)` cuts a list into pieces of `n` elements — handy for pages and grids."
  ],
  "col:joinToString": [
   "Joins elements into a string",
   "By default the separator is a comma and a space. There are `prefix`, `postfix` and `limit` parameters."
  ],
  "col:zip": [
   "Combines two lists into pairs",
   "The result length equals the length of the shorter list."
  ],
  "col:flatMap": [
   "Flattens lists of lists into one",
   "`flatMap` is `map` followed by `flatten`. It is needed when each element turns into a list."
  ],
  "col:distinct": [
   "Removes duplicate elements",
   "The order of first occurrences is preserved. `distinctBy` compares by key."
  ],
  "col:partition": [
   "Splits a list in two by a condition",
   "Returns a `Pair` of two lists, so the result can be conveniently destructured into two variables right away."
  ],
  "col:associate": [
   "Builds a Map from elements: associateWith, associateBy",
   "`associateWith` — the element becomes the key, `associateBy` — the element becomes the value and the key is computed."
  ],
  "col:asSequence": [
   "Lazy sequence: computes only what is needed",
   "A regular list would process all million elements, while a `Sequence` stopped right after the first match. Useful on big data."
  ],
  "fn:println": [
   "Prints a value and moves to a new line (`print` does not)",
   "Accepts any type. On Android, debugging uses `Log.d(...)` rather than `println` — the output shows up in Logcat."
  ],
  "fn:readln": [
   "Reads a line entered by the user",
   "`readln()` throws an error at end of input, while `readlnOrNull()` returns `null`. On a phone, input comes from on-screen fields, not from a console."
  ],
  "fn:repeat": [
   "Repeats a block of code n times",
   "The repetition number (starting from zero) is passed to the lambda as a parameter."
  ],
  "fn:require": [
   "Checks arguments (`require`) and state (`check`)",
   "`require` validates what the caller passed (`IllegalArgumentException`), `check` validates internal state (`IllegalStateException`)."
  ],
  "fn:let": [
   "Runs a block for a value; with `?.` it guards against `null`",
   "The most common idiom: `x?.let { ... }` — \"if not null, do this\". Inside, the value is available as `it`."
  ],
  "fn:apply": [
   "Configures an object and returns the object itself",
   "Inside the block the object is available as `this`, so properties are set without a prefix. Ideal for creating and configuring in a single expression."
  ],
  "fn:also": [
   "Performs a side effect and returns the original object",
   "Inside, the object is called `it`. Good for logging in the middle of a call chain."
  ],
  "fn:run": [
   "Runs a block and returns the block's result (`with` is similar)",
   "`run` and `with` give access to the object as `this` and return the last expression. `apply`, on the other hand, returns the object itself."
  ],
  "fn:takeIf": [
   "Returns the value if the condition is true, otherwise `null`",
   "Combines well with `?.` and `?:`: a check and a default value in one chain."
  ],
  "fn:buildString": [
   "Builds a string piece by piece inside a block",
   "More convenient and faster than concatenating strings with `+` in a loop."
  ],
  "fn:lambda": [
   "A function as a value: { parameters -> body }",
   "If the lambda is the last argument, it is moved outside the parentheses. If there is only one parameter, you can leave it unnamed: it becomes `it`."
  ],
  "fn:fun Type.name()": [
   "Extension function: adds a method to an existing type",
   "The original class does not change: an extension is an ordinary function that looks like a method. Many Android KTX functions are built this way."
  ],
  "co:suspend": [
   "A function that can be paused without blocking the thread",
   "A `suspend` function can only be called from a coroutine or another `suspend` function. The code looks sequential, but the thread is not blocked."
  ],
  "co:runBlocking": [
   "Starts a coroutine and blocks the current thread until it finishes",
   "Needed in `main` and tests. In an Android app, `runBlocking` is not used on the main thread: the screen would freeze."
  ],
  "co:launch": [
   "Starts a coroutine and \"forgets\" it (returns a `Job`)",
   "The tasks run concurrently: the second finished earlier even though it was started later. On Android you usually write `viewModelScope.launch { ... }`."
  ],
  "co:async": [
   "Starts a coroutine that will return a result (`await`)",
   "The two requests run at the same time, so we wait about 100 ms, not 200. The result is taken with `await()`."
  ],
  "co:delay": [
   "Pauses a coroutine for a time without blocking the thread",
   "Unlike `Thread.sleep`, the thread stays free and can run other coroutines."
  ],
  "co:withContext": [
   "Switches a coroutine to another thread (dispatcher)",
   "This is how heavy work is moved off the main thread and the result brought back. The main Android rule: never block the UI."
  ],
  "co:Dispatchers": [
   "Determine which thread a coroutine runs on",
   "`Main` is the Android UI, `IO` is network and files, `Default` is heavy computation. `Dispatchers.Main` exists only on Android and on desktop with a UI."
  ],
  "co:Job": [
   "Controls a coroutine: `join`, `cancel`, `isActive`",
   "Cancellation is cooperative: a coroutine stops at the nearest suspension point (`delay`, `yield`). `viewModelScope` cancels everything itself when the ViewModel is destroyed."
  ],
  "co:flow": [
   "A stream of values that arrive over time",
   "`Flow` is lazy: nothing happens until `collect` is called. The familiar `map`, `filter`, `take` work on it."
  ],
  "co:StateFlow": [
   "A flow that holds the current state (a `LiveData` replacement)",
   "A new subscriber immediately receives the current value. In a ViewModel you keep a `MutableStateFlow` and expose only a `StateFlow` outward."
  ],
  "kw:val": [
   "Declares a read-only (immutable) variable",
   "A `val` value cannot be reassigned (like `final` in Java). If a variable should not change, choose `val`."
  ],
  "kw:var": [
   "Declares a mutable variable",
   "The type is inferred automatically: `var x = 0` is an `Int`. You can change the value, but not the type."
  ],
  "kw:fun": [
   "Declares a function",
   "If the body is a single expression, write `= expression`. Parameters can have default values."
  ],
  "kw:if": [
   "Runs code when a condition is true; it is an expression",
   "In Kotlin `if` returns a value, so there is no ternary `?:` operator as in Java: `if` takes its place."
  ],
  "kw:else": [
   "The branch that runs when the condition is false",
   "A chain of conditions can be built with `else if`. If there are many branches, `when` is more convenient."
  ],
  "kw:when": [
   "Selects a branch by value; a powerful replacement for switch",
   "In branches you can check values, ranges (`in`) and types (`is`). If `when` is used as an expression, the `else` branch is required."
  ],
  "kw:for": [
   "Iterates over the elements of a range, string or collection",
   "Kotlin has no classic `for (int i = 0; ...)`. Ranges are used instead: `1..5`, `0 until n`, `10 downTo 1`."
  ],
  "kw:while": [
   "Repeats code while the condition is true",
   "The condition is checked before the body runs, so the body may never execute."
  ],
  "kw:do": [
   "do-while loop: the body runs at least once",
   "The condition is checked after the body. It fits when an action must run at least once."
  ],
  "kw:break": [
   "Terminates a loop (can be used with a label)",
   "A plain `break` leaves only the nearest loop. The `outer@` label lets you exit the outer loop at once."
  ],
  "kw:continue": [
   "Skips the rest of the step and moves to the next one",
   "The loop does not stop: only the current iteration is skipped."
  ],
  "kw:return": [
   "Returns a value from a function and ends it",
   "Inside a lambda, a plain `return` exits the outer function. To leave only the lambda, write `return@forEach`."
  ],
  "kw:in": [
   "Checks membership in a range or collection",
   "Works both in a `for (x in items)` loop and as a check. The negation is `!in`."
  ],
  "kw:is": [
   "Checks an object's type; enables smart casts",
   "After an `is` check the compiler treats the variable as the needed type (smart cast), so no manual cast is needed."
  ],
  "kw:as": [
   "Casts a value to a type; as? does it safely",
   "A plain `as` throws `ClassCastException` if the type does not match. `as?` returns `null` in that case."
  ],
  "kw:null": [
   "Absence of a value; allowed only for types marked with ?",
   "A regular type (`String`) cannot be `null`: this protects against `NullPointerException`. Only `String?` allows `null`."
  ],
  "kw:class": [
   "Declares a class",
   "Properties can be declared right in the primary constructor: `class Person(val name: String)`. Kotlin has no `new` keyword."
  ],
  "kw:data": [
   "A class for holding data: toString, equals, copy are automatic",
   "Comparison with `==` checks field values, not references. A class can be destructured: `val (name, age) = u`."
  ],
  "kw:sealed": [
   "Closed hierarchy: all subclasses are known to the compiler",
   "`when` on a `sealed` type needs no `else`, and if you forget one of the variants, the code will not compile. This is the usual way to describe screen states."
  ],
  "kw:enum": [
   "Enumeration: a fixed set of values",
   "Every value has `name` and `ordinal`. The list of all values is given by `entries` (in older code, `values()`)."
  ],
  "kw:open": [
   "Allows a class to be inherited or a method to be overridden",
   "By default all classes and methods in Kotlin are closed (`final`). To allow inheritance, you need `open`."
  ],
  "kw:abstract": [
   "A class or method without an implementation: subclasses will provide it",
   "You cannot create an object of an abstract class. An `abstract` method has no body, and a subclass must implement it."
  ],
  "kw:interface": [
   "A contract: a set of methods a class must implement",
   "A class can implement several interfaces. Interfaces may contain methods with a body (default implementation)."
  ],
  "kw:object": [
   "Declares a singleton (the only instance) or an anonymous object",
   "You do not need to create `Logger` through a constructor: it already exists as a single instance and is created on first access."
  ],
  "kw:companion": [
   "Static members of a class: companion object",
   "Kotlin has no `static` keyword: functions and constants shared by the class live in a `companion object`. A common use is factory methods."
  ],
  "kw:override": [
   "Overrides a method of a parent class or interface",
   "The `override` word is mandatory: that is how the compiler catches typos in the method name. If you override `equals`, override `hashCode` too."
  ],
  "kw:init": [
   "Initializer block: runs when an object is created",
   "`init` blocks run in the order they are written, together with property initializers. Ideal for validating arguments with `require`."
  ],
  "kw:constructor": [
   "An additional (secondary) constructor",
   "A secondary constructor must call the primary one via `this(...)`. Often default parameter values are enough instead."
  ],
  "kw:by": [
   "Delegates work to another object: by lazy, by viewModels",
   "`by lazy` computes the value once, on first access. In Android you will often see `val vm: MyViewModel by viewModels()`."
  ],
  "kw:lateinit": [
   "Lets you declare a variable without a value and assign it later",
   "Only for non-nullable `var` types. Accessing it before assignment throws `UninitializedPropertyAccessException`. In Android this is how `binding` and `adapter` are stored."
  ],
  "kw:const": [
   "A compile-time constant",
   "`const` is allowed only for simple types and strings at top level or in an `object`. Constant names are conventionally written in UPPERCASE."
  ],
  "kw:vararg": [
   "A parameter with a variable number of arguments",
   "Inside the function, `vararg` is an array. To pass an existing array, use the `*` (spread) operator."
  ],
  "kw:typealias": [
   "Gives a short name to a long type",
   "No new type is created: it is just an alias. Handy for complex types like lambdas and nested collections."
  ],
  "kw:try": [
   "Catches exceptions: try / catch / finally",
   "In Kotlin `try` is an expression: its result can be stored in a variable. There are no checked exceptions (like `throws` in Java)."
  ],
  "kw:throw": [
   "Throws an exception manually",
   "For argument checks, the ready-made `require(...)` and `check(...)` are more convenient: they throw the right exceptions themselves."
  ],
  "kw:private": [
   "Restricts visibility: private, protected, internal, public",
   "Everything is `public` by default. `internal` is visible within one Gradle module. Hide everything that is not needed outside."
  ],
  "ty:Int": [
   "32-bit integer",
   "Dividing two `Int` values gives an `Int` (`7 / 2 = 3`). On overflow the number wraps around to a negative value, with no error."
  ],
  "ty:Long": [
   "64-bit integer (L suffix)",
   "If a number does not fit in `Int` (larger than about 2.1 billion), you need `Long`. Separate digit groups with `_` for readability."
  ],
  "ty:Double": [
   "Floating-point number (64 bits)",
   "`0.1 + 0.2` is not exactly `0.3`: fractions are stored in binary. For money, prefer `BigDecimal` or whole cents."
  ],
  "ty:Boolean": [
   "Logical type: true or false",
   "`&&` and `||` are evaluated lazily: if the answer is already clear, the right-hand side is not executed."
  ],
  "ty:Char": [
   "A single character (in single quotes)",
   "`Char` is not a number: use `.code` to get its code. `digitToInt()` converts a digit character to a number."
  ],
  "ty:String": [
   "Immutable text string",
   "Strings are immutable: methods return a new string. Triple quotes `\"\"\"` give multi-line text."
  ],
  "ty:\"$x ${y}\"": [
   "String template: insert values directly into text",
   "Insert a simple name with `$name` and any expression with `${expression}`. Concatenating strings with `+` is usually unnecessary."
  ],
  "ty:Any": [
   "Root type: every object is an Any",
   "Equivalent to `Object` in Java. To find out what is inside, use `is` or `when`."
  ],
  "ty:Unit": [
   "\"Nothing useful\": the result type of a function without return",
   "It is the analogue of `void`, but a real type. You do not need to write `: Unit` on a function: it is implied."
  ],
  "ty:Nothing": [
   "The \"never returns\" type: the function always throws an error",
   "`throw` and `return` themselves have type `Nothing`, so they fit into any expression, for example `x ?: return`."
  ],
  "ty:Int?": [
   "A type that allows null (question mark)",
   "`Int?` and `Int` are different types. Many functions have safe versions: `toIntOrNull()`, `firstOrNull()`, `getOrNull()`."
  ],
  "ty:?.": [
   "Safe call: if the left side is null, the result is null too",
   "The chain `a?.b?.c` will not crash: at the first `null` it stops and returns `null`."
  ],
  "ty:?:": [
   "Elvis operator: a default value for null",
   "On the right you can put not only a value but also `return` or `throw`: `val id = intent ?: return`."
  ],
  "ty:!!": [
   "Asserts \"this is not null\"; throws NullPointerException on null",
   "This is an \"emergency exit\": try to avoid `!!` by using `?.`, `?:` and `let`. Every `!!` is a possible app crash."
  ],
  "ty:Array": [
   "Fixed-size array",
   "The size of an array cannot be changed, but its elements can. Lists (`List`) are used more often because they are more flexible."
  ],
  "ty:Pair": [
   "A pair of values (and Triple, a triple)",
   "The notation `a to b` creates a `Pair`. It is convenient for returning two values from a function or building a `Map`."
  ],
  "ty:..": [
   "Range: 1..5, until, downTo, step",
   "`1..5` includes the right bound, `1 until 5` does not. Ranges also work with characters."
  ]
 }
};
