// modules
import { userService } from "../services/index.js";
import { handleRequest } from "../utils/index.js";

// Login
const login = (req, res, next) => {
	handleRequest(req, res, next, {
		GET: loginGET,
		POST: loginPOST,
	});
};

// [GET] Homepage
const loginGET = async (req, res) => {
	res.render("admin/index");
};

// [POST] Login
const loginPOST = async (req, res) => {
	try {
		const user = await userService.getUserByUsername(req.body);

		req.session.admin = user.Username;
		res.render("admin/dashboard");
	} catch (err) {
		console.error(err);
		res.redirect("/admin");
	}
};


// Logout
const logout = (req, res, next) => {
	req.session.destroy((err) => {
		if (err) {
			return next(err);
		}
		res.redirect("/admin");
	});
};

// exports
export default {
	login,
	logout,
};
