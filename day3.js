// datatypes 
// two types of datatypes
// primitive data types
// stored directly in the location the varible access
// stored in the stack 
/* 
string 
number
boolean 
null
undefined
symbol


Reference data types: 
accessed by refernce 
stored in heap and points to location in memory
stack it's store 

Arrays,
Object literals
Functions

*/
// string
const name = "manikanta"
console.log(typeof name);

// number 
const age = 10.3;
console.log(typeof age);
// number : can have type of the number 
// boolean 
const hasSiblings = true
// null
const abc = null// we were nothing storing over here 
console.log(typeof abc);
console.log(typeof hasSiblings);

// must and should initilize the const value 
// const a;
let a;// if we dont initilize it with a value then it is undefined by default variables are undefined
console.log(a);

const syn = Symbol();

console.log(typeof syn);


// reference data type 
// only return obejct 
// array 
const hobbies = ['movies', 'cricket'];
/// object literals
const persons = {
    name : 'name',
    age : 23
};
const today = new Date()
console.log(today);


