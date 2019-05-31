const arr = [1,2,3];

function forEach(arr, f) {

   if (!Array.isArray(arr)) {
       throw new Error('Parameter type has to be array');
   }

   if (!typeof f== 'function') {
       throw new Error('Parameter should be only function');
   }

   for (let i = 0; i < arr.length; i++) {
       f(arr[i], i , arr);
   }
}


forEach(arr, function(item, i, arr) {
   console.log(`Value: ${item}  ArrayIndex: ${i}  Elements: ${arr}`);
});