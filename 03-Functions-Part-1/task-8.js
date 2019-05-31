function f(arr) {
    if(!Array.isArray(arr)) {
        throw new Error("parameter type should be an array");
    }
  
    if(arr.length < 1) {
        throw new Error("Error: parameter can not be an empty");
    }
  
    console.log(arr[0])
    arr.splice(0,1);
    f(arr);
  
    return true;
  
  }
  
  f([1,2,3]);
  //f(1,2,3) // Error: parameter type should be an array
  //f('Content') // Error: parameter type should be an array
  //f([]) // Error: parameter can't be an empty