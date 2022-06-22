const findTheOldest = function(a) {
    let age = a.map(elem => {
        if(elem["yearOfDeath"] == null)
            elem["yearOfDeath"] = 2022;
        return elem["yearOfDeath"] - elem["yearOfBirth"]
    })
    let ind = 0;
    for(let i = 1; i < age.length; i++){
        if(age[i] > age[ind])
            ind = i;
    }
    return a[ind];
};

// Do not edit below this line
module.exports = findTheOldest;
