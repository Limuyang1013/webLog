// let name = 'Banri',
//     obj = {name};

// console.log(obj); // { name: 'Banri' }

// let name = 'Banri',
//     obj = {
//         name: name
//     };

// console.log(obj); // { name: 'Banri' }

// console.log(+0 === -0); // true
// console.log(NaN === NaN); // false

// console.log(Object.is(+0, -0)); // false
// console.log(Object.is(NaN, NaN)); // true

let obj1 = {
        a: 1
    },
    obj2 = {
        b: 2
    },
    obj3 = {
        c: 3
    };

let result = Object.assign(obj1, obj2, obj3);

console.log(obj1); // { a: 1, b: 2, c: 3 }
console.log(result); // { a: 1, b: 2, c: 3 }
console.log(obj1 === result); // true
