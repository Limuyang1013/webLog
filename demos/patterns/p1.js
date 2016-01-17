var getSingle = function(fn) {
    var result;

    return function() {
        // console.log(result);
        return result || (result = fn.apply(this, arguments));
    };
};

var creatObj = function(a, b) {
    return {
        a: a,
        b: b
    };
};

var single1 = getSingle(creatObj);
var single2 = getSingle(creatObj);

single1(1, 2); // undefined
console.log(single1(1, 2) === single1(2, 3)); // true

single2(1, 2); // undefined
console.log(single1(1, 2) === single2(1, 2)); // false
