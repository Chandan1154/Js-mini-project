// create an element 
// we are putting one list of element 
const li = document.createElement('li')

// add class name 
li.className = 'collect_name'
li.id = 'my-item'
//set attribute
li.setAttribute('title', "new item ")
// text node 
const ul_test = document.querySelector('ul.top-bar')
li.appendChild(document.createTextNode("eelo"))
ul_test.appendChild(li)

const link = document.createElement('a')
// delete-item
// fas

link.className = "delete-item";
link.innerHTML = '<i class="fas">not del</i>'
li.appendChild(link)
//li.textContent = "tlell"
console.log(li);

