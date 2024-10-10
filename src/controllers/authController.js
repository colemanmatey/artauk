// modules

// [GET] Login page
const login = (req, res) => {
	let context = {
		title: "Login",
	};
	res.render("auth/login", context);
};

// [GET] Register page
const register = (req, res) => {
	let context = {
		title: "Register",
	};
	res.render("auth/register", context);
};

// exports
module.exports = {
	login,
	register,
};
