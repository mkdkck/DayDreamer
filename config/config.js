module.exports= {
  "development": {
    "database": "bcu9qmrrfpsan8jo",
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
      "database": "bcu9qmrrfpsan8jo",
       }
}