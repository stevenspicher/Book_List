// import post model so that we can use mongoose methods
// to retrieve, create, update, and delete posts
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

// retreive all posts
export const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find();

        res.status(200).json(postMessage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    };
};

// create a post
export const createPost = async (req, res) => {
    const post = req.body;

    const newPostMessage = new PostMessage({ ...post, createdAt: new Date().toISOString() });

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    };
};

// update a post
export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, image } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { title, message, image };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
};

// delete a post
export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully" });
};
