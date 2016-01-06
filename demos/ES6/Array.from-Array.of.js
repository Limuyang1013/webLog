let str = 'Banri';
let arr = Array.from(str);

console.log(arr); // [ 'B', 'a', 'n', 'r', 'i' ]

console.log(Array.from({
    length: 3
})); // [ undefined, undefined, undefined ]

function arrFrom(arg) {
    return Array.prototype.slice.call(arg);
};

arrFrom('Banri'); // [ 'B', 'a', 'n', 'r', 'i' ]

arrFrom({
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
}); // ["a", "b", "c"]

console.log(Array.of('1', '2', '3')); // [ '1', '2', '3' ]

function arrOf() {
    console.log(Array.prototype.slice.call(arguments));
    return Array.prototype.slice.call(arguments);
};

arrOf('Hello', 'World'); // [ 'Hello', 'World' ]
