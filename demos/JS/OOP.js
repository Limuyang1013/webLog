// ---------- obj ----------
var Student = {
    school: 'JLD',
    cls: '2',
    grade: '3'
};

// var xiaoming = {
//     age: '20',
//     number: '15001111'
// };

// xiaoming.__proto__ = Student; // DO NOT USE !!!

// console.log(xiaoming.school);

function createStu(name) {
    var s = Object.create(Student);

    s.name = name;

    return s;
}

var xiaoming = createStu('XIAOMING');

console.log(xiaoming.cls);

// ---------- fn ----------

