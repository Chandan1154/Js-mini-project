// template literals 
const name = "Mani";
const age = 25;
const job ='Web Developer'
const city = "Manglore"

// render dom manipulation
// dynamicaly rendering 

let html ;

// without using template literals, ESS, we are going to html to bowser with js
html = '<ul><li> Name:'+ name +'</li><li>Age:'+age+'</li><li>job:'+job+'<\li><li>city:'+ city+'</li></ul>'

document.body.innerHTML = html
function hello (){
    return 'hello';
}

// without using tmaplate literals(es6)
html  = `<ul>
<li> Name: ${name}<\li>
<li> age: ${age}<\li>
<li> job: ${job}<\li>
<li> city: ${city}<\li>
<li> fun: ${hello()}<\li>
</ul>`;
document.body.innerHTML = html
