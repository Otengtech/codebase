const mongoose = require("mongoose");

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

module.exports = mongoose.model("Review", reviewSchema);
