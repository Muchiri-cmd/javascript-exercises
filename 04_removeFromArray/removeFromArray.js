const removeFromArray = function(array,...elems) {
    const cleanedArray=[];
    array.forEach((elem)=>{
        if (!elems.includes(elem)){
            cleanedArray.push(elem);
        }
    });
    return cleanedArray;
};
// Do not edit below this line
module.exports = removeFromArray;
