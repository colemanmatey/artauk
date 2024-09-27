// import modules
const express = require("express");
const path = require("path");
const homeRoute = require("../routes/homeRoute");

// environment variables
require("dotenv").config();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

// application
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../", "views"));

// middleware
app.use(express.static(path.join(__dirname, "../../", "public")))

// routes
app.use("/", homeRoute);

// listen to port
app.listen(PORT, () => {
    console.log(`Server running at ${HOST}:${PORT}`);
});
