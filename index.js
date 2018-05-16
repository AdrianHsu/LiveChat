// curl -k https://localhost:8080/
const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('../cert.key'),
    cert: fs.readFileSync('../cert.pem')
};

https.createServer(options, (req, res) => {
    fs.readFile('index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(443, '0.0.0.0', function(){
    console.log('listening on localhost 443');
});
