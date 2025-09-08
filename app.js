/*-------------------------------- Constants --------------------------------*/

const DISPLAY_SELECTOR = '.display';
const BUTTON_SELECTOR = '.button';

/*-------------------------------- Variables --------------------------------*/

let firstNumber = '';
let secondNumber = '';
let operator = '';
let isEnteringSecond = false;

/*---------------------- Cached Element References ------------------------*/

const displayEl = document.querySelector(DISPLAY_SELECTOR);
const buttons = document.querySelectorAll(BUTTON_SELECTOR);

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    const value = event.target.innerText;

    if (button.classList.contains('number')) {
      numberHandling(value);
    } else if (button.classList.contains('operator')) {
      operatorHandling(value);
    } else if (button.classList.contains('equals')) {
      equalHandling();
    }
  });
});

/*-------------------------------- Functions --------------------------------*/

function numberHandling(value) {
  if (!isEnteringSecond) {
    firstNumber += value;
    updateDisplay(firstNumber);
  } else {
    secondNumber += value;
    updateDisplay(secondNumber);
  }
}

function operatorHandling(op) {
  if (op === 'C') {
    clearAll();
  } else if (firstNumber !== '') {
    operator = op;
    isEnteringSecond = true;
  }
}

function equalHandling() {
  if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
    const a = Number(firstNumber);
    const b = Number(secondNumber);
    let result = 0;

    if (operator === '+') result = a + b;
    else if (operator === '-') result = a - b;
    else if (operator === '*') result = a * b;
    else if (operator === '/') result = a / b;

    updateDisplay(result);
    firstNumber = result.toString();
    secondNumber = '';
    operator = '';
    isEnteringSecond = false;
  }
}

function clearAll() {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  isEnteringSecond = false;
  updateDisplay('0');
}

function updateDisplay(value) {
  displayEl.textContent = value;
}

updateDisplay('0');
