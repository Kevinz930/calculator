let input = '0';
let stack = [];

// for(let i = 0; i <= 9; i++) {
//   button = document.getElementById(i.toString());
//   button.addEventListener('click', inputNumber(button.id));
// }

button = document.getElementById('1');
button.addEventListener('click', inputNumber(1));

function inputNumber(i) {
  if (input == 0) {
    input = i;
  } else {
    input += i;
  }
  let displayText = document.getElementById('display-text');
  displayText.innerHTML = input;
}