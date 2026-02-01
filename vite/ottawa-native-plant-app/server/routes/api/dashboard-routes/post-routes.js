import express from 'express';
const router = express.Router();
import { getMyPosts, createPost, updatePost, deletePost } from '../../../controllers/dashboard-controller.js';
import { auth } from '../../../middlewares/AuthMiddleware.js'

router
    .route('/')
    .get(auth, getMyPosts)
    .post(auth, createPost)

router
    .route('/:id')
    .put(auth, updatePost)
    .delete(auth, deletePost)

    export default router;

