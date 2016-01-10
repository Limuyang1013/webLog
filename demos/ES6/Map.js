// var m = new Map([
//         ['A', 1],
//         ['B', 2]
//     ]),
//     obj = {
//         name: 'Banri'
//     };

// m.set(obj, '3');
// console.log(m); // Map { 'A' => 1, 'B' => 2, { name: 'Banri' } => '3' }
// console.log(m.has(obj)); // true
// console.log(m.get('B')); // 2
// console.log(m.delete('A')); // true
// console.log(m); // Map { 'B' => 2, { name: 'Banri' } => '3' }

// var m = new Map();

// m.set({}, 'A').set({}, 'B');
// console.log(m); // Map { {} => 'A', {} => 'B' }
// console.log(m.has({})); // false
// console.log(m.size); // 2

// var m = new Map([
//     ['A', 1],
//     ['B', 2],
//     ['C', 3]
// ]);

// for (let key of m.keys()) {
//     console.log(key);
// };

// for (let value of m.values()) {
//     console.log(value);
// };

// for (let item of m.entries()) {
//     console.log(item);
// };

// // 需开启 --harmony_destructuring
// for (let [key, value] of m) {
//     console.log(key, value);
// };

// m.forEach(function(value, key, map) {
//     console.log(value, key, map);
// });

// 错误用法
var wm = new WeakMap([
    [{
        obj: 1
    }, 1],
    [{
        obj: 2
    }, 2],
    [{
        obj: 3
    }, 3]
]);

console.log(wm.size); // undefined

// 错误用法
wm.forEach(function(value, key, wm) {
    console.log(value);
}); // TypeError: wm.forEach is not a function
