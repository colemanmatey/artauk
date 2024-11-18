// modules
import { userService, profileService, artService } from "../services/index.js";

// [GET] Homepage
const homepage = async (req, res) => {
	let user = null;

	if (req.session.username) {
		user = req.session.username;
	}

	let context = {
		title: "Homepage",
		user: user,
	};
	res.render("index", context);
};

// [GET] Dashboard
const dashboard = async (req, res) => {
	try {
		const user = await userService.getUserById(req.session.userID);
		const profile = await profileService.getProfileByUsername(user.Username);

		// Fetch the user's artwork
		const artwork = await artService.getUserArtwork(profile.ProfileID);

		const context = {
			title: "Login",
			user: req.session.username,
			profile: profile.dataValues,
			artwork: artwork || [], // Pass artwork (or an empty array if no artwork)
		};
		res.render("dashboard", context);
	} catch (err) {
		const context = {
			title: "Login",
			user: null,
			error: err.message,
			artwork: null,
		};
		console.log(err);
		res.render("auth/login", context);
	}
};

// exports
export default {
	homepage,
	dashboard,
};
