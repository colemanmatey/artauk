// modules
import express from "express";
import { homeController } from "../controllers/index.js";

// router
const router = express.Router();

// routes
router.get("/", homeController.homepage);

// exports
export default router;
