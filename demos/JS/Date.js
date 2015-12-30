var now = new Date();

// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth()); // 11 -> 十二月
// console.log(now.getDay()); // 3 -> 周三
// console.log(now.getDate()); // 30
// console.log(now.getHours()); // 12
// console.log(now.getMinutes()); // 27
// console.log(now.getSeconds()); // 33
// console.log(now.getMilliseconds());
// console.log(now.getTime());

var t = now.getTime();

// console.log(t);

// var getT = new Date(t);

// console.log(getT);

console.log(Date.now());

var d = new Date(1111111);

console.log(d.toLocaleString());
console.log(d.toUTCString());

// console.log(new Date(now));
