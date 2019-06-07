Object.defineProperty(Object.prototype, 'extend', {
   
    writable: true,
    enumerable: false,
    configurable: true,

    value(prop) {
        for (prop of Object.getOwnPropertyNames(source)) {

            if (!data.hasOwnProperty(prop)) {
                
                Object.defineProperty(data, prop, Object.getOwnPropertyDescriptor(source, prop));
            }
        }
    }
});


const data = { a: 'a' };
const source = { a: 'A', b: 'b' };
Object.defineProperty(source, 'b', { writable: false });
data.extend(source);
console.log(data); 
console.log(Object.getOwnPropertyDescriptor(data, 'b').writable);