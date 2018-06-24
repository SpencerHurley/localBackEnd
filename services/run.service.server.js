module.exports = function (app) {
    app.get('/api/run', findAllRuns);
    app.delete('/api/run/:runId', deleteRun);
    app.get('/api/run/:runId', findRunById);
    app.post('/api/run', createRun);
    app.put('/api/run/:runId', updateRun);

    var runModel = require('../models/run/run.model.server');

    function findAllRuns(req, res) {
        runModel.findAllRuns()
            .then((runs) => res.json(runs));
    }

    function createRun(req, res) {
        var run = req.body;
        var curUser = req.session.currentUser;
        if (curUser == null) {
            res.json("Login");
        } else {
            runModel.createRun(run, curUser._id)
                .then(function (run) {
                    res.json(run);
                })
        }
    }

    function deleteRun(req, res) {
        var id = req.params.runId;
        runModel.deleteRunById(id)
            .then(() => res.send(200));
    }

    function findRunById(req, res) {
        var id = req.params.runId;
        runModel.findRunById(id)
            .then((run) => res.json(run))
    }

    function updateRun(req, res) {
        var run = req.body;
        runModel.updateRun(run)
            .then((run) => res.json(run));
    }

}
