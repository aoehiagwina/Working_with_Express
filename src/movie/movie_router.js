const {Router} = require("express");
const movieRouter =  Router();
const {addMovie} = require("./movie_controller");
const {find_Movie} = require("./movie_controller");
const {update_Movie} = require("./movie_controller");
const {remove_Movie} = require("./movie_controller");


movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", find_Movie);
movieRouter.put("/movie", update_Movie);
movieRouter.delete("/movie", remove_Movie);

module.exports = movieRouter;