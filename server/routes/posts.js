// import controller logic for requests
import express from 'express';

// import controller functions
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

// set up router methods
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
