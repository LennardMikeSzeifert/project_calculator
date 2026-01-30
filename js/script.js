let num1;
let operator;
let num2;

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const mulitply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const modulus = function (a, b) {
  return a % b;
};

const multiplyArr = function (array) {
  return array.reduce((total, current) => (total *= current), 1);
};

const sum = function (array) {
  return array.reduce((total, current) => (total += current), 0);
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
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
    case `**`:
      return power(num1, num2);
      break;
    case `%`:
      return modulus(num1, num2);
      break;
    case `fact`:
      return factorial(num1);
      break;
    default:
      alert`Please enter two numbers and one operator.`;
  }
}

console.log(operate(5, `fact`));
