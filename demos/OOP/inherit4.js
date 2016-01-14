function Person(name) {
    this.name = name;
    this.language = ['English', 'Chinese', 'Japanese'];
};

Person.prototype.sayHi = function() {
    console.log('Hello, ' + this.name + '!');
};

function Student(name, age) {
    Person.call(this, name);
    this.age = age;
};

// // 通过 new 新建的对象是 Person 的实例，所以它的 __proto__ 指向 Person.prototype
// // 将此对象赋值给 Student.prototype，就等于让 Student.prototype.__proto__ 指向 Person.prototype
// Student.prototype = new Person();

// Student.prototype.constructor = Student;
// Student.prototype.showAge = function() {
//     console.log(this.age);
// };
Student.prototype = {
    __proto__: Person.prototype,
    constructor: Student,
    showAge: function() {
        console.log(this.age);
    }
};

// 将 this 绑定到对象 banri，并执行 Student 函数
// 在 Student 中通过 call 调用了 Person，等于将 name 和 language 复制到了 banri 上
var banri = new Student('Banri', 'Always 18');

banri.language.push('Miao Miao Miao');
console.log(banri.language); // [ 'English', 'Chinese', 'Japanese', 'Miao Miao Miao' ]

var kevin = new Student('Kevin', '9');
console.log(kevin.language); // [ 'English', 'Chinese', 'Japanese' ]

banri.sayHi(); // Hello, Banri!
banri.showAge(); // Always 18
console.log(banri instanceof Person); // true
console.log(banri instanceof Student); // true
