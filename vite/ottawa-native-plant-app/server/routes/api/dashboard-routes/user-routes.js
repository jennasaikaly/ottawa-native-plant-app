import express from 'express';
const router = express.Router();
import { getAllUsers } from '../../../controllers/user-controller.js'
import { getUserById } from '../../../controllers/user-controller.js'
// import { updateUser } from '../../../controllers/user-controller.js'
// import { deleteUser } from '../../../controllers/user-controller.js'

router
    .route('/')
    .get(getAllUsers)
    
router
    .route('/:id')
    .get(getUserById)
    // .put(updateUser)
    // .delete(deleteUser)

// router
//     .route('/logout')
//     .post(userLogout)

export default router;