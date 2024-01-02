// Import necessary modules
const Sequelize = require('sequelize');
require('dotenv').config();
const env = process.env.NODE_ENV || 'development'; // Determine the environment (development by default)
const config = require(__dirname + '/../config/config.js')[env]; // Load database configuration for the current environment
let sequelize;

// Initialize Sequelize with the configuration settings
if (process.env.DATABASE_URL) {
    // If on Heroku, use the provided DATABASE_URL
    sequelize = new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
      logging: false, // Set to true if you want to log SQL queries
      // ... other configurations
    });
  } else {
    // If not on Heroku, use your local configuration
    const config = require(__dirname + '/../config/config.js')[env];
    sequelize = new Sequelize(config.database, config.username, config.password, config);
  }

// Create a db object to hold our models
const db = {};

// Initialize and import each model in the directory
db.User = require('./User.js')(sequelize, Sequelize);
db.Dream = require('./Dream.js')(sequelize, Sequelize);

// Set up associations if there are any
// For example, if a User has many Dreams:
db.User.hasMany(db.Dream, { foreignKey: 'user_id', as: 'dreams' });
// And if a Dream belongs to a User:
db.Dream.belongsTo(db.User, { foreignKey: 'user_id', as: 'user' });

// Add the Sequelize and Sequelize instance to the db object
// This is useful for raw queries and other Sequelize functionalities
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Export the db object, which now includes the models
module.exports = db;