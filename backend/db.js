// this was a test database setup to try to query data from mysql

import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql
  .createPool({
    // legg inn riktig data i '.env' filen
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export async function getNotes() {
  const [rows] = await pool.query('select * from feedback');
  return rows;
}

export async function getNote(id) {
  const [rows] = await pool.query('select * from notes where id = ?', [id]);
  return rows[0];
}

export async function createNote(titile, content) {
  const [result] = await pool.query(
    'insert into notes (titile, contents) values (?, ?)',
    [titile, content]
  );
  const id = result.insertId;
  return getNote(id);
}

