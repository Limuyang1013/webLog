// arrow function
var fn1 = x => x * x;

console.log(fn1(10));

var fn2 = (x => {
    if (x > 5) {
        return x + x;
    }
})(10);

console.log(fn2);

var fn3 = (x => ({
    result: 10
}))(10);

console.log(fn3);

// this
var obj = {
    year: 1991,
    getYear: function() {
        var fn = function() {
            return this.year;
        }

        return fn();
    }
}

// console.log(obj.getYear());

var obj2 = {
    year: 1991,
    getYear: function() {
        var fn = () => this.year;
        return fn();
    }
}

console.log(obj2.getYear());

// call
var obj3 = {
    year: 2015
}

var year1 = obj2.getYear.call(obj3);

console.log(year1);

var obj4 = {
    year: 2000,
    getYear: function(year) {
        var fn = () => this.year;
        return fn.call(obj3, year);
    }
}

console.log(obj4.getYear());
