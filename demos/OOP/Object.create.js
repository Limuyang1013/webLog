var obj = Object.create(null, {
    name: {
        value: 'Banri'
    },
    _age: {
        writable: true,
        value: 1
    },
    age: {
        get: function() {
            return this._age;
        },
        set: function(plus) {
            this._age += plus;
        }
    }
});

console.log(obj.age); // 1
obj.age = 10
console.log(obj.age); // 11

console.log(obj.__proto__); // undefined
console.log(Object.prototype.__proto__); // null
