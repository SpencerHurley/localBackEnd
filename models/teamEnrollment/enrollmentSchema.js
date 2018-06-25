var mongoose = require('mongoose');
var enrollmentSchema = mongoose.Schema({
    runner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'runner'
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'team'
    },
}, {collection: 'enrollments'});
module.exports = enrollmentSchema;