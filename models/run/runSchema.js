var mongoose = require('mongoose');
var runSchema = mongoose.Schema({
    title: String,
    duration: Number,
    distance: Number,
    date : Date,
    description: String,
    owner: String
}, {collection: 'runs'});
module.exports = runSchema;
