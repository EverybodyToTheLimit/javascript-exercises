const sumAll = function(number1, number2) {
    if (Number.isInteger(number1) && number1 >= 0 && Number.isInteger(number2) && number2 >= 0) {
        let result = null;
        if (number1 < number2) {
            result = number1;
            for (i=number1; i<number2; i++) {
                result = result + (i + 1);
            }
        }
        else {
            result = number2;
            for (i=number2; i<number1; i++) {
                result = result + (i + 1);
        }
        }
        return(result);
    }
    else {
        return("ERROR")
    }

};

// Do not edit below this line
module.exports = sumAll;
