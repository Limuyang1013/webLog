var Person = function() {};

Person.prototype.num = [1, 2, 3];

var p1 = new Person(),
    p2 = new Person();

p1.num.push(4);
console.log(p2.num); // [ 1, 2, 3, 4 ]
console.log(Person.prototype.num); // [ 1, 2, 3, 4 ]
