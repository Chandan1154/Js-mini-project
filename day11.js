/// function declaration and expression

// function greet() {
//     // function body 
//     console.log("Hi");
// }
// greet()
// greet()

// function great (){
//     return 1995;
// }

/// function declearation

// function great(firstname ){
//     firstname = "chanda "
//     return `hello ${firstname}`
// }
// console.log(great("chandan"));

// function expression
// const mul = function (){
//     return "hello"
// };
// console.log(mul());

// const mul = function(a,b){
//     return a+b;
// };
// console.log(mul(12,3));

// IIFE - immedietely invokable function expression 
// design pattren 
// anonmyous function  a function doesn't have the name
// (function (){
// console.log("hello world");
// })();


const person = {
    getbirthday :function(name){
      return  function(name){
        if ( names == "chandan"){
            return 1999 ? "hell": function(){
                return (function(){
                    console.log('hello world');
                    
                })
            }
        }
      }
    },
};
console.log(person.getbirthday());

