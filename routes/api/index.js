//this file serves as a means to collect all of the API routes and package them up 

const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');

//collects the user endpoints and prefixes them with the path /users
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;