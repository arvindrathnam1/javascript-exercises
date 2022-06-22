const removeFromArray = function() {
    const arr = arguments[0];
    const filt = arr.filter(elem => {
        for(let i = 1; i < arguments.length; i++){
            if(elem === arguments[i])
                return false;
        }
        return true;
    });
    return filt;
};

// Do not edit below this line
module.exports = removeFromArray;
