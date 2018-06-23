var mongoose = require('mongoose');
var runnerSchema = require('./runnerSchema');
var runnerModel = mongoose.model('runner', runnerSchema);

function findRunnerById(id) {
    return runnerModel.findById(id);
}

function createRunner(runner) {
    return runnerModel.create(runner);
}

function findAllRunners() {
    return runnerModel.find();
}

function findRunnerByCredentials(credentials) {
    return runnerModel.findOne(credentials);
}

function updateRunner(runner) {
    return runnerModel.update({_id: runner._id}, {$set: runner});
}

var api = {
    createRunner: createRunner,
    findAllRunners: findAllRunners,
    findRunnerById: findRunnerById,
    findRunnerByCredentials : findRunnerByCredentials,
    updateRunner : updateRunner
};

module.exports = api;