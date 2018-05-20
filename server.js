var express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var webpack = require('webpack');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const UserSocket = require('./src/socket/UserSocket.js');
const userSocket = new UserSocket();

const MsgSocket = require('./src/socket/MessageSocket.js');
const msgSocket = new MsgSocket();
const port = 3000;

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
    // console.log('redirect to: chatroom');
    res.sendFile(path.join(__dirname, './public/chatroom.html'));
})

app.get('/redirect', function(req, res) {
    console.log(req.query.page);
    res.redirect(req.query.page); 
})

app.post('/user/signup', function (req, res) {
    
    var newUser = {username: req.body.username,
        password: req.body.password,
        icon: './assets/default.png',
        updateTime: req.body.updateTime};
    
    userSocket.storeUsers(newUser, res);
});
app.post('/user/login', function (req, res) {
    var myUser = {
        username: req.body.username,
        password: req.body.password,
        icon: './assets/default.png',
        updateTime: req.body.updateTime
    };

    userSocket.checkUsers(myUser, res);
});

app.get('/user/myicon', function(req, res) {
    const me = req.query.username;
    userSocket.sendIcon(me, res);
})

app.get('/user/allusers', function(req, res){
    const me = req.query.username;
    userSocket.sendFriendList(me, res);
});

name_id_dict = {};
io.on('connection', (socket) => {
    socket.on('username', (username, cb) => {
        console.log( "connect: " + socket.id + ', ' + username);
        name_id_dict[username] = socket.id;
    })
    socket.on('message', (myMsg, cb) => {
        myMsg = JSON.parse(myMsg);

        // time is the "server received time"
        var date = new Date();
        var localeSpecificTime = date.toLocaleTimeString();
        date = localeSpecificTime.replace(/:\d+ /, ' ');

        var fullMsg = JSON.stringify({from: myMsg.from, 
            msg: myMsg.msg, to: myMsg.to, time: date});
        
        // msgSocket.storeMessages(fullMsg);

        console.log('received msg:' + fullMsg);
        cb('[ack] server received: ' + fullMsg);
        io.to(name_id_dict[myMsg.from]).emit('message', fullMsg);
        io.to(name_id_dict[myMsg.to]).emit('message', fullMsg);
    });


    socket.on("disconnect", () => {
        var id = socket.id;
        var username = "";
        for (const key in name_id_dict) {
            const value = name_id_dict[key];
            if(value === id) {
                username = key;
                break;
            }
        }
        console.log("disconnect: " + id + ", " + username);
        name_id_dict[username] = null;
    });
});

http.listen(port, function(err) {
    if (err) {
        console.log(err);
    }
    console.log('listen on port ' + port);
});
