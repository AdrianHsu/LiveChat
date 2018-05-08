var http = require('http');

var server = http.createServer(function (req, res)  {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello byron!\n");
});

var port = 8080;
var hostname = '0.0.0.0';
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

