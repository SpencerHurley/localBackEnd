var mongoose = require('mongoose');
var teamSchema = require('./teamSchema');
var teamModel = mongoose.model('team', teamSchema);

function findTeamById(id) {
    return teamModel.findById(id);
}

function createTeam(team, id) {
    team.owner = id;
    return teamModel.create(team);
}

function findAllTeams() {
    return teamModel.find();
}

function updateTeam(team) {
    return teamModel.update({_id: team._id}, {$set: team});
}

function deleteTeamById(id) {
    return teamModel.deleteOne({_id: id})
}

var api = {
    findTeamById : findTeamById,
    createTeam : createTeam,
    findAllTeams : findAllTeams,
    updateTeam : updateTeam,
    deleteTeamById : deleteTeamById
};

module.exports = api;