function getDivisors(n){
    var divisors = new Array;
    var i=0;
        if(typeof(n)!='number') {
            throw new Error('parameter type is not a Number');
        }
        else if(n<0) {
            throw new Error('Parameter should be positive number');
        }
        else if(n===0) {
            throw new Error("parameter can't be a 0");
        }

        else {
           
            for(var j=0; j<=n; j++){
                if(n % j===0){
                    divisors[i]=j;
                    i++;
                }
            }
        }

      
    return divisors;
}
    



console.log(getDivisors(12)); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0