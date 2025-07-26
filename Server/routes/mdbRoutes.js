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
const mdbQuizData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../json/mdbQuestions.json"), "utf-8")
);

// GET /api/js-quiz
router.get("/mdb-quiz", (req, res) => {
  res.json(mdbQuizData);
});

export default router;
