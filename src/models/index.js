// modules
import User from "./User.js";
import Profile from "./Profile.js";
import Art from "./Art.js";
import Role from "./Role.js";

// associations
User.hasOne(Profile, { foreignKey: "UserID" });
Profile.belongsTo(User, { foreignKey: "UserID" });

Profile.hasMany(Art, { foreignKey: "ProfileID" });
Art.belongsTo(Profile, { foreignKey: "ProfileID" });


// exports
export {
	User,
	Profile,
	Art,
	Role,
};
