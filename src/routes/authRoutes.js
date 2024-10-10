// modules
const express = require("express");
const { authController } = require("../controllers");

// router
const router = express.Router();

// routes
router.get("/register", authController.register);
router.get("/login", authController.login);

module.exports = router;
