const Message = require('../models/Message.js');

class MessageSocket {

    constructor() {
        this.db;
    }

    connect() {
        this.db = require('mongoose').connect('mongodb://localhost:27017/chat');
        this.db.Promise = global.Promise;
    }

    getMessages() {
        return Message.find();
    }

    storeMessages(data) {

        console.log(data);
        const newMessage = new Message({
            name: data.name,
            msg: data.msg,
            time: Date()
        });
        const doc = newMessage.save();
    }
}

module.exports = SocketHander;