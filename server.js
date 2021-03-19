//server.js contains backend logic.

import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';

// App Configuration
const app = express(); //instance
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:pCNNBVUF7MhN6FlD@cluster0.qxn62.mongodb.net/spacial_app?retryWrites=true&w=majority'


// Middlewares
app.use(express.json());
app.use(Cors());


// DB configuration
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})


// API Endpoints
app.get('/', (req, res) => res.status(200).send("Hello world"));


// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
