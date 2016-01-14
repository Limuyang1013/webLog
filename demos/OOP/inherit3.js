function Person() {};

function Student() {};
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

var p = new Student();

// // 直系原型
// console.log(Object.getPrototypeOf(Function) === Function.prototype); // true
// console.log(Object.__proto__ === Function.prototype); // true

// // 透过原型链
// console.log(Object.prototype.isPrototypeOf(Function)); // true
// console.log(Function.prototype.isPrototypeOf(Object)); // true
// console.log(Object instanceof Function); // true


console.log(String.prototype.__proto__ === Object.prototype); // true
console.log(Number.prototype.__proto__ === Object.prototype); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true
