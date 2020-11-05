let number = document.querySelectorAll('.numbers');
let operators = document.querySelectorAll('.operators');
let input = document.getElementById('input');
let output = document.getElementById('output');

let equalbutton = document.getElementById('equals');
let dotbutton = document.getElementById('dot');


for (let i = 0; i < number.length; i++) {
	number[i].addEventListener('click', () => {
    if (number[i].textContent === '.' && input.innerHTML.includes('.')){
      dotbutton.disabled = true;
    } 
		input.innerHTML += number[i].textContent;
		if (input.innerHTML.length > 25) {
      input.innerHTML = '';
        }
    output.innerHTML = '';
    equalbutton.disabled = false;

	});
}

for (let i = 0; i < operators.length; i++) {
	operators[i].addEventListener('click', () => {
		input.innerHTML += operators[i].textContent;
    output.innerHTML = '';
    equalbutton.disabled = false
    dotbutton.disabled = false;
	});
}

function clearall() {
	input.innerHTML = '';
  output.innerHTML = '';
  dotbutton.disabled = false;
  equalbutton.disabled = false;
  
}

function backspace() {
	input.innerHTML = input.innerHTML.toString().slice(0, -1);
  output.innerHTML = '';
  equalbutton.disabled = false;

}
function operation() {
  var result = eval(input.innerHTML);
   var formatedresult = output.innerHTML +result
  output.innerHTML = numbformat(formatedresult);
  equalbutton.disabled = true
  
}

function numbformat(number){
  const n = Number(number)
  const value = n.toLocaleString("en");
  return value;

}
// function operation(){
//  const compute;
//   pre = parseFloat(previous);
//   cur = parseFloat(current);
//   if(isNaN(pre) || isNaN(cur)) return
//   for (let i = 0; i < operators.length; i++) {
//   switch(operators[i].innerHTML){

//    case '+':
//     compute = pre + cur
//   break

//   }
// output.innerHTML = compute

// }
// }
