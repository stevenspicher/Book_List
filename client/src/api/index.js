// import axios with base url
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// get posts
export const getPosts = () => API.get('/posts');

// create post
export const createPost = (newPost) => API.post('/posts', newPost);

// update post
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost );

// delete post
export const deletePost = (id) => API.delete(`/posts/${id}`);
