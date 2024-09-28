// modules
const loadEnv = require("./env");

// load env vars
loadEnv(process.env.NODE_ENV);

// database configuration
const config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT,
};

// exports
module.exports = config;
