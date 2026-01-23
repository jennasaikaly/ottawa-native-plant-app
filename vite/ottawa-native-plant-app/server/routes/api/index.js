//this file serves as a means to collect all of the API routes and package them up 
import { Router } from 'express'
const router = Router();
import publicRoutes from './public-routes/public-routes.js';
import dashboardRoutes from '../api/dashboard-routes/dashboard-routes.js'
import authRoutes from './auth-routes/auth-routes.js'


//collects the user endpoints and prefixes them with the path /posts
router.use('/posts', publicRoutes);
router.use('/dashboard', dashboardRoutes)
// router.use('/users', userRoutes);
router.use('/auth', authRoutes)
// router.use('/comments', commentRoutes);

export default router;