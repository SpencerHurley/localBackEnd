var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    weeklyGoal: Number,
}, {collection: 'user'});
module.exports = userSchema;
