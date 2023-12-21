const router = require('express').Router();
const dreamsRoutes = require('./dreams');
const usersRoutes = require('./users');

router.use('/dreams', dreamsRoutes);
router.use('/users', usersRoutes)

module.exports = router;