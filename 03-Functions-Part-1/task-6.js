function isEven(num) {
    if (typeof num !=='number') {
        throw new Error("parameter type is not a Number");
    }
    if( num %2 ==0) {
        return true;
    }
  
    else {
        return false;
    }
  }
  
  console.log(isEven(9));
 