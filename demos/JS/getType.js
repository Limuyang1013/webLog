let getType = arg => {
    let t;

    if (arg === null) {
        t = 'null';
    } else if (typeof arg !== 'object') {
        t = typeof arg;
    } else if (Array.isArray(arg)) {
        t = 'array';
    } else {
        t = 'object';
    }

    console.log('Type is ' + t);
}

getType([1, 2, 3, 4]);
getType({
    1: 'hello'
});

console.log(123..toString());
console.log((123).toString());
