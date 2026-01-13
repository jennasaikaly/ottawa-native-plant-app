import { Router } from 'express'
const router = Router();
import apiRoutes from './api/index.js';

// import homeRoutes from './home-routes.js'
// import dashboardRoutes from './dashboard-routes.js'

//collects the packaged group of api endpoints and prefixes them with the path /api
router.use('/api', apiRoutes);

// router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes);

//If there is a request to any endpoint that doesn't exist, we will receive a 404 error 
router.use((req, res) => {
    res.status(404).end();
});

export default router;