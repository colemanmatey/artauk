// modules

// [GET] Homepage
const homepage = (req, res) => {
	let context = {
		title: "Homepage",
	};
	res.render("index", context);
};

// exports
module.exports = {
	homepage
};
