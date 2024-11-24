// modules
import { DataTypes } from "sequelize";

// schema
const auctionSchema = {
    AuctionID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    Title: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    Description: {
        type: DataTypes.STRING(150),
        allowNull: true,
    },
    StartDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    EndDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    Status: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: "pending",
    },
};

// exports
export default auctionSchema;