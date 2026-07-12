let arr = [1, 2, 3, 4, 5];

arr.forEach(function myfunc(val, idx,arr){
    console.log(val,idx ,arr);
});

let arr1 = ["pune","mumbai"];

arr1.forEach((val) => {
    console.log(val.toUpperCase());
});
//foreach loop array also called higher function or method

// 1️⃣ Higher-order function kya hota hai?

// Definition:
// Ek function jo ek ya dono kaam karta hai:

// Dusre function ko argument ke roop me accept kare

// Ek function return kare

// Basically: function ke saath function ka kaam karna

// 2️⃣ forEach is a higher-order function
// const arr = [1,2,3];

// arr.forEach(function(val){
//     console.log(val);
// });


// forEach function hai jo callback function ko accept karta hai

// Ye har element ke liye callback function ko call karta hai

// Isliye forEach higher-order function ke category me aata hai

// 3️⃣ Why we also call it a “method”

// Method = function jo object ke andar define ho

// arr.forEach(...) me:

// forEach → function

// arr → object (array bhi object hai)

// JS me array ke functions ko generally methods bhi kehte hain
let sqr=[4,25,72];
sqr.forEach((val)=>{
    console.log(val*val);
});

let nums=[4,16,25];
let calcsquare = (num) => {
    console.log(num*num);
}
nums.forEach(calcsquare);

// | Part                       | Type           | Explanation                                                                   |
// | -------------------------- | -------------- | ----------------------------------------------------------------------------- |
// | `nums`                     | Array          | `[4, 16, 25]` → elements pe iteration karna hai                               |
// | `calcsquare`               | Arrow function | **Callback function** jo **har element ka square calculate aur print karega** |
// | `nums.forEach(calcsquare)` | Method call    | `forEach` **har element ke liye calcsquare call karega**                      |
