const express = require('express');
const router = express.Router();
const newsCtrl = require('../../controllers/api/newsApiRouter');

router.get('/', newsCtrl.index);


module.exports = router;