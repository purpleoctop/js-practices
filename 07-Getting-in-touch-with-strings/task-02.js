function checkSpam(source, example){
    if(typeof source!=='string'){
        throw new Error('The first parameter should be string');
        
    }
    if(typeof example!=='string'){
        throw new Error('The second parameter should be string');
        
    }
       
    var n=false;
       for(var j=0; j<=source.length; j++){
           if(source.substring(j, j+example.length).toUpperCase()==example.toUpperCase()){
                n=true
            }
        }
          
    return n;
}
console.log(checkSpam('pitterXXX@gmail.com', 'xxx')); // true
console.log(checkSpam('pitterxxx@gmail.com', 'XXX')); // true