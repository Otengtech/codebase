import React, { useEffect, useState } from "react";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaHeart,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import axios from "axios";
import Navbar from "./Navbar";

const API_URL = import.meta.env.VITE_API_URL;
const IMGBB_API_KEY = import.meta.env.VITE_IMGBB_API_KEY;

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    avatar: "",
    rating: 5,
    comment: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`${API_URL}/reviews`);
      setReviews(res.data);
    } catch (err) {
      console.error("Failed to load reviews", err);
    }
  };

  const handleImageUpload = async () => {
    if (!imageFile) return "";

    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      setUploading(true);
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
        formData
      );
      return res.data.data.url;
    } catch (err) {
      console.error("Image upload failed", err);
      return "";
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const avatarUrl = await handleImageUpload();
    if (!avatarUrl) {
      alert("Failed to upload image. Please try again.");
      return;
    }

    try {
      const newReview = {
        ...form,
        avatar: avatarUrl,
        likes: 0,
        createdAt: new Date().toISOString(),
      };

      const res = await axios.post(`${API_URL}/reviews`, newReview);

      setReviews((prev) => [res.data, ...prev]);

      // ✅ Reset the form and image preview
      setForm({
        name: "",
        email: "",
        avatar: "",
        rating: 5,
        comment: "",
      });
      setImageFile(null);
    } catch (err) {
      console.error("Review submission failed", err);
      alert("Something went wrong while submitting your review.");
    }
  };

  const handleLike = async (id) => {
    const likedKey = `liked_${id}`;
    const alreadyLiked = localStorage.getItem(likedKey);

    try {
      const res = await axios.patch(`${API_URL}/reviews/${id}/like`, {
        like: !alreadyLiked,
      });

      setReviews((prev) =>
        prev.map((r) => (r.id === id ? { ...r, likes: res.data.likes } : r))
      );

      if (alreadyLiked) {
        localStorage.removeItem(likedKey);
      } else {
        localStorage.setItem(likedKey, "true");
      }
    } catch (err) {
      console.error("Like update failed", err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-gray-900 to-violet-900 min-h-screen py-28 md:px-20 p-4 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center lg:flex-row gap-10 mb-16">
            {/* Left Text */}
            <div className="lg:w-1/2 space-y-4">
              <h2 className="text-4xl font-bold text-indigo-400">
                We Value Your Feedback
              </h2>
              <p className="text-gray-200 text-md leading-relaxed">
                Your reviews are the heartbeat of our growth. They guide us to
                improve our services, help others make informed decisions, and
                build a trusted community. Every word you write helps us shape a
                better experience for all. Whether it’s praise or constructive
                feedback, your voice makes a real difference.
              </p>
            </div>

            {/* Review Form */}
            <form
              onSubmit={handleSubmit}
              className="lg:w-1/2 bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg space-y-4 text-white"
            >
              <div className="text-center text-sky-300 font-bold text-3xl">
                REVIEW
              </div>
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                required
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-6 py-3 focus:outline-none border border-gray-200 rounded-full bg-transparent placeholder-gray-300 text-white"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                required
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-6 py-3 focus:outline-none border border-gray-200 rounded-full bg-transparent placeholder-gray-300 text-white"
              />
              <label className="w-full">
                <div className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-500 transition mt-4 text-white text-center font-semibold py-3 px-6 rounded-full shadow-md">
                  {imageFile ? "Change Image" : "Choose Profile Image"}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  required
                  onChange={(e) => setImageFile(e.target.files[0])}
                  className="hidden"
                />
              </label>
              {imageFile && (
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt="Preview"
                  className="w-16 h-16 rounded-full object-cover mx-auto"
                />
              )}

              {/* Star Rating */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-300">Rating:</span>
                {[1, 2, 3, 4, 5].map((star) =>
                  star <= form.rating ? (
                    <FaStar
                      key={star}
                      className="text-yellow-400 cursor-pointer"
                      onClick={() => setForm({ ...form, rating: star })}
                    />
                  ) : (
                    <FaRegStar
                      key={star}
                      className="text-yellow-200 cursor-pointer"
                      onClick={() => setForm({ ...form, rating: star })}
                    />
                  )
                )}
              </div>

              <textarea
                placeholder="Write your review..."
                value={form.comment}
                required
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
                className="w-full px-6 py-3 focus:outline-none border border-gray-200 rounded-full bg-transparent placeholder-gray-300 text-white"
              />
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={uploading}
                className="bg-indigo-600 text-white w-full px-4 py-3 rounded-full hover:bg-indigo-700 transition disabled:opacity-50"
              >
                {uploading ? "Uploading..." : "Submit Review"}
              </button>
            </form>
          </div>

          {/* Review List */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
              >
                <FaQuoteLeft className="text-2xl text-indigo-600 mb-3" />
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.email}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) =>
                        i < review.rating ? (
                          <FaStar
                            key={i}
                            className="text-yellow-400 w-4 h-4 mr-1"
                          />
                        ) : (
                          <FaRegStar
                            key={i}
                            className="text-gray-300 w-4 h-4 mr-1"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">{review.comment}</p>
                <p className="text-xs text-gray-500 mb-2">
                  {new Date(review.createdAt).toLocaleString()}
                </p>
                <button
                  onClick={() => handleLike(review.id)}
                  className="flex items-center gap-2 text-pink-500 hover:text-pink-600"
                >
                  <FaHeart />
                  <span className="text-sm">{review.likes} likes</span>
                </button>
                <FaQuoteRight className="text-xl text-indigo-600 mt-4 float-right" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
