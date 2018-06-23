module.exports = function (app) {
    app.get('/api/runner', findAllRunners);
    app.get('/api/runner/:runnerId', findUserById);
    app.post('/api/runner/register', createRunner);
    app.get('/api/profile', profile);
    app.get('/api/logout', logout);
    app.post('/api/login', login);
    app.put('/api/runner', updateRunner);

    var runnerModel = require('../models/runner/runner.model.server');

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
                res.send(user);
            })
    }

    function findAllRunners(req, res) {
        runnerModel.findAllRunners()
            .then(function (users) {
                res.send(users);
            })
    }

    function logout(req, res) {
        req.session.destroy();
        res.send(200);
    }

    function updateRunner(req, res) {
        var runner = req.body;
        console.log(runner);
        runnerModel.updateRunner(runner)
            .then((runner) => res.send(runner));
    }
}
