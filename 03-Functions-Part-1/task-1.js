function cube(a){
    var a;
    if (typeof a !== 'number') {
        throw new Error('message type is not a string');
    } else {
        return  a*a*a;
    }
}

console.log(cube(3));