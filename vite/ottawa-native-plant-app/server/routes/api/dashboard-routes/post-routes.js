import express from 'express';
const router = express.Router();
import { getMyPosts, createPost, updatePost, deletePost } from '../../../controllers/dashboard-controller.js';
import { auth } from '../../../middlewares/AuthMiddleware.js'

router
    .route('/', auth)
    .get(getMyPosts)
    .post(createPost)

router
    .route('/:id', auth)
    .put(updatePost)
    .delete(deletePost)

    export default router;

