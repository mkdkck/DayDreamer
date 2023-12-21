const router = require('express').Router();
const authRoutes = require('./auth');
const indexPageRoutes = require('./indexPage');

router.use('/', authRoutes);
router.use('/', indexPageRoutes)

module.exports = router;