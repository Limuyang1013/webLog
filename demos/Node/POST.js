const http = require('http');
const query = require('querystring');

http.createServer((req, res) => {
    var post;

    req.on('data', (chunk) => {
        post += chunk;
    });

    req.on('end', () => {
        const data = query.parse(post);

        res.end(JSON.stringify(data));
    });
}).listen(1024);
