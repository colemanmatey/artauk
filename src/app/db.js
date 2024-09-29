// modules
const { Sequelize } = require("sequelize");
const { db } = require("../config");

// create connection
const sequelize = new Sequelize(db.database, db.username, db.password, {
    host: db.host,
    dialect: db.dialect,
    logging: () => {
        console.log("Establishing connection to the database...");
    },
    define: {
        freezeTableName: true,
    },
});

// test connection
sequelize
    .authenticate()
    .then(() => {
        console.log("Database connection established successfully.");
    })
    .catch((err) => {
        console.error("Failed to connect to the database. Error:", err);
    });

// exports
module.exports = sequelize;
