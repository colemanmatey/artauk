// modules
import { Sequelize } from "sequelize";
import config from "../config/index.js";
import { userService, roleService } from "../services/index.js";

// create connection
const sequelize = new Sequelize(
	config.db.database,
	config.db.username,
	config.db.password,
	{
		host: config.db.host,
		dialect: config.db.dialect,
		logging: false, // Disable unnecessary logging or make this more specific
		define: {
			freezeTableName: true,
		},
	},
);

const admin = {
	username: config.admin.username,
	email: config.admin.email,
	password: config.admin.password,
	password2: config.admin.password,
};

const role = {
	roleName: config.role.roleName,
	roleDescription: config.role.roleDescription,
};

// Establish the database connection
sequelize
	.authenticate()
	.then(async () => {
		console.log("Connection has been established successfully.");

		// Sync the models with the database schema
		await sequelize.sync(); // You may want to skip this in production for migrations

		// Create admin user
		try {
			// Check if the admin already exists
			await userService
				.getUserByUsername(admin)
				.then(() => {
					console.log("Admin user already exists. Skipping creation.");
				})
				.catch(() => {
					// If the admin doesn't exist, create the admin user
					userService.createUser(admin);
					console.log("Admin user created successfully.");
				});
		} catch (error) {
			console.error("Error creating admin user:", error);
		}

		// Create default role
		try {
			// Check if the role already exists
			await roleService.getRoles().then((roles) => {
				if (roles.length === 0) {
					// If the role doesn't exist, create the role
					roleService.createRole(role);
					console.log("Default role created successfully.");
				} else {
					console.log("Default role already exists. Skipping creation.");
				}
			});
		} catch (error) {
			console.error("Error creating default role:", error);
		}

		// Log success message for sync
		console.log("All models were synchronized successfully.");
	})
	.catch((error) => {
		console.error("Unable to connect to the database:", error);
	});

// exports
export default sequelize;
