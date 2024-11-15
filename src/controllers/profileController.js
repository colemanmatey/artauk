// modules
import { userService, profileService } from "../services/index.js";
import { handleRequest } from "../utils/index.js";

// [GET] Onboarding
const onboarding = async (req, res) => {
	const id = req.params.id;

	let user = await userService.getUserById(id);

	let context = {
		title: "Onboarding",
		user: user.dataValues.Username,
		userID: user.dataValues.UserID,
	};
	res.render("onboarding", context);
};

// Profile Setup
const profile = (req, res, next) => {
	handleRequest(req, res, next, {
		GET: profileGET,
		POST: profilePOST,
	});
};

const profileGET = async (req, res) => {
    
	const id = req.params.id;
	let user = await userService.getUserById(id);

	let context = {
		title: "Onboarding",
		user: user.dataValues.Username,
		userID: user.dataValues.UserID,
	};
	res.render("profile", context);
};

const profilePOST = async (req, res) => {
	const id = req.params.id;

	let user = await userService.getUserById(id);
	const userID = user.dataValues.UserID;

	const profile = await profileService.createProfile(userID, req.body);

	let context = {
		title: "Profile",
		user: user.dataValues.Username,
		userID: user.dataValues.UserID,
		profile: profile.dataValues,
	};

	res.render("dashboard", context)
	
};

// exports
export default {
    onboarding,
    profile,
};