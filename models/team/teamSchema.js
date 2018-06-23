var mongoose = require('mongoose');
var teamSchema = mongoose.Schema({
    name: String,
    members: [String],
    coach: mongoose.Types.ObjectId
}, {collection: 'team'});
module.exports = teamSchema;
