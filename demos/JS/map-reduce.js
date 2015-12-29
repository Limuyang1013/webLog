var arr = [1, 2, 3, 4, 5, 6, 7];

// map
// function x2(x) {
//     return x * x;
// }

// console.log(arr.map(x2));
// console.log(arr.map(String));

var fn1 = arr.map(function(x) {
    return x * x;
});

console.log(fn1);

// reduce
// function plus(x, y) {
//     return x + y;
// }

// console.log(arr.reduce(plus));

var fn2 = arr.reduce(function(x, y) {
    return x + y;
});

console.log(fn2);
