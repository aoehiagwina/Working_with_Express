const {Router} = require("express");
const movieRouter =  Router();
const {addMovie} = require("./movie_controller");
const {find_Movie} = require("./movie_controller");
const {update_Movie} = require("./movie_controller");
const {remove_Movie} = require("./movie_controller");


movieRouter.post("/movie", addMovie);
movieRouter.post("/movie", find_Movie);
movieRouter.post("/movie", update_Movie);
movieRouter.post("/movie", remove_Movie);

module.exports = movieRouter;