// modules
import sequelize from "../app/db.js";
import { userSchema } from "../schemas/index.js";

// model
const User = sequelize.define("User", userSchema, {
	tableName: "User",
	timestamps: false,
});

// exports
export default User;
