import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  rating: Number,
  comment: String,
  likes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;
