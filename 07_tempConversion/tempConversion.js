function roundToTwo(num) {
  return +(Math.round(num + "e+1")  + "e-1");
}

const ftoc = function(input) {

  return(roundToTwo(Number(((input-32)/1.8))));

};

const ctof = function(input) {
  return(roundToTwo(Number(((1.8*input)+32))));

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
