var mongoose = require('mongoose');
var runSchema = mongoose.Schema({
    title: String,
    duration: Number,
    distance: Number,
    date : Date,
    description: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'runnerModel'
    }
}, {collection: 'runs'});
module.exports = runSchema;
