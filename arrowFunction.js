///arrow syntax
const sum= (a,b) => {
    console.log(a+b);
    return a+b;
}
console.log(sum(5,6));
//implicit return - one linear (no return key word)
const addTwo = (n1, n2) => n1 + n2;

console.log(typeof addTwo(5, 6));

//object ke sath
const returnObj = () => ({name: "hitesh"});
console.log(typeof returnObj());
//this in arrow function
const obj1 = {
    name: "Hitesh",
    greetings: () => {
        console.log(`My name is ${this.name}`);
        
    }
}
console.log(obj1.greetings());
// this in Normal Function vs Arrow Function
// 1. Object scope ❌
// const obj = {
//     name: "Hitesh"
// }
// Object scope create nahi karta.
// Object sirf data container hai.
// 2. Normal Function
// const obj = {
//     name: "Hitesh",

//     greet: function () {
//         console.log(this.name);
//     }
// }

// obj.greet();
// Rule
// Normal function ka apna this hota hai.
// this call ke time decide hota hai.
// Jis object ne function call kiya, this us object ko refer karega.
// obj.greet()

// ↓

// this = obj

// Output

// Hitesh
// 3. Arrow Function
// const obj = {
//     name: "Hitesh",

//     greet: () => {
//         console.log(this.name);
//     }
// }
// Rule
// Arrow function ka apna this nahi hota.
// Ye outer (lexical) scope ka this use karta hai.
// Call karne wale object se koi farq nahi padta.
// this

// ↓

// Global Scope ka this

// Output

// undefined
// 4. Object ke andar likhne se object scope nahi banta
// const obj = {
//     greet: () => {}
// }

// ❌ Matlab ye nahi ki

// this = obj

// Ye galat hai.

// Arrow function phir bhi outer scope ka this use karega.

// 5. Normal Function = Dynamic this
// Call kis object ne kiya?

// ↓

// this usi object ko refer karega.

// Example

// obj1.greet();

// this = obj1
// obj2.greet();

// this = obj2

// Har call pe this badal sakta hai.

// 6. Arrow Function = Lexical this
// Jahan create hua tha

// ↓

// Wahi ka this permanently use karega.

// Call karne se nahi badlega.

// 7. Kab kya use kare?
// Normal Function ✅
// const user = {
//     name: "Aatif",

//     greet() {
//         console.log(this.name);
//     }
// }

// Object methods ke liye Normal Function.

// Arrow Function ✅
// const add = (a, b) => a + b;

// Callback functions

// Array methods

// Short functions

// Interview One-Liners ⭐
// Normal Function
// Has its own this.
// this is decided at call time.
// this is Dynamic.
// Arrow Function
// Does not have its own this.
// Uses outer scope's this.
// this is Lexical.
// ⭐ Golden Rule (Sabse Important)

// Object ke andar function likhne se this = object sirf Normal Function me hota hai. Arrow Function me kabhi nahi.
const arr = [10, 20, 30, 40];

const printArray = () => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};

printArray();
const printArray1 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};

printArray1([1, 2, 3, 4]);

const numbers = [10, 20, 30, 40];

const printUsingForEach = () => {
    numbers.forEach((value, index) => {
        console.log(index, value);
    });
};

printUsingForEach();


const myArr= [1,2,3,4];
myArr.forEach(function(item,index){
    console.log(item, index);
    
})
myArr.forEach((item,index) =>{
    console.log(item, index);
    
});