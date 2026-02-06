// const calculatorContainer = document.querySelector(`.calculator-container`);
// let num = 9;
// for (let i = 0; i <= 9; i++) {
//   const button = document.createElement(`button`);
//   button.textContent = `${num}`;
//   button.className = `button button${num--}`;
//   calculatorContainer.appendChild(button);
//   console.log(button);
// }

let num1 = ``;
let operator;
let num2 = ``;
const resultDisplay = document.querySelector(`.result-display-container`);
const buttons = document.querySelectorAll(`.button`);
const numerical = `0123456789.()%`;
const operators = `+-*/powfactmod`;
const elementNum1 = document.createElement(`p`);
const elementOperator = document.createElement(`p`);
const elementNum2 = document.createElement(`p`);
elementNum1.className = `calculator-element`;
elementOperator.className = `calculator-element`;
elementNum2.className = `calculator-element`;
const equals = document.querySelector(`.equals`);
const elementEquals = document.createElement(`p`);
elementEquals.textContent = `=`;
elementEquals.className = `calculator-element`;
const elementResult = document.createElement(`p`);
elementResult.className = `calculator-element`;

const add = function (a, b) {
  return +a + +b;
};

const subtract = function (a, b) {
  return +a - +b;
};

const mulitply = function (a, b) {
  return +a * +b;
};

const divide = function (a, b) {
  return +a / +b;
};

const modulus = function (a, b) {
  return +a % +b;
};

const multiplyArr = function (array) {
  return array.reduce((total, current) => (total *= current), 1);
};

const sum = function (array) {
  return array.reduce((total, current) => (total += current), 0);
};

const power = function (base, exponent) {
  return (+base) ** +exponent;
};

const factorial = function (n) {
  let product = 1;
  for (let i = +n; i > 0; i--) {
    product *= i;
  }
  return product;
};

function operate(num1, operator, num2) {
  switch (operator) {
    case `+`:
      return add(num1, num2);
      break;
    case `-`:
      return subtract(num1, num2);
      break;
    case `*`:
      return mulitply(num1, num2);
      break;
    case `/`:
      return divide(num1, num2);
      break;
    case `pow`:
      return power(num1, num2);
      break;
    case `mod`:
      return modulus(num1, num2);
      break;
    case `fact`:
      return factorial(num1);
      break;
    default:
      alert`Please enter two numbers and one operator.`;
  }
}

function updateNum1(e) {
  if (numerical.includes(e.target.textContent)) {
    num1 += e.target.textContent;
  }
}

function updateOperator(e) {
  operator = e.target.textContent;
}

function updateNum2(e) {
  if (numerical.includes(e.target.textContent)) {
    num2 += e.target.textContent;
  }
}
buttons.forEach((button) =>
  button.addEventListener(`click`, function (e) {
    while (!operator) {
      updateNum1(e);
      elementNum1.textContent = `${num1}`;
      resultDisplay.appendChild(elementNum1);
      break;
    }
    if (operators.includes(e.target.textContent)) {
      updateOperator(e);
      elementOperator.textContent = `${operator}`;
      resultDisplay.appendChild(elementOperator);
    }
    while (operator != undefined && !elementResult.textContent) {
      updateNum2(e);
      elementNum2.textContent = `${num2}`;
      resultDisplay.appendChild(elementNum2);
      break;
    }
  }),
);

equals.addEventListener(`click`, function () {
  resultDisplay.appendChild(elementEquals);
  elementResult.textContent = `${operate(num1, operator, num2)}`;
  resultDisplay.appendChild(elementResult);
});
