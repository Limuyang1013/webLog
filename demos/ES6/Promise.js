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

// let isPass = function(point) {
//     let p = new Promise(function(succ, fail) {
//         if (point >= 60) {
//             succ(point);
//         } else {
//             fail(point);
//         };
//     });

//     return p;
// };

// isPass(10).then(function(value) {
//         console.log('YES ' + value);
//     })
//     .catch(function(error) {
//         console.log('ERROR ' + error);
//     }); // ERROR 10

let p1 = new Promise(function() {}),
    p2 = new Promise(function() {}),
    p3 = new Promise(function() {});

let pAll = Promise.all([p1, p2, p3]),
    pRace = Promise.race([p1, p2, p3]);

console.log(pAll); // Promise { <pending> }
console.log(pRace); // Promise { <pending> }
