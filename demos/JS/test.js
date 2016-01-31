let fn = function() {
    var result;

    return function() {
        if (arguments.length === 0) {
            return console.log(result);
        };

        result += arguments[0];
        return fn;
    }
};

let getValue = fn();

getValue(1)(2)();
