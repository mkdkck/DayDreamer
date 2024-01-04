module.exports= {
  "development": {
    "database": "daydreamer_db",
    "username": 'root',
    "password": process.env.DB_PASSWORD,
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false
  },
    "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql",
      "dialectOptions": {
        "ssl": {
          "require": true,
          "rejectUnauthorized": false,
        },
      },
      "logging": false,
      "database": "wdivmxrjohl1z01g",
       }
}