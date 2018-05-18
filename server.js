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

app.use(express.static(path.join(__dirname ,'public')));

app.get(['/', '/login'], function(req, res) {
    console.log('redirect to: login');
    res.sendFile(path.join(__dirname, './public/login.html'));
})

app.get('/signup', function(req, res) {
    console.log('redirect to: signup');
    res.sendFile(path.join(__dirname, './public/signup.html'));
})

app.get('/chatroom', function(req, res) {
    console.log('redirect to: chatroom');
    res.sendFile(path.join(__dirname, './public/chatroom.html'));
})

app.get('/redirect', function(req, res) {
    console.log(req.query.page);
    res.redirect(req.query.page); 
})

app.post('/user/signup', function (req, res) {
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
app.post('/user/login', function (req, res) {
    var newUser = new userModel({
        username: req.body.username,
        password: req.body.password,
        updateTime: req.body.updateTime
    });
    userModel.find({ 'username': newUser.username,'password': newUser.password }, function(err, user) {
        
        if(err){ 
            console.log(err); 
            res.send(err);
        } else if (user.length == 1) {
            console.log(user);
            res.redirect('/chatroom'); 
        } else {
            console.log('not found');
            res.send('not found');
        }
    });
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    }
    console.log('listen on port ' + port);
});
