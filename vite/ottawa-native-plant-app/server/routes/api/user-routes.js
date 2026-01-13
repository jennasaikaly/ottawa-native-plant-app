import express from 'express';
const router = express.Router();
import { Signup } from '../../controllers/user.controller.js'
import { getAllUsers } from '../../controllers/user.controller.js'
//  import { createUser }

router.get('/', getAllUsers);
// router.post('/', createUser);
router.post("/", Signup)

export default router;