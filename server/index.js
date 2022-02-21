import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import { postRoute } from './routes/postRoute.js';

const app = express();

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes
app.use('/post', postRoute)

mongoose.connect(process.env.MONGO_URI)
    .then(app.listen(process.env.PORT, () => {console.log(`Server running at http://localhost:${process.env.PORT}`)}))
    .catch(err => console.log(err))