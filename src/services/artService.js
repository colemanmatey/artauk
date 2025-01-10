// modules
import { Art } from "../models/index.js";

// Create a new art
const createArt = async (profileID, data, file) => {
	const { Title, Artist, Year, Price } = data;

	const Artwork = file ? file.filename : null; // Check if file exists
	try {
		// Create a new art
		const art = await Art.create({
			ProfileID: profileID,
			Title,
			Artist,
			Year,
			Price,
			Artwork,
		});
		return art;
	} catch (error) {
		console.error("Error creating art:", error);
		throw error;
	}
};

const getAllArtwork = async () => {
	try {
		// Fetch all artwork
		const artwork = await Art.findAll({
			order: [["createdAt", "DESC"]],
		});

		// If artwork exists, return it. Otherwise, return an empty array.
		return artwork || [];
	} catch (error) {
		console.error("Error fetching artwork:", error);
		throw new Error("Unable to fetch artwork");
	}
};

const getArtworkByStatus = async (status) => {
	try {
		let filter;

		// Handle the case where status is null
		if (status === null) {
			filter = { IsApproved: null };
		} else {
			// Handle the case where status is true or false
			filter = { IsApproved: status };
		}

		// Fetch all artworks associated with the user based on the approval status
		const artwork = await Art.findAll({
			where: filter,
			order: [["createdAt", "DESC"]],
		});

		// If artwork exists, return it. Otherwise, return an empty array.
		return artwork || [];
	} catch (error) {
		console.error("Error fetching artwork for user:", error);
		throw new Error("Unable to fetch artwork");
	}
};

const getUserArtworkByApprovalStatus = async (profileID, status) => {
	try {
		let filter;

		// Handle the case where status is null
		if (status === null) {
			filter = { ProfileID: profileID, IsApproved: null };
		} else {
			// Handle the case where status is true or false
			filter = { ProfileID: profileID, IsApproved: status };
		}

		// Fetch all artworks associated with the user based on the approval status
		const artwork = await Art.findAll({
			where: filter,
			order: [["createdAt", "DESC"]],
		});

		// If artwork exists, return it. Otherwise, return an empty array.
		return artwork || [];
	} catch (error) {
		console.error("Error fetching artwork for user:", error);
		throw new Error("Unable to fetch artwork");
	}
};

const setIsApproved = async (id, status) => {
	try {
		// Find the artwork by ID
		const artwork = await Art.findByPk(id);

		// Update the approval status
		artwork.IsApproved = status;

		// Save the updated artwork
		await artwork.save();
	} catch (error) {
		console.error("Error setting approval status:", error);
		throw new Error("Unable to set approval status");
	}
};

// module exports
export default {
	createArt,
	getUserArtworkByApprovalStatus,
	getAllArtwork,
	getArtworkByStatus,
	setIsApproved,
};
