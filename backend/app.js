import express from 'express';
import { getNotes, createNote } from './database/db.js';

// a test server trying to get the data retrieved from the database

const app = express();

app.use(express.json());

app.get('/notes', async (req, res) => {
  const notes = await getNotes();
  res.send(notes);
});

app.post('/notes', async (req, res) => {
  console.log('body:', req.body);
  const { titile, contents } = req.body;

  const note = await createNote(titile, contents);
  console.log('note', note);
  res.status(201).send(note);
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('Something broke ❌');
});

app.listen(8080, () => console.log('Server running on port 8080'));
