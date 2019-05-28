function f(){
    var a = 0;
    for(var item of arguments)
    {
        if(typeof(item)==='number') {
            a=a+item;
        }
        else {
            throw new Error('message type is not a number');
        }
    }
    console.log(a);
   }

   f(1,2,3)