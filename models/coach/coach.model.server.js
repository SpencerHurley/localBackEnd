var mongoose = require('mongoose');
var coachSchema = require('./coachSchema');
var coachModel = mongoose.model('CoachModel', coachSchema);

function findCoachById(id) {
    return coachModel.findById(id);
}

function createCoach(coach) {
    return coachModel.create(coach);
}

function findAllCoaches() {
    return coachModel.find();
}



var api = {
    createUser: createUser,
    findAllUsers: findAllUsers,
    findUserById: findUserById
};

module.exports = api;