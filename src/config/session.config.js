// modules
const loadEnv = require("./env.config");
const { bool } = require("../utils"); 

// load env vars
loadEnv(process.env.NODE_ENV, "session");

// session configuration
const config = {
	secret: process.env.SESSION_SECRET,
	resave: bool(process.env.SESSION_RESAVE),
	saveUninitialized: bool(process.env.SESSION_SAVE_UNINITIALIZED),
	cookie: { secure: bool(process.env.SESSION_COOKIE_SECURE)},
};

// exports
module.exports = config;
