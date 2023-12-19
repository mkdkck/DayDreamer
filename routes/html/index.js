// index.js

// Importing necessary modules
const express = require('express'); // Express framework for creating the router
const router = express.Router(); // Creating a router for these specific routes
const isAuthenticated = require('../../config/middleware/isAuthenticated'); // Middleware to check if the user is logged in

// Route for the home page
// GET request to the root '/'
router.get('/', (req, res) => {
    // Check if the user is logged in
    if (req.user) {
        res.redirect('/dashboard'); // If logged in, redirect to the dashboard
    } else {
        res.render('index'); // If not logged in, render the home page
    }
});

// Route for the dashboard
// GET request to '/dashboard'
// 'isAuthenticated' middleware is used to protect this route
router.get('/dashboard', isAuthenticated, (req, res) => {
    // Render the dashboard view/template
    // You can pass in any user data or other necessary data to the template
    res.render('dashboard', {
        user: req.user // Example of passing the logged-in user's data to the template
    });
});

// Exporting the router for use in other parts of the application
module.exports = router;
