const palindromes = function (str) {
    //Remove non alphanumerics
    let originalString=str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    reversedString=originalString.split('').reverse().join('');
    
    //check if they are palindromes
    return (originalString==reversedString) ? true : false;
  


};

// Do not edit below this line
module.exports = palindromes;
