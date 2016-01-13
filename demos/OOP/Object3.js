function Person(name) {
    this.name = name;
};

Person.prototype.sayHi = function() {
    console.log('Hello, ' + this.name + '.');
};

console.log(Person.sayHi); // undefined

var p1 = new Person('Banri');

p1.sayHi(); // Hello, Banri.

console.log(p1.constructor); // [Function: Person]
console.log(p1.hasOwnProperty('constructor')); // false

p1.sayHi = undefined;
delete p1.sayHi;

p1.sayHi();

function Person(name) {
    this.name = name;

    // console.log('2222');
    if (typeof this.sayHi !== 'function') {
        console.log('11111');

        Person.prototype.sayHi = function() {
            console.log('Hello, ' + this.name + '.');
        };
    };
};
// var p1 = new Person('Banri');
// console.log(p1.__proto__.sayHi); // [Function]

var p2 = new Person('Br');
var p3 = new Person('Cho');

// p2.sayHi();
console.log(Person.prototype.sayHi);

