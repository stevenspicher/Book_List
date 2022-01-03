// define how post data is going to be stored in the database with schema
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    message: { type: String, required: true },
    image: { type: String, required: true },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

// create and export model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
