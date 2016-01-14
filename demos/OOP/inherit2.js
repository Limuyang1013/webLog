function Person() {};

function Student() {};
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

var p = new Student();

// console.log(Person.prototype.isPrototypeOf(p)); // true
// console.log(Person.prototype === Object.getPrototypeOf(p)); // false
// console.log(p.__proto__ === Student.prototype); // false



// console.log(p instanceof Student); // true

// console.dir(Person.__proto__ === Function.prototype); // true
// console.log(typeof Function.prototype); // function
// console.log(typeof Object.prototype); // object

// console.log(p.toString === Student.prototype.toString); // true
// console.log(Student.prototype.toString === Person.prototype.toString); // true
// console.log(Person.prototype.toString === Object.prototype.toString); // true

// console.log(p.__proto__ === Student.prototype); // true
// console.log(Student.prototype.__proto__ === Person.prototype); // true
// console.log(Person.prototype.__proto__ === Object.prototype); // true

// console.log(Student.toString === Person.toString); // true
// console.log(Person.toString === Function.toString); // true
// console.log(Function.toString === Function.prototype.toString); // true

// console.log(Student.__proto__ === Person.__proto__); // true
// console.log(Person.__proto__ === Function.__proto__); // true
// console.log(Function.__proto__ === Function.prototype); // true

// console.log(Function.prototype.__proto__ === Object.prototype); // true
// console.log(Object.__proto__ === Function.prototype); // true
