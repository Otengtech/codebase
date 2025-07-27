import express from "express";
const router = express.Router();
const Review = require("../models/Review");

// GET all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

// POST a new review
router.post("/", async (req, res) => {
  try {
    const newReview = new Review(req.body);
    const saved = await newReview.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: "Failed to save review" });
  }
});

// PATCH to like/unlike
router.patch("/:id/like", async (req, res) => {
  const { id } = req.params;
  const { like } = req.body;

  try {
    const review = await Review.findById(id);
    if (!review) return res.status(404).json({ error: "Review not found" });

    review.likes += like ? 1 : -1;
    if (review.likes < 0) review.likes = 0;

    await review.save();
    res.json({ likes: review.likes });
  } catch (err) {
    res.status(500).json({ error: "Failed to update likes" });
  }
});

module.exports = router;
