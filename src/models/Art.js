// modules
const sequelize = require("../app/db");
const { artSchema } = require("../schemas");

// model
const Art = sequelize.define("Art", artSchema, {
    tableName: "Art",
    timestamps: false,
});

// exports
module.exports = Art;
