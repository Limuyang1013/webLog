class Parent {
    static fn() {
        if (new.target !== undefined) {
            console.log('Hello');
        };

        console.log('World');
    };
};

var child = new Parent();

Parent.fn(); // World

// class Parent {
//     constructor() {
//         console.log(new.target);
//     };
// };

// class Child extends Parent {

// };

// var a = new Parent(); // [Function: Parent]
// var b = new Child(); // [Function: Child]
