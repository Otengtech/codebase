import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar";
import Footer from "../../Home/Footer";

const NodejsQuizStart = () => {
  const [topScore, setTopScore] = useState(0);

  useEffect(() => {
    const storedScore = localStorage.getItem("nodeTopScore");
    if (storedScore) setTopScore(parseInt(storedScore));
  }, []);

  const percentage = (topScore / 40) * 100;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#0f172a] via-[#10261f] to-[#0f172a] text-white flex items-center justify-center py-20 px-4">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-[#111827]/70 backdrop-blur-sm rounded-xl shadow-2xl p-8 md:p-12 border border-gray-700">

          {/* Left Column - Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">Node.js Quiz Challenge</h1>
            <p className="text-lg text-gray-300 mb-6">
              Ready to test your backend skills? Answer 40 Node.js-focused questions to sharpen your server-side expertise.
            </p>
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 space-y-3 text-sm md:text-base">
              <h2 className="text-xl font-semibold text-green-400">Before You Start:</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li> 40 practical Node.js questions</li>
                <li> 15 seconds per question – auto next</li>
                <li> Only one correct answer each</li>
                <li> Score summary after completion</li>
                <li> Top score saved in your browser</li>
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
                Beat your top score and become a Node.js pro!
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-4 w-full">
              <Link to="/nodejsquiz">
                <button className="w-full bg-green-400 text-gray-900 font-semibold py-3 rounded-lg hover:bg-green-300 transition">
                  Start the Node.js Quiz
                </button>
              </Link>
              <Link to="/quiz">
                <button className="w-full bg-gray-800 border border-gray-600 text-green-400 py-3 rounded-lg hover:bg-gray-700 transition">
                  Go Back
                </button>
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Share the challenge with your dev squad!</p>
              <p className="italic">#NodeNinja #BackendBoss</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NodejsQuizStart;
