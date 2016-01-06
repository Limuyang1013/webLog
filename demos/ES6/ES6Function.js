function sayHi(word = 'Hello', who = 'World') {
    console.log(word + ' ' + who + '!');
}

sayHi(); // Hello World!
sayHi('Hi'); // Hi World!
sayHi(undefined, 'Banri'); // Hello Banri!
sayHi('你好', '世界'); // 你好 世界!
