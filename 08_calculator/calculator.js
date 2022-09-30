const add = function(a,b) {
	return(a+b)
};

const subtract = function(a,b) {
	return(a-b);
};

const sum = function(a) {
  let result =0
  a.map(countFunction);
  function countFunction (num){
    result = result + num;
  }
  return(result);
};

// const multiply = function(a) {
//   let numberArguments = arguments.length;
//   let result = multiply.arguments[0];
//   for (i=1; i<numberArguments; i++) {
//     result = result * multiply.arguments[i];
//   }
//   return(result);
// };

const multiply = function(a) {
  let result = 1
  a.map(multiplyFunction);
  function multiplyFunction(num) {
    result = result * num; 
  }
  return(result);
}

const power = function(a, b) {
	return(Math.pow(a, b));
};

const factorial = function(a) {
	let result = 1;
  for (let i=a; i>0; i--) {
    result = result * i
  }
  return(result);
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
