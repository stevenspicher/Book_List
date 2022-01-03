// create slice that will handle front end state and reducers
import { createSlice } from '@reduxjs/toolkit'

const postListSlice = createSlice({
    name: 'postList',
    initialState: {
        postList: [],
    },
    reducers: {
        getPosts: (state, action) => {
            state.postList = action.payload;
        },
        createPost: (state, action) => {
            state.postList.push(action.payload);
        },
        updatePost: (state, action) => {
            state.postList.map((post) => (post._id === action.payload._id) ? action.payload : post);
        },
        deletePost: (state, action) => {
            state.postList.splice(state.postList.findIndex((post) => post._id === action.payload), 1)
        },
    }
});

export const { createPost, deletePost, getPosts, updatePost } = postListSlice.actions;
export const selectPostList = (state) => state.postList.postList;
export default postListSlice.reducer;