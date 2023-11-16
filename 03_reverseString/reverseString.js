//return string.split("").reverse().join("");

const reverseString = function(string) {
    let reversedString='';
    let array=string.split("");
    while (array.length>0){
        let letter=array.pop();
        reversedString+=letter;
    }
    return reversedString
};
// Do not edit below this line
module.exports = reverseString;
