function truncate(string, maxlength){
    if(typeof string!=='string'){
        throw new Error('The first parameter should be string');
        
    }
    if(typeof maxlength!=='number'){
        throw new Error('The second parameter should be number');
    }

    if(string.length>maxlength){
       var str="...";
       var cut= string.substring(0, maxlength-3);
       var newStr=cut+str;
    }
    else{
        newStr=string;
    }

    return newStr;

}

console.log(truncate('I wanna to say next thing about this topic', 22)); // 'I wanna to say next...'