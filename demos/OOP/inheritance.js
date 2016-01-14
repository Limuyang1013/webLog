var Person = function(name) {
    this.name = name
};

var foo = new Person("foo");

console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Person.__proto__ === Function.prototype);

// console.log(Person.prototype.__proto__ === Function.prototype);

console.log(foo.toString === Person.prototype.toString); // true
console.log(Person.prototype.toString === Person.prototype.__proto__.toString); // true
console.log(Person.prototype.__proto__.toString === Object.prototype.toString); // true

console.log(Person.toString === Function.prototype.toString); // true
console.log(Function.prototype.toString === Object.toString); // true
console.log(Function.prototype.toString === Function.toString); // true
console.log(Function.toString === Object.toString); // true
console.log(Function.__proto__ === Object.__proto__); // true

console.log(Function.__proto__ === Function.prototype); // true
console.log(Object.__proto__ === Function.prototype); // true

console.log(Object.__proto__.toString === Function.prototype.toString); // true

// console.log(Person.toString === Function.prototype.toString); // true
// console.log(Person.prototype.__proto__ === Object.prototype); // true
// console.log(Function.prototype.__proto__ === Object.prototype); // true

// var foo = new Person("foo");

// console.log(foo.toString === Object.prototype.toString); // true
// console.log(foo.constructor.toString === Person.toString); // true
// console.log(Person.prototype.constructor.toString === Function.toString); // true
// console.log(Function.toString === Function.prototype.toString); // true

// // 改写 constructor 指向的构造函数
// Person.prototype.constructor = function(name) {
//     this.name = "bar"
// }
// console.log(Person.prototype.constructor.toString === Function.prototype.toString); // true

// var foo2 = new Person("foo2");
// console.log(foo2.constructor.toString === Person.toString); // true
// console.log(foo2.constructor.toString === Function.prototype.toString); // true
