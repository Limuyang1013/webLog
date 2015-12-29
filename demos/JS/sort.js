var arr = [1, 2, 3, 10, 15, 20];

console.log(arr.sort()); // [ 1, 10, 15, 2, 20, 3 ]

var newSort = arr.sort(function(x, y) {
    if (x < y) {
        return -1; // return false
    }
    if (x > y) {
        return 1; // return true
    }
    return 0;
});

console.log(newSort);
