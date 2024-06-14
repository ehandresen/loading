const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateText = async (req, res) => {
    const { text } = req.body;
    
    try {
        // Assuming you have a Text model for storing the text data
        const updatedText = await Text.findOneAndUpdate({}, { text }, { new: true, upsert: true });
        res.json({ message: 'Text updated successfully', text: updatedText.text });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getText = async (req, res) => {
    try {
        const text = await Text.findOne({});
        res.json({ text: text ? text.text : 'No text available' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};