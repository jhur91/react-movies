const express = require ('express');
const router = express.Router();
const Movie = require('../models/movie');

router.get('/comments', (req, res, next) => {
  Movie.find({}, 'action')
    .then(data => res.json(data))
    .catch(next)
});

router.post('/comments', (req, res, next) => {
  if(req.body.action){
    Movie.create(req.body)
      .then(data => res.json(data))
      .catch(next)
  }else {
    res.json({
      error: "The input field is empty"
    })
  }
});

router.delete('/comments/:id', (req, res, next) => {
  Movie.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;