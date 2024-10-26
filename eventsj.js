// let btn1 = document.querySelector("#btn1");
// // btn1.onclick = (e) => {
// //     console.log(e.target);
// //     console.log(e.clientX);
// //     console.log(e.clientY);
// //     console.log(e.type);
// //   console.log("btn was clicked ");
// //   let a = 25;
// //   a++;
// //   console.log(a);
// // };

// let div = document.querySelector("div");
// // // div.onmouseover = () => {
// // //   console.log("btn was clicked ");
// // //   let a = 25;
// // //   a++;
// // //   console.log(a);
// // // };

// btn1.addEventListener("click", (e) => {
//   console.log("button 1 was clicked");
//   console.log("button 1 was clicked", e.target);
//   console.log("button 1 was clicked", e.type);
// });

// btn1.addEventListener("click", () => {
//   console.log("button 2 was clicked");
// });

// const handler3 = () => {
//   console.log("handler3 ========");
// };

// btn1.addEventListener('click', handler3)

// btn1.removeEventListener('click', handler3)

let modeBtn = document.querySelector("#mode");
let colorMode = document.querySelector("body");
let currmode = "light";
modeBtn.addEventListener("click", () => {
  if (currmode === "light") {
    currmode = "dark";
    colorMode.classList.add("dark");
    colorMode.classList.remove("white");
  } else {
    currmode = "light";
   colorMode.classList.add("white");
   colorMode.classList.remove("dark");
  }
  console.log(currmode);
});
