function f(n) {
  var day;
    if(typeof n !=='number'){
        throw new Error("Error: parameter type is not a Number");
    }
    else if ((n>7)||(n<0)){
        throw new Error("parameter should be in the range of 1 to 7");
    }
    else{
    switch (n) {
        case 1:
            day="კვირა";
            break;
        case 2:
            day="ორშაბათი";
            break;
        case 3:
            day="სამშაბათი";
            break;
        case 4:
            day="ოთხშაბათი";
            break;
        case 5:
            day="ხუთხშაბათი";
            break;
        case 6:
            day="პარასკევი";
            break;
        case 7:
            day="შაბათი";
            break;
        }
    }
    return day;
 }

 
 console.log(f(1)); // Sunday
 console.log(f(2)); // Monday
 console.log(f(8)); // Error: parameter should be in the range of 1 to 7
 console.log(f('1')); // Error: parameter type is not a Number