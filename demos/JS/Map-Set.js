// Map
var m = new Map([
    ['A', 10],
    ['B', 20],
    ['C', 30]
]);

console.log(m.get('A'));

m.set('D', 40);
console.log(m);

console.log(m.has('B'));

m.delete('D');
console.log(m);

// console.log(m['A']); // undefined

// Set
var s = new Set([1, 2, 3, 4, 4, '4']);
console.log(s);

s.add(5);
s.add(4);
console.log(s);
console.log(s.has(3));

s.delete(2);
console.log(s);

// for ... of ...
for (var x of m) {
    console.log(x);
}
