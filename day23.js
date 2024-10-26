const person = {
  firstnem: "Chandan",
  age: 44,
  getbirth: function () {
    return 2020 - this.age
    console.log(this); // point same objct
    // must use this otherwise js engine didn't understand which object
  },
  hobies :['cricket', 'football','food'],
  gethobies: function(){
    this.hobies.forEach(function(e){
        console.log(`${this.firstnem} Hobies is ${e}`);// globa  
    },this)
  }
};
person.gethobies();




// function abc(){
//     console.log(this);   
// }
// abc()  // global like window object 

// constructor

// function Person(firstnema){
//     this.firstnema = firstnema
//     console.log(this);
    
// }
// const p = new Person('chandn')
// console.log(p);


