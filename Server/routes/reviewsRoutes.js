import express from "express";
import Review from "../models/Review.js";

const router = express.Router();

// GET all reviews
router.get("/reviews", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.status(200).json(reviews);
  } catch (err) {
    console.error("Fetch reviews error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// POST a new review
router.post("/reviews", async (req, res) => {
  try {
    const { name, email, message, imageUrl } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields required" });
    }

    const newReview = new Review({ name, email, message, imageUrl, likes: 0 });
    await newReview.save();

    res.status(201).json({ message: "Review saved!" });
  } catch (err) {
    console.error("Review save error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH to like/unlike a review
router.patch("/reviews/:id/like", async (req, res) => {
  try {
    const { like } = req.body; // true to like, false to unlike
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }

    review.likes = like ? review.likes + 1 : Math.max(review.likes - 1, 0);
    await review.save();

    res.status(200).json({ likes: review.likes });
  } catch (err) {
    console.error("Like/unlike error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
