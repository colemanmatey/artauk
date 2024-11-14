// modules
const User = require("./User");
const Profile = require("./Profile");

// associations
User.hasOne(Profile, { foreignKey: "UserID" });
Profile.belongsTo(User, { foreignKey: "UserID" });

// exports
module.exports = {
	User,
	Profile,
};
