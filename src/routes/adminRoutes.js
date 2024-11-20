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


router.route("/data/artwork")
	.get(adminController.artwork);

router.route("/artwork/:id/approve")
	.post(adminController.approveArtwork);

router.route("/artwork/:id/reject")
	.post(adminController.rejectArtwork);

// exports
export default router;
