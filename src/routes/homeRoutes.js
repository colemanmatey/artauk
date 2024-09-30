// modules
const express = require("express");
const { homeController } = require("../controllers");

// router
const router = express.Router();

// route
router.get("/", homeController.homepage);
router.get("/login", homeController.login);
router.get("/register", homeController.register);

module.exports = router;
