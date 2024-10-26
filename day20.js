// keyboard and  input Events
const forms = document.querySelector('form')
const taskInput = document.querySelector('#task')

const title = document.querySelector('h1')
const addlist = document.querySelector('top-list')
// from event
// forms.addEventListener('submit', runEvent)
taskInput.value = ""
taskInput.addEventListener('keydown', runEvent)

function runEvent(e) {
    console.log(`event type: ${e.type}`);
    console.log(e.target.value)
    console.log(taskInput.value);
    // title.textContent = taskInput.value
    // e.preventDefault()
}