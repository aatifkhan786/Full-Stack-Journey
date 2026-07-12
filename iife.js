//immediately invoked function expression
(function(){
    console.log("HII");
    
})();
//named function
(function dbConnection(){
    console.log("Database Connected");
    
})();

//arrow function iife
(()=> {
    console.log(5+6);
    
})();
//with param
((name) => {
    console.log(name);
    
    console.log(`${name}`);
    
})("hitesh");