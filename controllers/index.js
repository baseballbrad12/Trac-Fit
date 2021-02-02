const APIroute = require('./api');
const HomeRoute = require('./homeRoutes');
const route = require('express').Router();

router.use('/api', APIroute);
router.use('/', HomeRoute);


module.exports = route;