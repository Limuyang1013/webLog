function* demo(max) {
    var t,
        a = 0,
        b = 1,
        n = 1;

    for (; n < max; n++) {
        yield a;
        t = a + b;
        a = b;
        b = t;
    }

    return a;
};

var fn = demo(5);

console.log(fn.next());
console.log(fn.next());
console.log(fn.next());
console.log(fn.next());
console.log(fn.next());

/*
{ value: 0, done: false }
{ value: 1, done: false }
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: true }
*/

// http://wiki.ecmascript.org/doku.php?id=harmony:generators
function* fibonacci() {
    let [prev, curr] = [0, 1]; // Error

    for (;;) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

for (n of fibonacci()) {
    // truncate the sequence at 1000
    if (n > 1000)
        break;
    print(n);
}
