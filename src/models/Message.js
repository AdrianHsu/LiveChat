const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    from: String,
    to: String,
    msg: String,
    time: String
});

module.exports = messageSchema;