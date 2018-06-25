var mongoose = require('mongoose');
var runSchema = require('./runSchema');
var runModel = mongoose.model('run', runSchema);

function findRunById(id) {
    return runModel.findOne({_id : id});
}

function createRun(run, id) {
    run.owner = id;
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

function findRunsForRunner(id) {
    console.log(id);
    console.log("Here");
    return runModel.find({owner : id});
}

function starRun(id) {
    return runModel.update({_id: id}, {$inc : {'stars' : 1}});
}

var api = {
    findRunById : findRunById,
    createRun : createRun,
    findAllRuns : findAllRuns,
    updateRun : updateRun,
    deleteRunById : deleteRunById,
    findRunsForRunner : findRunsForRunner,
    starRun : starRun
};

module.exports = api;