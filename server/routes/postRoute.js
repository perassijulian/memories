import express from 'express';

import { getPost, createPost } from '../controllers/posts.js';

const postRoute = express.Router();

postRoute.get('/', getPost )
postRoute.post('/', createPost )

export { postRoute };