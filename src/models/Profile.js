// modules
import { Sequelize } from "sequelize";
import sequelize from "../app/db.js";
import { profileSchema } from "../schemas/index.js";

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
export default Profile;
