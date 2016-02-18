const http = require('http');

http.createServer((req, res) => {
    res.writeHeader(200, {
        'Content-Type': 'text/html'
    });
    res.write('<h1>Hello Node.js!</h1>');
    res.end('Done.')
}).listen(1024);

console.log('HTTP server is listening: 1024');
