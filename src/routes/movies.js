import { Router } from "express";
const router = Router();

import * as moviesController from "../controllers/moviesController";

router.get("/",moviesController.getMovies)

router.get("/:movieId",moviesController.getMovieById)

router.post("/",moviesController.subirArchivo,moviesController.createMovie)

router.put("/:movieId",moviesController.updateMovieById)

router.delete("/:movieId",moviesController.deleteMovieById)

export default router;