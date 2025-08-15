import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar";
import Footer from "../../Home/Footer";

const JavascriptQuizStart = () => {
  const [topScore, setTopScore] = useState(0);

  useEffect(() => {
    const storedScore = localStorage.getItem("jsTopScore");
    if (storedScore) setTopScore(parseInt(storedScore));
  }, []);

  const percentage = (topScore / 40) * 100;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-gray-900 to-violet-900 text-white flex items-center justify-center py-20 px-4">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 rounded-xl p-8 md:p-12 ">

          {/* Left Column - Information */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 animate-fade-in-up">JavaScript Quiz Challenge</h1>
            <p className="text-lg text-gray-300 mb-6 animate-fade-in-up">
              Master the language of the web! Answer 40 sharp JavaScript questions to solidify your coding expertise.
            </p>
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 space-y-3 text-sm md:text-base">
              <h2 className="text-xl font-semibold text-yellow-400 animate-fade-in-up">Before You Start:</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 animate-fade-in-up">
                <li> 40 carefully selected JS questions</li>
                <li> 15 seconds per question – auto switch</li>
                <li> Only one correct option per question</li>
                <li> Score revealed at the end – retry anytime</li>
                <li> Your top score is stored locally</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Stats & Actions */}
          <div className="flex flex-col items-center justify-center text-center gap-6">
            <h3 className="text-2xl font-semibold text-yellow-400 animate-fade-in-up">Your Progress</h3>
            <div className="w-full">
              <div className="flex justify-between mb-1 text-sm text-gray-400 animate-fade-in-up">
                <span>Top Score</span>
                <span>{topScore} / 40</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4 shadow-inner">
                <div
                  className="bg-yellow-400 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <p className="text-sm mt-2 text-gray-400 italic animate-fade-in-up">
                Beat your high score and unlock a surprise!
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-4 w-full">
              <Link to="/jsquiz">
                <button className="w-full bg-yellow-400 text-gray-900 font-semibold animate-fade-in-up py-3 rounded-lg hover:bg-yellow-300 transition">
                  Start the JavaScript Quiz
                </button>
              </Link>
              <Link to="/quiz">
                <button className="w-full bg-gray-800 border border-gray-600 animate-fade-in-up text-yellow-400 py-3 rounded-lg hover:bg-gray-700 transition">
                  Go Back
                </button>
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400 animate-fade-in-up">
              <p>Challenge your friends to a JS duel!</p>
              <p className="italic">#JavaScriptMaster #CodeOn</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JavascriptQuizStart;
