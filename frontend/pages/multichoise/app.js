const express = require('express');
const app = express();
// Importer situation variabelen

const situation = 3;
// Opprett en tilkobling til databasen
const mysql = require('mysql2');
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
    const [results, fields] = await pool.query(`SELECT QuestionContent, AnswerA, AnswerB, AnswerC, AnswerD FROM questions WHERE QuestionID = ${situation}`);
    console.log(results);
} catch (err) {
    console.error(err);
}
})();

