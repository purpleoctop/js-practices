var arr=[2, -1, 5, -9, 15, 19, 4, -10, 12, -15]
var sum=0;
positive: for(var i=0; i<10; i++){

    if(arr[i]>0){
        sum=sum+arr[i];
    }
    else{
        continue positive;
    }
}

console.log(sum);