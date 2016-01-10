// let arr = [1, 2, 3],
//     getNext = arr[Symbol.iterator]();

// console.log(getNext.next()); // { value: 1, done: false }
// console.log(getNext.next()); // { value: 2, done: false }
// console.log(getNext.next()); // { value: 3, done: false }
// console.log(getNext.next()); // { value: undefined, done: true }

let arr = [1, 2, 3];

for (let i of arr) {
    console.log(i);
};
