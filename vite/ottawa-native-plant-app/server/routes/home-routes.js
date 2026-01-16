// import { User } from '../models/index.js';
import { getAllPosts, getPostById } from '../controllers/post.controller.js'
import { userLogin } from '../controllers/user.controller.js'
import express from 'express';
const router = express.Router();
// import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

router
    .route('/')
    .get(getAllPosts)

router
    .route('/login')
    .post(userLogin)

// router
//     .route('/:id')
//     .post(getPostById)

export default router;


// export const userVerification = (req, res) => {
//      const token = req.cookies.token
//   if (!token) {
//     console.log("i am here" + token)
//     return res.json({ status: false })
//   }
//   jwt.verify(token, process.env.AUTH_SECRET, async (err, data) => {
//     if (err) {
//      return res.json({ status: false })
//     } else {
//       const user = await User.findById(data.id)
//       if (user) return res.json({ status: true, user: user.username })
//       else return res.json({ status: false })
//     }
//   })
// }