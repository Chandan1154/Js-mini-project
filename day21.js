// event bubbling

// document.querySelector('.top').addEventListener('click',
//     function(){
//         console.log('top');
//     }
// )

// without delegation
//const delitem = document.querySelector('')
document.body.addEventListener("click", removeElement);

function removeElement(e) {
  console.log(e.target.classList.contains("delete-item"));

  if (e.target.classList.contains("delete-item")) {
    console.log(e.target.parentElement.parentElement);
    e.target.parentElement.parentElement.remove()
  }
}
