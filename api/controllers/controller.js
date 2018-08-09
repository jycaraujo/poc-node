'use strict';


var mongoose = require('mongoose'),
    Planet = mongoose.model('Planets');

exports.list_all_planets = function(req, res){
    Planet.find({}, function(err, planet) {
        if (err)
            res.send(err);
        res.json(planet);
    });
}

exports.create_a_planet = function(req, res) {
    var new_planet = new Planet(req.body);
    new_planet.save(function(err, planet) {
        if (err)
            res.send(err);
        res.json(planet);
    });
};

exports.read_a_planet = function(req, res) {
    Planet.findById(req.params.planetId, function(err, planet) {
        if (err)
            res.send(err);
        res.json(planet);
    });
};


exports.update_a_planet = function(req, res) {
    Planet.findOneAndUpdate({_id: req.params.planetId}, req.body, {new: true}, function(err, planet) {
        if (err)
            res.send(err);
        res.json(planet);
    });
};


exports.delete_a_planet = function(req, res) {


    Planet.remove({
        _id: req.params.planetId
    }, function(err, planet) {
        if (err)
            res.send(err);
        res.json({ message: 'Planet successfully deleted' });
    });
};