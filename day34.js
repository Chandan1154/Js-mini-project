// const person = {
//     firstname : "chandand"
// }

// console.log(person);

function Person(firstname, lastaname) {
  this.firstname = firstname;
  this.lastaname = lastaname;
//   this.getfullyear = function () {
//     return 2020 - 20;
//   };
}

Person.prototype.getfullyear = function(){
    return 2000-40
}
Person.prototype.getfullname = function(){
    return `${this.firstname}${this.lastaname}`
}

Person.prototype.changelastname = function(newlastname){
  return this.lastaname = newlastname
}
const list = new Person("chandfn", "cllld");
console.log(list.getfullyear());
list.changelastname("ram")
console.log(list.getfullname());

