var s = new Set([1, 2, 3]);

// s.add(4).add('4').add(3);
// console.log(s); // Set { 1, 2, 3, 4, '4' }

// console.log(s.size); // 5
// console.log(s.has(2)); // true

// console.log(s.delete('4')); // true
// console.log(s); // Set { 1, 2, 3, 4 }

// s.clear();
// console.log(s); // Set {}

s.forEach(function(a, b, c) {
    console.log(a, b, c);
});

// var ws = new WeakSet(),
//     arr = [1, 2, 3],
//     obj = {
//         name: 'Banri'
//     };

// ws.add(arr).add(obj);
// console.log(ws.has(arr)); // true
// console.log(ws.size); // undefined
