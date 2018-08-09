'use strict';
module.exports = function(app) {
    var controller = require('../controllers/controller');

    app.route('/planets')
        .get(controller.list_all_planets)
        .post(controller.create_a_planet);

    app.route('/planets/:planetId')
        .get(controller.read_a_planet)
        .put(controller.update_a_planet)
        .delete(controller.delete_a_planet);
}