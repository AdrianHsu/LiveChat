// curl -k https://localhost:8080/
const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('/etc/nginx/ssl/cert.key'),
    cert: fs.readFileSync('/etc/nginx/ssl/cert.pem')
};

https.createServer(options, (req, res) => {
    fs.readFile('index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(8080, '0.0.0.0');
