// function creatPerson(name) {
//     var o = {
//         name: name,
//         sayHi: function() {
//             console.log('Hello, ' + this.name + '!');
//         }
//     };

//     return o;
// };

// var p1 = creatPerson('Banri');

// p1.sayHi(); // Hello, Banri!

// function Person(name) {
//     this.name = name;
// };

// console.log(Person.prototype.constructor === Person);

// Person.prototype.sayHi = function() {
//     console.log('Hello, ' + this.name + '!');
// };

// var p1 = new Person('Banri');

// p1.sayHi(); // Hello, Banri!

// // // 非严格模式
// // Person('Banri');
// // console.log(global.name); // Banri

// console.log(typeof p1); // object
// console.log(p1.constructor === Person); // true

// p1.name = 'Br';
// p1.sayHi(); // Hello, Br!

// console.log(p1.__proto__ === Person.prototype); // true

// p1 = {
//     name: 'Banri Cho',
//     __proto__: Person.prototype
// };

// p1.sayHi(); // Hello, Banri Cho!

// console.log(Person.__proto__ === Function.prototype); // true


function Person(name) {
    this.name = name;
    this.sayHi = function() {
        console.log('Hi, ' + this.name);
    };

    // return {
    //     sayError: function() {
    //         console.log('Error!');
    //     }
    // };
    // var fn = function() {
    //     console.log('Fn!')
    // }

    // return fn;

    // var str = 'String!';
    // return str;

    var s = new Set([1, 2, 3]);
    return s;

    // var m = new Map([
    //     ['a', 1],
    //     ['b', 2]
    // ]);

    // return m;
};

var p2 = new Person('Banri');
// console.log(typeof p2);
// p2.sayHi(); // TypeError: p2.sayHi is not a function
// p2.sayError(); // Error!

console.log(p2); // Person { name: 'Banri', sayHi: [Function] }

function Person(name) {
    this.name = name;
};

Person.prototype.sayHi = function() {
    console.log('Hello, ' + this.name);
};

Person.prototype.constructor = 'Hello';

var p1 = new Person('Barni');

console.log(p1.constructor); // 'Hello'
console.dir(p1.prototype); // undefined
