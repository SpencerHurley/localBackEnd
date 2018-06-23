var mongoose = require('mongoose');
var runSchema = require('./runSchema');
var runModel = mongoose.model('run', runSchema);

function findRunById(id) {
    return runModel.findOne({_id : id});
}

function createRun(run) {
    return runModel.create(run);
}

function findAllRuns() {
    return runModel.find();
}


function updateRun(run) {
    return runModel.update({_id: run._id}, {$set: run});
}

function deleteRunById(id) {
    return runModel.deleteOne({_id: id});
}

var api = {
    findRunById : findRunById,
    createRun : createRun,
    findAllRuns : findAllRuns,
    updateRun : updateRun,
    deleteRunById : deleteRunById
};

module.exports = api;