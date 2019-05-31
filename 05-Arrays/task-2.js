const arr = [1,2,3];

function filter(arr, f) {

   if ( !Array.isArray(arr) ) {
       throw new Error('First parameter must be array.');
   }

   if (typeof f !== 'function') {
       throw new Error('Parameter should be only function.');
   }

   let filt = [];

   for (let i = 0; i < arr.length; i++) {
       let cb = f(arr[i], i, arr);

       if(cb)
           filt.push(arr[i]);
   }

   return filt;
}


const filtered=  filter(arr, function(item, i, arr)  {
   return item < 3;
});

console.log(filtered);