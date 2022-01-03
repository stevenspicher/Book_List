// configure store
import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../postListSlice/postListSlice';

export const store = configureStore({
    reducer: {
        postList: postReducer,
    },
});