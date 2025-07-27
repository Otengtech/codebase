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
});

const Review = mongoose.model("Review", reviewSchema);
export default Review;
