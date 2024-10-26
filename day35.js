// prototype inheritence
function Person(fistname, lastname) {
  this.fistname = fistname;
  this.lastname = lastname;
}

Person.prototype.getfullname = function () {
  return `${this.fistname} ${this.lastname}`;
};

// const fullname = new Person("chand", "cc");
// console.log(fullname.getfullname());

function Customer(firstname, lastname, phone, membership) {
  Person.call(this, firstname, lastname);
  this.phone = phone;
  this.membership = membership;
}

//acces protoype method
Customer.prototype = Object.create(Person.prototype)
const customer1 = new Customer("chandan", "ccc", 123300404, "Standard");
console.log(customer1.firstname);

console.log(customer1.getfullname());
