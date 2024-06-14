// backend/server.js

const express = require('express');
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();

// Create express app
const app = express();

// Other middleware and routes setup

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));