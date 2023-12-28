// server.js

// Importing necessary modules
const express = require('express');          // Express framework for creating the server
const session = require('express-session');  // Express-session for handling sessions
const passport = require('./config/passport'); // Passport for authentication
const exphbs = require('express-handlebars');


// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3000;      // Port configuration (use environment variable or default to 3000)
const db = require('./models');             // Importing the Sequelize models

// Creating the Express app
const app = express();

// Middleware for data parsing
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(express.json());                     // Middleware to parse JSON bodies

// Static directory
app.use(express.static('public'));           // Setting up the public directory for static files

const hbs = exphbs.create({});

// Setting up session with a secret key
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

// Importing routes
const htmlRoutes = require('./routes/html'); // HTML routes for the application
const apiRoutes = require('./routes/api');   // API routes for the application

// Registering routes
app.use('/', htmlRoutes);                     // Use the HTML routes
app.use('/api', apiRoutes);                  // Use the API routes, prefixed with '/api'

// Syncing the Sequelize models and then starting the Express app
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on PORT ${PORT}`);
    });
});
