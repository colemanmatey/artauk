// modules
const express = require("express");
const homeController = require("../controllers/homeController");

// router
const router = express.Router();

// route
router.get("/", homeController.renderHomePage);

module.exports = router;
