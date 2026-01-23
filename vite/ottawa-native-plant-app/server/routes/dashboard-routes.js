// import { Post } from '../models/Post'
import express from 'express';
const router = express.Router();
import { updatePost, deletePost } from '../controllers/post.controller.js'
import { getAllPostsByUser } from '../controllers/dashboard-controller.js'

// ALL OF THESE NEED AUTHORIZATION


router
    .route('/')
    .get(getAllPostsByUser)

router
    .route('/edit/:id')
    .get(updatePost)
    .delete(deletePost)

    export default router;
