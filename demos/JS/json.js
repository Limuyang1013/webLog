var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

// var log = JSON.stringify(xiaoming);
// console.log(log);

// var log = JSON.stringify(xiaoming, null, '  ');
// console.log(log);

// var log = JSON.stringify(xiaoming, ['name', 'height', 'skills'], '  ');
// console.log(log);

function fn(key, value) {
    if (value === '小明') {
        value = '小黄'
    }

    if (key === 'age') {
        value = '18'
    }

    return value;
}

var log = JSON.stringify(xiaoming, fn, '  ');
// console.log(log);

var person = {
    name: 'xiaoMing',
    age: '20',
    job: 'STUdent',
    toJSON: function() {
        return {
            'Name': this.name.toUpperCase(),
            'Job': this.job.toLowerCase()
        }
    }
}

var str = JSON.stringify(person);

console.log(str);

var obj = JSON.parse(str);

console.log(obj);
