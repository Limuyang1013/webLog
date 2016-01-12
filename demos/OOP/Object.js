// var obj = {};

// Object.defineProperty(obj, 'name', {
//     value: 'Banri'
// });

// console.log(obj);
// console.log(delete obj.name); // TypeError: Cannot delete property 'name' of #<Object>

// var book = {
//     _year: 2004,
//     edition: 1
// };

// Object.defineProperty(book, 'year', {
//     get: function() {
//         return this._year;
//     },
//     set: function(newValue) {
//         if (newValue > 2014) {
//             this._year = newValue;
//             this.edition += newValue - 2004;
//         }
//     }
// });

// book.year = 2015;
// console.log(book.edition); // 12

// // var des = Object.getOwnPropertyDescriptor(book, 'year');

// // console.log(des.configurable); // false
// // console.log(des.enumerable); // false

// Object.defineProperty(book, 'edition', {
//     get: function() {},
//     set: function(n) {}
// });


// var book = {
//     _year: 2004,
//     edition: 1,
//     get year() {
//         return this._year;
//     },
//     set year(newValue) {
//         if (newValue > 2014) {
//             this._year = newValue;
//             this.edition += newValue - 2004;
//         }
//     }
// };

// book.year = 2015;
// console.log(book.edition); // 12

// var des = Object.getOwnPropertyDescriptor(book, 'year');

// console.log(des.configurable); // true
// console.log(des.enumerable); // true


// var book = {};

// Object.defineProperties(book, {
//     _year: {
//         writable: true,
//         value: 2004
//     },
//     edition: {
//         writable: true,
//         value: 1
//     },
//     year: {
//         get: function() {
//             return this._year;
//         },
//         set: function(newValue) {
//             if (newValue > 2004) {
//                 this._year = newValue;
//                 this.edition += newValue - 2004;
//             }
//         }
//     }
// });

// book.year = 2015;
// console.log(book.edition); // 12


var obj = {};

Object.defineProperty(obj, 'name', {
    set: function() {},
    get: function() {},
    writable: undefined
}); // TypeError: Invalid property.  A property cannot both have accessors and be writable or have a value, #<Object>
