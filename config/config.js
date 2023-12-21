require('dotenv').config(); // This line loads the environment variables from the .env file

module.exports = {
  "development": {
      "username": process.env.DB_USERNAME || 'fallback-username', // Use || to provide a fallback value
      "password": process.env.DB_PASSWORD || 'fallback-password',
      "database": process.env.DB_NAME || 'daydreamer_db',
      "host": process.env.DB_HOST || '127.0.0.1',
      "dialect": "mysql",
      "logging": false
  },
  "test": {
      "username": process.env.DB_USERNAME || 'fallback-username',
      "password": process.env.DB_PASSWORD || 'fallback-password',
      "database": "daydreamer_test_db",
      "host": process.env.DB_HOST || '127.0.0.1',
      "dialect": "mysql",
      "logging": false
  },
  "production": {
      "username": process.env.DB_USERNAME || 'fallback-username',
      "password": process.env.DB_PASSWORD || 'fallback-password',
      "database": "daydreamer_production_db",
      "host": process.env.DB_HOST || '127.0.0.1',
      "dialect": "mysql",
      "logging": false,
      "use_env_variable": "JAWSDB_URL" // assuming you have this for production
  }
};
