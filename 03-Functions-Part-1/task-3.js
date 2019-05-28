function f(x,y,z){
    if (typeof(x) !== 'number') {
      throw new Error('parameter type is not a Number');
    }
    if (typeof(y) !== 'number') {
      throw new Error('parameter type is not a Number');
    }
    if (typeof(z) !== 'number') {
      throw new Error('parameter type is not a Number');
    }
   
    console.log((x-y)/z);
   }

   f(9,3, 2);