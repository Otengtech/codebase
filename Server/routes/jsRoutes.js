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
const jsQuizData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../json/jsQuestions.json"), "utf-8")
);

// GET /api/js-quiz
router.get("/js-quiz", (req, res) => {
  res.json(jsQuizData);
});

export default router;
