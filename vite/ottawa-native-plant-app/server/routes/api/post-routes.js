import express from 'express';
const router = express.Router();
import { getAllPosts, createPost, getPostById, updatePost, deletePost } from '../../controllers/post.controller.js'
// import withAuth from '../../utils/auth.js'

// // Set up GET all and POST at /api/posts
router
  .route('/')
  .get(getAllPosts)
  .post(createPost);

// // Set up GET one, PUT, and DELETE at /api/posts/:id
router
  .route('/:id')
  .get(getPostById)
  .put(updatePost)
  .delete(deletePost);

  // router
  // .route('/upvote')

export default router;