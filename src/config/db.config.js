// modules
const loadEnv = require("./env.config");

// load env vars
loadEnv(process.env.NODE_ENV, 'database');

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
