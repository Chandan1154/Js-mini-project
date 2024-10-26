let food = [
  {
    resturentName: "SCS food",
    foodName: "Roti curry",
    price: 400,
    rating: "",
  },
  {
    resturentName: "Celvi catrean",
    foodName: "leamon rice",
    price: 100,
    rating: "",
  },
  {
    resturentName: "Fast_food",
    foodName: "idly",
    price: 50,
    rating: "",
  },
  {
    resturentName: "G food",
    foodName: "Ragi Roti",
    price: 130,
    rating: "",
  },
];
let customer = [
  {
    name: "chandan",
    phno: 9553322322,
    address: "hassan ",
  },
  {
    name: "Ram",
    phno: 9884847223,
    address: "Bangalore ",
  },
  {
    name: "manu",
    phno: 9848233232,
    address: "mysore ",
  },
];

let order = [];

let isOrder = true;
console.log(isOrder);

while (isOrder) {
  let islogin = Boolean(islogins());
  if (islogin) {
    for (let i = 0; i < customer.length; i++) {
      let id = Math.floor(Math.random() * 10) + 1;
      orderFood(id,customer.name); // order details
    }
  }
}

function islogins() {
  let cName = customer.forEach((n) => n.name);
  return customer.find((names) => names.name !== cName);
}

function orderFood() {}
