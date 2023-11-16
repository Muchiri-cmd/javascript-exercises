const repeatString = function(string,num) {
    if (num<0){return "ERROR"};
    let resultingString='';
    for (let i=0;i<num;i++){
        resultingString+=string;
    }
    return resultingString;
   
}
// Do not edit below this line
module.exports = repeatString;
