const palindromes = function (a) {
    a = a.toLowerCase();
    nopunc = a.replace(/[!,.\s]/g, "")
    if(reverse(nopunc) === nopunc)
        return true;
    return false;
    // return reverse(nopunc);
};

function reverse(a) {
    let rev = "";
    for(let i = a.length - 1; i >= 0; i--){
        rev += a.charAt(i);
    }

    return rev;
}

// Do not edit below this line
module.exports = palindromes;
