//this file serves as a means to collect all of the API routes and package them up 
import { Router } from 'express'
const router = Router();
import postRoutes from './post-routes.js';
import userRoutes from './user-routes.js';

//collects the user endpoints and prefixes them with the path /posts
router.use('/posts', postRoutes);
router.use('/users', userRoutes)

export default router;