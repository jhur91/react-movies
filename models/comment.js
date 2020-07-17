const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for comment
const commentSchema = new Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5},
  movie_id: Number,
  user: {type: Schema.Types.ObjectId, ref: "User"}
}, {
  timestamps: true
})
//create model for item
module.exports = mongoose.model('Comment', commentSchema);