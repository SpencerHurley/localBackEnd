var mongoose = require('mongoose');
var teamSchema = mongoose.Schema({
    name: String,
    members: [String],
    coach: String
}, {collection: 'team'});
module.exports = teamSchema;
