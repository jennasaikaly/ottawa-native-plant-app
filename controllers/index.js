const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

//collects the packaged group of api endpoints and prefixes them with the path /api
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

//If there is a request to any endpoint that doesn't exist, we will receive a 404 error 
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;