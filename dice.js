let textNumber1 = Math.floor(Math.random() * 6 + 1);
let textNumber2 = Math.floor(Math.random() * 6 + 1);
// console.log(value);
let player1 = document.getElementById("value1");
let player2 = document.getElementById("value2");

// console.log(player1.innerText);
const pl1 = (player1.innerText = `Value ${textNumber1}`);
const pl2 = (player2.innerText = `Value ${textNumber2}`);

//`Value ${value}`
console.log(pl1);
console.log(pl2);

pl1[pl1.length - 1];

if (pl1[pl1.length - 1] > pl2[pl2.length - 1]) {
  console.log("player 1 win");
  document.getElementById('playwins').innerText = 'player 1 win' 
} else if (pl2[pl2.length - 1] > pl1[pl1.length - 1]) {
  console.log("player 2 win");
  document.getElementById('playwins').innerText = 'player 2 win' 
} else {
  console.log("withdraw");
  document.getElementById('playwins').innerText = 'withdraw' 
}
