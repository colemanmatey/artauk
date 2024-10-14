// modules
const express = require("express");
const session = require("express-session");
const path = require("path");
const config = require("../config");
const routes = require("../routes");

// configuration
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../", "views"));

// middleware
app.use(express.static(path.join(__dirname, "../../", "public")));
app.use(express.urlencoded({ extended: true }));
app.use(session(config.session));

// routes
app.use("/", routes.homeRoutes);
app.use("/auth", routes.authRoutes);

// exports
module.exports = app;
