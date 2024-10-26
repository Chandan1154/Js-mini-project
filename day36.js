class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  getfullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}
class Customer extends Person {
  constructor(firstname, lastname, phone, membership) {
    super(firstname, lastname);
    this.phone = phone;
    this.membership = membership;
  }
  static getname(a,b){
    return a+b
  }
}


const c1 = new Customer("chandan","cc", 966389044, "Standerd")
console.log(c1.getfullname());
console.log(Customer.getname(2,3));

