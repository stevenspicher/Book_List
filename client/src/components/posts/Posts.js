// map through redux array to pass data to individual post
import { useSelector } from "react-redux";
import { selectPostList } from "../../state/postListSlice/postListSlice";
import Post from "./post/Post";

const Posts = ({ setCurrentId }) => {
    const allPosts = useSelector(selectPostList);

    return (
        !allPosts.length ? <h1>No posts to show</h1> : (
            <div>
                {allPosts.map((post, index) => (
                    <div key={index}>
                        <Post post={post} index={index} setCurrentId={setCurrentId} />
                    </div>
                ))}
            </div>
        )
    )
}

export default Posts
