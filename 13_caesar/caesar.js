const caesar = function(a, b) {
    let res = "";
    b = b % 26;
    for(let i = 0; i < a.length; i++){
        if(!isLetter(a.charAt(i)))
            res += a.charAt(i);
        else if(isUpper(a.charAt(i)))
            res += String.fromCharCode(((a.charCodeAt(i) + b - 65) + 26) % 26 + 65);
        else
            res += String.fromCharCode(((a.charCodeAt(i) + b - 97) + 26) % 26 + 97); 
    }
    return res;
};

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

function isUpper(str) {
    return str.length === 1 && str.match(/[A-Z]/);
}

function isLower(str) {
    return str.length === 1 && str.match(/[a-z]/);
}
// Do not edit below this line
module.exports = caesar;
