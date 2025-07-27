import express from "express";
import Review from "../models/Review.js"; // Make sure this file also uses ESM

const router = express.Router();

router.post("/reviews", async (req, res) => {
  try {
    const { name, email, message, imageUrl } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields required" });
    }

    const newReview = new Review({ name, email, message, imageUrl });
    await newReview.save();

    res.status(201).json({ message: "Review saved!" });
  } catch (err) {
    console.error("Review save error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
