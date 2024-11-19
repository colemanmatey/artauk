// modules
import { DataTypes } from "sequelize";

// schema
const roleSchema = {
    RoleID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    RoleName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    RoleDescription: {
        type: DataTypes.STRING(150),
        allowNull: true,
    },
};

// exports
export default roleSchema;