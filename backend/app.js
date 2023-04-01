// app.js is the entry point of the application
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//const connectDB = require('./config/db');
require('dotenv').config();

// app is the express server
const app = express();
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log("Connection error", err));

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors({ origin: true, credentials: true }));

app.get('/', (req, res) => res.send('Server running!'));

const port = process.env.PORT || 8080;

// listen to the port
app.listen(port, () => console.log(`Server running on port ${port}`));