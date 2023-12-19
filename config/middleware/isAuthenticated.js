// isAuthenticated.js

// We require the 'passport' module. Passport is authentication middleware for Node.js.
const passport = require('passport');

/**
 * This is a middleware function that checks if the user is logged in.
 * It is used to protect routes that should only be accessible by authenticated users.
 */
module.exports = function(req, res, next) {
    // The 'req.isAuthenticated()' method is provided by passport.
    // It checks if the user is currently authenticated.
    if (req.isAuthenticated()) {
        // If the user is authenticated, we call 'next()' to proceed to the next middleware or route handler.
        // This means the user is allowed to access the route they requested.
        return next();
    }

    // If the user is not authenticated, we redirect them to the login page.
    // You can change '/login' to the path of your application's login page.
    res.redirect('/login');
};
