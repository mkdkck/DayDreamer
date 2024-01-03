require('dotenv').config();

module.exports = {
    development: {
        username: "root", 
        database: "daydreamer_db", 
        password: process.env.DB_PASSWORD,
        host: "127.0.0.1", 
        dialect: "mysql", 
        logging: false
    },
    production: {
        use_env_variable: "DATABASE_URL",
        dialect: "postgres",
        database: "daydreamer_db", 
        dialectOptions: {
           ssl: {
             require: true,
             rejectUnauthorized: false
           }
         }
      },
}