//this file serves as a means to collect all of the API routes and package them up 

const router = require('express').Router();

const userRoutes = require('./user-routes.js');

//collects the user endpoints and prefixes them with the path /users
router.use('/users', userRoutes);



module.exports = router;