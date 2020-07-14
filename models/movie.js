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
module.exports = mongoose.model('Movie', moviesSchema);