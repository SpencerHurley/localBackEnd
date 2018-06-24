var mongoose = require('mongoose');
var runnerSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    weeklyGoal: Number,
    teams: [String]
}, {collection: 'runner'});
module.exports = runnerSchema;
