import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  imageUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5,
  },
});

const Review = mongoose.model("Review", reviewSchema);
export default Review;
