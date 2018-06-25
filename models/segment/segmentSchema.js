var mongoose = require('mongoose');
var segmentSchema = mongoose.Schema({
    name : String,
    distance: Number,
    hazardous: Boolean,
    polyline: String,
    elevation: Number,
    owner: String,
    stravaId: String,
    grade: Number
}, {collection: 'segment'});
module.exports = segmentSchema;
