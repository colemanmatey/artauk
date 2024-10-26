// modules
const { Sequelize } = require("sequelize");
const sequelize = require("../app/db");
const { profileSchema } = require("../schemas");

// model
const Profile = sequelize.define("Profile", profileSchema, {
	tableName: "Profile",
	timestamps: false,
	hooks: {
		beforeUpdate: (profile) => {
			profile.UpdatedAt = Sequelize.fn("SYSUTCDATETIME");
		},
	},
});

// exports
module.exports = Profile;
