// modules
const loadEnv = require("./env");

// load env vars
loadEnv(process.env.NODE_ENV);

// server configuration
const config = {
    host: process.env.HOST,
    port: process.env.PORT,
};

// exports
module.exports = config;
