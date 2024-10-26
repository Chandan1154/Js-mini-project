const todoInput = document.querySelector(".todo-input");

const todoButton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);

todolist.addEventListener("click", deleteitem);
todolist.addEventListener("click", checkitem);

function addTodo(e) {
  // creating li element
  const todoDiv = document.createElement("div");
  todoDiv.className = "todos";
  const todosli = document.createElement("li");
  todosli.className = "litodos";
  todosli.appendChild(document.createTextNode(todoInput.value));
  todoDiv.appendChild(todosli);
  todoInput.value = "";

  // creating complete button
  const completebtn = document.createElement("button");
  completebtn.className = "complete-btn";
  completebtn.innerHTML = `<i class='fa'>check</i>`;
  todoDiv.appendChild(completebtn);
  //   console.log(completebtn);

  //trash
  const trashbtn = document.createElement("button");
  trashbtn.className = "trash-btn";
  trashbtn.innerHTML = `<i class="bi">del</i>`;
  todoDiv.appendChild(trashbtn);
  todolist.appendChild(todoDiv);

  let tx = document.getElementsByClassName('litodos').value
  console.log(tx);
  

  e.preventDefault();
}

function deleteitem(e) {
  console.log(e.target.className);
  if (e.target.className == "bi") {
    todolist.remove();
  } else {
    throw Error("no such value");
  }
  console.log("npt ee");
  e.preventDefault();
}

function checkitem(e) {
  console.log(e.target.className);
  if (e.target.className == "fa") {
    alert("checked successfully ");
  } else {
    throw Error("no such value");
  }
  console.log("npt ee");
  e.preventDefault();
}
