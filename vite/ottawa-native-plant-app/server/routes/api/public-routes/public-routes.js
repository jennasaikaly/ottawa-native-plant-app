import { getAllPosts, getPostById } from '../../../controllers/public-controller.js'
import express from 'express';
const router = express.Router();
import dotenv from 'dotenv';
dotenv.config();

// GET ALL POSTS
router
    .route('/')
    .get(getAllPosts)
    
// GET SINGLE POST
router
    .route('/:id')
    .get(getPostById)

export default router;