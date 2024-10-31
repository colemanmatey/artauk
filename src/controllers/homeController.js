// modules
const { userService } = require("../services");
const { handleRequest } = require("../utils");

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
	console.log(context);
	res.render("profile", context);
};

const profilePOST = async (req, res) => {
	res.redirect("/");
};

// exports
module.exports = {
	homepage,
	onboarding,
	profile,
};
