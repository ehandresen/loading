import mysql from 'mysql2';

const pool = mysql
  .createPool({
    // legg inn riktig data i filen .env
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

async function getNotes() {
  const [rows] = await pool.query('select * from notes');
  return rows;
}
const notes = await getNotes();

console.log(notes);
