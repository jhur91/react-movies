const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create schema for comment
const commentSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The item text field is required']
  }
})
//create model for item
const Comment = mongoose.model('comment', CommentSchema);
module.exports = Comment;