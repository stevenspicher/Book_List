// import express and mongoose, any middlewares and use them
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();
const PORT = 5000;
const CONNECTION_URL = "mongodb+srv://bambookazooie:mongodbpassword1234@cluster0.5zow7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// set up middlewares
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// set up route
app.use('/posts', postRoutes);

// setup mongodb connection
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((err) => console.log(err.message));
