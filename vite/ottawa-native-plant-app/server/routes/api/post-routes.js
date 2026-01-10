import express from 'express';
const router = express.Router();
import { getAllPosts } from '../../controllers/post.controller.js'
import { createPost } from '../../controllers/post.controller.js'
// import { Post } from '../../models/index.js'
// import withAuth from '../../utils/auth.js'

router.get('/', getAllPosts);
router.post('/', createPost);

// // Set up GET all and POST at /api/posts
// router
//   .route('/')
//   .get(getAllPosts)
//   .post(createPost);

// // Set up GET one, PUT, and DELETE at /api/posts/:id
// router
//   .route('/:id')
//   .get()
//   .put()
//   .delete();

 export default router;