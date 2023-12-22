const fibonacci = function(position) {
    if (position<0) return "OOPS";
    if(typeof(position)=='string'){Number(position);}

    const fibonacciArray=[1,1];
    for(let i=1;i<position;i++){
        fibonacciArray.push(fibonacciArray[i]+fibonacciArray[i-1]);
    }
    return fibonacciArray[position-1];

};

// Do not edit below this line
module.exports = fibonacci;
