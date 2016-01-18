// var lvs = {
//     A: function(num) {
//         return num * 3;
//     },
//     B: function(num) {
//         return num * 2;
//     },
//     C: function(num) {
//         return num * 1.5;
//     }
// };

// var getNum = function(level, num) {
//     var result = lvs[level](num);

//     console.log(result);
// };

// getNum('B', 200); // 400
// getNum('C', 150); // 225


var A = function(num) {
    return num * 3;
};

var B = function(num) {
    return num * 2;
};

var getNum = function(fn, num) {
    var result = fn(num);

    console.log(result);
};

getNum(A, 233); // 699
