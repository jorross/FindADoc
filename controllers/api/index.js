const router = require('express').Router();
const userRoutes = require('./userRoutes');
const doctorRoutes = require('./doctorRoutes');

router.use('/users', userRoutes);
router.use('/doctor', doctorRoutes);

module.exports = router;
