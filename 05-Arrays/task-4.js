const arr = [-1,-2,3];

function some(arr, f) {

   if (!Array.isArray(arr)) {
       throw new Error('First parameter must be array.');
   }

   if (typeof f !== 'function') {
       throw new Error('Second parameter must be function.');
   }

   let isPositive = false;

   for (let i = 0; i < arr.length; i++) {
       let cb = f(arr[i], i, arr);

       if(cb) {
           isPositive = true;
           break;
       }
   }

   return isPositive;
}

const isPositive = some(arr, function(item, i, arr)  {
   return item > 0;
});

console.log(isPositive);