// modules
import express from "express";
import { homeController } from "../controllers/index.js";

// router
const router = express.Router();

// routes
router.get("/", homeController.homepage);
router.get("/dashboard", homeController.dashboard);

// exports
export default router;
