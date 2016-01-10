// let gen = function*(x) { // 函数声明写法为 function* gen(x) {};
//         yield x + 1;
//         yield x + 2;
//         return x + 3;
//     },
//     iter = gen(0);

// console.log(iter.next()); // { value: 1, done: false }
// console.log(iter.next(10)); // { value: 2, done: false }
// console.log(iter.next()); // { value: 3, done: true }

function* gen(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
};

for (let i of gen(0)) {
    console.log(i);
}; // 1 2
