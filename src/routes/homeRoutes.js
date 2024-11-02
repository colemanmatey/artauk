// modules
const express = require("express");
const { homeController } = require("../controllers");

// router
const router = express.Router();

// routes
router.get("/", homeController.homepage);

module.exports = router;
