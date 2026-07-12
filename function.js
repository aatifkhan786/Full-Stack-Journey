function sum(x, y) { 
    return x + y; 
}
console.log(sum(6, 9));     // output: 15

// Function declaration 
function add(a, b) {         
    console.log(a + b);
}

// Calling a function
add(2, 3);

// Function Expression
const add2 = function (c, d) {   // <- naam change kiya
    console.log(c + d);
}

// Calling function
add2(2, 3);

function vowel(x){
    for(let i=0;i<x.length;i++){
        if(x[i]=="A"||x[i]=="a"||x[i]=="E"||x[i]=="e"||
           x[i]=="O"||x[i]=="o"||x[i]=="I"||x[i]=="i"||x[i]=="U"||x[i]=="u"){
            console.log("Vowel is",x[i]);
        }
    }
}
vowel("Aatif");
vowels = (y) => {
    for (let i = 0; i < y.length; i++) {
        if (y[i] == "A" || y[i] == "a" || y[i] == "E" || y[i] == "e" ||
            y[i] == "O" || y[i] == "o" || y[i] == "I" || y[i] == "i" || y[i] == "U" || y[i] == "u") {
            console.log("Vowel is", y[i]);
        }
    }
}

vowels("Aatif");

