// modules
import { DataTypes } from "sequelize";

// schema
const userRoleSchema = {
	UserRoleID: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true,
	},
	UserID: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	RoleID: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
};

// exports
export default userRoleSchema;
