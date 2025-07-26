
// routes/quizRoutes.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const router = express.Router();

// Support __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load JSON file
const quizData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../json/htmlQuestions.json"), "utf-8")
);

// GET /api/html-quiz
router.get("/html-quiz", (req, res) => {
  res.json(quizData);
});

export default router;
