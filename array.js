// ============================================================
//          JAVASCRIPT ARRAYS — COMPLETE NOTES
//          Paste karo VS Code mein, run karo, samjho
// ============================================================




// ============================================================
// 1. ARRAY KYA HAI AUR KYUN CHAHIYE
// ============================================================

// Array ek aisa data structure hai jisme EK variable ke andar
// multiple values store kar sakte ho
// Bina array ke alag alag variables banana padta:
let hero1 = "Thor";
let hero2 = "IronMan";
let hero3 = "Spiderman";
// Yeh messy hai — agar 100 heroes hon?

// Array ke saath:
const myArr = [0, 1, 2, 3, 4, 5];
// Ek variable, saari values — clean aur organized

// Array ke andar koi bhi data type rakh sakte ho
// Numbers, strings, booleans, objects, dusra array — sab kuch
const mixedArr = [1, "Hitesh", true, null, {name: "JS"}, [1, 2]];
// JavaScript arrays RESIZABLE hain — ek baar declare karne ke baad
// aur elements add/remove kar sakte ho




// ============================================================
// 2. ARRAY DECLARE KARNE KE TARIKE
// ============================================================

// Way 1 — Array Literal (HAMESHA YAHI USE KARO)
const myArr2 = [0, 1, 2, 3, 4, 5];

// Way 2 — new Array() constructor
const myArr3 = new Array(1, 2, 3, 4, 5);
// Note: new Array(5) matlab 5 elements wala EMPTY array — not [5]
// new Array(5) → [ , , , , ] — 5 empty slots
// new Array(1, 2, 3) → [1, 2, 3] — actual values

// Way 3 — Array.of() — variables se array banana
let score1 = 100;
let score2 = 200;
let score3 = 300;
const scoresArr = Array.of(score1, score2, score3);
console.log(scoresArr); // [100, 200, 300]
// Koi bhi values pass karo — unka array ban jaata hai

// Way 4 — Array.from() — kisi aur cheez ko array mein convert karna
// (Neeche detail mein explain kiya hai)




// ============================================================
// 3. ARRAY ELEMENTS ACCESS KARNA — INDEXING
// ============================================================

const myArr4 = [0, 1, 2, 3, 4, 5];
//              0  1  2  3  4  5   <-- INDEX NUMBERS

// INDEX 0 SE START HOTA HAI — yeh bahut important hai
console.log(myArr4[0]); // 0 — pehla element
console.log(myArr4[1]); // 1 — doosra element
console.log(myArr4[3]); // 3 — fourth element
console.log(myArr4[5]); // 5 — last element

// Jo index exist na kare
console.log(myArr4[10]); // undefined — index nahi hai

// JavaScript arrays ASSOCIATIVE nahi hote
// Matlab string keys se access NAHI kar sakte
// myArr4["one"] — yeh kaam nahi karta arrays mein




// ============================================================
// 4. .length — ARRAY MEIN KITNE ELEMENTS HAIN
// ============================================================

const myArr5 = [0, 1, 2, 3, 4, 5];
console.log(myArr5.length); // 6 — 6 elements hain

// Last element access karna — length se
console.log(myArr5[myArr5.length - 1]); // 5 — last element
// Kyun -1? Kyunki length 6 hai lekin last index 5 hai (0-based)

// Real use: Loop mein
for (let i = 0; i < myArr5.length; i++) {
    console.log(myArr5[i]);
}




// ============================================================
// 5. .push() — END MEIN ELEMENT ADD KARO
// ============================================================

const myArr6 = [0, 1, 2, 3, 4, 5];
console.log(myArr6); // [0, 1, 2, 3, 4, 5]

myArr6.push(6);    // end mein 6 add hua
myArr6.push(500);  // end mein 500 add hua

console.log(myArr6); // [0, 1, 2, 3, 4, 5, 6, 500]

// push() ORIGINAL array ko modify karta hai — naya array nahi banata
// push() return karta hai: nayi length of array
let newLength = myArr6.push(7);
console.log(newLength); // 9 — ab 9 elements hain

// Real use: User ne koi item cart mein add kiya
let cart = ["apple", "banana"];
cart.push("mango");
console.log(cart); // ["apple", "banana", "mango"]




// ============================================================
// 6. .pop() — END SE ELEMENT REMOVE KARO
// ============================================================

const myArr7 = [0, 1, 2, 3, 4, 5];
console.log(myArr7); // [0, 1, 2, 3, 4, 5]

myArr7.pop(); // last element remove ho gaya
console.log(myArr7); // [0, 1, 2, 3, 4]

// pop() return karta hai: jo element REMOVE hua
let removedElement = myArr7.pop();
console.log(removedElement); // 4 — yeh nikala
console.log(myArr7);         // [0, 1, 2, 3] — yeh bacha

// push aur pop dono END se kaam karte hain
// push = end mein add
// pop  = end se remove

// Real use: Undo functionality — last action remove karna
let actions = ["type", "paste", "format"];
let lastAction = actions.pop();
console.log(`Undo: ${lastAction}`); // "Undo: format"
console.log(actions); // ["type", "paste"]




// ============================================================
// 7. .unshift() — SHURU MEIN ELEMENT ADD KARO
// ============================================================

const myArr8 = [1, 2, 3, 4, 5];
console.log(myArr8); // [1, 2, 3, 4, 5]

myArr8.unshift(0); // start mein 0 add kiya
console.log(myArr8); // [0, 1, 2, 3, 4, 5]

// unshift() COSTLY OPERATION HAI — kyun?
// Shuru mein add karne ke liye SAARE existing elements shift karne padte hain
// Agar 10000 elements hain toh 10000 elements shift honge
// push() se zyada slow hai isliye

// unshift() return karta hai: nayi length
let newLen = myArr8.unshift(9);
console.log(newLen); // 7 — ab 7 elements hain

// Real use: Priority item ko list mein sabse upar dalna
let todoList = ["Buy milk", "Call doctor"];
todoList.unshift("URGENT: Submit report");
console.log(todoList); // ["URGENT: Submit report", "Buy milk", "Call doctor"]




// ============================================================
// 8. .shift() — SHURU SE ELEMENT REMOVE KARO
// ============================================================

const myArr9 = [0, 1, 2, 3, 4, 5];
console.log(myArr9); // [0, 1, 2, 3, 4, 5]

myArr9.shift(); // first element remove ho gaya
console.log(myArr9); // [1, 2, 3, 4, 5]

// shift() return karta hai: jo element REMOVE hua
let firstElement = myArr9.shift();
console.log(firstElement); // 1 — yeh nikala
console.log(myArr9);       // [2, 3, 4, 5] — yeh bacha

// unshift aur shift dono START se kaam karte hain
// unshift = start mein add
// shift   = start se remove

// push/pop vs unshift/shift comparison:
// push()    → END mein add    — FAST
// pop()     → END se remove   — FAST
// unshift() → START mein add  — SLOW (saari values shift hongi)
// shift()   → START se remove — SLOW (saari values shift hongi)

// Real use: Queue implement karna — first in, first out
let queue = ["customer1", "customer2", "customer3"];
let nextCustomer = queue.shift(); // pehle wala serve hoga
console.log(nextCustomer); // "customer1"
console.log(queue); // ["customer2", "customer3"]




// ============================================================
// 9. .includes() — ELEMENT HAI YA NAHI — TRUE/FALSE
// ============================================================

const myArr10 = [1, 2, 3, 4, 5];

console.log(myArr10.includes(3)); // true  — 3 hai array mein
console.log(myArr10.includes(9)); // false — 9 nahi hai
console.log(myArr10.includes(1)); // true

// Case sensitive hai strings ke liye
const names = ["Hitesh", "Rahul", "Priya"];
console.log(names.includes("hitesh")); // false — capital H chahiye
console.log(names.includes("Hitesh")); // true

// Return type: BOOLEAN — true ya false
// Real use: Duplicate check karne ke liye
let existingUsers = ["alice", "bob", "charlie"];
let newUser = "bob";
if (existingUsers.includes(newUser)) {
    console.log("User already exists!");
} else {
    existingUsers.push(newUser);
}




// ============================================================
// 10. .indexOf() — ELEMENT KIS INDEX PE HAI
// ============================================================

const myArr11 = [1, 2, 3, 4, 5, 3]; // 3 do baar hai

console.log(myArr11.indexOf(3));  // 2  — PEHLI occurrence ka index
console.log(myArr11.indexOf(9));  // -1 — nahi mila toh -1 (hamesha -1)
console.log(myArr11.indexOf(1));  // 0  — pehla element ka index

// Sirf PEHLI occurrence ka index deta hai
// Doosri occurrence ke liye lastIndexOf() use karo
console.log(myArr11.lastIndexOf(3)); // 5 — aakhri 3 ka index

// -1 check karna:
if (myArr11.indexOf(9) === -1) {
    console.log("9 nahi hai array mein");
}

// includes() vs indexOf():
// includes() → sirf yes/no — readable
// indexOf()  → position chahiye toh use karo




// ============================================================
// 11. .join() — ARRAY KO STRING MEIN CONVERT KARO
// ============================================================

const myArr12 = [0, 1, 2, 3, 4, 5];

// Default — comma se join hota hai
let joinedDefault = myArr12.join();
console.log(joinedDefault);        // "0,1,2,3,4,5"
console.log(typeof joinedDefault); // "string" — ab string hai array nahi

// Custom separator de sakte ho
console.log(myArr12.join(" "));    // "0 1 2 3 4 5" — space separator
console.log(myArr12.join(" - "));  // "0 - 1 - 2 - 3 - 4 - 5"
console.log(myArr12.join(""));     // "012345" — koi separator nahi

// IMPORTANT: join() ORIGINAL array nahi badalta — naya string return karta hai
console.log(myArr12); // [0, 1, 2, 3, 4, 5] — same hai

// Real use: Array of words ko sentence banana
let words = ["Hello", "my", "name", "is", "Hitesh"];
console.log(words.join(" ")); // "Hello my name is Hitesh"

// Real use: Array of values ko CSV banana
let data = ["Hitesh", "22", "Developer", "India"];
console.log(data.join(",")); // "Hitesh,22,Developer,India"




// ============================================================
// 12. .slice() — ARRAY KA PIECE NIKALO (ORIGINAL SAFE RAHTA HAI)
// ============================================================

// slice(start, end) — start se end-1 tak elements nikalta hai
// ORIGINAL ARRAY NAHI BADALTA — NAYA ARRAY RETURN KARTA HAI
// Yeh SHALLOW COPY hai

const myArr13 = [1, 2, 3, 4, 5];

// slice(start) — start se end tak
console.log(myArr13.slice(1));    // [2, 3, 4, 5] — index 1 se end tak
console.log(myArr13.slice(2));    // [3, 4, 5]

// slice(start, end) — start se end-1 tak (end INCLUDE NAHI HOTA)
console.log(myArr13.slice(1, 3)); // [2, 3] — index 1 aur 2 (3 nahi)
console.log(myArr13.slice(0, 2)); // [1, 2]

// Negative values — peeche se count karna
console.log(myArr13.slice(-2));   // [4, 5] — last 2 elements
console.log(myArr13.slice(-3, -1)); // [3, 4] — peeche se 3rd to peeche se 2nd

// ORIGINAL ARRAY SAFE HAI — slice karne ke baad bhi
console.log(myArr13); // [1, 2, 3, 4, 5] — kuch nahi badla

// Real use: Array ka copy banana
let originalArr = [1, 2, 3, 4, 5];
let copyArr = originalArr.slice(); // poora copy — slice() bina arguments ke
copyArr.push(6);
console.log(originalArr); // [1, 2, 3, 4, 5] — safe hai
console.log(copyArr);     // [1, 2, 3, 4, 5, 6]

// Real use: Pagination — page 2 ke items nikalna
let allItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let page2 = allItems.slice(3, 6); // items 4, 5, 6
console.log(page2); // [4, 5, 6]




// ============================================================
// 13. .splice() — ARRAY SE ELEMENTS REMOVE/ADD KARO
//               (ORIGINAL ARRAY BADAL JAATA HAI)
// ============================================================

// splice(startIndex, deleteCount, ...itemsToAdd)
// startIndex = kahan se shuru karo
// deleteCount = kitne elements remove karo
// itemsToAdd = kya add karna hai (optional)
// ORIGINAL ARRAY MODIFY HOTA HAI
// Return value: jo elements REMOVE hue unka array

const myArr14 = [1, 2, 3, 4, 5];

// Sirf remove karna
let removed = myArr14.splice(1, 3); // index 1 se 3 elements nikalo
console.log(removed);   // [2, 3, 4] — yeh nikle
console.log(myArr14);   // [1, 5]    — yeh bacha — ORIGINAL BADAL GAYA

// RESET karke dobara example
const myArr15 = [1, 2, 3, 4, 5];

// Remove aur add karna
let removed2 = myArr15.splice(1, 2, 99, 100);
console.log(removed2);  // [2, 3] — yeh nikle
console.log(myArr15);   // [1, 99, 100, 4, 5] — 2,3 gaye, 99,100 aaye

// Sirf add karna (kuch remove nahi)
const myArr16 = [1, 2, 4, 5];
myArr16.splice(2, 0, 3); // index 2 pe, 0 remove, 3 add karo
console.log(myArr16); // [1, 2, 3, 4, 5] — 3 beech mein ghus gaya

// Real use: Specific position pe element insert karna
// Real use: Ek element ko replace karna




// ============================================================
// 14. SLICE vs SPLICE — INTERVIEW MEIN ZAROOR PUCHHA JAATA HAI
// ============================================================

// SLICE:
// - Original array NAHI badalta (non-destructive)
// - NAYA array return karta hai
// - Arguments: (start, end) — end include nahi hota
// - Negative values support karta hai
// - SAFE method

// SPLICE:
// - Original array BADAL DETA HAI (destructive)
// - REMOVED elements ka array return karta hai
// - Arguments: (start, deleteCount, ...itemsToAdd)
// - Original ko permanently modify karta hai
// - DANGEROUS if you're not careful

const original = [1, 2, 3, 4, 5];

// SLICE — original safe rahega
const sliceResult = original.slice(1, 3);
console.log("After SLICE:");
console.log("Result:", sliceResult); // [2, 3]
console.log("Original:", original);  // [1, 2, 3, 4, 5] — same!

// SPLICE — original badal jaayega
const original2 = [1, 2, 3, 4, 5];
const spliceResult = original2.splice(1, 3);
console.log("After SPLICE:");
console.log("Result:", spliceResult); // [2, 3, 4] — jo nikla
console.log("Original:", original2);  // [1, 5] — BADAL GAYA!

// INTERVIEW ANSWER:
// "slice original nahi badalta, naya array return karta hai
//  splice original ko modify karta hai aur removed elements return karta hai"




// ============================================================
// 15. ARRAY COPY — SHALLOW COPY CONCEPT
// ============================================================

// SHALLOW COPY kya hai?
// Copy banate ho lekin jo nested objects/arrays hain
// woh same reference share karte hain original ke saath

// Primitive values ke saath:
const arr1 = [1, 2, 3];
const arr2 = arr1.slice(); // shallow copy
arr2.push(4);
console.log(arr1); // [1, 2, 3] — safe
console.log(arr2); // [1, 2, 3, 4]

// Nested arrays/objects ke saath (SHALLOW COPY KA LIMITATION):
const arr3 = [1, [2, 3], 4];
const arr4 = arr3.slice(); // shallow copy

arr4[1].push(99); // nested array modify kiya
console.log(arr3); // [1, [2, 3, 99], 4] — ORIGINAL BHI BADAL GAYA!
console.log(arr4); // [1, [2, 3, 99], 4]
// Kyun? Kyunki nested array same memory location share karta hai

// Deep copy ke liye:
const deepCopy = JSON.parse(JSON.stringify(arr3)); // proper deep copy
// Ya structuredClone(arr3) — modern way




// ============================================================
// 16. .concat() — DO YA ZYADA ARRAYS KO MERGE KARO
// ============================================================

const marvelHeroes = ["Thor", "IronMan", "Spiderman"];
const dcHeroes = ["Superman", "Flash", "Batman"];

// concat() — NAYA array return karta hai, originals safe rehte hain
const allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes);
// ["Thor", "IronMan", "Spiderman", "Superman", "Flash", "Batman"]

// Originals safe hain:
console.log(marvelHeroes); // ["Thor", "IronMan", "Spiderman"] — same
console.log(dcHeroes);     // ["Superman", "Flash", "Batman"] — same

// Multiple arrays merge karna
const arr5 = [1, 2];
const arr6 = [3, 4];
const arr7 = [5, 6];
const merged = arr5.concat(arr6, arr7);
console.log(merged); // [1, 2, 3, 4, 5, 6]

// TRAP — Push se alag hai:
// push(dcHeroes) → marvelHeroes ke andar EK element aayega jisme poora array hoga
// Result: ["Thor", "IronMan", "Spiderman", ["Superman", "Flash", "Batman"]]
// Concat → properly merge hoga — flat array milega




// ============================================================
// 17. SPREAD OPERATOR (...) — ARRAYS MERGE KARNA (MODERN WAY)
// ============================================================

// Spread operator (...) matlab: array ko "spread" kar do
// Jaise kach ka gilaas gira do — toot ke bikhar jaayega
// Array ke saare elements alag alag ho jaate hain

const marvelHeroes2 = ["Thor", "IronMan", "Spiderman"];
const dcHeroes2 = ["Superman", "Flash", "Batman"];

// Spread se merge karna
const allHeroes2 = [...marvelHeroes2, ...dcHeroes2];
console.log(allHeroes2);
// ["Thor", "IronMan", "Spiderman", "Superman", "Flash", "Batman"]

// Beech mein extra values bhi add kar sakte ho
const allHeroes3 = [...marvelHeroes2, "Deadpool", ...dcHeroes2, "Constantine"];
console.log(allHeroes3);
// ["Thor", "IronMan", "Spiderman", "Deadpool", "Superman", "Flash", "Batman", "Constantine"]

// concat() vs spread — KYON SPREAD PREFER KARTE HAIN:
// concat(dcHeroes2)          → limited, sirf arrays chain kar sakte ho
// [...marvelHeroes2, ...dcHeroes2] → flexible, beech mein kuch bhi daal sakte ho

// IMPORTANT: Spread se bhi SHALLOW COPY hoti hai
const original3 = [1, 2, 3];
const spreadCopy = [...original3];
spreadCopy.push(4);
console.log(original3); // [1, 2, 3] — safe
console.log(spreadCopy); // [1, 2, 3, 4]




// ============================================================
// 18. .flat() — NESTED ARRAYS KO FLAT KARO
// ============================================================

// Kabhi kabhi array ke andar array ke andar array hota hai
// flat() sab kuch ek hi level pe le aata hai

const nestedArr = [1, 2, [3, 4, 5], 6, 7, [8, 9]];
console.log(nestedArr.flat());
// [1, 2, 3, 4, 5, 6, 7, 8, 9] — ek level flatten hua

// Deep nested array
const deepNested = [1, [2, [3, [4, [5]]]]];

// flat(1) — sirf ek level
console.log(deepNested.flat(1)); // [1, 2, [3, [4, [5]]]]

// flat(2) — do levels
console.log(deepNested.flat(2)); // [1, 2, 3, [4, [5]]]

// flat(Infinity) — kitni bhi depth ho, sab flat kar do
console.log(deepNested.flat(Infinity)); // [1, 2, 3, 4, 5]
// Infinity use karna ek hack hai — exact depth pata ho toh woh use karo

// ORIGINAL ARRAY NAHI BADALTA — naya array return karta hai
console.log(deepNested); // [1, [2, [3, [4, [5]]]]] — same

// Real use: API se nested data aata hai, use flat karna
// Real use: Multiple arrays ka array merge karna




// ============================================================
// 19. Array.from() — KUCH BHI → ARRAY MEIN CONVERT KARO
// ============================================================

// Array.from() — string, set, nodelist, objects etc ko array mein convert karta hai

// String se array
console.log(Array.from("Hitesh"));
// ["H", "i", "t", "e", "s", "h"] — har character alag element

// Set se array
console.log(Array.from(new Set([1, 2, 2, 3, 3, 4])));
// [1, 2, 3, 4] — duplicates remove ho gaye

// INTERESTING CASE — Object se array:
const obj = {name: "Hitesh"};
console.log(Array.from(obj)); // [] — EMPTY ARRAY!
// Kyun? Kyunki plain objects directly iterable nahi hote
// Array.from() ko pata nahi kaise convert kare toh empty array deta hai

// Object.keys() ya Object.values() use karo object ke liye:
console.log(Array.from(Object.keys(obj)));   // ["name"]
console.log(Array.from(Object.values(obj))); // ["Hitesh"]

// Map function ke saath — transform karte hue array banana
console.log(Array.from({length: 5}, (_, i) => i + 1));
// [1, 2, 3, 4, 5] — 5 elements ka array, 1 se start

// Real use: DOM se elements leke array banana
// const divs = Array.from(document.querySelectorAll("div"));
// Ab divs pe saare array methods use kar sakte hain




// ============================================================
// 20. Array.of() — VALUES SE ARRAY BANANA
// ============================================================

// Variables ya values ko directly array mein convert karo
let val1 = 100;
let val2 = 200;
let val3 = 300;

const valuesArr = Array.of(val1, val2, val3);
console.log(valuesArr); // [100, 200, 300]

// new Array() se difference:
console.log(new Array(3));       // [, , ,] — 3 empty slots! (confusing)
console.log(Array.of(3));        // [3] — actual value 3

// Array.of() hamesha jo values do woh array mein dalta hai
// new Array(n) agar single number do toh n-length empty array banata hai

// Mixed types bhi chalte hain
const mixed = Array.of(1, "hello", true, null);
console.log(mixed); // [1, "hello", true, null]




// ============================================================
// 21. NESTED ARRAYS — ARRAY KE ANDAR ARRAY
// ============================================================

// Kabhi kabhi data nested hota hai
const nestedArr2 = [1, 2, 3, [4, 5, 6], 7];
//                  0  1  2   3          4  <-- index

// Nested array access karna:
console.log(nestedArr2[3]);    // [4, 5, 6] — poora nested array
console.log(nestedArr2[3][0]); // 4 — nested array ka pehla element
console.log(nestedArr2[3][1]); // 5
console.log(nestedArr2[3][2]); // 6

// Double nested:
const doubleNested = [1, [2, [3, 4]]];
console.log(doubleNested[1][1][0]); // 3

// Real use: Matrix (2D grid)
const matrix = [
    [1, 2, 3],   // row 0
    [4, 5, 6],   // row 1
    [7, 8, 9]    // row 2
];
console.log(matrix[0][0]); // 1 — row 0, col 0
console.log(matrix[1][1]); // 5 — row 1, col 1
console.log(matrix[2][2]); // 9 — row 2, col 2




// ============================================================
// 22. IMPORTANT CONCEPTS — INTERVIEW MEIN ZAROOR AAYENGE
// ============================================================

// --- ARRAY EK OBJECT HAI ---
const arr8 = [1, 2, 3];
console.log(typeof arr8); // "object" — array ka typeof object hai!
// Array check karne ka sahi tarika:
console.log(Array.isArray(arr8));      // true  — YAHI USE KARO
console.log(Array.isArray("hello"));   // false
console.log(Array.isArray({a: 1}));    // false


// --- PUSH VS CONCAT VS SPREAD ---
const base = [1, 2, 3];
const toAdd = [4, 5];

// push — original modify karta hai, nested array ban jaata hai
const pushDemo = [...base];
pushDemo.push(toAdd);
console.log(pushDemo); // [1, 2, 3, [4, 5]] — NESTED! galat

// concat — naya array, properly merge
const concatDemo = base.concat(toAdd);
console.log(concatDemo); // [1, 2, 3, 4, 5] — sahi

// spread — naya array, properly merge, aur flexible
const spreadDemo = [...base, ...toAdd];
console.log(spreadDemo); // [1, 2, 3, 4, 5] — sahi


// --- SPARSE ARRAYS ---
// Aise arrays jisme "holes" hain
const sparseArr = [1, , , 4]; // index 1 aur 2 missing
console.log(sparseArr.length); // 4
console.log(sparseArr[1]);     // undefined
// Avoid karo sparse arrays — unpredictable behavior


// --- ARRAY DESTRUCTURING (PREVIEW) ---
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log(first);  // "red"
console.log(second); // "green"
console.log(third);  // "blue"


// --- Array.isArray() vs typeof ---
console.log(typeof []);         // "object" — misleading
console.log(Array.isArray([])); // true — reliable




// ============================================================
// 23. QUICK REFERENCE TABLE — INTERVIEW KE LIYE
// ============================================================

/*
METHOD              KYA KARTA HAI                          ORIGINAL BADALTA?  RETURN
.push(val)          END mein add karo                       ✅ HAA            New length
.pop()              END se remove karo                      ✅ HAA            Removed element
.unshift(val)       START mein add karo (SLOW)              ✅ HAA            New length
.shift()            START se remove karo (SLOW)             ✅ HAA            Removed element
.splice(s,d,...v)   Elements remove/add karo                ✅ HAA            Removed elements array
.reverse()          Array ulta karo                         ✅ HAA            Reversed array
.sort()             Sort karo                               ✅ HAA            Sorted array
.fill(v,s,e)        Values se bhar do                       ✅ HAA            Modified array

.slice(s,e)         Piece nikalo                            ❌ NAA            New array
.concat(...arrs)    Arrays merge karo                       ❌ NAA            New merged array
.flat(depth)        Nested arrays flatten karo              ❌ NAA            New flat array
.join(sep)          String mein convert karo                ❌ NAA            String

.includes(val)      Hai ya nahi                             ❌ NAA            Boolean
.indexOf(val)       Pehli occurrence ka index               ❌ NAA            Number (-1 if not found)
.lastIndexOf(val)   Aakhri occurrence ka index              ❌ NAA            Number (-1 if not found)
.find(fn)           Pehla matching element                  ❌ NAA            Element or undefined
.findIndex(fn)      Pehle matching element ka index         ❌ NAA            Number or -1
.every(fn)          Sab elements condition satisfy karte?   ❌ NAA            Boolean
.some(fn)           Koi bhi element condition satisfy kare? ❌ NAA            Boolean

.forEach(fn)        Har element pe kuch karo                ❌ NAA            undefined
.map(fn)            Har element transform karo              ❌ NAA            New transformed array
.filter(fn)         Condition pe filter karo                ❌ NAA            New filtered array
.reduce(fn, init)   Ek value mein reduce karo               ❌ NAA            Single value

Array.from(x)       Kuch bhi → Array convert karo          —                 New array
Array.of(...v)      Values → Array banana                   —                 New array
Array.isArray(x)    Array hai ya nahi check karo            —                 Boolean


KEY POINTS FOR INTERVIEW:
1. typeof [] → "object" — TRICK QUESTION — Array.isArray() use karo check ke liye
2. slice ORIGINAL NAHI BADALTA — naya array return karta hai
3. splice ORIGINAL BADAL DETA HAI — removed elements ka array return karta hai
4. push/pop → END se kaam karte hain — FAST
5. unshift/shift → START se kaam karte hain — SLOW (saari values shift honti hain)
6. concat aur spread (...) dono naya array return karte hain — originals safe
7. flat(Infinity) — kitni bhi nested depth ho, sab ek level pe aa jaata hai
8. Array.from({length: n}, fn) — n elements ka array banana
9. Array.of(3) → [3] lekin new Array(3) → [, , ,] — 3 empty slots — DIFFERENCE YAAD RAKHO
10. push(anotherArray) → nested array ban jaata hai
    concat(anotherArray) ya [...arr1, ...arr2] → properly merge hota hai
*/