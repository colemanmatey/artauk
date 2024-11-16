// modules
import { bool } from "../utils/index.js";

// server
const serverConfig = {
	host: process.env.HOST,
	port: process.env.PORT,
};

// database
const dbConfig = {
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	dialect: process.env.DB_DIALECT,
};

// session
const sessionConfig = {
	secret: process.env.SESSION_SECRET,
	resave: bool(process.env.SESSION_RESAVE),
	saveUninitialized: bool(process.env.SESSION_SAVE_UNINITIALIZED),
	cookie: { secure: bool(process.env.SESSION_COOKIE_SECURE) },
};

// cookies
const cookieConfig = {
	name: process.env.COOKIE_NAME,
	secret: process.env.COOKIE_SECRET,
};

// admin
const adminConfig = {
	username: process.env.ADMIN_USERNAME,
	password: process.env.ADMIN_PASSWORD,
};

// exports
export default {
	db: dbConfig,
	server: serverConfig,
	session: sessionConfig,
	cookie: cookieConfig,
	admin: adminConfig,
};
