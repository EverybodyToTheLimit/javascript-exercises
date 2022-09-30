const palindromes = function (input) {
let sanitisedString = input.split(" ");
sanitisedString = sanitisedString.join("");
sanitisedString = sanitisedString.replaceAll(/,/g,'');
sanitisedString = sanitisedString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
sanitisedString = sanitisedString.toLowerCase();
let originalArray = sanitisedString.split("")
let reversedArray = originalArray.reverse();
let reversedString = reversedArray.toString();
reversedString = reversedString.split(",");
reversedString = reversedString.join("");
reversedString = reversedString.toLowerCase();
if (sanitisedString === reversedString) {
    return(true)
}
else {
    return(false)
}

};

// Do not edit below this line
module.exports = palindromes;
