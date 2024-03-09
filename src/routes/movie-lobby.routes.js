const { getMovies, searchMovies, createMovies, updateMovies, deleteMovies } = require("../controller/movie-lobby.controller");
const checkAdminStatusMiddleware = require("../middleware/check.admin");
const checkLoginStatusMiddleware = require("../middleware/login.check");

const movieRoutes = require("express").Router();

movieRoutes.get("/movies", checkLoginStatusMiddleware, getMovies);
movieRoutes.get("/search", checkLoginStatusMiddleware, searchMovies);
movieRoutes.post("/movies", checkLoginStatusMiddleware, checkAdminStatusMiddleware, createMovies);
movieRoutes.put("/movies/:id", checkLoginStatusMiddleware, checkAdminStatusMiddleware, updateMovies);
movieRoutes.delete("/movies/:id", checkLoginStatusMiddleware, checkAdminStatusMiddleware, deleteMovies);


module.exports = movieRoutes;