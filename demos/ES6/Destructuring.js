// node --use-strict --harmony_destructuring
// var {
//     banri: A,
//     cho: B
// } = {
//     banri: 'Hello',
//     cho: 'World!'
// };

// console.log(A + ' ' + B); // Hello World!

// var {
//     toString: fn,
//     length: len
// } = [1, 2];

// console.log(fn); // [Function: toString]
// console.log(len); // 2

// // var [a, b, c, d, e] = 'Hello';

// // console.log(a);

// var [x, y, z] = 'ES6';

// console.log(z); // 6

function demo({
    x, y = 2, z
}) {
    let r = x * y + z;

    console.log(r);
};

demo({
    x: 1,
    z: 3
}); // 5


// var [a, b] = [1, 2];
// var [a, b] = [b, a];

// console.log(b); // 1
