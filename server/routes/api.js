const express = require('express');
const router = express.Router();

router.use('/buyers', require('./buyers'));
router.use('/houses', require('./houses'));


module.exports = router;
