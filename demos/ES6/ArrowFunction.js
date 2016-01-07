// let fn = x => x + 1;

// let fn = function(x) {
//     return x + 1;
// };

// let fn = (x, y) => x + y;

// console.log(fn(2, 3)); // 5

// let fn = (x, y) => ({
//     name: x,
//     age: y
// });

// console.log(fn('Banri', '1')); // { name: 'Banri', age: '1' }


let nowYear = {
    year: 2016
};

let obj1 = {
    year: 2015,
    getYear: function() {
        let fn = () => this.year;

        return fn.call(nowYear);
    }
};

console.log(obj1.getYear()); // 2015

let obj2 = {
    year: 2015,
    getYear: function() {
        let fn = () => this.year;

        return fn();
    }
};
let getNow = obj2.getYear.call(nowYear);

console.log(getNow); // 2016

