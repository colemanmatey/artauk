// modules
const express = require("express");
const { profileController } = require("../controllers");

// router
const router = express.Router();

// routes
router.route("/onboarding/user/:id")
	.get(profileController.onboarding);

router.route("/onboarding/user/:id/new")
	.get(profileController.profile)
	.post(profileController.profile);

// exports
module.exports = router;
