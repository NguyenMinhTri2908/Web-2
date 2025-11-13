const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const setRoutes = require('./routes/index');
const db = require('./utils/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
db.connect();

// Set up routes
setRoutes(app);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});