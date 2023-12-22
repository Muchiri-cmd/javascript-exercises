const findTheOldest = function(arr) {
    let oldest=0;
    let ageArray=[];
    for(obj of arr){
        (obj.yearOfDeath) ? age=obj.yearOfDeath-obj.yearOfBirth : 
        age= (new Date().getFullYear())-obj.yearOfBirth;
        if (age>oldest){
            oldest=age;
            ageArray.unshift(obj);
        }
    }   
     return ageArray[0];

    
};

// Do not edit below this line
module.exports = findTheOldest;
