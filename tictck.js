let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; // palyere x, player 0

// newGameBtn.addEventListener("click", () => {
//     boxes.innerText = " "
// });
// reset.addEventListener("click", (e) => {
//      boxes.values.innerText = ""
//     console.log();
    
// });

const winPattrens = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () =>{
    turnO = true
    enabledBoxes()
    msgContainer.classList.add('hide')
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disabledBoxes  = () => {
    for(let boxe of boxes){
        boxe.disabled = true
    }
}
const enabledBoxes  = () => {
    for(let boxe of boxes){
        boxe.disabled = false
        boxe.innerText = ""

    }
}


const showWinner = (winner) => {
  msg.innerText = ` Congratulations Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBoxes()
};
const checkWinner = () => {
  for (let pattern of winPattrens) {
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;
    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
         
        showWinner(posVal1);
      }
    }
  }
};


newGameBtn.addEventListener('click', resetGame)
reset.addEventListener('click', resetGame)
