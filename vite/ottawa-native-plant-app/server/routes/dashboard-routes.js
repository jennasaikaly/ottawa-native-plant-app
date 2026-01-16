// import { Post } from '../models/Post'
import express from 'express';
const router = express.Router();
import { getAllPosts, updatePost, deletePost } from '../controllers/post.controller.js'

// ALL OF THESE NEED AUTHORIZATION


router
    .route('/')
    .get(getAllPosts)

router
    .route('/edit/:id')
    .get(updatePost)
    .delete(deletePost)

    export default router;
