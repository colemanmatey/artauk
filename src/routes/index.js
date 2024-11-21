// modules
import homeRoutes from "./homeRoutes.js";
import authRoutes from "./authRoutes.js";
import adminRoutes from "./adminRoutes.js";
import profileRoutes from "./profileRoutes.js";
import artRoutes from "./artRoutes.js";

// exports
export default {
	home: homeRoutes,
	auth: authRoutes,
	admin: adminRoutes,
	profile: profileRoutes,
	art: artRoutes,
};
