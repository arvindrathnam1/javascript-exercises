const palindromes = function (a) {
    const reverseString = function(a) {
        let rev = "";
        for(let i = str.length - 1; i >= 0; i--){
            rev += str.charAt(i);
        }
    
        return rev;
    };

    if(reverseString === a)
        return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
