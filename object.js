const obj= {//object literals and non singleton object he can create multiple independent instances and Multiple objects (instances) ban sakte hain.
    name:"aatif",
    age: 18,
    gender: "Male",
    "full name": "Aatif Khan"
};

const obj1=obj;
obj1.age=20;
console.log(obj);
console.log(obj);
const instaUser=new Object();//singleton Sirf ek hi object poori application me exist karta hai. const config={theme:dark};
instaUser.name="Aatif";
instaUser.age=19;
instaUser.isLoggedIn=true;
console.log(instaUser);
console.log(typeof instaUser.isLoggedIn);
console.log(obj["name"]);
console.log(obj["full name"]);

const symbol =Symbol("id");
const obj4 ={
    name:"Khan",
    [symbol] : "Aatif",
    email: "aatif@gmail.com"
};
console.log(obj4.email);
obj4.email="hitesh@gmail.com";
console.log(obj4.email);
console.log(typeof symbol);

//freeze
const obj5 = {
    name: "aatif",
    age: 18,
    gender: "Male",
    obj6: {
        name: "Khan"
    }
};

Object.freeze(obj5);

obj5.obj6.name = "Sharique";//nested element pe freeze work nhi karta 

console.log(obj5);
const arr = [1, [2,3], [4,5]];

console.log(arr[0], ...arr[1], ...arr[2]);

const obj6={
    name:"Aatif",
    greetings: function(){
        console.log(`Hii, This is ${this.name}`);
    }
};
obj6.greetings();