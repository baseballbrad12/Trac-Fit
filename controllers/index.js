const APIroute = require('./api');
const HomeRoute = require('./homeRoutes');
const router = require('express').Router();

router.use('/api', APIroute);
router.use('/', HomeRoute);


module.exports = router;