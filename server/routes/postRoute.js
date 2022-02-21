import express from 'express';


import { getPost, createPost, updatePost } from '../controllers/posts.js';

const postRoute = express.Router();

postRoute.get('/', getPost )
postRoute.post('/', createPost)
postRoute.patch('/:id', updatePost)

export { postRoute };