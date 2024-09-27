// modules
const express = require("express");
const path = require("path");
const routes = require("../routes");

// settings
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../", "views"));

// middleware
app.use(express.static(path.join(__dirname, "../../", "public")));

// routes
app.use("/", routes.homeRoutes);

module.exports = app;
