import Memory from "../models/blog.js";
import mongoose from "mongoose";

export const getPost = (req,res) => {
    try {
        Memory.find({})
        .then((memories) => {res.status(200).json(memories)})
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (req,res) => {
    const newPost = new Memory(req.body);
    try {
        newPost.save()
        .then((post) => {res.status(200).json(newPost)})
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = async (req, res) => {
    const post = req.body;
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Id does not exist');

    const postUpdated = await Memory.findByIdAndUpdate(_id, {post, _id}, {new: true});
        
    res.status(200).json(postUpdated);
    
}