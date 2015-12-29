var a = ['A', 'B', 'C'];
var m = new Map([
    ['A', 10],
    ['B', 20],
    ['C', 30]
]);
var s = new Set(['A', 'B', 'C']);

// a.forEach(function(element, index, array) {
//     // console.log(element);
//     // console.log(index);
//     // console.log(array);
//     var index = index + 1;
//     console.log(element + ' is No.' + index);
// });

// m.forEach(function(value, key, map) {
//     // console.log(value);
//     console.log(key);
// });

s.forEach(function(element, sameElement, set) {
    console.log(sameElement);
    console.log(set);
});
