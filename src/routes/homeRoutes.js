// modules
const express = require("express");
const { homeController } = require("../controllers");

// router
const router = express.Router();

// routes
router.get("/", homeController.homepage);

router.route("/onboarding/user/:id")
	.get(homeController.onboarding);

router.route("/onboarding/user/:id/profile")
	.get(homeController.profile)
	.post(homeController.profile);

module.exports = router;
