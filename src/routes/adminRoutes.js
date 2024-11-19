// modules
import express from "express";
import { adminController } from "../controllers/index.js";

// router
const router = express.Router();

// routes
router.route("/")
    .get(adminController.login)
	.post(adminController.login);

router.route("/logout")
	.post(adminController.logout);

// exports
export default router;
