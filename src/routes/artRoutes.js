// modules
import express from "express";
import { artController } from "../controllers/index.js";

// router
const router = express.Router();

// routes
router.route("/add/new")
    .get(artController.addNew)

// exports
export default router;
