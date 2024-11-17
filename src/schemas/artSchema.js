// modules
import { Sequelize, DataTypes } from "sequelize";

// schema
const artSchema = {
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
    isApproved: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    CreatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("SYSUTCDATETIME"),
    },
};

// exports
export default artSchema;
