const reduce = function (arr, f, x) {

    if (!Array.isArray(arr)) {
        throw new Error('First parameter required and has to be only array');
    }
 
    if (typeof f !== 'function') {
        throw new Error('Second parameter required and has to be only function');
    }
 
    if (typeof x !== 'number' || typeof x === 'string') {
        throw new Error('Third parameter required and has to be only string or number');
    }
 
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = f(sum, arr[i], arr, i);
    }
 
    return sum;
 };
 
 const arr = [1, 2, 3];
 
 const sum = console.log(reduce(arr, function (item, x, i, arr) {
    return item + x;
 
 }, 0));