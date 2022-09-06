const http = require('http');
const app = http.createServer((req, res) => {
    // console.log(req.url);
    res.writeHead(200, { "Content-Type": "text/html ; charset=utf-8" });
    if (req.url === '/') {
        res.end('You are my love 정말야! ');
    } else if (req.url === '/login') {
        res.end('my girl 사랑해');
    }
});

app.listen(8080, () => {
    console.log('server used http....8080 is working...');

});