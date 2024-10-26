// //if else

// let color;

// if (color === "dark-mode") {
//   color = "black";
// } else {
//   color = "red";
// }

// let a = 10;

// if (a % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// let age = 18;
// if (age < 18) {
//   console.log("junior");
// } else if (age > 60) {
//   console.log("senior");
// } else {
//   console.log("middle");
// }

const student = [
  {
    name: "Chandan",
    age: 20,
    rollno: 123,
    adderss: "mysore",
    isclass: 1,
    grad: "",
  },
  {
    name: "manu",
    age: 20,
    rollno: 13,
    adderss: "banglore",
    isclass: 2,
    grad: "",
  },
  {
    name: "araya",
    age: 21,
    rollno: 432,
    adderss: "myrampiutr",
    isclass: 4,
    grad: "",
  },
];

let score = [];
let isDone = true;
while (isDone) {
  let myTeacher = true;
  if (myTeacher) {
    console.log("Enter the student deatails");
    let total = student.length; //3
    for (let i = 0; i < student.length; i++) {
      let students = student[i];
      let score = Math.floor(Math.random() * 100) + 1; // Generating a score between 1 and 100
      pushToAry(students.name, score);
    }
  }
  isDone = false;
}
function pushToAry(name, val) {
  score.push({ name, score: val });
}
for (var s of score) {
  console.log(s["name"]);
  console.log(s["score"]);

  let name = s["name"];
  let students = student.find(student => student.name === name);

  if (s["score"] > 80 && s["score"] < 100) {
    students.grad = "A";
  } else if (s["score"] > 70 && s["score"] < 89) {
    students.grad = "B";
  } else if (s["score"] > 60 && s["score"] < 69) {
    students.grad = "C";
  } else if (s["score"] > 50 && s["score"] < 59) {
    students.grad = "D";
  } else if (s["score"] > 0 && s["score"] < 49) {
    students.grad = "F";
  }
}
student.forEach((element) => {
  console.log(element);
});
