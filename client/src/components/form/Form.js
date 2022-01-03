// create form that handles sending post object to action functions
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { selectPostList } from '../../state/postListSlice/postListSlice';
import { createdNewPost, editPost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    const dispatch = useDispatch();
    const allPosts = useSelector(selectPostList);
    const post = (currentId ? allPosts.find((post) => post._id === currentId) : null);

    const postObj = {
        title: '',
        message: '',
        image: '',
    };

    const [postData, setPostData] = useState(postObj);

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const clear = () => {
        setCurrentId(0);
        setPostData(postObj);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createdNewPost(postData));
        } else {
            dispatch(editPost(currentId, postData));
        };
        clear();
    };

    const changeHandler = (e) => {
        setPostData({
            ...postData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="form-container">
            <h1>{currentId ? `Editing ${post.title}` : 'Add Post'}</h1>
            <form autoComplete="off" onSubmit={submitHandler}>
                <div><input name="title" placeholder="Title" value={postData.title} onChange={changeHandler} /></div>
                <div><input name="message" placeholder="Message" value={postData.message} onChange={changeHandler} /></div>
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, image: base64 })} />
                <button type="submit">Submit</button>
                <button onClick={clear}>Clear</button>
            </form>
        </div>
    )
}

export default Form
