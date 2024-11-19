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

router.route("/data/roles")
	.get(adminController.roles)
	.post(adminController.roles);

router.route("/data/users")
	.get(adminController.users)

// exports
export default router;
