// modules
import User from "./User.js";
import Profile from "./Profile.js";
import Art from "./Art.js";

// associations
User.hasOne(Profile, { foreignKey: "UserID" });
Profile.belongsTo(User, { foreignKey: "UserID" });

// exports
export {
	User,
	Profile,
	Art,
};
