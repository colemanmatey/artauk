// modules
import { userService, profileService, roleService } from "../services/index.js";
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
	if (req.session.admin) {
		res.render("admin/dashboard");
	} else {
		res.render("admin/index");
	}
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

// Roles
const roles = (req, res, next) => {
	handleRequest(req, res, next, {
		GET: rolesGET,
		POST: rolesPOST,
	});
};

// [GET] Roles
const rolesGET = async (req, res) => {
	if (req.session.admin) {
		const roles = await roleService.getRoles();
		res.render("admin/roles", { roles });
	} else {
		res.redirect("/admin");
	}
};

// [POST] Roles
const rolesPOST = async (req, res) => {
	if (req.session.admin) {
		await roleService.createRole(req.body);

		res.redirect("/admin/data/roles");
	} else {
		res.redirect("/admin");
	}
};

// [GET] Users
const users = async (req, res) => {
	if (req.session.admin) {
		const users = await profileService.getUsersWithProfiles();
		console.log(users);
		res.render("admin/users", { users });
	} else {
		res.redirect("/admin");
	}
};

// exports
export default {
	login,
	logout,
	roles,
	users,
};
