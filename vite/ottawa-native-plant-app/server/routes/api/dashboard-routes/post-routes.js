import express from 'express';
const router = express.Router();
import { getMyPosts, createPost, updatePost, deletePost } from '../../../controllers/dashboard-controller.js';

router
    .route('/')
    .get(getMyPosts)
    .post(createPost)

router
    .route('/:id')
    .put(updatePost)
    .delete(deletePost)

    export default router;

