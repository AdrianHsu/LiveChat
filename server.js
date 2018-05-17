var express = require('express');
var path = require('path');
var webpack = require('webpack');

const port = 3000;
const app = express();

app.use('/assets', express.static(path.join(__dirname ,'./public/assets')));
app.use('/outputs', express.static(path.join(__dirname ,'./public/outputs')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    }
    console.log('listen on port ' + port);
});
