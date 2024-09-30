// modules
const loadEnv = require("./env.config");

// load env vars
loadEnv(process.env.NODE_ENV, "server");

// server configuration
const config = {
	host: process.env.HOST,
	port: process.env.PORT,
};

// exports
module.exports = config;
