import express from "express";
import {
	getSimilarTvs,
	getTrendingTv,
	getTvDetails,
	getTvsByCategory,
	getTvTrailers,
} from "../controllers/tv.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

// Public routes - anyone can browse
router.get("/trending", getTrendingTv);
router.get("/:category", getTvsByCategory);

// Protected routes - require authentication to view details
router.get("/:id/trailers", protectRoute, getTvTrailers);
router.get("/:id/details", protectRoute, getTvDetails);
router.get("/:id/similar", protectRoute, getSimilarTvs);

export default router;