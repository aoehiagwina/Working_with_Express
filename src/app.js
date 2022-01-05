require("./db/connection");
const express = require("express");
// const Movie = require("./movie/movie_model");
const app =  express();
const movieRouter  = require("./movie/movie_router")

const port = process.env.PORT || 5000;

// app.get('/stuff', (req, res) => {
//     res.send("Hello World!");
// });

app.use(express.json());
app.use(movieRouter);

app.listen(port, () => {
    console.log(`Example app at listening at http://localhost:${port}`);
});


