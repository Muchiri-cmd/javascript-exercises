const leapYears = function(year) {
    if (year%4==0&&year%100!==0||year%100==0&&year%400==0){
        return true;
    }
    return false;
    /*
    if (year%4==0){
        if(year%100!==0||(year%100==0&&year%400==0)){
            return true;
        }
        return false;
    }
    return false;*/
};

// Do not edit below this line
module.exports = leapYears;
