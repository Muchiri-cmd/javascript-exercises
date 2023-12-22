const findTheOldest = function(arr) {
    let greatest=0;
    const sortedArray=[];
    for(obj of arr){
        if (obj.yearOfDeath){
            const age=obj.yearOfDeath-obj.yearOfBirth;
            if (age>greatest){
                greatest=age;
                sortedArray.push(obj);
            }
        }else if (!obj.yearOfDeath){
            const age= (new Date().getFullYear())-obj.yearOfBirth;
            if (age>greatest){
                greatest=age;
                sortedArray.push(obj)

            }
        }
     }
     //sort array according to age
     return sortedArray.reverse()[0]


    
};

// Do not edit below this line
module.exports = findTheOldest;
