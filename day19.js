// mouse Events
// click 
// mouse down 

const clear =  document.querySelector('.top-bar')
const card = document.querySelector('.card')

const title  = document.querySelector('h2')

//clear.addEventListener('mousedown', runEvent)
// clear.addEventListener('mouseup', runEvent)
// clear.addEventListener('mouseenter', runEvent)
// clear.addEventListener('mouseleave', runEvent)
clear.addEventListener('mousemove', runEvent)



function runEvent (e){
console.log(`EVENT TYPE:' ${e.type}`);
clear.textContent = `MouseX : ${e.offsetX}, MouseY : ${e.offsetY}`;
document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY})`
e.preventDefault()
}