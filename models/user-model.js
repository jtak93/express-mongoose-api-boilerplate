var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

var userSchema = new mongoose.Schema({
  username      : { type: String, unique: true, sparse: true },
}, {autoIndex: false})
module.exports = mongoose.model('User', userSchema);
