const mongoose = require('mongoose');
const User = require('../models/User');
const config = require('../config/db'); // Ensure you point to your db config

async function addUser(username, password) {
    await mongoose.connect(config.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const user = new User({ username, password });
    await user.save();
    console.log('User added successfully');
    mongoose.disconnect();
}

// Change these values to the desired username and password
addUser('admin', 'password123');