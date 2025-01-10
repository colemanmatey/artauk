// modules
import sequelize from "../app/db.js";
import { auctionSchema } from "../schemas/index.js";

// model
const Auction = sequelize.define("Auction", auctionSchema, {
	tableName: "Auction",
	timestamps: false,
});

// exports
export default Auction;
