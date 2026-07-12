function hello(){
    console.log("Hii bro!");
    
}
hello();
//function with parameters and returns
function addNum(num1,num2){
    return num1+num2;
}
addNum(5,6);//ye abhi priint nhi karega kyuki return 11 hua par store kisi ne nhi kiya kisi ne refrencce nhi liya to ye garbage collector ise remove kar deta hai stack se
console.log(addNum(5,6));//ye print karega 11
let a=5;
let b=10;
function sum(a,b){
    return a+b;

}
console.log(sum(a,b));
let c=5;
function func(){
    return this.a;
}
console.log(func());
// let num=[100,200,300,400];
function calcCartPrices(val1,val2,...num){
    // console.log(num);
    return {val1,val2,num};
}
console.log(calcCartPrices(454,5646,321,64,6543,354));
// console.log(calcCartPrices(778));
// console.log(calcCartPrices(866));
console.log(calcCartPrices(321,64,6543,354));


//passing object as array function 
const obj1={
    name:"Aatif",
    age:20
};
function handleObject(anyObject){
    console.log(`UserName: ${anyObject.name}, Age: ${anyObject.age}, Price: ${anyObject.price}`);
    
}

handleObject(obj1);
const myArr = [1,2,3,4,5];

function handleArray(anyArray){
    console.log(`My array: ${anyArray}`);
    console.log(`First Element: ${anyArray[0]}`);
    for(let i=0;i<anyArray.length;i++){
        console.log(anyArray[i]);
        
    }
    console.log(anyArray.splice(1,3));
    return anyArray[1];
}

console.log(handleArray(myArr));
