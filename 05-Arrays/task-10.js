const arr = [3, 2, 1];

function reverse(arr) {

 if (!Array.isArray(arr)) {
         throw new Error('First parameter required and has to be only array');
     }

     if(arr.length==0) {
         throw new Error('Empty array shell not pass!!!');
     }

 var arrReversed = [];
 for (let i=arr.length-1; i >= 0; i--) {
     arrReversed.push(arr[i])

}

return arrReversed;

}

console.log(reverse(arr));

