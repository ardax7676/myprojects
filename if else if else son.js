function xVerify(x){
    if (x < 5){
        return "x less than 5";
    }
    else if (x == 5){
        return "x equal to 5";
    }
    else if (x < 10){
        return "x less than 10";
    }
    else if (x == 10){
        return "x equal to 10";
    }
    else{
        return "x bigger than 10 or empty";
    }
}
console.log(xVerify(1));