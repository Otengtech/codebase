// Enhanced Reviews Component with Glass Effect, Gradient Background, and Real-Time Updates
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaStar, FaThumbsUp } from "react-icons/fa";
import Navbar from "./Navbar";

const API_URL = import.meta.env.VITE_API_URL;

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`${API_URL}/reviews`);
      setReviews(res.data);
    } catch (err) {
      console.error("Failed to fetch reviews:", err);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const clearPreview = (e) => {
    e.preventDefault();
    setPreviewUrl(null);
    setImage(null);
  };

  const uploadImageToImgBB = async () => {
    if (!image) return "";
    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=69f4521c64f28a3fcff440ca4af10f8e`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      return data?.data?.url || "";
    } catch (err) {
      console.error("Image upload error:", err);
      toast.error("Image upload failed");
      return "";
    }
  };

  const addReview = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Input fields shouldn't be empty", { autoClose: 1000 });
      return;
    }
    if (!email.includes("@")) {
      toast.error("Enter a valid email", { autoClose: 1000 });
      return;
    }

    let imageUrl = await uploadImageToImgBB();

    try {
      const res = await axios.post(`${API_URL}/reviews`, {
        name,
        email,
        message,
        imageUrl,
        likes: 0,
        createdAt: new Date(),
      });

      if (res.status === 201) {
        toast.success("Review submitted successfully!", { autoClose: 1000 });
        setName("");
        setEmail("");
        setMessage("");
        setImage(null);
        setPreviewUrl(null);
        fetchReviews();
      }
    } catch (err) {
      console.error("Error submitting review:", err);
      toast.error("Error submitting review", { autoClose: 1000 });
    }
  };

  const toggleLike = async (id) => {
    const likedReviews = JSON.parse(localStorage.getItem("likedReviews")) || [];
    const isLiked = likedReviews.includes(id);

    try {
      await axios.patch(`${API_URL}/reviews/${id}/like`, {
        like: !isLiked,
      });

      let updatedLikes = [...likedReviews];
      if (isLiked) {
        updatedLikes = updatedLikes.filter((rid) => rid !== id);
      } else {
        updatedLikes.push(id);
      }
      localStorage.setItem("likedReviews", JSON.stringify(updatedLikes));
      fetchReviews();
    } catch (err) {
      console.error("Like update failed:", err);
    }
  };

  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-28 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Left Side - Importance */}
          <div className="space-y-6 lg:w-1/2">
            <h2 className="text-sky-300 text-3xl md:text-4xl font-bold">
              Why Your Reviews Matter
            </h2>
            <ul className="list-disc list-inside text-base md:text-lg space-y-2">
              <li>Helps us improve our service and quality.</li>
              <li>Builds trust with other users.</li>
              <li>Boosts transparency and reliability.</li>
              <li>Encourages our team to keep delivering the best.</li>
            </ul>
          </div>

          {/* Right Side - Form */}
          <form
            className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl shadow-lg space-y-4 w-full lg:w-1/2"
            onSubmit={addReview}
          >
            <h3 className="text-center text-2xl md:text-3xl text-sky-300 font-bold mb-2">
              Send a Review
            </h3>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full px-5 py-3 border bg-transparent text-white border-gray-400 rounded-full focus:outline-sky-300"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full px-5 py-3 border bg-transparent text-white border-gray-400 rounded-full focus:outline-sky-300"
            />

            {/* File Upload */}
            <div className="flex flex-wrap gap-4 items-center">
              <label
                htmlFor="image-upload"
                className="cursor-pointer px-4 py-2 bg-sky-300 text-black rounded-lg hover:bg-sky-200"
              >
                Choose Image
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <button
                type="button"
                onClick={clearPreview}
                className="px-4 py-2 bg-sky-300 text-black rounded-lg hover:bg-sky-200"
              >
                Clear Image
              </button>
            </div>

            {previewUrl && (
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full max-w-xs h-40 object-cover rounded-xl mx-auto"
              />
            )}

            <textarea
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Review"
              className="w-full p-4 border bg-transparent text-white border-gray-400 rounded-xl resize-none focus:outline-sky-300"
            />

            <button
              type="submit"
              onClick={addReview}
              className="w-full bg-sky-300 text-black py-3 rounded-full font-semibold text-lg hover:bg-sky-200"
            >
              Submit Review
            </button>
          </form>
        </div>

        {/* Review Display Section */}
        <div className="mt-16 space-y-6 max-w-5xl mx-auto px-4">
          <h3 className="text-center text-sky-300 text-2xl md:text-3xl font-bold">
            What Others Are Saying
          </h3>

          {reviews.length === 0 ? (
            <p className="text-center text-gray-300">
              No reviews yet. Be the first to leave one!
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
              {reviews.map((review) => {
                const isLiked = JSON.parse(
                  localStorage.getItem("likedReviews") || "[]"
                ).includes(review._id);
                return (
                  <div
                    key={review._id}
                    className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-md space-y-4"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={
                          review.imageUrl || "https://via.placeholder.com/50"
                        }
                        alt={review.name}
                        className="w-14 h-14 rounded-full object-cover border border-sky-300"
                      />
                      <div>
                        <h4 className="font-semibold text-sky-300">
                          {review.name}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {new Date(review.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <p className="text-white italic">"{review.message}"</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1 text-sky-300">
                        {Array(5)
                          .fill()
                          .map((_, i) => (
                            <FaStar key={i} />
                          ))}
                      </div>
                      <button
                        onClick={() => toggleLike(review._id)}
                        className={`flex items-center gap-1 text-white hover:text-sky-300 transition`}
                      >
                        <FaThumbsUp /> {review.likes || 0}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Reviews;
