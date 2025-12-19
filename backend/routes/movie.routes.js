import express from "express";
import {
	getMovieDetails,
	getMoviesByCategory,
	getMovieTrailers,
	getSimilarMovies,
	getTrendingMovie,
} from "../controllers/movie.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

// Public routes - anyone can browse
router.get("/trending", getTrendingMovie);
router.get("/:category", getMoviesByCategory);

// Protected routes - require authentication to view details
router.get("/:id/trailers", protectRoute, getMovieTrailers);
router.get("/:id/details", protectRoute, getMovieDetails);
router.get("/:id/similar", protectRoute, getSimilarMovies);

export default router;