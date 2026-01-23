import { userRegister, userLogin } from '../../../controllers/AuthController.js'
// import { getCurrentUser } from '../../../controllers/AuthController.js'
import express from 'express';
const router = express.Router();

// REGISTER USER
router
    .route('/register')
    .post(userRegister)

//LOGIN
router
    .route('/login')
    .post(userLogin)
    export default router;

//GET CURRENT USER
// router
//     .route('/me')
//     .get(getCurrentUser)

