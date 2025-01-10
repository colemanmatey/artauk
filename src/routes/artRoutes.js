// modules
import express from "express";
import multer from "multer";
import { artController } from "../controllers/index.js";

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads/artwork");
	},
	filename: (req, file, cb) => {
		cb(null, `${Date.now()}-${file.originalname}`);
	},
});

const upload = multer({ storage: storage });

// router
const router = express.Router();

// routes
router.route("/add/new")
	.get(artController.addNew)
	.post(upload.single("Artwork"), artController.addArt);

// exports
export default router;
