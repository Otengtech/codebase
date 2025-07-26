import React from "react";
import { motion } from "framer-motion";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import tailwindImg from "../../assets/tailwind.webp"; // Make sure this image exists

const TailwindCourseLanding = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-white px-4 md:px-10 py-28">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-6 text-center">
            TAILWIND
          </h2>
          <div className="sm:flex md:flex lg:flex flex mt-6 items-center justify-center mb-6 space-x-2">
            {[...Array(7)].map((_, index) => (
              <div
                key={index}
                className={`w-8 h-8 mt-6 rounded-full text-white ${
                  index % 2 === 0 ? "bg-gray-900" : "bg-gray-700"
                } animate-bounce-custom`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              ></div>
            ))}
          </div>
        </motion.div>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Course Image */}
          <img
            src={tailwindImg}
            alt="Tailwind CSS Course"
            className="w-full h-60 object-cover md:h-full"
          />

          {/* Course Info */}
          <div className="col-span-2 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Tailwind CSS Crash Course
              </h3>
              <p className="text-gray-700 mb-4">
                Learn how to rapidly build modern websites with utility-first
                Tailwind CSS. No custom CSS required — just speed, flexibility,
                and responsiveness.
              </p>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-300">
                <span className="bg-gray-700 px-3 py-1 rounded-full">
                  Duration: 1 Month
                </span>
                <span className="bg-gray-700 px-3 py-1 rounded-full">
                  Level: Beginner Friendly
                </span>
              </div>

              <div>
                <h4 className="font-semibold mb-2">What you'll learn:</h4>
                <ul className="list-disc list-inside text-gray-600 grid grid-cols-2 gap-x-4">
                  <li>Tailwind Setup</li>
                  <li>Utility-First Classes</li>
                  <li>Responsive Design</li>
                  <li>Flexbox & Grid</li>
                  <li>Spacing & Layouts</li>
                  <li>Typography & Colors</li>
                  <li>Dark Mode</li>
                  <li>Customizing Themes</li>
                  <li>Using Plugins</li>
                  <li>Component Design</li>
                </ul>
              </div>
            </div>

            {/* Enroll Button */}
            <div className="mt-6">
              <button className="bg-gray-900 hover:bg-gray-700 text-white font-semibold px-6 py-2 rounded-md transition">
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

export default TailwindCourseLanding;
