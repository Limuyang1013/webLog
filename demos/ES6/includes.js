// var arr = [1, 2, 3, 4, 5];
// var r1 = arr.includes(2);
// var r2 = arr.includes(2, 3);

// console.log(r1); // true
// console.log(r2); // false

var arr = [1, 2, 3, undefined, NaN];
Array.prototype.sayHi = 'Hello';

// console.log(arr.indexOf(2) !== -1); // true
// console.log(arr.indexOf(undefined) !== -1); // true
// console.log(arr.indexOf(NaN) !== -1); // false

// console.log(arr.includes(NaN)); // true

console.log('sayHi' in arr); // true
console.log(undefined in arr); // false

console.log(arr.includes('sayHi')); // false
console.log(arr.includes(undefined)); // true
