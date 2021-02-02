const APIroute = require('./api');
const HomeRoute = require('./view');
const router = require('express').Router();

router.use('/api', APIroute);
router.use('/', HomeRoute);


module.exports = router;