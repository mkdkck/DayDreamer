// auth.js

// Importing necessary modules
const express = require('express'); // Express framework for creating the router
const router = express.Router(); // Creating a router for these specific routes
const passport = require('passport'); // Passport for handling authentication
const usersController = require('../../controllers/usersController'); 

// Route for displaying the login page
// GET request to /login
router.get('/login', (req, res) => {
    // Render the login view/template
    res.render('login');
});

// Route for handling the login logic
// POST request to /login
router.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard', // Redirect to the dashboard upon successful login
    failureRedirect: '/login',     // Redirect back to the login page if login fails
    // failureFlash: true             // Enable flash messages for login failures
}));

// Route for displaying the signup page
// GET request to /signup
router.get('/signup', (req, res) => {
    // Render the signup view/template
    res.render('signup');
});

// Route for handling the signup logic
// POST request to /signup
router.post('/signup', (req, res) => {
    usersController.create(req,res);
});

// Route for handling user logout
// GET request to /logout
router.get('/logout', (req, res) => {
    req.logout(); // Passport provides this method to log out the user
    res.redirect('/'); // Redirect to the home page after logging out
});

// Exporting the router for use in other parts of the application
module.exports = router;
