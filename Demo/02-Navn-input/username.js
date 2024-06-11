import mysql from "mysql2/promise";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the correct directory
app.use(
  "/assets",
  express.static(path.join(__dirname, "../frontend/pages/enterName/assets"))
);
app.use(bodyParser.json());

async function connectToDatabase() {
  let connection;
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });
    console.log("Connected to the database successfully!");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1); // Exit the process with an error code
  }
  return connection;
}

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend/pages/enterName/name.html"));
});

app.post("/add-player", async (req, res) => {
  const { playername, gameId } = req.body;
  const connection = await connectToDatabase();

  try {
    const [results] = await connection.execute(
      "INSERT INTO player (Playernavn, GameID) VALUES (?, ?)",
      [playername, gameId]
    );
    console.log("Player added:", results);
    res.send("Player added successfully!");
  } catch (error) {
    console.error("Error adding player:", error);
    res.status(500).send("Error adding player.");
  } finally {
    await connection.end();
  }
});

async function startServer() {
  const connection = await connectToDatabase();
  app.locals.db = connection;

  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}

startServer();
