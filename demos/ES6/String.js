// var str = 'Hello, Banri Cho!'

// console.log(str.includes('Banri')); // true
// console.log(str.startsWith('H')); // true
// console.log(str.endsWith('!')); // true

// var s = 'Hello';

// console.log(s.repeat(3)); // HelloHelloHello

// var sayHi = function(fn, ln) {
//     console.log(`Hello, ${fn} ${ln}!`);
// };

// sayHi('Banri', 'Cho'); // Hello, Banri Cho!

var getInfo = function(p) {
    console.log(`I am ${p.name}, ${p.age * 2} years old.`);
};

getInfo({
    name: 'Banri',
    age: 12
}); // I am Banri, 24 years old.
