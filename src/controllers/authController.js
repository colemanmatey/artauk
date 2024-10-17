// modules
const { authService } = require("../services");
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
	};
	res.render("auth/register", context);
};

const registerPOST = async (req, res, next) => {
	try {
		await authService.createUser(req.body);
		res.redirect("login");
	} catch (err) {
		err.status = 400;
		next(err);
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
	};
	res.render("auth/login", context);
};

const loginPOST = async (req, res, next) => {
	try {
		const user = await authService.getUserByUsername(req.body);
		req.session.username = user.Username;

		let context = {
			title: "Login",
			user: req.session.username,
		};
		res.render("index", context);
	} catch (err) {
		err.status = 401;
		next(err);
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
