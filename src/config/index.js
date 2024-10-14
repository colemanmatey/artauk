// modules
const dbConfig = require("./db.config");
const serverConfig = require("./server.config");
const sessionConfig = require("./session.config");

// exports
module.exports = {
	db: dbConfig,
	server: serverConfig,
	session: sessionConfig,
};
