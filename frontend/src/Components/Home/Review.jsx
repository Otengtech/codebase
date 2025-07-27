import React from "react";
import {
  FaArrowRight,
  FaQuoteLeft,
  FaQuoteRight,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import da from "../../assets/d.jfif";
import m from "../../assets/m.jfif";
import js from "../../assets/js.jpg";

const reviews = [
  {
    name: "Daniel Owusu",
    email: "danieldaniel123@gmail.com",
    avatar: da,
    rating: 5,
    comment:
      "This course was amazing! The instructor explained every concept clearly and practically. I now feel more confident building full stack projects.",
    likes: 19,
  },
  {
    name: "John Smith",
    email: "john3smith@gmail.com",
    avatar: js,
    rating: 4,
    comment:
      "Very informative and well-structured. I learned a lot about backend services and frontend deployment. It’s definitely worth the time.",
    likes: 8,
  },
  {
    name: "Micheal Trading",
    email: "mtrading001@gmai.com",
    avatar: m,
    rating: 4,
    comment:
      "Loved the real-world examples and the hands-on projects. The instructor’s approach made everything feel doable. Highly recommend this to beginners!",
    likes: 15,
  },
];

const ReviewSection = () => {
  return (
    <section className="py-12 px-6 md:px-12 bg-gradient-to-r from-gray-900 to-violet-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Our Students Say
      </h2>

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
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 mr-1 ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-4">{review.comment}</p>
            <div className="flex items-center gap-2 text-pink-500">
              <FaHeart />
              <span className="text-sm">{review.likes} likes</span>
            </div>
            <FaQuoteRight className="text-xl text-indigo-600 mt-4 float-right" />
          </div>
        ))}
      </div>
      <Link to="/reviews">
        <button className="m-5 flex items-center gap-2 text-sky-300 hover:text-sky-200 transition font-semibold">
          View All Reviews <FaArrowRight />
        </button>
      </Link>
    </section>
  );
};

export default ReviewSection;
