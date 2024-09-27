// modules
const express = require("express");
const path = require("path");
const config = require("../config/index");
const homeRoute = require("../routes/homeRoute");

// application
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../", "views"));

// middleware
app.use(express.static(path.join(__dirname, "../../", "public")));

// routes
app.use("/", homeRoute);

// listen to port
app.listen(config.server.port, () => {
    console.log(
        `Server running at ${config.server.host}:${config.server.port}`
    );
});
