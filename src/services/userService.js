// modules
const bcrypt = require("bcryptjs");
const { User } = require("../models");
const { checkDataExists } = require("../validators");

// create user
const createUser = async (data) => {
	const userExists = await checkDataExists(User, { Username: data.username });
	const emailExists = await checkDataExists(User, { Email: data.email });

	if (userExists) {
		throw new Error("Username already exists");
	}
	if (emailExists) {
		throw new Error("Email already exists");
	}

	if (data.password === data.password2) {
		try {
			// Hash the password
			const passwordHash = await bcrypt.hash(data.password, 10);

			// Add user to the database
			const user = await User.create({
				Username: data.username,
				Email: data.email,
				PasswordHash: passwordHash,
			});
			return user;
		} catch (err) {
			console.log(err);
		}
	} else {
		console.log("The passwords do not match");
	}
};

// get user by username
const getUserByUsername = async (data) => {
	const userExists = await checkDataExists(User, { Username: data.username });

	if (userExists) {
		try {
			const user = await User.findOne({ where: { Username: data.username } });

			// Verify the password
			const isPasswordValid = await bcrypt.compare(
				data.password,
				user.PasswordHash,
			);
			if (!isPasswordValid) {
				throw new Error("Invalid password");
			}
			return user;
		} catch (err) {
			console.error(err);
		}
	} else {
		throw new Error("User does not exist");
	}
};

module.exports = {
	createUser,
	getUserByUsername,
};
