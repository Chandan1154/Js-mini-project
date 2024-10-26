// dom and dom manipulation
// document  --> root element ===> head 
//               html ======> body => 
// window is global obj of our browser 
// window has document properties 
// document has html elements 

// let val ;
// val = documentc
// val = document.all/// all doc
// val = document.all[0]// single value
// val = document.head
// val = document.body

let value = document.getElementById('text-txt')
/// html = '<ul><li> Name:'+ name +'</li><li>Age:'+age+'</li><li>job:'+job+'<\li><li>city:'+ city+'</li></ul>'

let id = document.getElementById('text-txt').id
console.log(document.getElementById('text-txt').className);

console.log(id);

//   let button = '<button> OnClick </button>'
//    document.body.innerHTML = button
//    console.log(value);

value.style.backgroundColor = "black"
value.style.color = "pink"
value.style.padding = '50px'

value.textContent = "chandan"
value.innerText = "mand"
value.innerHTML = '<h6> Hello</h6>'
let cl = document.getElementById('task')

function myfun() {
    value.innerText = "chandan good Morning"
}
// getelementbyid will give only the particular id 
// querySelectotor you can select multiple item 

// let txt = document.querySelector('#text-txt')

// let list_item = document.querySelector('.item').style.color = 'green'

// // let collection_item = document.getElementsByClassName('item-list');
// // console.log(collection_item);

// // collection_item[0].style.color = 'green'
// // collection_item[0].textContent = 'd'

// // getelementby tag name 
// // nodeList  no need to convert an array

// // let collection_item = document.querySelectorAll('li')
// // collection_item[0].textContent = 'gand'

// // collection_item.forEach(function(li){
// //     li.textContent = 'ehllo'
// // });


let collection_item =  document.querySelector('ul.top-bar')
let list_itme =  document.querySelector('li.item-list')

let  list_t ;
list_t=  list_itme;
 

// // child nodes 
// list_t = collection_item.childNodes
// list_t = collection_item.children
// val = collection_item.children[0].textContent = "hello"
// val = collection_item.children[1].children

// parent node 
list_t = collection_item.parentNode ;
list_t = collection_item.parentElement;
list_t = collection_item.parentElement.parentElement




// siblings access 
list_t = collection_item.nextSibling
list_t = list_itme.nextElementSibling
list_t = list_itme.previousElementSibling
console.log(list_t);