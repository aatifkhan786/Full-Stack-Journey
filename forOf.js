const myArray =['Thor','IronMan','Captain America','Hulk','Black Panther'];
const obj={
    name: "Aatif",
    Age: 18
};

for (const value of myArray) {
    console.log(value);
    
}
const str = "Aatif";

for (const ch of str) {
    console.log(ch);
}

const map = new Map();

map.set("IN", "India");
map.set("USA", "America");

for (const item of map) {
    console.log(item);
}

for (const [key, value] of map) {
    console.log(key, value);
}
for (const key of map) {
    console.log(key);
}

const set = new Set([10,20,30]);

for (const value of set) {
    console.log(value);
}

// Array of Objects ✅
const users = [
    { name: "Aatif", age: 18 },
    { name: "Ali", age: 20 }
];

for (const user of users) {
    console.log(user);
}

// Definition ⭐

// Map is a built-in JavaScript data structure that stores data in the form of key–value pairs, where every key is unique and the insertion order is preserved.

// Hindi me:

// Map ek collection hai jo data ko key-value pair ke form me store karta hai. Har key unique hoti hai aur jis order me data insert karte ho, usi order me store rehta hai.44

const arr=[2,3,5,9,10];
const target=7;
let i=0;
let j=arr.length-1;
let sum=0;
while(i<j){
    sum=arr[i]+arr[j];
    if(sum===target){
        console.log(i,j);
        break;
    }else if(sum<target){
        i++;
    }else{
        j--;
    }
}