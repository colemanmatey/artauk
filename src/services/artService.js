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

const getUserArtwork = async (profileID) => {
    try {
        // Fetch all artworks associated with the user
        const artwork = await Art.findAll({
            where: {
                ProfileID: profileID,
            },
            order: [['createdAt', 'DESC']],
        });

        // If artwork exists, return it. Otherwise, return an empty array.
        return artwork || [];
    } catch (error) {
        console.error("Error fetching artwork for user:", error);
        throw new Error("Unable to fetch artwork");
    }
};


// Define the AdminJS custom action to approve artwork
// Approve a single artwork
const approveArtwork = async (id) => {
	try {
		const artwork = await Art.findByPk(id);

		if (!artwork) {
			return null; // Return null if the artwork does not exist
		}

		artwork.IsApproved = true; // Mark as approved
		await artwork.save(); // Save changes to the database

		return artwork; // Return the updated artwork
	} catch (error) {
		console.error("Error approving artwork:", error);
		throw error;
	}
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
		artwork.IsApproved = true;
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
	getUserArtwork
};
