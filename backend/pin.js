import mysql from "mysql2/promise";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.static(path.join(__dirname, "../frontend")));
app.use(
  "/assets",
  express.static(path.join(__dirname, "../frontend/pages/enterPin/assets"))
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
    process.exit(1);
  }
  return connection;
}

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend/pages/enterPin/index.html"));
});

app.get("/pages/enterName/name.html", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend/pages/enterName/name.html"));
});

app.post("/add-pin", async (req, res) => {
  const { pin } = req.body;
  console.log("Received request with pin:", pin);

  const connection = req.app.locals.db;

  try {
    const [results] = await connection.execute(
      "SELECT GameID FROM game WHERE PIN = ?",
      [pin]
    );
    console.log("Database query results:", results);

    if (results.length > 0) {
      const gameId = results[0].GameID;
      console.log("Sending gameId:", gameId);
      res.json({ success: true, gameId });
    } else {
      console.log("Invalid PIN provided.");
      res.status(400).send("Invalid PIN provided. Please try again.");
    }
  } catch (error) {
    console.error("Error validating pin:", error);
    res.status(500).send("Error validating pin.");
  }
});

app.post("/add-player", async (req, res) => {
  const { playername, gameId } = req.body;
  console.log(
    "Received request to create player with playername:",
    playername,
    "and gameId:",
    gameId
  );

  const connection = req.app.locals.db;

  try {
    const [results] = await connection.execute(
      "INSERT INTO player (Playernavn, GameID) VALUES (?, ?)",
      [playername, gameId]
    );
    console.log("Database insert results:", results);

    if (results.affectedRows > 0) {
      res.json({ success: true });
    } else {
      console.log("No rows inserted.");
      res.status(400).send("Error creating player. Please try again.");
    }
  } catch (error) {
    console.error("Error creating player:", error);
    res.status(500).send("Error creating player.");
  }
});

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).send("Internal Server Error");
});

async function startServer() {
  const connection = await connectToDatabase();
  app.locals.db = connection;

  app.listen(3001, () => {
    console.log("Server is running on port 3001");
  });
}

startServer();
