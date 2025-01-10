// modules
import express from "express";
import multer from "multer";
import { profileController } from "../controllers/index.js";

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads/profile");
	},
	filename: (req, file, cb) => {
		cb(null, `${Date.now()}-${file.originalname}`);
	},
});

const upload = multer({ storage: storage });

// router
const router = express.Router();

// routes
router.route("/onboarding/user/:id")
	.get(profileController.onboarding);

router.route("/onboarding/user/:id/new")
	.get(profileController.profile)
	.post(upload.single('ProfilePicture'), profileController.profile);

// exports
export default router;
