// modules
const { Sequelize } = require("sequelize");
const { db } = require("../config");

// create connection
const sequelize = new Sequelize(db.database, db.username, db.password, {
	host: db.host,
	dialect: db.dialect,
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
module.exports = sequelize;
