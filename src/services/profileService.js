// modules
const { Profile, User } = require("../models");

// get profile by username
const getProfileByUsername = async (username) => {
	try {
		const user = await User.findOne({
			where: { Username: username },
			include: {
				model: Profile,
				required: false, // Perform a left join instead of inner join
			},
		});

		// Check if the user exists and has an associated profile
		if (user) {
			return user.Profile;
		} else {
			console.log("User not found or no profile associated.");
		}
	} catch (error) {
		console.error("Error retrieving profile:", error);
		throw error;
	}
};

// create profile
const createProfile = async (userid, data) => {
	const {
		FirstName,
		LastName,
		DateOfBirth,
		Phone,
		Address,
		City,
		State,
		PostalCode,
		Country,
		ProfilePicture,
		Bio,
	} = data;

	try {
		// Create a new profile
		const profile = await Profile.create({
			UserID: userid,
			FirstName,
			LastName,
			DateOfBirth,
			Phone,
			Address,
			City,
			State,
			PostalCode,
			Country,
			ProfilePicture,
			Bio,
		});
		return profile;
	} catch (error) {
		console.error("Error creating profile:", error);
		throw error;
	}
};

module.exports = {
	getProfileByUsername,
	createProfile,
};
