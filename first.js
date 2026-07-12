console.log("I’ve just started learning JavaScript.");
// let name="aatifkhan";
let totalPrice=1000;
console.log(totalPrice);
console.log(name);
console.log(name);
var age=24;//it can be redeclared and update
var age=59;
var age=86;
console.log(age);
let Age=56;//it cannot be redeclared but it can be updated
Age=65;
console.log(Age);

const AGE=24;//int cna't be redeclared and updated
console.log(AGE);
// Block Scope with let and const
{
    let ages = 25;         // Block-scoped variable
    const city = "Delhi"; // Block-scoped constant

    console.log("Inside block:");
    console.log("age:", ages);     // ✅ Output: 25
    console.log("city:", city);   // ✅ Output: Delhi
}

console.log("Outside block:");
// console.log("age:", ages);   // ❌ Error: age is not defined
// console.log("city:", city); // ❌ Error: city is not defined

// Block Scope with var
{
    var name = "Aatif";    // var is NOT block-scoped
    console.log("Inside var block:");
    console.log("name:", name);   // ✅ Output: Aatif
}

console.log("Outside var block:");
console.log("name:", name); // ✅ Output: Aatif (still accessible)
const product={
    title: "Ball pen",
    rating: 4,
    offer: 5,
    price: 270,
};
console.log(product);
const profile={
    user: "Aatif Khan",
    isFollow: false,
    post: 128,
    followers: 456,
    following: 4,
    Description: "Enterpreneur APNA College | Ex-MIcrosoft, DRDO",
};
console.log(profile);
console.log(typeof profile);
console.log(typeof profile["user"]);
let myName="Aatif";
console.log(myName.toUpperCase());