import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar";

const CssQuizStart = () => {
  const [topScore, setTopScore] = useState(0);

  useEffect(() => {
    const storedScore = localStorage.getItem("cssTopScore");
    if (storedScore) setTopScore(parseInt(storedScore));
  }, []);

  const percentage = (topScore / 40) * 100;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-gray-900 to-violet-900 text-white flex items-center justify-center py-20 px-4">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 rounded-xl p-8 md:p-12">

          {/* Left Column - Information */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-green-300 mb-6 animate-fade-in-up">CSS Quiz Challenge</h1>
            <p className="text-lg text-gray-300 mb-6 animate-fade-in-up">
              Welcome to the ultimate CSS showdown! Hone your styling skills and challenge yourself with 40 unique questions designed to test everything from Flexbox to animations.
            </p>
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 space-y-3 text-sm md:text-base">
              <h2 className="text-xl font-semibold text-sky-300 animate-fade-in-up">Before You Start:</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 animate-fade-in-up">
                <li> 40 questions to push your CSS limits</li>
                <li> 15 seconds per question – auto-move</li>
                <li> Only one answer allowed per question</li>
                <li> Score & retry option after completion</li>
                <li> Top score saved on your browser</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Stats & Actions */}
          <div className="flex flex-col items-center justify-center text-center gap-6">
            <h3 className="text-2xl font-semibold text-green-300 animate-fade-in-up">Your Progress</h3>
            <div className="w-full">
              <div className="flex justify-between mb-1 text-sm text-gray-400 animate-fade-in-up">
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
                Aim for 100% mastery and unlock a secret badge!
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-4 w-full">
              <Link to="/cssquiz">
                <button className="w-full bg-green-400 text-gray-900 font-semibold py-3 rounded-lg hover:bg-green-300 transition">
                  Start the CSS Quiz
                </button>
              </Link>
              <Link to="/quiz">
                <button className="w-full bg-gray-800 border border-gray-600 text-green-300 py-3 rounded-lg hover:bg-gray-700 transition">
                  Go Back
                </button>
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400 animate-fade-in-up">
              <p>Challenge your friends to beat your score!</p>
              <p className="italic">#CSSChampionship #CodeAndConquer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CssQuizStart;
