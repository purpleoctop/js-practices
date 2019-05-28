function f(n) {

    if(typeof n !=='number') {
        throw new Error("Error: parameter type is not a Number");
    }
 
    switch (n) {
        case 1:
            console.log("ორშაბათი");
            break;
        case 2:
            console.log("სამშაბათი");
            break;
        case 3:
            console.log("ოთხშაბათი");
            break;
        case 4:
            console.log("ხუთხშაბათი");
            break;
 
        case 5:
            console.log("პარასკევი");
            break;
        case 6:
            console.log("შაბათი");
            break;
        case 7:
            console.log("კვირა");
        default:
            console.log("parameter should be in the range of 1 to 7");
    }
 }
 
 f('d');