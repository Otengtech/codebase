// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';

import authRoutes from "./routes/authRoutes.js";
import quizRoutes from "./routes/htmlQuizRoutes.js";
import cssQuizRoutes from "./routes/cssQuizRoutes.js";
import jsRoutes from "./routes/jsRoutes.js";
import nodejsRoutes from "./routes/nodejsRoutes.js";
import mdbRoutes from "./routes/mdbRoutes.js";
import tRoutes from "./routes/tRoutes.js";

// ✅ Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ API Routes
app.use("/api/auth", authRoutes);
app.use("/api", quizRoutes);
app.use("/api", cssQuizRoutes);
app.use("/api", jsRoutes);
app.use("/api", nodejsRoutes);
app.use("/api", mdbRoutes);
app.use("/api", tRoutes);

// ✅ Serve frontend React build (if exists)
app.use(express.static(path.join(__dirname, 'dist')));

// Redirect all requests to index.html (for React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// ✅ Start server after connecting to MongoDB
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
