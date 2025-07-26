// routes/jsQuizRoutes.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const router = express.Router();

// Support __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load JSON file
const tQuizData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../json/tQuestions.json"), "utf-8")
);

// GET /api/js-quiz
router.get("/t-quiz", (req, res) => {
  res.json(tQuizData);
});

export default router;
