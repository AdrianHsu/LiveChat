var express = require('express');
var path = require('path');
var webpack = require('webpack');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var userModel = require('./src/models/User.js');

const port = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/userdb');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname ,'./public/assets')));
app.use('/outputs', express.static(path.join(__dirname ,'./public/outputs')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

app.post('/user', function (req, res) {
    var newUser = new userModel({
        username: req.body.username,
        password: req.body.password,
        updateTime: req.body.updateTime
    });

    newUser.save(function(err, data){
        if(err){ 
            console.log(err); 
            res.send(err);
        }
        else{
            console.log(data);
            res.send(data);
        } 
    });
    
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    }
    console.log('listen on port ' + port);
});
