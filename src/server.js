// modules
import config from "./config/index.js";
import app from "./app/index.js";
import sequelize from "./app/db.js";

// start server
app.listen(config.server.port, () => {
	console.log(`Server running at ${config.server.host}:${config.server.port}`);
});

// handle server shutdown
process.on("SIGINT", async () => {
	console.log("Terminating database connection...");

	await sequelize.close();

	console.log("Connection to the database closed.");
	console.log("Server shutting down.");
	process.exit(0);
});
