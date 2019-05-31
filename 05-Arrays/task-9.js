const arr = [1, 2, 3, 4, 5];

function arrayFill(input, arrLength) {

   if (!((typeof input == 'number') || (typeof input == 'string')|| (typeof input == 'object'))) {

       throw new Error("First parameter required and has to be only number, string, object array");
   }

   if (typeof arrLength !== 'number') {

       throw new Error("Second parameter required and has to be only number");
   }

   let arrNew = [];

   for (let i=0; i < arrLength; i++) {
       arrNew.push(input)
  }
   return arrNew;
}
console.log(arrayFill('x',5));

