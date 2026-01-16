import express from 'express';
const router = express.Router();
// import { userSignup } from '../../controllers/AuthController.js'
import { userLogin } from '../../controllers/user.controller.js'
import { getAllUsers } from '../../controllers/user.controller.js'
import { userSignup } from '../../controllers/user.controller.js'


router
    .route('/')
    .get(getAllUsers)
    // .post(userSignup) //create? should it have it's own route?

router
    .route('/:id')
    // .get(getOneUser)
    // .put(updateUser)
    // .delete(deleteUser)

router
    .route('/login')
    .post(userLogin)

router
    .route('/signup')
    .post(userSignup)

// router
//     .route('/logout')
//     .post(userLogout)

// router.get('/', getAllUsers);

export default router;