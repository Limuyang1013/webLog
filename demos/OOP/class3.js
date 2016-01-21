// class Person {
//     constructor() {
//         this.fn = function() {
//             console.log('on Person');
//         };
//     };

//     fun() {
//         console.log('on Person.prototype');
//     };
// };

// class Student extends Person {
//     constructor() {
//         super();

//         console.log(super.__proto__ === Student.prototype);
//         console.log(super.fn);
//         console.log(super.fun);
//     };
// };

// var banri = new Student();

function Person() {
    this.fn = function() {
        console.log('on Person');
    };
};

Person.prototype.fun = function() {
    console.log('on proto');
};

function Student() {
    Person.call(this);
};

Student.prototype = {
    __proto__: Person.prototype,
    constructor: Student
};

var banri = new Student();

banri.fn();
banri.fun();
console.log(banri.__proto__ === Student.prototype);
