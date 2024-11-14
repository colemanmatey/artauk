// modules
const { Sequelize, DataTypes } = require("sequelize");

// schema
const Art = {
    ArtID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    Title: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    Artist: {
        type: DataTypes.STRING(100),
    },
    Year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    Artwork: {
        type: DataTypes.STRING(255),
        allowNull: false, // URL or path
    },
    CreatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("SYSUTCDATETIME"),
    },
};

// exports
module.exports = Art;
