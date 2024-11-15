// eslint-disable-next-line no-unused-vars
const error404 = (req, res, next) => {
	res.status(404).send({ error: "Not Found" });
};

// eslint-disable-next-line no-unused-vars
const error500 = (err, req, res, next) => {
	console.error(err.stack); // Log the error stack
	res.status(err.status || 500).send({
		error: {
			message: err.message || "Internal Server Error",
		},
	});
};

export default {
	error404,
	error500,
};
