var express = require('express');
var router = express.Router();
var moviesCtrl = require('../../controllers/api/movies');

router.get('/', moviesCtrl.index);

module.exports = router;