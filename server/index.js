import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import { postRoute } from './routes/postRoute.js';



const app = express();

const PORT = 3001;
const MONGO_URI = "mongodb+srv://julian:julian123@cluster0.dhn1u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes
app.use('/post', postRoute)

mongoose.connect(MONGO_URI)
    .then(app.listen(PORT, () => {console.log(`Server running at http://localhost:${PORT}`)}))
    .catch(err => console.log(err))