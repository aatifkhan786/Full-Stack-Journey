// ============================================================
//     JAVASCRIPT NUMBERS & MATH — COMPLETE NOTES
//     Paste karo VS Code mein, run karo, samjho
// ============================================================




// ============================================================
// PART 1: NUMBERS
// ============================================================




// ============================================================
// 1. NUMBER DECLARE KAISE KARTE HAIN
// ============================================================

// JS mein integer aur decimal ALAG TYPE NAHI HOTE — dono "number" hain
// C++ ya Java ki tarah int, float, double alag nahi hota — sab ek hi type: number
let score = 400;       // integer
let price = 99.99;     // decimal — abhi bhi "number" type hai
let temp = -10;        // negative

console.log(typeof score); // "number"
console.log(typeof price); // "number" — decimal bhi number hi hai

// new Number() — object banata hai — real code mein avoid karo
let balance = new Number(100);
console.log(typeof balance); // "object" — ab yeh object hai, number nahi

// Autoboxing: Primitive pe method call karte ho toh JS temporarily object bana deta hai
// Isliye (400).toFixed(2) kaam karta hai even though 400 primitive hai
let num = 400;
console.log(num.toFixed(2)); // "400.00" — autoboxing hua background mein




// ============================================================
// 2. .toString() — NUMBER KO STRING MEIN CONVERT KARO
// ============================================================

// Kyu zaroorat padti hai? Kyunki string ke methods use karne hon toh
// Jaise length, padStart, split etc.

let myNum = 100;
let strNum = myNum.toString();

console.log(strNum);         // "100"
console.log(typeof strNum);  // "string" — ab string hai

// Ab string ke methods use ho sakte hain
console.log(strNum.length);           // 3 — 3 characters hain "100" mein
console.log(strNum.padStart(6, "0")); // "000100" — leading zeros add ho gaye
console.log(strNum[0]);               // "1" — character access

// Different number systems mein convert karna
// toString(base) — base specify karo
console.log((255).toString(2));   // "11111111" — binary (base 2)
console.log((255).toString(8));   // "377"      — octal (base 8)
console.log((255).toString(16));  // "ff"       — hexadecimal (base 16)
console.log((255).toString(10));  // "255"      — decimal (base 10) — default

// Real use: Color code banana
let red = 255, green = 128, blue = 0;
let hex = `#${red.toString(16).padStart(2,"0")}${green.toString(16).padStart(2,"0")}${blue.toString(16).padStart(2,"0")}`;
console.log(hex); // "#ff8000" — orange color




// ============================================================
// 3. .toFixed(digits) — DECIMAL PLACES FIX KARO — SABSE ZYADA USE HOTA HAI
// ============================================================

// digits = kitne decimal places chahiye
// IMPORTANT: Yeh NUMBER nahi STRING return karta hai — interview mein zaroor poochha jaata hai

let pi = 3.14159265358979;

console.log(pi.toFixed(0)); // "3"      — koi decimal nahi
console.log(pi.toFixed(1)); // "3.1"    — 1 decimal place
console.log(pi.toFixed(2)); // "3.14"   — 2 decimal places (common use)
console.log(pi.toFixed(4)); // "3.1416" — 4 decimal places (rounding hota hai)
console.log(pi.toFixed(7)); // "3.1415927" — 7 places

// Return type STRING hai — number nahi
console.log(typeof pi.toFixed(2)); // "string" — yeh number nahi hai

// Number mein wapas convert karna ho toh
let priceStr = (99.999).toFixed(2); // "100.00" — string
let priceNum = parseFloat(priceStr); // 100 — number
console.log(typeof priceNum); // "number"

// Agar number mein decimal hai hi nahi toh zeros add karta hai
console.log((5).toFixed(3)); // "5.000" — zeros aa gaye

// REAL USE — E-commerce mein price dikhana
// GST calculation ke baad price bahut lamba ho jaata hai
let originalPrice = 849.9999997;
let displayPrice = originalPrice.toFixed(2);
console.log(`Price: ₹${displayPrice}`); // "Price: ₹850.00" — clean dikhta hai

// REAL USE — Percentage dikhana
let completed = 7;
let total = 13;
let percentage = ((completed / total) * 100).toFixed(1);
console.log(`${percentage}% complete`); // "53.8% complete"




// ============================================================
// 4. .toPrecision(digits) — TOTAL SIGNIFICANT DIGITS FIX KARO
// ============================================================

// digits = TOTAL kitne significant digits chahiye
// toFixed se ALAG hai — toFixed decimal ke BAAD count karta hai
// toPrecision TOTAL digits count karta hai — decimal ke pehle + baad dono milake
// IMPORTANT: String return karta hai

let num1 = 23.8966;

console.log(num1.toPrecision(1)); // "2e+1"    — sirf 1 digit, scientific notation
console.log(num1.toPrecision(2)); // "24"      — 2 digits, round hua
console.log(num1.toPrecision(3)); // "23.9"    — 3 digits total (2 before + 1 after decimal)
console.log(num1.toPrecision(4)); // "23.90"   — 4 digits
console.log(num1.toPrecision(6)); // "23.8966" — 6 digits (sab aa gaye)

// TRAP — jab number bada ho aur precision kam do
// Toh EXPONENTIAL NOTATION aa jaata hai — yeh interview mein poochha jaata hai
let bigNum = 1123.8966;
console.log(bigNum.toPrecision(3)); // "1.12e+3" — scientific notation!
// Kyun? Kyunki 1123 mein 4 digits hain, tumne 3 maange
// Toh JS ne scientific notation use kiya

// toFixed vs toPrecision — simple samjho:
// (3.14159).toFixed(2)      = "3.14"  — decimal ke BAAD 2 digits
// (3.14159).toPrecision(3)  = "3.14"  — TOTAL 3 digits
// (1234.5).toFixed(2)       = "1234.50" — decimal ke baad 2 digits
// (1234.5).toPrecision(3)   = "1.23e+3" — TOTAL 3 digits (exponential!)

// Real use: Scientific calculations mein — par carefully use karo
// Pehle pata karo ki tumhara number kitna bada ho sakta hai
// Agar large numbers expect ho rahi hain toh toPrecision se bachna




// ============================================================
// 5. .toLocaleString() — LOCAL FORMAT MEIN NUMBER DIKHAO
// ============================================================

// Locale ke hisaab se number format karta hai
// Different countries mein number format different hota hai
// India: 10,00,000 (lakh system)
// US: 1,000,000 (million system)
// Germany: 1.000.000 (dot as separator)

let amount = 1000000;

console.log(amount.toLocaleString());         // "1,000,000" — default system ke hisaab se
console.log(amount.toLocaleString("en-IN"));  // "10,00,000" — Indian format (LAKH system)
console.log(amount.toLocaleString("en-US"));  // "1,000,000" — US format
console.log(amount.toLocaleString("de-DE"));  // "1.000.000" — German format

// Options ke saath — currency format banana
console.log(amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR"
})); // "₹10,00,000.00" — Indian Rupee format

console.log(amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})); // "$1,000,000.00" — US Dollar format

// Minimum aur maximum decimal digits specify karna
console.log((1234.5).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})); // "1,234.50"

// Real use: Indian app mein salary ya price dikhana
let salary = 2500000;
console.log(`Salary: ₹${salary.toLocaleString("en-IN")}`); // "Salary: ₹25,00,000"

// Real use: Product price display
let productPrice = 1299;
console.log(productPrice.toLocaleString("en-IN", { style: "currency", currency: "INR" }));
// "₹1,299.00"




// ============================================================
// 6. NUMBER CLASS KI SPECIAL PROPERTIES — STATIC PROPERTIES
// ============================================================

// Yeh NUMBER CLASS pe directly call hote hain — variable pe nahi
// Number.MAX_VALUE — sirf Number ke saath, kisi variable ke saath nahi

// Number ranges
console.log(Number.MAX_VALUE);         // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);         // 5e-324 — sabse choti POSITIVE value (zero nahi)
console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991 (yeh hai 2^53 - 1)
console.log(Number.MIN_SAFE_INTEGER);  // -9007199254740991

// Safe integer matlab kya?
// JS floating point mein numbers store karta hai
// 2^53 - 1 ke baad accuracy nahi rehti — galat values aa sakti hain
// Isliye BigInt use karte hain bahut bade numbers ke liye
let normal = 9007199254740991;  // MAX_SAFE_INTEGER
let tooBig = 9007199254740993;  // unsafe — galat ho sakta hai
let bigIntNum = 9007199254740993n; // BigInt — accurate, n at end

// Infinity aur -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(1 / 0);                    // Infinity  — divide by zero
console.log(-1 / 0);                   // -Infinity
console.log(typeof Infinity);          // "number" — Infinity bhi number type ka hai

// NaN
console.log(Number.NaN);          // NaN
console.log(typeof NaN);          // "number" — TRICK QUESTION — NaN ka type bhi NUMBER hai!
// Yeh JS ka ek famous quirk hai — NaN "Not a Number" hai lekin type "number" hai




// ============================================================
// 7. NUMBER CLASS KE STATIC METHODS
// ============================================================

// .isInteger() — integer hai ya nahi
console.log(Number.isInteger(4));     // true  — integer hai
console.log(Number.isInteger(4.0));   // true  — 4.0 ko JS integer maanta hai
console.log(Number.isInteger(4.5));   // false — decimal hai
console.log(Number.isInteger("4"));   // false — string hai, number nahi
console.log(Number.isInteger(Infinity)); // false — Infinity integer nahi hai


// .isFinite() — finite number hai ya nahi
// Global isFinite() se alag hai — Number.isFinite() type conversion nahi karta
console.log(Number.isFinite(4));          // true  — normal number
console.log(Number.isFinite(Infinity));   // false — infinite hai
console.log(Number.isFinite(-Infinity));  // false
console.log(Number.isFinite(NaN));        // false — NaN finite nahi hai
console.log(Number.isFinite("4"));        // false — string hai, conversion nahi hogi


// .isNaN() — NaN hai ya nahi — RELIABLE WAY
// Global isNaN() se alag hai — Number.isNaN() sirf actual NaN ke liye true deta hai
console.log(Number.isNaN(NaN));        // true  — actual NaN hai
console.log(Number.isNaN(4));          // false — number hai
console.log(Number.isNaN("hello"));   // false — string hai, NaN nahi
console.log(Number.isNaN(undefined));  // false — undefined hai, NaN nahi

// Comparison: Global isNaN() vs Number.isNaN()
console.log(isNaN("hello"));         // true  — "hello" ko convert kiya, NaN aaya
console.log(Number.isNaN("hello")); // false — "hello" actual NaN nahi hai
// Number.isNaN() RELIABLE hai — hamesha yahi use karo


// .isSafeInteger() — safe range mein hai ya nahi
console.log(Number.isSafeInteger(9007199254740991));  // true  — exactly MAX_SAFE
console.log(Number.isSafeInteger(9007199254740992));  // false — ek zyada ho gaya
console.log(Number.isSafeInteger(42));                // true  — normal number




// ============================================================
// 8. parseInt() — STRING SE INTEGER NIKALO
// ============================================================

// parseInt(string, radix)
// radix optional hai — base specify karne ke liye (10 decimal, 2 binary, 16 hex)

console.log(parseInt("42"));       // 42  — simple
console.log(parseInt("42.9"));     // 42  — decimal ignore ho gaya, sirf integer
console.log(parseInt("42px"));     // 42  — units/text ignore ho gaya, number nikaal liya
console.log(parseInt("px42"));     // NaN — shuru mein number nahi mila toh NaN
console.log(parseInt("  42  "));  // 42  — spaces ignore hote hain
console.log(parseInt("12abc34"));  // 12  — pehle number tak hi leta hai

// Alag number systems — radix ke saath
console.log(parseInt("ff", 16));   // 255 — hexadecimal to decimal
console.log(parseInt("11", 2));    // 3   — binary to decimal (1*2 + 1 = 3)
console.log(parseInt("17", 8));    // 15  — octal to decimal

// Real use: CSS values se numbers nikalna
let fontSize = "16px";
let padding = "24px";
let newSize = parseInt(fontSize) + 4;  // 20
let newPadding = parseInt(padding) * 2; // 48
console.log(`font-size: ${newSize}px`);     // "font-size: 20px"
console.log(`padding: ${newPadding}px`);   // "padding: 48px"

// Real use: User ne string mein number diya
let userAge = "25years";
console.log(parseInt(userAge)); // 25 — number nikal liya




// ============================================================
// 9. parseFloat() — STRING SE DECIMAL NUMBER NIKALO
// ============================================================

console.log(parseFloat("3.14"));       // 3.14 — decimal bhi aaya
console.log(parseFloat("3.14abc"));    // 3.14 — number part nikal liya
console.log(parseFloat("abc3.14"));    // NaN  — shuru mein number nahi
console.log(parseFloat("3.14.59"));    // 3.14 — pehle decimal point tak
console.log(parseFloat("  3.14  ")); // 3.14 — spaces ignore

// parseInt vs parseFloat — kab kya use karo:
// parseInt  — jab sirf integer chahiye (age, quantity, count)
// parseFloat — jab decimal bhi chahiye (price, rating, percentage)

// Real use: Price string se number banana
let priceString = "₹1,299.99";
let cleanPrice = parseFloat(priceString.replace("₹", "").replace(",", ""));
console.log(cleanPrice); // 1299.99

// Real use: Rating
let ratingStr = "4.5 stars";
console.log(parseFloat(ratingStr)); // 4.5




// ============================================================
// 10. Number() — DIRECTLY NUMBER MEIN CONVERT KARO
// ============================================================

// parseInt/parseFloat se STRICT hai — partial strings accept nahi karta
console.log(Number("42"));       // 42    — valid number string
console.log(Number("42.5"));     // 42.5  — decimal bhi
console.log(Number(""));         // 0     — empty string zero banta hai
console.log(Number("  "));      // 0     — sirf spaces bhi zero
console.log(Number(true));       // 1     — boolean true = 1
console.log(Number(false));      // 0     — boolean false = 0
console.log(Number(null));       // 0     — null bhi zero
console.log(Number(undefined));  // NaN   — undefined se NaN
console.log(Number("42abc"));    // NaN   — invalid string → NaN (parseInt se alag!)
console.log(Number("abc"));      // NaN

// parseInt vs Number — KEY DIFFERENCE
console.log(parseInt("42px")); // 42  — number part nikal leta hai (lenient)
console.log(Number("42px"));   // NaN — strict, invalid string → NaN




// ============================================================
// PART 2: MATH OBJECT
// ============================================================
// Math ek built-in OBJECT hai JavaScript ka
// Import karne ki zaroorat nahi — globally available hai
// Capital M hamesha — Math (small m nahi chalega)
// Math ke properties aur methods read-only hain — change nahi kar sakte




// ============================================================
// 11. MATH CONSTANTS — MATHEMATICAL VALUES
// ============================================================

console.log(Math.PI);      // 3.141592653589793  — pi (circle ke liye)
console.log(Math.E);       // 2.718281828459045  — Euler's number (logarithm ke liye)
console.log(Math.SQRT2);   // 1.4142135623730951 — square root of 2
console.log(Math.SQRT1_2); // 0.7071067811865476 — square root of 1/2
console.log(Math.LN2);     // 0.6931471805599453 — natural log of 2
console.log(Math.LN10);    // 2.302585092994046  — natural log of 10
console.log(Math.LOG2E);   // 1.4426950408889634 — log base 2 of E
console.log(Math.LOG10E);  // 0.4342944819032518 — log base 10 of E




// ============================================================
// 12. Math.abs() — NEGATIVE KO POSITIVE KARO (ABSOLUTE VALUE)
// ============================================================

// Negative positive ho jaata hai
// Positive already positive hai — same rahega
// Zero zero rahega

console.log(Math.abs(-4));    // 4   — negative positive ho gaya
console.log(Math.abs(4));     // 4   — positive already tha
console.log(Math.abs(-3.5));  // 3.5 — decimal ke saath bhi kaam karta hai
console.log(Math.abs(0));     // 0   — zero zero rahega
console.log(Math.abs(-0));    // 0

// YEH MAT SOCHO ki positive doge toh negative ho jaayega — aisa NAHI hota
console.log(Math.abs(5)); // 5 — same rahega, negative nahi hoga

// Real use: Do points ke beech distance
let point1 = 10;
let point2 = 3;
let distance = Math.abs(point1 - point2);
console.log(distance); // 7 — chahe koi bhi bada ho, distance positive hogi

// Real use: Kitna difference hai do values mein
let expected = 100;
let actual = 87;
let diff = Math.abs(expected - actual);
console.log(`${diff} units ka difference hai`); // "13 units ka difference hai"




// ============================================================
// 13. Math.round() — NEAREST INTEGER PE ROUND KARO
// ============================================================

// Standard rounding — .5 ya zyada toh upar, .5 se kam toh neeche
console.log(Math.round(4.4));   // 4  — .4 < .5 toh neeche
console.log(Math.round(4.5));   // 5  — exactly .5 toh upar
console.log(Math.round(4.6));   // 5  — .6 > .5 toh upar
console.log(Math.round(4.0));   // 4  — exact integer
console.log(Math.round(-4.5));  // -4 — negative mein .5 toh upar (zero ki taraf)
console.log(Math.round(-4.6));  // -5 — negative mein .6 toh neeche (zyada negative)

// Real use: Rating dikhana
let avgRating = 4.356;
console.log(`Rating: ${Math.round(avgRating)}/5`); // "Rating: 4/5"

// Real use: Percentage
let percent = 67.4999;
console.log(`${Math.round(percent)}%`); // "67%"




// ============================================================
// 14. Math.ceil() — HAMESHA UPAR ROUND KARO
// ============================================================

// CEIL = CEILING = CHHAT — hamesha upar wale integer tak jaata hai
// Chahe .1 hi ho — phir bhi upar jaayega
// Sirf exact integer pe same rahega

console.log(Math.ceil(4.1));    // 5  — .1 bhi tha toh upar
console.log(Math.ceil(4.5));    // 5  — upar
console.log(Math.ceil(4.9));    // 5  — upar
console.log(Math.ceil(4.0));    // 4  — exact integer, same
console.log(Math.ceil(-4.1));   // -4 — negative mein upar = zero ki taraf
console.log(Math.ceil(-4.9));   // -4 — negative mein hamesha zero ki taraf

// Real use: Pagination — kitne pages chahiye
let totalItems = 23;
let perPage = 10;
// 23 / 10 = 2.3 — matlab 3 pages chahiye (2 full + 1 partial)
let pages = Math.ceil(totalItems / perPage);
console.log(`${pages} pages chahiye`); // "3 pages chahiye"

// Real use: Delivery days — partial din bhi full din count hoga
let hoursLeft = 25.3; // ek din se zyada
let daysLeft = Math.ceil(hoursLeft / 24);
console.log(`${daysLeft} din mein deliver hoga`); // "2 din mein deliver hoga"

// Real use: Subscription — minimum amount charge karna
let usageHours = 2.1; // 2.1 hours use ki
let ratePerHour = 100;
let charge = Math.ceil(usageHours) * ratePerHour; // 3 hours ka charge lenge
console.log(`Charge: ₹${charge}`); // "Charge: ₹300"




// ============================================================
// 15. Math.floor() — HAMESHA NEECHE ROUND KARO
// ============================================================

// FLOOR = ZAMEEN — hamesha neeche wale integer tak aata hai
// Chahe .9 hi ho — phir bhi neeche jaayega
// Sirf exact integer pe same rahega

console.log(Math.floor(4.9));   // 4  — .9 tha phir bhi neeche
console.log(Math.floor(4.5));   // 4  — .5 tha phir bhi neeche
console.log(Math.floor(4.1));   // 4  — neeche
console.log(Math.floor(4.0));   // 4  — exact integer
console.log(Math.floor(-4.1));  // -5 — negative mein neeche = zyada negative
console.log(Math.floor(-4.9));  // -5 — negative mein hamesha zyada negative

// floor vs ceil vs round — jab positive numbers ho:
// Math.floor(4.9) = 4 — neeche
// Math.ceil(4.1)  = 5 — upar
// Math.round(4.5) = 5 — nearest

// Real use: Age calculate karna — poora saal hi count hota hai
let ageInYears = 22.8;
console.log(`Age: ${Math.floor(ageInYears)} years`); // "Age: 22 years"

// Real use: Math.random() ke saath — SABSE COMMON USE
// Decimal ko integer mein convert karna
console.log(Math.floor(Math.random() * 10)); // 0 to 9 ke beech koi integer

// Real use: Array mein random index nikalna
let fruits = ["apple", "banana", "mango", "orange"];
let randomIndex = Math.floor(Math.random() * fruits.length);
console.log(fruits[randomIndex]); // random fruit




// ============================================================
// 16. Math.trunc() — SIRF DECIMAL PART HATAO
// ============================================================

// floor se ALAG hai — floor hamesha neeche jaata hai
// trunc sirf decimal part remove karta hai — negative mein bhi

console.log(Math.trunc(4.9));   // 4  — decimal hata diya
console.log(Math.trunc(4.1));   // 4  — decimal hata diya
console.log(Math.trunc(-4.9));  // -4 — NEGATIVE mein floor se ALAG hai
console.log(Math.trunc(-4.1));  // -4 — sirf decimal hata diya

// floor vs trunc — NEGATIVE mein difference:
console.log(Math.floor(-4.9));  // -5 — neeche gaya (zyada negative)
console.log(Math.trunc(-4.9));  // -4 — sirf decimal hata diya (zero ki taraf)

// Positive numbers mein floor aur trunc same hain:
console.log(Math.floor(4.9));   // 4
console.log(Math.trunc(4.9));   // 4 — same result




// ============================================================
// 17. Math.sqrt() — SQUARE ROOT NIKALO
// ============================================================

console.log(Math.sqrt(25));   // 5     — 5*5 = 25
console.log(Math.sqrt(2));    // 1.414... — irrational number
console.log(Math.sqrt(0));    // 0
console.log(Math.sqrt(1));    // 1
console.log(Math.sqrt(-1));   // NaN   — negative ka square root real nahi hota

// Real use: Pythagoras theorem — two points ke beech distance
let x1 = 0, y1 = 0, x2 = 3, y2 = 4;
let distance2 = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
console.log(distance2); // 5 — classic 3-4-5 triangle

// Real use: Area se side nikalna
let area = 144; // square ka area
let side = Math.sqrt(area);
console.log(`Side: ${side}`); // "Side: 12"




// ============================================================
// 18. Math.pow(base, exponent) — POWER CALCULATE KARO
// ============================================================

console.log(Math.pow(2, 10));   // 1024  — 2 ki power 10
console.log(Math.pow(3, 3));    // 27    — 3 cube
console.log(Math.pow(4, 0.5));  // 2     — 0.5 power = square root
console.log(Math.pow(8, 1/3));  // 2     — cube root
console.log(Math.pow(2, -1));   // 0.5   — negative power = 1/2
console.log(Math.pow(2, 0));    // 1     — koi bhi number ka power 0 = 1

// Modern way — ** operator bhi same kaam karta hai
console.log(2 ** 10); // 1024 — same result
console.log(3 ** 3);  // 27   — same result

// Real use: Compound interest
let principal = 10000;
let rate = 0.08; // 8% per year
let years = 5;
let amount1 = principal * Math.pow(1 + rate, years);
console.log(`₹${amount1.toFixed(2)}`); // future value




// ============================================================
// 19. Math.min() — SABSE CHOTI VALUE NIKALO
// ============================================================

console.log(Math.min(4, 3, 6, 8, 1));  // 1   — sabse chota
console.log(Math.min(-1, -5, -3));      // -5  — negatives mein sabse chota
console.log(Math.min(5));               // 5   — ek argument
console.log(Math.min());                // Infinity — koi argument nahi
console.log(Math.min(1, NaN, 3));       // NaN — ek bhi NaN ho toh result NaN

// Spread operator ke saath array se minimum nikalna
let prices = [299, 499, 99, 199, 399];
console.log(Math.min(...prices)); // 99 — spread kiya array ko

// Real use: Price comparison
let amazon = 1299;
let flipkart = 1199;
let meesho = 999;
let cheapest = Math.min(amazon, flipkart, meesho);
console.log(`Sabse sasta: ₹${cheapest}`); // "Sabse sasta: ₹999"

// Real use: Value ko maximum limit se neeche rakhna (clamp upper bound)
let userScore = 150; // maximum 100 allowed hai
let cappedScore = Math.min(userScore, 100);
console.log(cappedScore); // 100 — 100 se zyada nahi jaayega




// ============================================================
// 20. Math.max() — SABSE BADI VALUE NIKALO
// ============================================================

console.log(Math.max(4, 3, 6, 8, 1));  // 8    — sabse bada
console.log(Math.max(-1, -5, -3));      // -1   — negatives mein sabse bada
console.log(Math.max());                // -Infinity — koi argument nahi
console.log(Math.max(1, NaN, 3));       // NaN  — koi NaN ho toh NaN

// Array se maximum
let scores = [85, 92, 78, 96, 88, 72];
console.log(Math.max(...scores)); // 96 — highest score

// Real use: Value ko minimum se upar rakhna (clamp lower bound)
let temperature = -5; // minimum 0 allowed hai
let safeTemp = Math.max(temperature, 0);
console.log(safeTemp); // 0 — 0 se neeche nahi jaayega

// Real use: Dynamic width/height banana
let contentWidth = 200;
let minWidth = 300;
let finalWidth = Math.max(contentWidth, minWidth);
console.log(finalWidth); // 300 — minimum guaranteed




// ============================================================
// 21. Math.sign() — POSITIVE, NEGATIVE YA ZERO CHECK KARO
// ============================================================

console.log(Math.sign(5));    // 1   — positive hai
console.log(Math.sign(-5));   // -1  — negative hai
console.log(Math.sign(0));    // 0   — zero hai
console.log(Math.sign(3.7));  // 1   — positive decimal
console.log(Math.sign(-3.7)); // -1  — negative decimal

// Real use: Direction check karna game mein
let velocity = -50; // left ja raha hai
let direction = Math.sign(velocity);
if (direction === 1)  console.log("Right");
if (direction === -1) console.log("Left"); // yeh print hoga
if (direction === 0)  console.log("Ruka hua hai");

// Real use: Profit ya loss check karna
let profitLoss = -5000;
if (Math.sign(profitLoss) === -1) {
    console.log(`Loss: ₹${Math.abs(profitLoss)}`); // "Loss: ₹5000"
} else {
    console.log(`Profit: ₹${profitLoss}`);
}




// ============================================================
// 22. Math.random() — RANDOM NUMBER — SABSE ZYADA USE HOTA HAI
// ============================================================

// Hamesha 0 (INCLUSIVE) se 1 (EXCLUSIVE) ke beech decimal deta hai
// Kabhi exactly 1 nahi aata
// Har baar alag value

console.log(Math.random()); // 0.52... — har baar alag hoga
console.log(Math.random()); // 0.18...
console.log(Math.random()); // 0.93...

// Simple ranges:
// 0 to 9 (integer)
console.log(Math.floor(Math.random() * 10));      // 0, 1, 2, ..., 9

// 1 to 10 (integer, dono inclusive)
console.log(Math.floor(Math.random() * 10) + 1); // 1, 2, 3, ..., 10

// 0 to 100 (integer)
console.log(Math.floor(Math.random() * 101));     // 0 to 100




// ============================================================
// 23. Math.random() CUSTOM RANGE FORMULA — BAHUT IMPORTANT
// ============================================================

// FORMULA — YEH YAAD KAR LO
// Math.floor(Math.random() * (max - min + 1)) + min

const min = 10;
const max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum); // 10, 11, 12, ..., 19, 20 — koi bhi

// STEP BY STEP SAMJHO — WHY DOES THIS WORK:

// Step 1: Math.random() → 0.0 to 0.999...
// Step 2: (max - min + 1) = (20 - 10 + 1) = 11
//         Iska matlab hai range mein 11 numbers hain: 10,11,12,13,14,15,16,17,18,19,20
// Step 3: Math.random() * 11 → 0.0 to 10.999...
// Step 4: Math.floor(0.0 to 10.999) → 0 to 10 (integer)
// Step 5: + min (+10) → 10 to 20 (range shift ho gaya)

// +1 KYUN zaroori hai:
// Bina +1: Math.random() * (20-10) = 0 to 9.999 → floor → 0 to 9 → + 10 = 10 to 19
// Max value 20 KABHI nahi aayegi — isliye +1 zaroori hai

// +min KYUN zaroori hai:
// Bina min: range hamesha 0 se start hogi
// +min se range desired starting point pe shift ho jaati hai

// REAL USES:

// Dice game — 1 to 6
let dice = Math.floor(Math.random() * 6) + 1;
console.log(`Dice: ${dice}`); // 1, 2, 3, 4, 5, ya 6

// OTP generate — 6 digit (100000 to 999999)
let otp = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
console.log(`OTP: ${otp}`); // 100000 to 999999

// Color generate
let r = Math.floor(Math.random() * 256); // 0 to 255
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
console.log(`rgb(${r}, ${g}, ${b})`); // random color

// Array se random element
let colors = ["red", "green", "blue", "yellow", "purple"];
let randomColor = colors[Math.floor(Math.random() * colors.length)];
console.log(randomColor); // random color name




// ============================================================
// 24. Math.log() — LOGARITHM
// ============================================================

// Math.log()   — natural logarithm (base e)
// Math.log2()  — base 2 logarithm
// Math.log10() — base 10 logarithm

console.log(Math.log(1));        // 0      — log(1) hamesha 0 hota hai
console.log(Math.log(Math.E));   // 1      — log(e) = 1
console.log(Math.log(10));       // 2.302...
console.log(Math.log(-1));       // NaN    — negative ka log nahi hota

console.log(Math.log2(8));       // 3      — 2^3 = 8
console.log(Math.log2(1024));    // 10     — 2^10 = 1024
console.log(Math.log2(1));       // 0

console.log(Math.log10(1000));   // 3      — 10^3 = 1000
console.log(Math.log10(100));    // 2      — 10^2 = 100
console.log(Math.log10(1));      // 0




// ============================================================
// 25. TRIGONOMETRY — Math.sin(), Math.cos(), Math.tan()
// ============================================================

// IMPORTANT: Radians mein input dena hota hai, degrees mein nahi
// Degrees to Radians convert karna: degrees * (Math.PI / 180)

let deg90 = 90 * (Math.PI / 180); // 90 degrees in radians

console.log(Math.sin(0));         // 0   — sin(0°)
console.log(Math.sin(deg90));     // 1   — sin(90°) = 1
console.log(Math.cos(0));         // 1   — cos(0°) = 1
console.log(Math.cos(Math.PI));   // -1  — cos(180°) = -1
console.log(Math.tan(Math.PI/4)); // 1   — tan(45°) = 1

// Real use: Game development mein circular motion
// Real use: Animations mein wave effect




// ============================================================
// 26. INTERVIEW MEIN ZAROOR AANE WALE POINTS
// ============================================================

// --- NaN KA TYPE --- SABSE FAMOUS TRICK QUESTION
console.log(typeof NaN); // "number" — NaN ka type NUMBER hai
// "Not a Number" hai lekin type "number" hai — yeh JS ka quirk hai

// --- NaN CHECK KARNE KA SAHI TARIKA ---
// isNaN() vs Number.isNaN() — dono alag hain
console.log(isNaN("hello"));         // true  — string ko convert karta hai
console.log(Number.isNaN("hello")); // false — string NaN nahi hai
console.log(Number.isNaN(NaN));     // true  — YAHI RELIABLE HAI — use this

// --- INFINITY ---
console.log(1 / 0);           // Infinity  — error nahi aata
console.log(-1 / 0);          // -Infinity
console.log(typeof Infinity);  // "number"  — Infinity bhi number type ka hai
console.log(isFinite(Infinity)); // false

// --- FLOATING POINT PROBLEM — FAMOUS JS BUG ---
console.log(0.1 + 0.2);           // 0.30000000000000004 — WRONG!
console.log(0.1 + 0.2 === 0.3);  // false — kabhi direct compare mat karo decimals
// FIX:
console.log((0.1 + 0.2).toFixed(1) === "0.3"); // true — toFixed se compare karo

// --- parseInt vs Number DIFFERENCE ---
console.log(parseInt("42px"));  // 42  — number part nikalta hai (lenient)
console.log(Number("42px"));    // NaN — strict, invalid toh NaN

// --- Math KA typeof ---
console.log(typeof Math); // "object" — Math ek object hai, class nahi




// ============================================================
// 27. QUICK REFERENCE TABLE
// ============================================================

/*
NUMBER METHODS:
METHOD                     KYA KARTA HAI                              RETURN TYPE
.toString(base)            Number → String (base optional hai)        String
.toFixed(n)                Decimal ke BAAD n digits fix karo          String
.toPrecision(n)            TOTAL n significant digits fix karo        String
.toLocaleString(locale)    Local format mein dikhao                   String
Number.isInteger(n)        Integer hai ya nahi                        Boolean
Number.isFinite(n)         Finite hai ya nahi                         Boolean
Number.isNaN(n)            NaN hai ya nahi (RELIABLE)                 Boolean
Number.isSafeInteger(n)    Safe range mein hai ya nahi                Boolean
Number.MAX_VALUE           Sabse bada number                          Number
Number.MAX_SAFE_INTEGER    9007199254740991                           Number
parseInt(str, radix)       String → Integer (radix optional)          Number
parseFloat(str)            String → Decimal                           Number
Number(value)              Strict convert (NAHI aaya toh NaN)         Number


MATH METHODS:
METHOD                     KYA KARTA HAI                              RETURN TYPE
Math.abs(n)                Negative → Positive                        Number
Math.round(n)              Nearest integer (.5 upar jaata hai)        Number
Math.ceil(n)               HAMESHA UPAR (ceiling)                     Number
Math.floor(n)              HAMESHA NEECHE (floor)                     Number
Math.trunc(n)              Sirf decimal hatao (floor se alag)         Number
Math.sqrt(n)               Square root                                 Number
Math.pow(base, exp)        Power calculate                            Number
Math.min(a, b, c, ...)     Sabse chota                                Number
Math.max(a, b, c, ...)     Sabse bada                                 Number
Math.random()              0 to 1 random decimal                      Number
Math.sign(n)               1, -1, ya 0                                Number
Math.log(n)                Natural logarithm                          Number
Math.log2(n)               Base-2 logarithm                           Number
Math.log10(n)              Base-10 logarithm                          Number
Math.PI                    3.14159...                                  Number
Math.E                     2.71828...                                  Number


KEY POINTS FOR INTERVIEW:
1. typeof NaN → "number"  — NaN ka type number hai — TRICK QUESTION
2. typeof Infinity → "number" — Infinity bhi number type hai
3. Number.isNaN() use karo, global isNaN() nahi — zyada reliable hai
4. .toFixed() aur .toPrecision() dono STRING return karte hain, number nahi
5. 0.1 + 0.2 === 0.3 → FALSE — floating point problem
6. parseInt("42px") → 42, Number("42px") → NaN — yeh difference yaad rakho
7. Math.floor() aur Math.trunc() negative mein alag hote hain
8. Math.random() formula: Math.floor(Math.random() * (max - min + 1)) + min
*/