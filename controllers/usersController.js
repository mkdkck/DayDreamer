// usersController.js

// Importing the User model from our models folder. This model represents the 'users' table in our database.
const db = require('../models/index');

// Creating an object to hold all our methods for handling user-related operations.
const usersController = {
    // Method to retrieve all users from the database
    findAll: function(req, res) {
        db.User.findAll({
            // We can add query logic here (like sorting and filtering) if needed
        })
        .then(dbUsers => res.json(dbUsers)) // Sending the retrieved users as a JSON response
        .catch(err => res.status(422).json(err)); // Handling any errors
    },

    // Method to find a single user by their ID
    findById: function(req, res) {
        db.User.findByPk(req.params.id) // 'req.params.id' contains the ID passed in the request URL
        .then(dbUser => res.json(dbUser)) // Sending the retrieved user as a JSON response
        .catch(err => res.status(422).json(err)); // Handling any errors
    },

    // Method to create a new user in the database
    create: function(req, res) {
        db.User.create(req.body) // 'req.body' contains the new user data
        .then(()=>res.redirect('/login')) // when created, redirect to login page.
        .catch(err => res.status(422).json(err)); // Handling any errors
    },

    // Method to update an existing user
    update: function(req, res) {
        db.User.update(req.body, { // 'req.body' contains the updates to the user
            where: {
                id: req.params.id // Identifying the user to update by ID
            }
        })
        .then(dbUser => res.json(dbUser)) // Sending the updated user as a JSON response
        .catch(err => res.status(422).json(err)); // Handling any errors
    },

    // Method to delete a user from the database
    remove: function(req, res) {
        db.User.destroy({
            where: {
                id: req.params.id // Identifying the user to delete by ID
            }
        })
        .then(dbUser => res.json(dbUser)) // Sending confirmation of deletion as a JSON response
        .catch(err => res.status(422).json(err)); // Handling any errors
    },
};

// Exporting our usersController object so it can be used in other parts of our application, like our routes.
module.exports = usersController;
