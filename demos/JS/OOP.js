// ---------- obj ----------
// var Student = {
//     school: 'JLD',
//     cls: '2',
//     grade: '3'
// };

// var xiaoming = {
//     age: '20',
//     number: '15001111'
// };

// xiaoming.__proto__ = Student; // DO NOT USE !!!

// console.log(xiaoming.school);

// function createStu(name) {
//     var s = Object.create(Student);

//     s.name = name;

//     return s;
// }

// var xiaoming = createStu('XIAOMING');

// console.log(xiaoming.cls);

// ---------- fn ----------
// var Stu = function(name) {
//     this.name = name;
//     this.sayHi = function() {
//         return 'Hello, ' + this.name + '!';
//         // 传入 name 并使用 name 提示 undefined
//         // 直接使用 name，会产生闭包
//         // 所以应该使用 this.name
//     }
// }

// var xm = new Stu('XIAOMING');

// console.log(xm.sayHi());
// console.log(xm);

// ---------- fn.prototype ----------
var oopStu = function(name) {
    this.name = name;
}

// oopStu.prototype.sayHi = function() {
//     return 'Hello, ' + this.name + '!';
// }

oopStu.prototype = {
    constructor: oopStu,
    sayHi: function() {
        return 'Hello, ' + this.name + '!';
    }
}

var xiaohong = new oopStu('XIAO HONG');

console.log(xiaohong.sayHi());
console.log(xiaohong.constructor === oopStu.prototype.constructor); // true
console.log(oopStu.prototype.constructor === oopStu); // true
