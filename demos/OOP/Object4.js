// function Person() {};

// Person.prototype.sayHi = function() {
//     console.log('Hello, ' + this.name);
// };

// var p1 = new Person(),
//     p2 = new Person();

// p1.name = 'Banri';
// p1.sayHi(); // Hello, Banri
// console.log(p1.sayHi === p2.sayHi); // true

// p2.name = 'Br';
// p2.sayHi = function() {
//     console.log('Nihao, ' + this.name + '!');
// };
// p2.sayHi(); // Nihao, Br!

// console.log(Person.prototype.constructor === Person); // true
// console.log(Person.prototype.constructor.prototype.constructor.prototype.constructor === Person); // true
// var pro1 = Person.prototype;

// Person.prototype = {
//     constructor: Person,
//     sayHi: function() {
//         console.log('Hello, ' + this.name);
//     }
// }

// var pro2 = Person.prototype;

// console.log(pro1 === pro2); // false


// var obj = {
//         name: 'Banri'
//     },
//     isPro = obj,
//     isNew1 = isPro;

// console.log(isNew1 === isPro); // true

// isPro = {
//     name: 'Banri'
// };

// var isNew2 = isPro;

// console.log(isNew1 === isNew2); // false

// var Person = function() {},
//     p1 = new Person();

// Person.prototype.job = 'FE';
// Object.defineProperty(Person.prototype, 'stay', {
//     value: 'home'
// });

// for (var key of p1) {
//     console.log(p1[key]);
// }; // FE

// var Person = function() {},
//     arr = [1, 2, 3];

// Person.prototype.num = arr;

// var p1 = new Person(),
//     p2 = new Person();

// p1.num.push(4);
// console.log(p2.num); // [ 1, 2, 3, 4 ]
// console.log(Person.prototype.num); // [ 1, 2, 3, 4 ]

// var Person = function() {},
//     p = new Person();

// console.log(Person.prototype.isPrototypeOf(p)); // true
// console.log(Person.prototype === Object.getPrototypeOf(p)); // true

// console.log(Person.prototype === p.__proto__); // true
