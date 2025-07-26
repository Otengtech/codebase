import React from "react";
import { motion } from "framer-motion";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import mongoImg from "../../assets/mongodb.png"; // Make sure this image exists

const MongoDBCourseLanding = () => {
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
          <h2 className="text-4xl md:text-5xl text-green-600 font-bold mb-6 text-center">
            MONGODB
          </h2>
          <div className="sm:flex md:flex lg:flex flex mt-6 items-center justify-center mb-6 space-x-2">
            {[...Array(7)].map((_, index) => (
              <div
                key={index}
                className={`w-8 h-8 mt-6 rounded-full text-white ${
                  index % 2 === 0 ? "bg-green-600" : "bg-green-400"
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
            src={mongoImg}
            alt="MongoDB Course"
            className="w-full h-60 object-cover md:h-full"
          />

          {/* Course Info */}
          <div className="col-span-2 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl text-green-600 font-semibold mb-2">
                MongoDB Essentials
              </h3>
              <p className="text-gray-300 mb-4">
                Learn how to design, manage, and query NoSQL databases using
                MongoDB. Ideal for backend developers working with modern stacks
                like Node.js and MERN.
              </p>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-700">
                <span className="bg-gray-300 px-3 py-1 rounded-full">
                  Duration: 1.5 Months
                </span>
                <span className="bg-gray-300 px-3 py-1 rounded-full">
                  Level: Intermediate
                </span>
              </div>

              <div>
                <h4 className="font-semibold text-green-600 mb-2">
                  What you'll learn:
                </h4>
                <ul className="list-disc list-inside text-gray-300 grid grid-cols-2 gap-x-4">
                  <li>NoSQL vs SQL</li>
                  <li>Installing MongoDB & Compass</li>
                  <li>CRUD Operations</li>
                  <li>Mongo Shell Commands</li>
                  <li>Schema Design</li>
                  <li>Embedded vs Referenced Data</li>
                  <li>Indexes & Performance</li>
                  <li>Mongoose with Node.js</li>
                  <li>Aggregation Framework</li>
                  <li>MongoDB Atlas & Cloud Hosting</li>
                </ul>
              </div>
            </div>

            {/* Enroll Button */}
            <div className="mt-6">
              <button className="bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-2 rounded-md transition">
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

export default MongoDBCourseLanding;
