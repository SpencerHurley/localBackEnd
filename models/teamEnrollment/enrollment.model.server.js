var mongoose = require('mongoose');
var enrollmentSchema = require('./enrollmentSchema');
var enrollmentModel = mongoose.model(
    'EnrollmentModel',
    enrollmentSchema
);

function enrollRunnerInTeam(enrollment) {
    return enrollmentModel.create(enrollment);
}

function findRunnersForTeam(teamId) {
    return enrollmentModel
        .find({team: teamId})
        .populate('runner')
        .exec();
}

function findTeamsForRunner(runnerId) {
    return enrollmentModel
        .find({runner: runnerId})
        .populate('team')
        .exec();
}

module.exports = {
    enrollRunnerInTeam: enrollRunnerInTeam,
    findRunnersForTeam: findRunnersForTeam,
    findTeamsForRunner: findTeamsForRunner
};