// modules
const { userService, profileService } = require("../services");
const { handleRequest } = require("../utils");

// Register
const register = (req, res, next) => {
	handleRequest(req, res, next, {
		GET: registerGET,
		POST: registerPOST,
	});
};

const registerGET = (req, res) => {
	let context = {
		title: "Register",
		user: null,
		error: null,
	};
	res.render("auth/register", context);
};

const registerPOST = async (req, res) => {
	try {
		await userService.createUser(req.body);
		res.redirect("login");
	} catch (err) {
		let context = {
			title: "Register",
			user: null,
			error: err.message || "An error occurred during registration",
		};
		res.render("auth/register", context);
	}
};

// Login
const login = (req, res, next) => {
	handleRequest(req, res, next, {
		GET: loginGET,
		POST: loginPOST,
	});
};

const loginGET = (req, res) => {
	let context = {
		title: "Login",
		user: null,
		error: null,
	};
	res.render("auth/login", context);
};

const loginPOST = async (req, res) => {
	try {
		const user = await userService.getUserByUsername(req.body);
		const profile = await profileService.getProfileByUsername(user.Username);

		req.session.username = user.Username;

		const context = {
			title: "Login",
			user: req.session.username,
		};

		if (!profile) {
			res.redirect("/onboarding/user/" + user.UserID);
		} else {
			res.render("index", context);
		}
	} catch (err) {
		const context = {
			title: "Login",
			user: null,
			error: err.message,
		};
		res.render("auth/login", context);
	}
};

// Logout
const logout = (req, res, next) => {
	req.session.destroy((err) => {
		if (err) {
			return next(err);
		}
		res.redirect("/");
	});
};

// exports
module.exports = {
	register,
	login,
	logout,
};
