// modules
import { Auction } from "../models/index.js";

// Create a new art
const createAuction = async (data) => {
    const { title, description, startDate, endDate } = data;

	try {
		// Create a new art
		const auction = await Auction.create({
			Title: title,
			Description: description,
            StartDate: startDate,
            EndDate: endDate
		});
		return auction;
	} catch (error) {
		console.error("Error creating Auction:", error);
		throw error;
	}
};

// Retrieve all roles
const getAllAuctions = async () => {
	try {
		const auctions = await Auction.findAll();
		return auctions;
	} catch (error) {
		console.error("Error retrieving auctions:", error);
		throw error;
	}
};

// exports
export default { createAuction, getAllAuctions };