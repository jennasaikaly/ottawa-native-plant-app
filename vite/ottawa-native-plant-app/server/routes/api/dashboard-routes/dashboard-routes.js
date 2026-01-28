import express from 'express';
const router = express.Router();
import postRoutes from '../dashboard-routes/post-routes.js'
import userRoutes from '../dashboard-routes/user-routes.js'


//collects the user endpoints and prefixes them with the path /posts
router.use('/posts', postRoutes);
router.use('/users', userRoutes);

export default router;