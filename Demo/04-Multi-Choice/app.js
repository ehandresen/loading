const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // Importer CORS-mellomvaren
const app = express();
app.use(cors());
// Importer situation variabelen
let questionValue = ``;
let answerAValue = ``;
let answerBValue = ``;
let answerCValue = ``;
let answerDValue = ``;
let situation = 2;
const port = 3000; // Velg en passende portnummer
// Opprett en tilkobling til databasen
const pool = mysql


.createPool({
    host: 'localhost',
    user: 'root', // bytt til din bruker
    password: '', // skriv passord til din bruker
    database: 'loading',
})
.promise();


(async () => {
    try {
        [result, fields] = await pool.query(`SELECT QuestionContent, AnswerA, AnswerB, AnswerC, AnswerD FROM questions WHERE QuestionID = ${situation}`);
        const databaseInfo = result;
        for (const rad of databaseInfo) {
            questionValue = rad.QuestionContent;
            answerAValue = rad.AnswerA;
            answerBValue = rad.AnswerB;
            answerCValue = rad.AnswerC;
            answerDValue = rad.AnswerD;
            console.log("Question: " + questionValue);
        }
        console.log(databaseInfo);
    } catch (err) {
        console.error(err);
    }
})();

app.listen(port, (err) => {
    if (err) {
        console.error('Feil ved oppstart av server:', err);
    } else {
        console.log(`Serveren kjører på port ${port}`);
    }
});

console.log("Answer: " + answerBValue);
// Bruk databaseResultater utenfor den asynkrone funksjonen
    // Gjør noe med resultatene

app.get('/get-values', (req, res) => {
    res.json({
        question: questionValue,
        answerA: answerAValue,
        answerB: answerBValue,
        answerC: answerCValue,
        answerD: answerDValue,
    });
});
