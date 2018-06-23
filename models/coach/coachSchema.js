var mongoose = require('mongoose');
var coachSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
}, {collection: 'coach'});
module.exports = coachSchema;
