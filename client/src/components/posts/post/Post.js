// create post how you want it to look
import { useDispatch } from "react-redux";
import moment from 'moment';
import { removePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();

    const editHandler = () => {
        setCurrentId(post._id);
    };

    const deleteHandler = () => {
        dispatch(removePost(post._id));
    };

    return (
        <div className="post-container">
            <img className="post-image" src={post.image} alt="" />
            <h6>Created: {moment(post.createdAt).fromNow()}</h6>
            <div>
                <button onClick={editHandler}>Edit</button>
                <button onClick={deleteHandler}>Delete</button>
            </div>
            <h2>{post.title}</h2>
            <h3>{post.message}</h3>
        </div>
    )
}

export default Post
