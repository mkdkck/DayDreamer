require('dotenv').config()

module.exports = {
  development: {
    database: 'daydreamer_db',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false
  },
  production: {
    url: process.env.JAWSDB_URL,
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging:false
  },
}