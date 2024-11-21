// modules
import User from "./User.js";
import Profile from "./Profile.js";
import Art from "./Art.js";
import Role from "./Role.js";
import UserRole from "./UserRole.js";

// associations
User.hasOne(Profile, { foreignKey: "UserID" });
Profile.belongsTo(User, { foreignKey: "UserID" });

Profile.hasMany(Art, { foreignKey: "ProfileID" });
Art.belongsTo(Profile, { foreignKey: "ProfileID" });

User.belongsToMany(Role, {
	through: UserRole,
	foreignKey: "UserID",
});

Role.belongsToMany(User, {
	through: UserRole,
	foreignKey: "RoleID",
});

// exports
export { User, Profile, Art, Role, UserRole };
