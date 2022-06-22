const sumAll = function(a, b) {
    if(a < 0 || b < 0)
        return 'ERROR';

    if(!(typeof(a) == 'number' && typeof(b) == 'number'))
        return 'ERROR';

    let c,d;
    if(a > b){
        c = a;
        d = b;
    }else{
        c = b;
        d = a;
    }

    let sum = 0;

    for(let i = d; i <= c; i++)
        sum += i;

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
