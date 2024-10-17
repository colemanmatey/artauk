// utility functions

// convert string to boolean type
const bool = (string) => {
	return string === "true";
};

// handle different HTTP methods
const handleRequest = (req, res, next, handlers) => {
	const handler = handlers[req.method];
	if (handler) {
		handler(req, res, next);
	} else {
		res.status(405).send("Method Not Allowed");
	}
};

// exports
module.exports = {
	bool,
	handleRequest,
};
