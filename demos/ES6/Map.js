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

var m = new Map();

m.set({}, 'A').set({}, 'B');
console.log(m); // Map { {} => 'A', {} => 'B' }
console.log(m.has({})); // false
