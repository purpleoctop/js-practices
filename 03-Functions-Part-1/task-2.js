function f(){
    var sum = 0;
    for(var item of arguments)
    {
        if(typeof(item)!='number') {
            throw new Error('message type is not a number');
        }
        else {
            sum=sum+item;
        }
    }

    return sum;
}

   console.log(f(1,2,3)); // 6
   console.log(f(1,1,1,1,1,1,1,1)); // 8
   console.log(f(1,2,'s',4)); // Error: all parameters type should be a Number