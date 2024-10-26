// // object literals
// const person = {
//     first_name: "Mani",
//     age: 25,
//     city: "hassan",
//     email: 'chandan18@gmail.com',
//     hobbies: ['eat', 'sleep'],
//     address: {
//         city: "mangalore",
//         state: "karnataka"
//     },
//     getBirthday: function () {
//         return 2020 - this.age;
//     }
// }


// let val;
// val = person
// console.log(val.getBirthday());



// Array of objects
const people = [{
    firstname: 'Mani',
    age: 23
},
//object 1 and 2
{
    firstname: "ram",
    age: 44
},
{
    firstname: "saheils",
    age: 43
}
]

//console.log(people[0]);
for (let i = 0; i < people.length; i++) {
    console.log(people[i].firstname);

}

