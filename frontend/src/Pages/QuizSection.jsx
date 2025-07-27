import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../Components/Home/Footer";
import Navbar from "../Components/Home/Navbar";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "HTML Quiz",
    description: "How well do you know the structure of the web?",
    initials: "HTML",
    color: "bg-orange-500",
    topics: ["Tags", "Forms", "Semantic HTML", "Attributes"],
    to: "/htmlquizstart",
  },
  {
    title: "CSS Quiz",
    description: "Challenge your knowledge of Cascading Style Sheets.",
    initials: "CSS",
    color: "bg-blue-500",
    topics: ["Selectors", "Flexbox", "Grid", "Animations"],
    to: "/cssquizstart",
  },
  {
    title: "JavaScript Quiz",
    description: "Test your JS skills with this interactive quiz!",
    initials: "JS",
    color: "bg-yellow-400",
    topics: ["Variables", "Functions", "DOM", "ES6+"],
    to: "/jsquizstart",
  },

  {
    title: "Node.js Quiz",
    description: "Check your backend fundamentals using Node.js.",
    initials: "NJS",
    color: "bg-green-600",
    topics: ["Modules", "Express.js", "APIs", "File System"],
    to: "/nodejsquizstart",
  },
  {
    title: "MongoDB Quiz",
    description: "Evaluate your knowledge of NoSQL databases.",
    initials: "MDB",
    color: "bg-green-800",
    topics: ["CRUD", "Schemas", "Aggregation", "Indexes"],
    to: "/mdbquizstart",
  },
  {
    title: "TailwindCSS Quiz",
    description: "Assess your Tailwind utility class skills.",
    initials: "TW",
    color: "bg-teal-500",
    topics: [
      "Utility Classes",
      "Responsive Design",
      "Custom Config",
      "Dark Mode",
    ],
    to: "/tquizstart",
  },
];

export default function QuizSection() {
  const scrollRef = useRef(null);

  return (
    <>
      <Navbar />
      <section className="py-28 bg-gradient-to-r from-gray-800 to-violet-900 px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-center text-sky-300 mb-4">
            Take a Quiz
          </h2>

          <p className="max-w-2xl mx-auto text-center text-gray-200 mb-10">
            Boost your learning with fun, interactive quizzes! Each one is
            carefully crafted to help you reinforce key topics, test your
            understanding, and track your progress.
          </p>
        </motion.div>

        <div
          ref={scrollRef}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-3 transition-all duration-300 p-6 flex flex-col justify-between"
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 text-sky-200 bg-gray-900 flex items-center justify-center font-bold text-lg rounded-full`}
                >
                  {course.initials}
                </div>
                <span className="text-sm text-sky-300">
                  +{course.topics.length} Topics
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {course.description}
                </p>

                {/* Topics */}
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-400 mb-4">
                  {course.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                {/* Button */}
                <Link to={course.to}>
                  <button className="mt-auto bg-gray-900 rounded-full text-sky-200 py-3 px-6 hover:bg-gray-800 flex items-center justify-center gap-2 text-sm font-medium transition">
                    Start Quiz <FaArrowRight />
                  </button>
                </Link>
                <div className="sm:flex md:flex lg:flex flex items-center justify-start space-x-2">
                  {[...Array(2)].map((_, index) => (
                    <div
                      key={index}
                      className={`w-5 h-5 mt-5 rounded-full text-white ${
                        index % 2 === 0 ? "bg-sky-300" : "bg-gray-500"
                      } animate-bounce-custom1`}
                      style={{
                        animationDelay: `${index * 0.2}s`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
