function f(x,y,z){
    if ((typeof(x) !== 'number')||(typeof(y) !== 'number')||(typeof(z) !== 'number')) {
      throw new Error('all parameters type should be a Number');
    }
   else{
    var result=((x-y)/z);
   }
   return result;
  }

  console.log(f(9,3,2)); // 3
  console.log(f('s',9,3)) // Error: all parameters type should be a Number