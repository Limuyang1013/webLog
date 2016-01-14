// function Person(name) {
//     this.name = name;

//     if (typeof this.sayHi !== 'function') {
//         console.log('setPrototype!')

//         Person.prototype.sayHi = function() {
//             console.log('Hi, ' + this.name + '!');
//         };
//     };
// };

// var p1 = new Person('Banri'),
//     p2 = new Person('Cho');

// // setPrototype!

function Person(name) {
    var o = {
        sayHi: function() {
            console.log(name);
        }
    };

    return o;
};

var p = Person('Banri');

p.sayHi(); // Banri
