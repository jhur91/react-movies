const Comment = require('../../models/comment');

module.exports = {
  index,
  create,
  update,
  delete: deleteOne
};

async function index(req, res) {
  const comments = await Comment.find({});
  console.log(comments)
  res.status(200).json({comments});
}

async function create(req, res) {
  // console.log(req.user)
  // req.body.user=req.user;
  console.log(req.body)
  const comment = await Comment.create(req.body);
  res.status(201).json(comment);
}

async function update(req, res) {
  const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedComment);
}

async function deleteOne(req, res) {
  const deletedComment = await Comment.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedComment);
}