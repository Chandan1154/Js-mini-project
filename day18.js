// event listener and event object
// event is an action 
// event has diff type like key, mouse
// addeventlistener has two parmeter 
// one action name  and function 
// document.querySelector('.clear-task').addEventListener('click', function () {
//     console.log("hello ");
// })

/// separate 
// if any function doesn't have any name is called anonymous function

document.querySelector('.clear-task').addEventListener('click', onClick)
function onClick(e) {
    // console.log('hello world');
    // e.preventDefault();// event object 
    let val;
    val = e;
    val = e.target
    val = e.target.className
    e.target.innerText = "hell"
     val=  e.type 
     val = e.timeStamp

     //cordinates
     val = e.clientX
     val = e.clientY

     val = e.offsetY
     val = e.offsetX
    e.preventDefault()

    console.log(val);
}

