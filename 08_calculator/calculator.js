const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
	let res = 0;
  for(let i = 0; i < a.length; i++)
    res += a[i];
  return res;
};

const multiply = function(a) {
  let res = 1;
  for(let i = 0; i < a.length; i++)
    res *= a[i];
  return res;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
	let fact = 1;
  for(let i = 2; i <= a; i++)
    fact *= i;
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
