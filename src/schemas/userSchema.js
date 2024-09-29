// modules
const { Sequelize, DataTypes } = require("sequelize");

const userSchema = {
    UserID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    Username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    Email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
    },
    PasswordHash: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    IsActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    CreatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("SYSUTCDATETIME"),
    },
    UpdatedOn: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    LastLogin: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
};

// exports
module.exports = userSchema;