// modules
const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const path = require("path");
const config = require("../config");
const routes = require("../routes");
const { errorHandlers } = require("../middlewares");

// configuration
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../", "views"));

// middleware
app.use(express.static(path.join(__dirname, "../../", "public")));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(session(config.session));

// routes
app.use("/", routes.homeRoutes);
app.use("/auth", routes.authRoutes);
app.use("/profile", routes.profileRoutes);

// error handling
app.use(errorHandlers.error404);
app.use(errorHandlers.error500);

// exports
module.exports = app;
