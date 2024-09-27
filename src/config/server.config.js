// modules
const dotenv = require("dotenv");

// load env vars
dotenv.config();

// server configuration
const config = {
    host: process.env.HOST,
    port: process.env.PORT,
};

// exports
module.exports = config;
