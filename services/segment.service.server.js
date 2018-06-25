module.exports = function (app) {
    app.get('/api/segment', findAllSegments);
    app.get('/api/segment/:segmentId', findSegmentById);
    app.put('/api/segment', updateSegment);
    app.delete('/api/segment', deleteSegment);
    app.post('/api/segment', createSegment);

    var segmentModel = require('../models/segment/segment.model.server');
    function findSegmentById(req, res) {
        var id = req.params['segmentId'];
        segmentModel.findSegmentById(id)
            .then(function (user) {
                res.json(user);
            })
    }

    function createSegment(req, res) {
        var segment = req.body;
        var userId = req.session.currentUser;
        segmentModel.createSegment(segment, userId)
            .then(function (user) {
                res.json(user);
            })
    }

    function findAllSegments(req, res) {
        segmentModel.findAllSegments()
            .then(function (segments) {
                res.json(segments);
            })
    }

    function updateSegment(req, res) {
        var segment = req.body;
        segmentModel.updateSegment(segment)
            .then((segment) => {
                res.json(segment)
            });
    }

    function deleteSegment(req, res) {
        var segment = req.body;
        segmentModel.deleteSegment(segment)
            .then((segment) => res.json(segment));
    }
}
