function f(arr) {

    if ( !Array.isArray(arr) ) {
        throw new Error('First parameter required and has to be only array');
    }
 
    let sum = 0;
 
    for (let i = 0; i < arr.length; i++) {
 
        if (!(typeof arr[i] == 'number') && !(Array.isArray(arr[i])) ) {
            throw Error('Every element required and has to be number or array.');
        }
 
        if (Array.isArray(arr[i])) {
            let item = f(arr[i]);
            sum += item;
        } else {
            sum += arr[i];
        }
    }
 
    return sum;
 
 }
 
 let arr = [[[1, 2], [1, 2]], [[2, [1]], [1, 2]]];
 console.log(f(arr)); // 12
 const arr2 = [[[[[1,2]]]]];
 console.log(f(arr2)); // 3
 const arr3 = [[[[[1,2]]],2],1];
 console.log(f(arr3)); // 6
 const arr4 = [[[[[]]]]];
 console.log(f(arr4)); // 0
 const arr5 = [[[[[],3]]]];
 console.log(f(arr5)); // 3
