// modules
import sequelize from "../app/db.js";
import { artSchema } from "../schemas/index.js";

// model
const Art = sequelize.define("Art", artSchema, {
    tableName: "Art",
    timestamps: false,
});

// exports
export default Art;
