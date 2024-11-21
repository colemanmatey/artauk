// modules
import sequelize from "../app/db.js";
import { roleSchema } from "../schemas/index.js";

// model
const Role = sequelize.define("Role", roleSchema, {
	tableName: "Role",
	timestamps: false,
});

// exports
export default Role;
