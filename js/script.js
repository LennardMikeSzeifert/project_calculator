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
