import { userRegister, userLogin, getCurrentUser } from '../../../controllers/AuthController.js'
// import { cookieRefresh } from '../../../controllers/AuthController.js'
import express from 'express';
const router = express.Router();
import { auth } from '../../../middlewares/AuthMiddleware.js'

// REGISTER USER
router
    .route('/register')
    .post(userRegister)

//LOGIN
router
    .route('/login')
    .post(userLogin)

// router
//     .route('/refresh')
//     .post(cookieRefresh)


//GET CURRENT USER
router
    .route('/me')
    .get(auth, getCurrentUser)

    export default router;