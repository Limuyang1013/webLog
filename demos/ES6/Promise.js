// let p = new Promise(function(succ, fail) {
//     if (true) {
//         succ(value);
//     } else {
//         succ(error);
//     };
// });

// p.then(function(value) {
//     console.log(value);
// }, function(value) {
//     console.log(value);
// });

let isPass = function(point) {
    let p = new Promise(function(succ, fail) {
        if (point >= 60) {
            succ(point);
        } else {
            fail(point);
        };
    });

    return p;
};

isPass(10).then(function(value) {
    console.log('YES ' + value);
}, function(value) {
    console.log('NO ' + value);
}); // NO 10
