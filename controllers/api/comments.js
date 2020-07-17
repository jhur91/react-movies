const Comment = require('../../models/comment');

module.exports = {
  index,
  create
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