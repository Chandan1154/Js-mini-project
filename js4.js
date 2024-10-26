for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + 1;
}
console.log(sum);
for (let v of "dd") {
  console.log(v);
}

// for in loop

let student = {
  name: "rahul kumar",
  age: 20,
  cgpa: 7.5,
  isPass: true,
};

for (let key in student) {
  console.log(`${key}  and ${student[key]}`);
}

// practice
// print al even number 0 to 100
for (let num = 0; num <= 100; num++) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

// paracties
let gameNumber = 25;
let myNumber = 25;

while (myNumber !== gameNumber) {
  console.log("enter other number");
  gameNumber++;
}
console.log("congratulation");

/// string in js
// string is sequence of charcers used to represent text
let str = "ApnaCollage";

let str2 = "shradha";
let obe = {
  item: "pen",
  price: 10,
};
console.log("the cost of pen is ", obe.price);

console.log(str2.slice(1,3));
str =str2.split(",")

for( let v of str){
   console.log(v[0]);
   
}