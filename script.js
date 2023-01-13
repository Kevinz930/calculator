let input = '0';
let expression = '';
let op1 = '';
let op2 = '';
let prev = '';
let operator = '';

function mapButtons() {
  for(let i = 0; i <= 9; i++) {
    numBtns = document.getElementsByClassName('num');
    Array.from(numBtns).forEach(numBtn => numBtn.addEventListener('click', inputNumber));

  }

  opBtns = document.getElementsByClassName('operator');
  Array.from(opBtns).forEach(opBtn => opBtn.addEventListener('click', pushOperator));

  evalBtn = document.getElementById('=');
  evalBtn.addEventListener('click', evalOperator);

  signBtn = document.getElementById('sign');
  signBtn.addEventListener('click', signOperator);

  clearEntryBtn = document.getElementById('clear_entry');
  clearEntryBtn.addEventListener('click', clearEntry);

  clearGlobalBtn = document.getElementById('clear_global');
  clearGlobalBtn.addEventListener('click', clearGlobal);

  delBtn = document.getElementById('delete');
  delBtn.addEventListener('click', backspace);
}

function inputNumber(e) {
  i = e.target.id;
  if (i == '.' && prev == '.') {
    return
  } 
  if (input == 0) {
    input = i;
  } else {
    input += i;
  }
  prev = i;
  updateDisplay(input);
}

function pushOperator(e) {
  console.log(e.target.id);
  op1 = input
  input = '0';
  operator = e.target.id;
}

function evalOperator() {
  op2 = input;
  res = op1 ? compute(Number(op1), Number(input)) : input;
  op1 = res;
  updateDisplay(res);
}

function compute(op1, op2) {
  switch (operator) {
    case '+':
      return op1 + op2;
      break;
    case '-':
      return op1 - op2;
      break;
    case '*':
      return op1 * op2;
      break;
    case '/':
      return op1 / op2;
      break;
    case '':
      return op2;
  }
}

function signOperator() {
  input *= -1;
  updateDisplay(input);
}

function clearEntry() {
  input = 0;
  updateDisplay();
}

function clearGlobal() {
  op1 = '';
  op2 = '';
  prev = '';
  operator = '';
  input = '0';
  updateDisplay();
}

function backspace() {
  input = input.slice(0, -1);
  if (input == '') {
    input = '0';
  }
  updateDisplay(input);
}

function updateDisplay(num = 0) {
  let displayText = document.getElementById('display-text');
  displayText.innerHTML = num;
}

mapButtons();