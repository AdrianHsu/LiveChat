const User = require('../models/User.js');
const mongoose = require('mongoose');

class UserSocket {

    constructor() {
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://localhost:27017/userdb');
    }

    storeUsers(data, res) {

        var newUser = new User({
            username: data.username,
            password: data.password,
            icon: data.icon,
            updateTime: data.updateTime
        });
        newUser.save(function(err, data){
            console.log(data);
            if(err){ 
                console.log(err); 
                res.send(err);
            }
            else{
                console.log(data);
                res.send(data);
            } 
        });
    };
    checkUsers(data, res) {
        var myUser = new User({
            username: data.username,
            password: data.password,
            icon: data.icon,
            updateTime: data.updateTime
        });
        User.find({ 
            'username': myUser.username,
            'password': myUser.password }, function(err, user) {
            
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
    };
    sendIcon(me, res) {
        User.find({username: me}, function(err, myuser) {
            var icon = JSON.stringify({icon: myuser[0]['icon']});
            res.send(icon);
        });
    };
    sendFriendList(me, res) {
        User.find({}, function(err, users) {
            var arr = [];
            for(var i = 0; i < users.length; i++) {
                if(users[i]['username'] != me) {
                    var obj = JSON.stringify({friendname: users[i]['username'],
                        icon: users[i]['icon']});
                    arr.push(obj);
                }
            }
            if(arr.length === 0) {
                console.log('only one user...');
            }
            res.send(arr);
        });
    }

}

module.exports = UserSocket;