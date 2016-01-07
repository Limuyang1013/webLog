let fn = function(word, ...names) {
    let len = names.length;

    for (let i = 0; i < len; i++) {
        console.log(word + ' ' + names[i]);
    }
};

fn('Hello', 'A', 'B', 'C');
// Hello A
// Hello B
// Hello C

let arr = ['X', 'Y', 'Z'];

fn('Hi', ...arr);
// Hi X
// Hi Y
// Hi Z

let arr1 = [1, 2, 3],
    arr2 = [4, 5, 6],
    arr3 = [7, 8, 9],
    newArr = [...arr1, ...arr2, ...arr3];

console.log(newArr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

console.log([...'Banri']); // [ 'B', 'a', 'n', 'r', 'i' ]
