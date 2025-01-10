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

router.route("/roles")
	.get(adminController.roles)
	.post(adminController.roles);

router.route("/users")
	.get(adminController.users)

router.route("/artwork/all")
	.get(adminController.allArtwork);

router.route("/artwork/pending")
	.get(adminController.pendingArtwork);

router.route("/artwork/:id/approve")
	.post(adminController.approveArtwork);

router.route("/artwork/:id/reject")
	.post(adminController.rejectArtwork);

router.route("/auctions")
	.get(adminController.auctions)
	.post(adminController.auctions);

// exports
export default router;
