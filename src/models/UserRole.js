// modules
import sequelize from "../app/db.js";
import { userRoleSchema } from "../schemas/index.js";

// model
const UserRole = sequelize.define("UserRole", userRoleSchema, {
	tableName: "UserRole",
	timestamps: false,
});

// exports
export default UserRole;
