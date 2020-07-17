const express = require ('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');


router.get('/', commentsCtrl.index);
router.post('/', commentsCtrl.create);


// router.post('/comments', (req, res, next) => {
//   if(req.body.action){
//     Movie.create(req.body)
//       .then(data => res.json(data))
//       .catch(next)
//   }else {
//     res.json({
//       error: "The input field is empty"
//     })
//   }
// });

// router.delete('/comments/:id', (req, res, next) => {
//   Movie.findOneAndDelete({"_id": req.params.id})
//     .then(data => res.json(data))
//     .catch(next)
// })

module.exports = router;