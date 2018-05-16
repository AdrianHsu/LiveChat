// curl -k https://localhost:8080/
const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('/etc/nginx/ssl/cert.key'),
    cert: fs.readFileSync('/etc/nginx/ssl/cert.pem')
};

https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
}).listen(8080, '0.0.0.0');
