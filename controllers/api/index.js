const workoutRoutes = require('./api');
const router = require('express').Router();

router.use('/workouts', workoutRoutes);

module.exports = router;