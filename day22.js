// local and session storage
// localStorage.setItem('name', 'chandan')
// localStorage.setItem('age', '23')
// sessionStorage.setItem('nmae', 'chandan')

// remove

// localStorage.removeItem('name')
// console.log(localStorage.getItem('name'));

// localStorage.clear()

const value = document
  .getElementById("my-from")
  .addEventListener("submit", addtoStorage);

function addtoStorage(e) {
  let tasks;

  const task = document.getElementById("task").value;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
     tasks = JSON.parse(localStorage.getItem('tasks'))
}
   tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
  alert('task saved')

  e.preventDefault();
  //    localStorage.setItem(count, e.)
}
let loact = localStorage.getItem('tasks')
console.log(loact);


// loact.forEach( function(e){
//     console.log(e);
    
// })