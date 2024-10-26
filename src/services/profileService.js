const { Profile, User } = require("../models");

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

module.exports = {
	getProfileByUsername,
};
