// app.js is the entry point of the application
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));