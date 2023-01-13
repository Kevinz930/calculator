let input = '0';
let prevOperator = false;
const stack = [];

function mapButtons() {
  for(let i = 0; i <= 9; i++) {
    numBtns = document.getElementsByClassName('num');
    Array.from(numBtns).forEach(numBtn => numBtn.addEventListener('click', inputNumber));
  }

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

  opBtns = document.getElementsByClassName('operator');
  Array.from(opBtns).forEach(opBtn => opBtn.addEventListener('click', pushOperator));

  document.onkeypress = function (e) {

  }
}

function pushOperator(e) {
  op = e.target.id;
  prev = stack.at(-1);
  if (prevOperator) {
    stack[stack.length - 1] = op;
    console.log(stack);
    return;
  }
  stack.push(Number(input));

  if (stack.length == 3) {
    res = compute();
    stack.push(res);
    input = 0;
  }  
  stack.push(op);
  console.log(stack);
  prevOperator = true;
}

function inputNumber(e) {
  x = e.target.id;
  prev = stack.at(-1);
  if (x == '.') {
    if (input.includes('.'))
      return;
    else
      input += x;
  } else if (input == 0 || prev == '+' || prev == '-' || prev == '*' || prev == '/') {
    input = x;
  } else {
    input += x;
  }
  updateDisplay(input);
  console.log(stack);
  prevOperator = false;
}

function evalOperator() {
  stack.push(Number(input));
  res = compute();
  input = res;
  prevOperator = false;
  console.log(stack);
}

function compute() {
  a = stack.shift();
  opPrev = stack.shift();
  b = stack.shift();
  switch (opPrev) {
    case '+':
      res = a + b;
      break;
    case '-':
      res = a - b;
      break;
    case '*':
      res = a * b;
      break;
    case '/':
      res = a / b;
      break;
  }
  updateDisplay(res);
  return res;
}

function signOperator() {
  input = (input * -1).toString();
  updateDisplay(input);
}

function clearEntry() {
  input = 0;
  updateDisplay();
}

function clearGlobal() {
  stack = [];
  input = '0';
  updateDisplay();
}

function backspace() {
  if (input == '')
    return;
  input = input.slice(0, -1);
  if (input == '')
    input = '0';
  updateDisplay(input);
}

function updateDisplay(num = 0) {
  let displayText = document.getElementById('display-text');
  displayText.innerHTML = num;
}

mapButtons();