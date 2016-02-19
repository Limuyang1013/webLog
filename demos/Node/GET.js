const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const query = url.parse(req.url, true).query;

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write(`name: ${query.name} <br> age: ${query.age}`);
    res.end();
}).listen(1024);
