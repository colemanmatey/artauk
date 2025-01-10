// modules
import { Role } from "../models/index.js";

// Create a new art
const createRole = async (data) => {
    const { roleName, roleDescription } = data;
	try {
		// Create a new art
		const role = await Role.create({
			RoleName: roleName,
			RoleDescription: roleDescription,
		});
		return role;
	} catch (error) {
		console.error("Error creating Role:", error);
		throw error;
	}
};

// Retrieve all roles
const getRoles = async () => {
	try {
		const roles = await Role.findAll();
		return roles;
	} catch (error) {
		console.error("Error retrieving roles:", error);
		throw error;
	}
};

// exports
export default { createRole, getRoles };