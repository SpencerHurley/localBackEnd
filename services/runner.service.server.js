module.exports = function (app) {
    app.get('/api/runner', findAllRunners);
    app.get('/api/runner/:runnerId', findUserById);
    app.post('/api/runner/register', createRunner);
    app.get('/api/profile', profile);
    app.get('/api/logout', logout);
    app.post('/api/login', login);
    app.put('/api/runner', updateRunner);
    app.get('/api/runner/:runnerId/runs', findAllRunsForRunner);
    app.get('/api/runner/:runnerId/segments', findSegmentsForRunner);
    app.delete('/api/runner/:runnerId', deleteRunner);

    var runnerModel = require('../models/runner/runner.model.server');
    var runModel = require('../models/run/run.model.server');
    var segmentModel = require('../models/segment/segment.model.server');

    function findUserById(req, res) {
        var id = req.params['runnerId'];
        runnerModel.findRunnerById(id)
            .then(function (user) {
                res.json(user);
            })
    }

    function login(req, res) {
        var credentials = req.body;
        runnerModel
            .findRunnerByCredentials(credentials)
            .then(function(user) {
                console.log(user);
                req.session['currentUser'] = user;
                res.json(user);
            })
    }

    function profile(req, res) {
        res.send(req.session['currentUser']);
    }

    function createRunner(req, res) {
        var user = req.body;
        runnerModel.createRunner(user)
            .then(function (user) {
                req.session['currentUser'] = user;
                res.json(user);
            })
    }

    function findAllRunners(req, res) {
        runnerModel.findAllRunners()
            .then(function (users) {
                res.json(users);
            })
    }

    function logout(req, res) {
        req.session.destroy();
        res.send(200);
    }

    function updateRunner(req, res) {
        var runner = req.body;
        runnerModel.updateRunner(runner)
            .then((runner) => {
                req.session['currentUser'] = runner;
                res.json(runner)
            });
    }

    function findAllRunsForRunner(req, res) {
        var id = req.params.runnerId;
        runModel.findRunsForRunner(id)
            .then((runs) => res.json(runs))
    }

    function findTeamsForRunner(req, res) {
        var runnerId = req.params.runnerId;
        runnerModel.findTeamsForRunner(runnerId)
            .then((teams) => res.json(teams));
    }

    function findSegmentsForRunner(req, res) {
        var runnerId = req.params.runnerId;
        segmentModel.findSegmentsForRunner(runnerId)
            .then((segments) => res.json(segments));
    }

    function deleteRunner(req, res) {
        var runnerId = req.params.runnerId;
        runnerModel.deleteRunner(runnerId)
            .then(() => res.json(200));
    }
}
