const Movie = require('../../models/movie');

module.exports = {
    index
};

async function index(req, res) {
  const movies = await Movie.find({});
  res.status(200).json(movies);
}