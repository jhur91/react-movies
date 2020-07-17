const express = require ('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');


router.get('/', commentsCtrl.index);
router.post('/', commentsCtrl.create);
router.delete('/:id', commentsCtrl.delete)
router.put('/:id', commentsCtrl.update);

module.exports = router;