import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import sequelize from "./db.js";
import config from "../config/index.js";

// Register Sequelize adapter
AdminJS.registerAdapter(AdminJSSequelize);

// Initialize AdminJS
const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: '/admin',
});

// Authenticate the AdminJS router
const authenticate = async (admin, password) => {
  if (admin === config.admin.username && password === config.admin.password) {
    return { admin, password };
  }
  return null;
}

// Build the AdminJS router with authentication
const adminRouter = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
  authenticate,
  cookieName: config.cookie.name,
  cookiePassword: config.cookie.secret, 
});


export { adminJs, adminRouter };
