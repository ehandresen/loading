const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from public directory

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'Arcane123456',
    database: 'theater'
});

// Fetch all questions
app.get('/questions', (req, res) => {
    pool.query('SELECT * FROM Questions', (error, results) => {
        if (error) return res.status(500).json({ error });
        res.json(results);
    });
});

// Add a question
app.post('/questions', (req, res) => {
    const { questionContent, answerA, answerB, answerC, answerD } = req.body;
    pool.query('INSERT INTO Questions (QuestionContent, AnswerA, AnswerB, AnswerC, AnswerD) VALUES (?, ?, ?, ?, ?)',
        [questionContent, answerA, answerB, answerC, answerD], (error, results) => {
        if (error) return res.status(500).json({ error });
        res.json({ message: 'Question added', id: results.insertId });
    });
});

// Delete a question
app.delete('/questions/:id', (req, res) => {
    const { id } = req.params;
    pool.query('DELETE FROM Questions WHERE QuestionID = ?', [id], (error, results) => {
        if (error) return res.status(500).json({ error });
        res.json({ message: 'Question deleted' });
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});