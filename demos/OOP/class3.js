class Person {
    constructor() {
        this.fn1 = function() {
            console.log('on Person');
        };
    };

    fn2() {
        console.log('on Person.prototype');
    };
};

class Student extends Person {
    constructor() {
        super();

        console.log(this.__proto__ === Student.prototype); // true
        console.log(super.__proto__ === Student.prototype); // true

        console.log(super); // SyntaxError: 'super' keyword unexpected here
    };
};

var banri = new Student();

// function Person() {};

// Person.prototype.fun = function() {
//     console.log('on proto');
// };

// function Student() {
//     Person.call(this);

//     console.dir(this);
//     console.log(this.__proto__ === Student.prototype);
// };

// Student.prototype = {
//     __proto__: Person.prototype,
//     constructor: Student
// };

// var banri = new Student();

// banri.fn();
// banri.fun();
// banri.fn2();
// console.log(banri.__proto__ === Student.prototype);


// function A() {
//     console.log(123);
// };

// function B() {
//     console.log(this);
//     this();
// };

// B.apply(A);
