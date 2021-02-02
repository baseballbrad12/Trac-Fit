const fitnessRoutes = require('./fitnessRoutes');
const router = require('express').Router();

router.use('/fitness', fitnessRoutes);

module.exports = router;