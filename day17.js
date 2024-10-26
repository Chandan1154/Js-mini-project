//replace and remove items

// create element

const newHeading = document.createElement('h2');

newHeading.id = 'task-title'
newHeading.appendChild(document.createTextNode("mecrodeee"))
console.log(newHeading);


// replace 

const old_test = document.getElementById('test')
const ul_test = document.querySelector('ul.top-bar')

ul_test.replaceChild(newHeading,old_test)

const lis = document.querySelectorAll('li')
const list = document.querySelector('ul')
lis[0].remove()


// remove child 
list.removeChild(lis[3])
console.log(lis);
