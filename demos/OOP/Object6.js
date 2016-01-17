// var Person = function() {};

// Person.prototype.num = [1, 2, 3];

// var p1 = new Person(),
//     p2 = new Person();

// p1.num.push(4);
// console.log(p2.num); // [ 1, 2, 3, 4 ]
// console.log(Person.prototype.num); // [ 1, 2, 3, 4 ]

var isPro = {
        name: 'Banri'
    },
    isNew1 = isPro;

Object.assign(isPro, {
    job: 'FE',
    age: 100
}); // 修改原对象，并将其返回

var isNew2 = isPro;

console.log(isNew1 === isNew2); // true
console.log(isPro); // { name: 'Banri', job: 'FE', age: 100 }
