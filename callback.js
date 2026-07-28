function greet(greetBack){
    greetBack()
    console.log("hello");
    
   
}
function greetBack(){
    console.log("hii");
    
}
// function greetBack2(){
//     console.log("bye");
    
// }
// greetBack(greet);
greet(greetBack)