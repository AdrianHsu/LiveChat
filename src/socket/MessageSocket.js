const MessageSchema = require('../models/Message.js');
const mongoose = require('mongoose');

var Message = null;

class MessageSocket {

    constructor(con) {
        Message = con.model('Message', MessageSchema);
    }

    storeMessages(data) {
        console.log(data);
        var newMessage = new Message({
            from: data.from,
            to: data.to,
            msg: data.msg,
            time: data.time,
            timestamp: data.timestamp
        });
        
        newMessage.save(function(err, data){
            if(err){ 
                console.log(err); 
            }
            else{
                console.log('received msg: ' + data);
            } 
        });
    }

    loadBothMessages(me, friend, res) {
        Message.find({
            $and: [
                { $or: [{from: me}, {from: friend}] },
                { $or: [{to: me}, {to: friend}] }
            ]
        }, function (err, data) {
            if(err) {
                console.log(err);
            } else {
                // console.log(data);
                res.send(data);
            }
        });
    }
}

module.exports = MessageSocket;