// @ Firefox
var person = {
    name: 'Banri',
    age: 1
};

var p = new Proxy(person, {
    get: function(obj, prop) {
        if (prop in obj) {
            return obj[prop];
        } else {
            return 'None';
        };
    }
});

p.school; // 'None'
