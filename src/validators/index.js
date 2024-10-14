// validators

// check whether field exists in the database
const checkDataExists = async (model, filter) => {
	const result = await model.findOne({ where: filter });
	return result !== null;
};

// exports
module.exports = {
	checkDataExists,
};
