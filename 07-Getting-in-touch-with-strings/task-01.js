function upperCaseFirst(string){
    var newStr='';
    if(typeof string!=='string'){
        throw new Error('only strings accepted');
        
    }
    for(var i in string){
        if(i==0){
         newStr=string.charAt(0).toUpperCase();
         
        }
    
        else{
           newStr+=string.charAt(i);
        }
    }
    
    return newStr;
    
    }
    
    console.log(upperCaseFirst('string'));
    console.log(upperCaseFirst(''));
    console.log(upperCaseFirst(101))