import express from 'express';
const router = express.Router();
// import { userSignup } from '../../controllers/user.controller.js'
import { userLogin } from '../../controllers/user.controller.js'
import { getAllUsers } from '../../controllers/user.controller.js'
// import { userVerification } from '../../routes/home-routes.js'

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

// router
//     .route('/logout')
//     .post(userLogout)

// router.get('/', getAllUsers);


// router.post('/', userVerification)

export default router;