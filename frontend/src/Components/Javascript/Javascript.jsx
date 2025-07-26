import React from "react";
import { motion } from "framer-motion";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import jsImg from "../../assets/javascript.jpg"; // Ensure this image exists

const JavascriptCourseLanding = () => {
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
          <h2 className="text-4xl md:text-5xl text-yellow-400 font-bold mb-6 text-center">
            JAVASCRIPT
          </h2>
          <div className="sm:flex md:flex lg:flex flex mt-6 items-center justify-center mb-6 space-x-2">
            {[...Array(7)].map((_, index) => (
              <div
                key={index}
                className={`w-8 h-8 mt-6 rounded-full text-white ${
                  index % 2 === 0 ? "bg-yellow-600" : "bg-yellow-400"
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
            src={jsImg}
            alt="JavaScript Course"
            className="w-full h-60 object-cover md:h-full"
          />

          {/* Course Info */}
          <div className="col-span-2 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl text-yellow-400 font-semibold mb-2">
                JavaScript Essentials
              </h3>
              <p className="text-gray-300 mb-4">
                Learn JavaScript from scratch and build dynamic, interactive web
                applications. Dive into real projects and practical use cases.
              </p>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-700">
                <span className="bg-gray-300 px-3 py-1 rounded-full">
                  Duration: 2 Months
                </span>
                <span className="bg-gray-300 px-3 py-1 rounded-full">
                  Level: Beginner to Intermediate
                </span>
              </div>

              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">
                  What you'll learn:
                </h4>
                <ul className="list-disc list-inside text-gray-300 grid grid-cols-2 gap-x-4">
                  <li>Variables & Data Types</li>
                  <li>Functions & Scope</li>
                  <li>DOM Manipulation</li>
                  <li>Events & Listeners</li>
                  <li>Arrays & Objects</li>
                  <li>Loops & Conditionals</li>
                  <li>ES6+ Features</li>
                  <li>APIs & Fetch</li>
                  <li>Async/Await</li>
                  <li>Debugging Tools</li>
                </ul>
              </div>
            </div>

            {/* Enroll Button */}
            <div className="mt-6">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-6 py-2 rounded-md transition">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JavascriptCourseLanding;
