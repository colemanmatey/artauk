// modules

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

// exports
export default {
	homepage,
};
