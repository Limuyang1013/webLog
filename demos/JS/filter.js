var arr = [1, 2, 3, 4, 5, 6, 7];
var result = arr.filter(function(x) {
    return x % 2 === 0;
});

console.log(result);


var arr2 = ['A', '', 'B', null, undefined, 'C', '  '];
var result2 = arr2.filter(function(x) {
    return x && x.trim();
});
console.log(result2);
