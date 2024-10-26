// // function in js

// // block of code that performs a specific task can be invoked whenever needed

// function myFunction() {
//   console.log("hello");
// }

// myFunction();
// // parmeter funtion
// // funtion definition
// function myFun(meg, n) {
//   // function delclarion
//   console.log(meg * n);
// }
// myFun("ttile", 100); //// NaN

// function sum(x, y) {
//    s= x+y// local variable -. scope
//    return s
//   //console.log(x + y);
// }
//  const l= sum(10,9)
// console.log(l);

// function sum(a, b){
//     return a+b;
// }

// function multi(a, b){
//     return a*b;
// }

// const myfun =(a,b) =>{
//     return a+b
// }

// const list = myfun(1,3)
// console.log(list);

// count vowels

// function countVowels(message) {
//   let count = 0;
//   //   for (let i = 0; i <= message.length - 1; i++) {
//   //     if (
//   //       message.charAt(i) == "a" ||
//   //       message.charAt(i) == "e" ||
//   //       message.charAt(i) == "i" ||
//   //       message.charAt(i) == "o" ||
//   //       message.charAt(i) == "u"
//   //     ) {
//   //       count = count + 1;
//   //     }
//   //   }

//   for (const char of message) {
//     if (
//       char == "a" ||
//       char == "e" ||
//       char == "i" ||
//       char == "o" ||
//       char == "u"
//     ) {
//       count = count + 1;
//     }
//   }
//   return count;
// }

// let to = countVowels("chandan");
// console.log(to);

// let vowelcount = (str)  =>{
//     let count = 0;
//     for (const char of str) {
//         if (
//           char == "a" ||
//           char == "e" ||
//           char == "i" ||
//           char == "o" ||
//           char == "u"
//         ) {
//           count = count + 1;
//         }
//       }
//       return count;
// }
// let s = vowelcount("adc")
// console.log(s);
// let arr = ["channie","hassan"];
// arr.forEach((vl,ind, arr) => {
//     console.log(vl,ind, arr);
// });

// [1, 2, 3, 4, 5].forEach((val) => console.log(val * val));

let nums = [49, 44, 33, 80, 90, 100, 102, 103];
// let ne = nums.map((va) => {
//   return va
// });
// console.log(ne);

// let newe = nums.filter((val) => {
//   return val % 2 === 0;
// });
// console.log(newe);

// let ev = nums.reduce((accu, curr) => {
//     return accu > curr ? accu : curr
// })
// console.log(ev);

// let totalTop = nums.filter((val)=>  val>90)
// console.log(totalTop);

let num = prompt("enter the number");


let arr = [];
for (let i = 1; i <= num; i++) {
  arr[i-1] = i; // 1,2,3,3,3,,
}
console.log(arr);
let valu = arr.reduce((pre, cur) => pre + cur);
console.log(valu);

let pro = arr.reduce((pre,cur) => {
  return pre*cur;
});
console.log(pro);
