const arr = [1,2,3];

function every(arr, f) {

   if (!Array.isArray(arr)) {
       throw new Error('First parameter must be array.');
   }

   if (typeof f !== 'function') {
       throw new Error('Parameter should be only function.');
   }

   let isPositive= true;

   for (let i = 0; i < arr.length; i++) {
       let cb = f(arr[i], i, arr);
 
       if(!cb){
            isPositive = false;
            break;
       }
       
   }

   return isPositive;
}


const isPositive = every(arr, function(item, i, arr) {
   return item > 0;
});

console.log(isPositive);