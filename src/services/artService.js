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

// Define the AdminJS custom action to approve artwork
const approveArtwork = async (id) => {
	const artwork = await Art.findByPk(id);

	if (!artwork) {
		return null; // Return null if the artwork does not exist
	}

	artwork.approved = true; // Approve the artwork
	await artwork.save(); // Save the updated artwork

	return artwork; // Return the updated artwork
};

const approveMultipleArtworks = async (ids) => {
	const artworks = await Art.findAll({
		where: { id: ids },
	});

	if (!artworks.length) {
		return null; // Return null if no artworks are found
	}

	const updatedArtworks = [];
	for (const artwork of artworks) {
		artwork.approved = true;
		await artwork.save();
		updatedArtworks.push(artwork);
	}

	return updatedArtworks;
};

// module exports
export default {
	createArt,
	approveArtwork,
	approveMultipleArtworks,
};
