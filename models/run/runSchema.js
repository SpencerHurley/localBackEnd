var mongoose = require('mongoose');
var runSchema = mongoose.Schema({
    title: String,
    duration: Number,
    distance: Number,
    date : Date,
    stars: Number,
    description: String,
    owner: String,
    route: String
}, {collection: 'runs'});
module.exports = runSchema;
