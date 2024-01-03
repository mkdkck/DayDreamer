// Import necessary modules
const Sequelize = require('sequelize');
require('dotenv').config();
const env = process.env.NODE_ENV || 'development'; // Determine the environment (development by default)
const config = require('../config/config.json'); // Load database configuration for the current environment
let sequelize;

// Initialize Sequelize with the configuration settings
if (env === 'production' && process.env.JAWSDB_URL) {
  // Use Heroku's JAWSDB_URL" for production
  sequelize = new Sequelize(process.env.JAWSDB_URL, {
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging:false
  });
} else {
  // Use local configuration for development
  sequelize = new Sequelize({
  database: 'daydreamer_db',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: config.host,
  dialect: 'mysql',
  logging: false
})};

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