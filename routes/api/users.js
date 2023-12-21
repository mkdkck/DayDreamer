// users.js

// Importing necessary modules
const express = require('express'); // Express framework for creating the router
const router = express.Router();  // Creating a router for these specific routes
const usersController = require('../../controllers/usersController'); // Importing the usersController

// Route for getting all users
// GET request to /api/users
router.get('/', (req, res) => {
    usersController.findAll(req, res);
});

// Route for getting a single user by id
// GET request to /api/users/:id
router.get('/:id', (req, res) => {
    usersController.findById(req, res);
});

// Route for creating a new user
// POST request to /api/users
router.post('/', (req, res) => {
    usersController.create(req, res);
});

// Route for updating a user by id
// PUT request to /api/users/:id
router.put('/:id', (req, res) => {
    usersController.update(req, res);
});

// Route for deleting a user by id
// DELETE request to /api/users/:id
router.delete('/:id', (req, res) => {
    usersController.remove(req, res);
});

// Exporting the router for use in other parts of the application
module.exports = router;
