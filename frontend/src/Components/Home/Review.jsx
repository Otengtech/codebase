import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const reviews = [
  {
    name: "Jane Doe",
    avatar: "https://i.pravatar.cc/100?img=1",
    rating: 5,
    comment: "This course was amazing! The instructor explained every concept clearly and practically.",
  },
  {
    name: "John Smith",
    avatar: "https://i.pravatar.cc/100?img=2",
    rating: 4,
    comment: "Very informative and well-structured. I learned a lot about full stack development.",
  },
  {
    name: "Emily Carter",
    avatar: "https://i.pravatar.cc/100?img=3",
    rating: 5,
    comment: "Loved the real-world examples and the hands-on projects. Highly recommend this course!",
  },
];

const ReviewSection = () => {
  return (
    <section className="py-12 px-6 md:px-12 bg-gray-900">
      <h2 className="text-3xl text-gray-200 font-bold text-center mb-10">What Our Students Say</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl px-6 py-10 shadow hover:shadow-lg transition-shadow"
          >
            <FaQuoteLeft  className="text-2xl text-gray-600 mb-4" />
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-800">{review.name}</h4>
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 fill-current ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
