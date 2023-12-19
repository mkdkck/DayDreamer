// dreamsController.js

// Importing the Dream model from our models folder. This model represents the 'dreams' table in our database.
const db = require('../models');

// Creating an object to hold all our methods for handling 'dream' related operations.
const dreamsController = {
    // Method to retrieve all dreams from the database
    findAll: function(req, res) {
        db.Dream.findAll({
            // We can add query logic here (like sorting and filtering) if needed
        })
        .then(dbDreams => res.json(dbDreams)) // Sending the retrieved dreams as a JSON response
        .catch(err => res.status(422).json(err)); // Handling any errors
    },

    // Method to find a single dream by its ID
    findById: function(req, res) {
        db.Dream.findByPk(req.params.id) // 'req.params.id' contains the ID passed in the request URL
        .then(dbDream => res.json(dbDream)) // Sending the retrieved dream as a JSON response
        .catch(err => res.status(422).json(err)); // Handling any errors
    },

    // Method to create a new dream in the database
    create: function(req, res) {
        db.Dream.create(req.body) // 'req.body' contains the new dream data
        .then(dbDream => res.json(dbDream)) // Sending the created dream as a JSON response
        .catch(err => res.status(422).json(err)); // Handling any errors
    },

    // Method to update an existing dream
    update: function(req, res) {
        db.Dream.update(req.body, { // 'req.body' contains the updates to the dream
            where: {
                id: req.params.id // Identifying the dream to update by ID
            }
        })
        .then(dbDream => res.json(dbDream)) // Sending the updated dream as a JSON response
        .catch(err => res.status(422).json(err)); // Handling any errors
    },

    // Method to delete a dream from the database
    remove: function(req, res) {
        db.Dream.destroy({
            where: {
                id: req.params.id // Identifying the dream to delete by ID
            }
        })
        .then(dbDream => res.json(dbDream)) // Sending confirmation of deletion as a JSON response
        .catch(err => res.status(422).json(err)); // Handling any errors
    }
};

// Exporting our dreamsController object so it can be used in other parts of our application, like our routes.
module.exports = dreamsController;
