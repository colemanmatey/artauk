// modules
const sequelize = require("../app/db");
const { userSchema } = require("../schemas");

// model
const User = sequelize.define("User", userSchema, {
	tableName: "User", // existing table name
	timestamps: false,
});

// exports
module.exports = User;
