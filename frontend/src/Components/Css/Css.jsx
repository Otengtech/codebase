import React from "react";
import { motion } from "framer-motion";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import cssImg from "../../assets/css.png";

const Css = () => {
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
          <h2 className="text-4xl md:text-5xl text-blue-600 font-bold mb-6 text-center">
            CSS
          </h2>
          <div className="sm:flex md:flex lg:flex flex mt-6 items-center justify-center mb-6 space-x-2">
            {[...Array(7)].map((_, index) => (
              <div
                key={index}
                className={`w-8 h-8 mt-6 rounded-full text-white ${
                  index % 2 === 0 ? "bg-blue-700" : "bg-blue-500"
                } animate-bounce-custom`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              ></div>
            ))}
          </div>
        </motion.div>
        <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Course Image */}
          <img
            src={cssImg} // replace with your image import or URL
            alt="CSS Course"
            className="w-full h-60 animate-fade-in-up md:h-full"
          />

          {/* Course Info */}
          <div className="col-span-2 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl text-blue-600 font-semibold mb-2 animate-fade-in-up">
                CSS Essentials
              </h3>
              <p className="text-gray-200 mb-4 animate-fade-in-up">
                Master the art of styling web pages using CSS3. Learn layout
                techniques, animations, and responsive design.
              </p>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-700">
                <span className="bg-gray-300 px-3 py-1 rounded-full animate-fade-in-up">
                  Duration: 1.5 Months
                </span>
                <span className="bg-gray-300 px-3 py-1 rounded-full animate-fade-in-up">
                  Level: Beginner to Intermediate
                </span>
              </div>

              <div>
                <h4 className="font-semibold text-blue-600 mb-2 animate-fade-in-up">
                  What you'll learn:
                </h4>
                <ul className="list-disc list-inside text-gray-300 grid grid-cols-2 gap-x-4 animate-fade-in-up">
                  <li>Selectors & Specificity</li>
                  <li>Box Model</li>
                  <li>Flexbox & Grid</li>
                  <li>Media Queries</li>
                  <li>Animations</li>
                  <li>CSS Variables</li>
                </ul>
              </div>
            </div>

            {/* Enroll Button */}
            <div className="mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold animate-fade-in-up px-6 py-2 rounded-md transition">
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

export default Css;
