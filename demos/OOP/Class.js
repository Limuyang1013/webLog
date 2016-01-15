class Person {
    constructor(name) {
        this.name = name;
        this.language = ['English', 'Chinese', 'Japanses'];
    };

    sayHi() {
        console.log('Hello, ' + this.name + '!');
    };
};

class Student extends Person {
    constructor(name, age) {
        super(name);

        this.age = age;
    };

    showAge() {
        console.log(this.age);
    };
};

var banri = new Student('Banri', 'Always 18');
banri.language.push('Miao Miao Miao');
console.log(banri.language); // [ 'English', 'Chinese', 'Japanses', 'Miao Miao Miao' ]

var kevin = new Student('Kevin', '9');
console.log(kevin.language); // [ 'English', 'Chinese', 'Japanese' ]

banri.sayHi(); // Hello, Banri!
banri.showAge(); // Always 18
console.log(banri instanceof Person); // true
console.log(banri instanceof Student); // true

console.log(banri.sayHi === Person.prototype.sayHi); // true


console.log(banri.str);


console.log('123'.__proto__ === String.prototype)
console.log(String.prototype.__proto__ === Object.prototype)
