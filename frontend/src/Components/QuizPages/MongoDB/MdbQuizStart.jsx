import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar";
import Footer from "../../Home/Footer";

const MdbQuizStart = () => {
  const [topScore, setTopScore] = useState(0);

  useEffect(() => {
    const storedScore = localStorage.getItem("mdbTopScore");
    if (storedScore) setTopScore(parseInt(storedScore));
  }, []);

  const percentage = (topScore / 40) * 100;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#0f172a] via-[#0f1f1a] to-[#0f172a] text-white flex items-center justify-center py-20 px-4">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-[#111827]/70 backdrop-blur-sm rounded-xl shadow-2xl p-8 md:p-12 border border-gray-700">

          {/* Left Column - Information */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">MongoDB Quiz Challenge</h1>
            <p className="text-lg text-gray-300 mb-6">
              Dive into the world of NoSQL! Tackle 40 practical MongoDB questions and test your database skills.
            </p>
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 space-y-3 text-sm md:text-base">
              <h2 className="text-xl font-semibold text-green-400">Before You Start:</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li> 40 hands-on MongoDB questions</li>
                <li> 15 seconds per question – auto advance</li>
                <li> One correct answer per question</li>
                <li> Final score with retry option</li>
                <li> Top score saved on your device</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Stats & Actions */}
          <div className="flex flex-col items-center justify-center text-center gap-6">
            <h3 className="text-2xl font-semibold text-green-400">Your Progress</h3>
            <div className="w-full">
              <div className="flex justify-between mb-1 text-sm text-gray-400">
                <span>Top Score</span>
                <span>{topScore} / 40</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4 shadow-inner">
                <div
                  className="bg-green-400 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <p className="text-sm mt-2 text-gray-400 italic">
                Keep practicing and unlock a secret MongoDB tip!
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-4 w-full">
              <Link to="/mdbquiz">
                <button className="w-full bg-green-400 text-gray-900 font-semibold py-3 rounded-lg hover:bg-green-300 transition">
                  Start the MongoDB Quiz
                </button>
              </Link>
              <Link to="/quiz">
                <button className="w-full bg-gray-800 border border-gray-600 text-green-400 py-3 rounded-lg hover:bg-gray-700 transition">
                  Go Back
                </button>
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Challenge your team to a MongoDB face-off!</p>
              <p className="italic">#NoSQLNinja #MongoMaster</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MdbQuizStart;
