'use strict';
var mongoose = require('mongoose');
var Planet = mongoose.Schema;


var PlanetSchema = new Planet({
    name: {
        type: String,
        required: 'Por favor, digite o nome:'
    },
    climate: {
        type: String,
        required: 'Por favor, digite o tipo de clima:'
    },
    terrain: {
        type: String,
        required: 'Por favor, digite o tipo do terreno:'
    },
    movie_appearances: {
        type: String,
        default: 0
    }
});

module.exports = mongoose.model('Planets', PlanetSchema);