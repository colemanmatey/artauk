// modules
import express from "express";
import session from "express-session";
import morgan from "morgan";
import path from "path";
import config from "../config/index.js";
import routes from "../routes/index.js";
import errorHandlers from "../middlewares/index.js";

// configuration
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "views"));

// middleware
app.use(express.static(path.join(process.cwd(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(session(config.session));

// routes
app.use("/", routes.home);
app.use("/auth", routes.auth);
app.use("/profile", routes.profile);
app.use("/art", routes.art);

// error handling
app.use(errorHandlers.error404);
app.use(errorHandlers.error500);

// exports
export default app;
