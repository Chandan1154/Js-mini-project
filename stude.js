const students = [
    {
      name: "Chandan",
      age: 20,
      rollno: 123,
      address: "Mysore",
      isclass: 1,
      grad: "",
    },
    {
      name: "Manu",
      age: 20,
      rollno: 13,
      address: "Bangalore",
      isclass: 2,
      grad: "",
    },
    {
      name: "Araya",
      age: 21,
      rollno: 432,
      address: "Mysore",
      isclass: 4,
      grad: "",
    },
  ];
  
  let scores = [];
  let isDone = true;
  
  while (isDone) {
    let myTeacher = true;
    if (myTeacher) {
      console.log("Enter the student details");
      let total = students.length;
  
      for (let i = 0; i < students.length; i++) {
        let student = students[i]; // Corrected line
        let score = Math.floor(Math.random() * 100) + 1; // Generating a score between 1 and 100
        pushToAry(student.name, score);
      }
    }
    isDone = false;
  }
  
  function pushToAry(name, val) {
    scores.push({ name, score: val });
  }
  
  for (let s of scores) {
    console.log(s);
  }
  