const express = require('express');

const router = express.Router({ mergeParams: true });

router.use('/auth', require('./auth.routes'));
router.use('/user', require('./user.routes'));
router.use('/furniture', require('./furniture.routes'));

module.exports = router;
