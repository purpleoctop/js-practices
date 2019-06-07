Object.prototype.mergeDeepRight = function(object) {
    arr(this, object);

    function arr(list, arg){
        let items = Object.keys(arg);
        items.forEach(function(item){
        list[item] = arg[item];
            if(typeof arg[item] === 'object' && !Array.isArray(arg[item])){
                arr(list[item], arg[item]);
           }  else if (Array.isArray(arg[item])){
                list[item].push(...arg[item]);
            }
       });
    }
};

Object.defineProperty(Object.prototype, 'mergeDeepRight', {enumerable: false} );

const data = {
    name: 'fred',
    age: 10,
    contact: {
        email: 'moo@example.com',
        meta: {
            verified: true,
            tags: ['important']
        }
    }
};

data.mergeDeepRight({
        age: 40,
        contact: {
            email: 'baa@example.com',
            favorite: true,
            meta: {
                tags: ['vip']
            }
        },
    nope: {
        value: 'nope'
        }
    });
console.log(data);
 
 

// data will be
// {
// 	name: 'fred',
// 	age: 40,
// 	contact: {
// 		email: 'baa@example.com',
//         favorite: true,
// 		meta: {
//             verified: true,
//             tags: ['vip', 'important']
//         }
// 	}
// }