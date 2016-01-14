function Person(name) {
    this.name = name;
    this.language = ['English', 'Chinese', 'Japanese'];
};

Person.prototype.sayHi = function() {
    console.log('Hello, ' + this.name + '!');
};

Person.prototype.str = 'String';

function Student(name, age) {
    Person.call(this, name);
    this.age = age;
};

// 创建一个新对象，并将其原型指向 Person.prototype
// 将此对象赋值给 Student.prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;
Student.prototype.showAge = function() {
    console.log(this.age);
};

var banri = new Student('Banri', 'Always 18');
banri.language.push('Miao Miao Miao');
console.log(banri.language); // [ 'English', 'Chinese', 'Japanese', 'Miao Miao Miao' ]

var kevin = new Student('Kevin', '9');
console.log(kevin.language); // [ 'English', 'Chinese', 'Japanese' ]

banri.sayHi(); // Hello, Banri!
banri.showAge(); // Always 18
console.log(banri instanceof Person); // true
console.log(banri instanceof Student); // true

console.log(banri.str); // String
