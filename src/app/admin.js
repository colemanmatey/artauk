import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import sequelize from "./db.js";

// Register Sequelize adapter
AdminJS.registerAdapter(AdminJSSequelize);

// Initialize AdminJS
const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: '/admin',
});

// Build the AdminJS router
const adminRouter = AdminJSExpress.buildRouter(adminJs);

export { adminJs, adminRouter };
