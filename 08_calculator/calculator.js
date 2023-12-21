const add = function(a,b) {
    return a+b;
};

const subtract = function(a,b) {
    return a-b;
};

const sum = function(arr) {
  return arr.reduce((sum,current)=>sum+current,0);
};

const multiply = function(arr) {
  return arr.reduce((product,current) => product*current,1);
};

const power = function(a,b) {
  return a ** b;
  //or Math.pow(a,b);
};

const factorial = function(num) {
    let res=1;
    //base case
    if (num==0){
      return 1;
    }
    return res =num*factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
