import Memory from "../models/blog.js";

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