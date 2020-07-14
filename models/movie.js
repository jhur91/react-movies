var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var moviesSchema = new Schema({
  title: {type: String, required: true},
  year: {type: Number, required: true},
  mpaaRating: {type: String},
  genre: String
},{
  timestamps: true
});

// var moviesSchema = {
//   {title: "Star Wars", year: 1991},
//   {title: "Groundhog Day", year: 1980}
// }

module.exports = mongoose.model('Movie', moviesSchema);