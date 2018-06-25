module.exports = function (app) {
    app.get('/api/team', findAllTeams);
    app.delete('/api/team/:teamId', deleteTeam);
    app.get('/api/team/:teamId', findTeamById);
    app.post('/api/team', createTeam);
    app.put('/api/team/:teamId', updateTeam);
    app.post('/api/team/:teamId/enroll', enrollRunnerInTeam);
    app.get('/api/team/:teamId/members', findRunnersForTeam);
    app.get('/api/runner/:runnerId/teams', findTeamsForRunner);

    var teamModel = require('../models/team/team.model.server');
    var enrollmentModel = require('../models/teamEnrollment/enrollment.model.server');

    function findAllTeams(req, res) {
        teamModel.findAllTeams()
            .then((teams) => res.json(teams));
    }

    function createTeam(req, res) {
        var team = req.body;
        var curUser = req.session.currentUser;
        if (curUser == null) {
            res.json("Login");
        } else {
            teamModel.createTeam(team, curUser._id)
                .then(function (run) {
                    res.json(run);
                })
        }
    }

    function deleteTeam(req, res) {
        var id = req.params.teamId;
        teamModel.deleteTeamById(id)
            .then(() => res.json(200));
    }

    function findTeamById(req, res) {
        var id = req.params.teamId;
        teamModel.findTeamById(id)
            .then((run) => res.json(run))
    }

    function updateTeam(req, res) {
        var team = req.body;
        teamModel.updateTeam(team)
            .then((team) => res.json(team));
    }

    function enrollRunnerInTeam(req, res) {
        var teamId = req.params.teamId;
        var currentUser = req.session.currentUser;
        var studentId = currentUser._id;
        var enrollment = {
            runner: studentId,
            team: teamId
        }
        console.log(enrollment);
        enrollmentModel.enrollRunnerInTeam(enrollment)
            .then((enrollment) => res.json(enrollment));
    }

    function findRunnersForTeam(req, res) {
        var teamId = req.params['teamId'];
        enrollmentModel.findRunnersForTeam(teamId)
            .then((runners) => res.json(runners));
    }

    function findTeamsForRunner(req, res) {
        var runnerId = req.params.runnerId;
        enrollmentModel.findTeamsForRunner(runnerId)
            .then((teams) => res.json(teams));
    }
}