const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  icon: {type: String, required: true},
  updateTime: Date
});
userSchema.plugin(uniqueValidator);

module.exports = userSchema;