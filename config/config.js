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
        use_env_variable: "DATABASE_URL", // Use the DATABASE_URL environment variable provided by Heroku
        dialect: "postgres",
        logging: false,
      },
}