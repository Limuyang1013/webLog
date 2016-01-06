var myArr = [2, 4, 6, 8, 10];
var result = myArr.find(function(value, index, arr) {
    return value < 5;
});

console.log(result); // 2

var myArr = [2, 4, 6, 8, 10];
var result = myArr.findIndex(function(value, index, arr) {
    return value > 7;
});

console.log(result); // 3
