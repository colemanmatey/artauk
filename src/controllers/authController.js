// modules
const { authService } = require("../services");
const { handleRequest } = require("../utils");

// Register
const register = (req, res) => {
	handleRequest(req, res, {
		GET: registerGET,
		POST: registerPOST,
	});
};

const registerGET = (req, res) => {
	let context = {
		title: "Register",
		user: null,
	};
	res.render("auth/register", context);
};

const registerPOST = async (req, res) => {
	await authService.createUser(req.body);
	res.redirect("login");
};

// Login
const login = (req, res) => {
	handleRequest(req, res, {
		GET: loginGET,
		POST: loginPOST,
	});
};

const loginGET = (req, res) => {
	let context = {
		title: "Login",
		user: null,
	};
	res.render("auth/login", context);
};

const loginPOST = async (req, res) => {
	const user = await authService.getUserByUsername(req.body);

	// Store user information in session
	req.session.username = user.Username;

	let context = {
		title: "Login",
		user: req.session.username,
	};
	res.render("index", context);
};

// logout
const logout = (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			return res.status(500).send("Could not log out");
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
