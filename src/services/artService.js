// modules
import { Art } from "../models/index.js";

// Create a new art
const createArt = async (profileID, data) => {
    const {
        Title,
        Artist,
        Year,
        Price,
        Artwork,
    } = data;

    try {
        // Create a new art
        const art = await Art.create({
            Title,
            Artist,
            Year,
            Price,
            Artwork,
            ProfileID: profileID,
        });
        return art;
    } catch (error) {
        console.error("Error creating art:", error);
        throw error;
    }
};

// module exports
export default {
    createArt,
};