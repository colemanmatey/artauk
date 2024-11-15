// modules
import { Sequelize } from "sequelize";
import config from "../config/index.js";

// create connection
const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
	host: config.db.host,
	dialect: config.db.dialect,
	logging: () => {
		console.log("Connecting to the database...");
	},
	define: {
		freezeTableName: true,
	},
});

// Establish the database connection
sequelize
	.authenticate()
	.then(() => {
		console.log("Connection has been established successfully.");

		// Sync the models with the database schema
		return sequelize.sync();
	})
	.then(() => {
		console.log("All models were synchronized successfully.");
	})
	.catch((error) => {
		console.error("Unable to connect to the database:", error);
	});

// exports
export default sequelize;
