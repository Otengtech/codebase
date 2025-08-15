import React from "react";
import { motion } from "framer-motion";
import htmlImg from "../../../assets/html.png";
import Navbar from "../../Home/Navbar";
import Footer from "../../Home/Footer";
import { Link } from "react-router-dom";

const Html = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-gray-900 px-4 md:px-10 py-28">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-orange-500 font-bold mb-6 text-center">
            HTML
          </h2>
          <div className="sm:flex md:flex lg:flex flex mt-6 items-center justify-center mb-6 space-x-2">
            {[...Array(7)].map((_, index) => (
              <div
                key={index}
                className={`w-8 h-8 mt-6 rounded-full text-white ${
                  index % 2 === 0 ? "bg-orange-500" : "bg-orange-400"
                } animate-bounce-custom`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              ></div>
            ))}
          </div>
        </motion.div>

        <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Course Image */}
          <img
            src={htmlImg}
            alt="HTML Starter Course"
            className="w-full h-60 object-cover animate-fade-in-up md:h-full"
          />

          {/* Course Info */}
          <div className="col-span-2 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl text-orange-500 font-semibold mb-2 animate-fade-in-up">
                HTML Fundamentals
              </h3>
              <p className="text-gray-300 mb-4 animate-fade-in-up">
                Learn the foundations of web development with HTML. Build your
                first web pages and understand how websites are structured.
              </p>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-700">
                <span className="bg-gray-300 px-3 py-1 rounded-full animate-fade-in-up">
                  Duration: 1 Month
                </span>
                <span className="bg-gray-300 px-3 py-1 rounded-full animate-fade-in-up">
                  Level: Absolute Beginner
                </span>
              </div>

              <div>
                <h4 className="font-semibold text-orange-500 mb-2 animate-fade-in-up">
                  What you'll learn:
                </h4>
                <ul className="list-disc list-inside text-gray-300 grid grid-cols-2 gap-x-4 animate-fade-in-up">
                  <li>HTML Tags & Elements</li>
                  <li>Page Structure</li>
                  <li>Headings & Paragraphs</li>
                  <li>Lists & Tables</li>
                  <li>Forms & Inputs</li>
                  <li>Images & Links</li>
                  <li>Semantic HTML</li>
                  <li>Audio & Video</li>
                  <li>Embedding Content</li>
                  <li>Accessibility</li>
                </ul>
              </div>
            </div>

            {/* Enroll Button */}
            <div className="mt-6">
              <Link to="/htmlcourse"><button className="bg-orange-500 hover:bg-orange-400 text-gray-900 font-semibold px-6 py-2 rounded-md transition">
                Enroll Now
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Html;
