// result

document.getElementById("cal").addEventListener("submit", calculation);

function calculation(e) {
  const dol = document.getElementById("dol").value;
  const per = document.getElementById("pers").value;
  const yer = document.getElementById("yer").value;
  // monthly payment    ]=
//   console.log(dol.value);
const principal = parseFloat(dol);
const calculatedIntrest = parseFloat(per) / 100 / 12;
const calculatedPayments = parseFloat(yer) * 12;

// Calculating x
const x = Math.pow(1 + calculatedIntrest, calculatedPayments);

// Calculating the monthly payment
const monthly = (principal * x * calculatedIntrest) / (x - 1);



if(isFinite(monthly)){
  let html = document.getElementById('cal-cl');
html.innerHTML = `
<h1>Result</h1>
<br>
<label>Monthly Payment</label>
<input type="text" value="${monthly.toFixed(2)}" disabled>
<br>
<label>Total Interest</label>
<input type="text" value="${(monthly * calculatedPayments - principal).toFixed(2)}" disabled>
<br>
<label>Total Payment</label>
<input type="text" value="${(monthly * calculatedPayments).toFixed(2)}" disabled>
<br>
`;
}else{
  showAlert('please enter the amounts')
}

// Getting the HTML element to display results

  console.log(`${dol}, ${per}, ${yer}`);

  e.preventDefault();
}


function showAlert(error){
 
  setTimeout(function(e){
    alert(error)
    //  document.querySelector(".alert").remove()
  }, 1000)
  // const errorDiv = document.createElement('div')
  // errorDiv.className ='alert alert-danger'
  // errorDiv.appendChild(document.createTextNode(error))
}
