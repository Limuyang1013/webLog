// arguments
// function demo() {
//     var arg = arguments;
//     console.log(arg.length);
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg); // Arr? Obj?
//     console.log(arg instanceof Array); // false
// }

// demo(1, 2, 3, 4, 5);

// rest
function r(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

// r(1, 2, 3, 4, 5, 6);
r(1); // 1 undefined []
