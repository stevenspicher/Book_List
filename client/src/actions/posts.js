// import api
import * as api from '../api/index.js';
import { createPost, deletePost, getPosts, updatePost } from '../state/postListSlice/postListSlice';

// retrieve posts
export const retrievePosts = () => async (dispatch) => {
    try {
        const { data } = await api.getPosts();

        dispatch(getPosts(data));
    } catch (error) {
        console.log(error);
    };
};

// createNewPost
export const createdNewPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch(createPost(data));
    } catch (error) {
        console.log(error);
    };
};

// editPost
export const editPost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch(updatePost(data));
    } catch (error) {
        console.log(error);
    };
};

// remove post
export const removePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch(deletePost(id));
    } catch (error) {
        console.log(error);
    };
};