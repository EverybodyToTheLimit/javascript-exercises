const reverseString = function(string) {

let unoReverso = Array.from(string);
let targetArray = [];
let stopIterating = unoReverso.length;
for (i = 0; i < stopIterating; i++) {
    targetArray.push(unoReverso.pop());
}
let result = targetArray.join("");
return(result);
};

// Do not edit below this line
module.exports = reverseString;
