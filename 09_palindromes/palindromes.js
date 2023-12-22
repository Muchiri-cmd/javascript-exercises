const palindromes = function (str) {
    //Remove non alphanumerics
    let alphanumericString=str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();

    originalString=alphanumericString
    reversedString=originalString.split('').reverse().join('');

    //check if they are palindromes
    if(originalString==reversedString){
        return true;//palindromes
    }
    return false;


};

// Do not edit below this line
module.exports = palindromes;
