const Comment = require('../../models/comment');

module.exports = {
  index,
  create
};

async function index(req, res) {
  const comments = await Comment.find({});
  res.status(200).json({comments});
}

async function create(req, res) {
  const comment = await Comment.create(req.body);
  res.status(201).json(comment);
}