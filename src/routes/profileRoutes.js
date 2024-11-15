// modules
import express from "express";
import { profileController } from "../controllers/index.js";

// router
const router = express.Router();

// routes
router.route("/onboarding/user/:id")
	.get(profileController.onboarding);

router.route("/onboarding/user/:id/new")
	.get(profileController.profile)
	.post(profileController.profile);

// exports
export default router;
