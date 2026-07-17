// // // // // // const a=5;
// // // // // // const b=a;
// // // // // // b=6
// // // // // // console.log(b);
// // // // // let obj1 ={
// // // // //     name: "Aatif",
// // // // //     age: 18
// // // // // };
// // // // // console.log(obj1);
// // // // // const obj2 = obj1;
// // // // // obj2.name="Khan";
// // // // // console.log(obj1);

// // // // // // obj2={
// // // // // //     isLoggedIn:"true"
// // // // // // };console.log(obj1);

// // // // // let obj3 ={
// // // // //     name:"Aatif"
// // // // // }

// // // // // obj3 ={
// // // // //     age: 18
// // // // // }
// // // // // console.log(obj3);
// // // // let n=0;
// // // // let count=0;
// // // // // if(n==1){
// // // // //     console.log("Not prime");
    
// // // // // }
// // // // for(let i=1;i<=n;i++){
// // // //     if(n%i==0){
// // // //         count++;
// // // //     }
// // // // }
// // // // if(count==2){
    
// // // //     console.log(`${n} is a prime Number`);//template literal ya template string
// // // // }else{
    
// // // //     console.log("Not prime");
// // // // }
// // // // Way 1 — Array Literal (RECOMMENDED — always use this)
// // // // const arr1 = [1, 2, 3, 4, 5];

// // // // // Way 2 — new Array() constructor
// // // // const arr2 = new Array(1, 2, 3); // [1, 2, 3]

// // // // // TRAP with new Array():
// // // // const arr3 = new Array(5);  // [ , , , , ] — 5 EMPTY slots, NOT [5]
// // // // const arr4 = new Array(1, 2); // [1, 2] — actual values

// // // // // Way 3 — Array.of() — values se array banana
// // // // const arr5 = Array.of(1, 2, 3);    // [1, 2, 3]
// // // // const arr6 = Array.of(5);          // [5] — sirf ek element

// // // // // Way 4 — Array.from() — kisi aur cheez ko array mein convert
// // // // const arr7 = Array.from("Hello");         // ["H","e","l","l","o"]
// // // // const arr8 = Array.from({length: 3}, (_, i) => i + 1); // [1, 2, 3]
// // // // const arr9=Array.from("aatif");
// // // // console.log( typeof arr9);

// // // // const arr=[1,2,3,4];
// // // // let newLength = arr;
// // // // newLength=arr.push(6);
// // // // console.log(arr);
// // // // console.log(newLength);

// // // // slice(start, end)
// // // // end index INCLUDE nahi hota
// // // // Negative values peeche se count karte hain
// // // // ORIGINAL ARRAY NAHI BADALTA

// // // // const arr = [1, 2, 3, 4, 5, {"name":"aatif"}];

// // // // console.log(arr.splice(2,2,2));     // [2, 3, 4, 5] — index 1 se end
// // // // console.log(arr);
// // // // const arr1=arr;
// // // // arr[5].name="Ali";
// // // // // console.log(arr1.slice(1,3));  // [2, 3] — index 1 aur 2 (3 nahi)
// // // // console.log(arr[5]);
// // // // console.log(arr1); 
// // // // console.log(arr); 
// // // // console.log(arr.slice(-2));    // [4, 5] — peeche se 2
// // // // console.log(arr.slice());      // [1, 2, 3, 4, 5] — full shallow copy\
// // // // const obj1=[
// // // //     {"name":"aatif"}
// // // // ];
// // // // obj1.splice(0,1,{"name":"Ali"});
// // // // console.log(obj1);

// // // // obj2[0].name="Ali";

// // // // console.log(obj2);

// // // // console.log(arr); // [1, 2, 3, 4, 5] — original SAFE hai
// // // // const marvel = ["Thor", "IronMan"];
// // // // const dc = ["Superman", "Batman"];

// // // // // concat() NAYA array return karta hai — originals safe
// // // // const all = marvel.concat(dc);
// // // // console.log(all); // ["Thor", "IronMan", "Superman", "Batman"]

// // // // // Originals safe:
// // // // console.log(marvel); // ["Thor", "IronMan"] — same
// // // // console.log(dc);     // ["Superman", "Batman"] — same

// // // // TRAP — push se alag hai:
// // // // const wrong = [...marvel];
// // // // wrong.push(dc); // dc poora ek element ban gaya
// // // // console.log(wrong); // ["Thor", "IronMan", ["Superman", "Batman"]] — WRONG!
// // // // const wrong1=[...marvel];
// // // // const temp=wrong1.concat(dc);
// // // // console.log(temp);
// // // // let student ={
// // // //     "name": "Aatif",
// // // //     "Age": 10
// // // // };

// // // // student={
// // // //     "name": "Aatif",
// // // //     "Age": 10
// // // // };
// // // // console.log(student);
// // // // const arr1 = [1, 2, 3];

// // // // const arr2 = arr1; // Shallow Copy

// // // // arr2[0] = 100;

// // // // console.log(arr1); // [1,2,3]
// // // // console.log(arr2); // [100,2,3]

// // // // const original = [1, 2, 3,{"name":"Aatif"}];
// // // // const copy = [...original];
// // // // copy[3].name="ali";
// // // // console.log(...original); // [1, 2, 3] — safe
// // // // console.log(copy);     // [1, 2, 3, 4]
// // // // const obj1 = {
// // // //     name:"A"
// // // // };

// // // // const obj2 = {
// // // //     age:20
// // // // };
// // // // const obj4=obj1.concat(obj2);
// // // // const obj3 = {
// // // //     ...obj1,
// // // //     ...obj2
// // // // };
// // // // console.log(obj4);
// // // // console.log(obj3);
// // // // const symbol1 = Symbol("key1");
// // // // const obj1 = {
// // // //     "full name": "Aatif",
// // // //     name: "Khan",
// // // //     [symbol1]: "mykey1"
// // // // };
// // // // console.log(typeof symbol1);

// // // const arr1=[1,2,3,4,5];
// // // const arr2=arr1;//shallow copy 
// // // // console.log(arr2.slict e(1,3));
// // // arr2[0]=5;
// // // console.log(arr1);
// // // console.log(arr2);
// // // // const jsUser = {
// // // //     name: "Hitesh",
// // // //     age: 18,

// // // //     // Function as a property — "method" kehte hain ise
// // // //     greeting: function() {
// // // //         console.log("Hello JS User");
// // // //     },

// // // //     // 'this' se same object ki property access karna
// // // //     greetingTwo: function() {
// // // //         console.log(`Hello JS User, ${this.name}`); // this = jsUser
// // // //     }
// // // // };

// // // // // Method call karna
// // // // jsUser.greeting();    // "Hello JS User"
// // // // jsUser.greetingTwo(); // "Hello JS User, Hitesh"

// // // // // Reference vs Execution — IMPORTANT
// // // // console.log(jsUser.greeting);   // function ka reference — execute nahi hoga
// // // // console.log(jsUser.greeting()); // function execute hoga — return value print hogi4

// // const arr= [{name: "Aatif",age:18}];
// // const arr1=arr;
// // arr1[0].name="Sharique";
// // console.log(arr);
// // console.log(arr1);
// const obj = {a:1};
// const obj2=obj;
// obj2.a=100;
// console.log(obj);
// console.log(obj2);
const a= alert('hello');
console.log(a);
