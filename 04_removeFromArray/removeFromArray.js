const removeFromArray = function(array) {
    let sourceArray = arguments[0];
    for (i=1; i < arguments.length; i++) {
       let searchString = arguments[i];
       sourceArray = sourceArray.filter(e => e !== searchString);
    }
    return(sourceArray);
};

// Do not edit below this line
module.exports = removeFromArray;
