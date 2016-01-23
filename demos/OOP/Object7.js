var Parent = function() {};
var Child = function() {
    Parent.call(this);
};

Child.prototype = {
    __proto__: Parent.prototype,
    constructor: Child
};

Object.defineProperties(Child.prototype, {
    isEnumerC: {
        enumerable: true,
        value: 'Child.isEnumer'
    },

    unEnumerC: {
        value: 'Child.unEnumer'
    }
});

var obj = new Child();

Object.defineProperties(obj, {
    isEnumerO: {
        enumerable: true,
        value: 'Obj.isEnumer'
    },

    unEnumerO: {
        value: 'Obj.unEnumer'
    }
});

console.log(Object.keys(obj)); // [ 'isEnumerO' ]
console.log(Object.getOwnPropertyNames(obj)); // [ 'isEnumerO', 'unEnumerO' ]
