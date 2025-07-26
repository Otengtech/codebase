import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Home/Navbar";
import Footer from "../../Home/Footer";

const HtmlQuizStart = () => {
  const [topScore, setTopScore] = useState(0);

  useEffect(() => {
    const storedScore = localStorage.getItem("htmlTopScore");
    if (storedScore) setTopScore(parseInt(storedScore));
  }, []);

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-20 px-6">
      <h1 className="text-3xl md:text-5xl text-sky-300 font-bold mb-6 text-center">HTML Quiz Challenge</h1>

      <div className="bg-gray-800 shadow-lg rounded-lg p-6 max-w-xl w-full mb-8">
        <h2 className="text-xl font-semibold mb-4">Before You Start:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Total of 40 solid HTML questions</li>
          <li>15 seconds per question – automatic switch</li>
          <li>Only one answer per question</li>
          <li>Once done, you’ll see your score and option to retry</li>
          <li>Your top score is saved locally</li>
        </ul>
      </div>

      <div className="text-center mb-8">
        <p className="text-lg"><span className="font-semibold">Top Score:</span> {topScore} / 40</p>
      </div>

      <Link to="/htmlquiz">
        <button className="bg-gray-800 hover:bg-gray-700 transition duration-200 text-sky-300 px-6 py-3 rounded-lg text-lg font-medium">
          Start Quiz
        </button>
      </Link>
      <Link to="/quiz">
        <button className="bg-gray-800 mt-5 hover:bg-gray-700 transition duration-200 text-sky-300 px-6 py-3 rounded-lg text-lg font-medium">
          Go Back
        </button>
      </Link>
    </div>
    </>
  );
};

export default HtmlQuizStart;
