var mongoose = require('mongoose');
var segmentSchema = require('./segmentSchema');
var segmentModel = mongoose.model('segment', segmentSchema);


function findSegmentById(id) {
    return segmentModel.findOne({stravaId: id});
}

function createSegment(segment, id) {
    segment.owner = id;
    return segmentModel.create(segment);
}

function findAllSegments() {
    return segmentModel.find();
}

function updateSegment(segment) {
    return segmentModel.update({_id: segment._id}, {$set: segment});
}

function deleteSegment(segment) {
    return segmentModel.deleteOne({_id: segment._id});
}

function findSegmentsForRunner(runnerId) {
    return segmentModel.find({owner: runnerId});
}

var api = {
    findSegmentById : findSegmentById,
    createSegment : createSegment,
    findAllSegments : findAllSegments,
    updateSegment : updateSegment,
    findSegmentsForRunner: findSegmentsForRunner,
    deleteSegment : deleteSegment
};

module.exports = api;