// modules
import express from "express";
import { authController } from "../controllers/index.js";

// router
const router = express.Router();

// routes
router.route("/register")
	.get(authController.register)
	.post(authController.register);

router.route("/login")
	.get(authController.login)
	.post(authController.login);

router.route("/logout")
	.post(authController.logout);

// exports
export default router;
