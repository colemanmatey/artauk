// modules
const { DataTypes } = require("sequelize");

// schema
const Profile = {
	ProfileID: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true,
	},
	FirstName: {
		type: DataTypes.STRING(50),
		allowNull: false,
	},
	LastName: {
		type: DataTypes.STRING(50),
		allowNull: false,
	},
	DateOfBirth: {
		type: DataTypes.DATEONLY,
		allowNull: true,
	},
	Phone: {
		type: DataTypes.STRING(20),
		allowNull: true,
	},
	Address: {
		type: DataTypes.STRING(255),
		allowNull: true,
	},
	City: {
		type: DataTypes.STRING(100),
		allowNull: true,
	},
	State: {
		type: DataTypes.STRING(100),
		allowNull: true,
	},
	PostalCode: {
		type: DataTypes.STRING(20),
		allowNull: true,
	},
	Country: {
		type: DataTypes.STRING(100),
		allowNull: true,
	},
	ProfilePicture: {
		type: DataTypes.STRING(255),
		allowNull: true, // URL or path
	},
	Bio: {
		type: DataTypes.STRING(500),
		allowNull: true,
	},
	CreatedAt: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: DataTypes.NOW,
	},
	UpdatedAt: {
		type: DataTypes.DATE,
		allowNull: true,
	},
};

module.exports = Profile;
