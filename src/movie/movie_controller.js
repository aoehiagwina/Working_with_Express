const Movie = require("./movie_model");

exports.addMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(200).send({ message: "success", movie: movie });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Check server logs" });
  }
};

exports.find_Movie = async (req, res) => {
  try {
    const movie = await Movie.findOne(req.body);
    res.status(200).send({ message: "found", movie: movie });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Check server logs" });
  }
};

exports.update_Movie = async (req, res) => {
    try {
      const movie = await Movie.updateOne(req.body);
      res.status(200).send({ message: "updated", movie: movie });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Check server logs" });
    }
  };

  exports.remove_Movie = async (req, res) => {
    try {
      const movie = await Movie.remove(req.body);
      res.status(200).send({ message: "deleted", movie: movie });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Check server logs" });
    }
  };
