import mysql from 'mysql2';

const pool = mysql
  .createPool({
    host: 'localhost',
    user: 'root', // bytt til din bruker
    password: '', // skriv passord til din bruker
    database: 'notes_app',
  })
  .promise();

(async () => {
  try {
    const [results, fields] = await pool.query('SELECT * FROM notes');
    console.log(results);
  } catch (err) {
    console.error(err);
  }
})();
