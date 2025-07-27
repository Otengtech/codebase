import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

const API_URL = import.meta.env.VITE_API_URL;

const MdbQuiz = () => {
const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(20);
  const [quizEnd, setQuizEnd] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [topScore, setTopScore] = useState(
    parseInt(localStorage.getItem("jsTopScore")) || 0
  );

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/api/mdb-quiz`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch questions.");
        return res.json();
      })
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!quizEnd && !cancelled) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 1) {
            handleNext(); // skip on timeout
            return 20;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [current, quizEnd, cancelled]);

  const handleAnswer = (option) => {
    if (selected) return;
    setSelected(option);
    if (option === questions[current].answer) {
      setScore((prev) => prev + 1);
    }
    setTimeout(() => {
      handleNext();
    }, 1000);
  };

  const handleNext = () => {
    const isLast = current + 1 >= questions.length;
    if (!isLast) {
      setCurrent((prev) => prev + 1);
      setSelected(null);
      setTimeLeft(20);
    } else {
      setQuizEnd(true);
      if (!cancelled && score > topScore) {
        localStorage.setItem("jsTopScore", score);
        setTopScore(score);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      }
    }
  };

  const handleRetry = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setTimeLeft(20);
    setQuizEnd(false);
    setCancelled(false);
  };

  const handleCancel = () => {
    setQuizEnd(true);
    setCancelled(true);
  };

  const progressPercent =
    ((current + (quizEnd ? 1 : 0)) / questions.length) * 100;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl bg-black">
        Loading Quiz...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-400 text-xl bg-black">
        {error}
      </div>
    );
  }
  return (
      <div className="relative min-h-screen bg-gradient-to-r from-gray-900 to-violet-900 text-white flex items-center justify-center px-4 py-8 overflow-hidden">
        {showConfetti && <Confetti />}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="w-full h-full bg-[url('/noise.png')] opacity-5 absolute" />
        </div>
  
        <div className="w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-xl shadow-xl border border-white/10 p-8 relative z-10">
          <div className="w-full bg-gray-300/50 rounded-full h-3 mb-6">
            <div
              className="bg-green-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
  
          {quizEnd ? (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-4">
                {cancelled ? "Quiz Cancelled" : "Quiz Finished"}
              </h2>
              <motion.p
                className="text-xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1.1 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1,
                }}
              >
                {cancelled
                  ? "Score not saved."
                  : `Your Score: ${score} / ${questions.length}`}
              </motion.p>
              {!cancelled && (
                <p className="text-sm mt-2" title="Best score you've ever got!">
                  Top Score: {topScore}
                </p>
              )}
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={handleRetry}
                  className="px-6 py-2 bg-orange-500 rounded hover:bg-orange-400 transition"
                >
                  Try Again
                </button>
                <Link
                  to="/jsquizstart"
                  className="px-6 py-2 bg-gray-700 rounded hover:bg-gray-600 transition"
                >
                  Back to Start
                </Link>
              </div>
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex justify-between items-center text-sm mb-4">
                  <span className="text-orange-400">
                    Question {current + 1} / {questions.length}
                  </span>
                  <span>Score: {score}</span>
                  <span className="text-green-400">⏱ {timeLeft}s</span>
                </div>
  
                <h2 className="text-2xl font-semibold mb-6">
                  {questions[current].question}
                </h2>
  
                <div className="grid gap-4">
                  {questions[current].options.map((option, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => handleAnswer(option)}
                      disabled={!!selected}
                      whileTap={{ scale: 0.96 }}
                      className={`w-full px-5 py-3 rounded text-left transition-all duration-300 border ${
                        selected
                          ? option === questions[current].answer
                            ? "bg-green-600 border-green-400"
                            : option === selected
                            ? "bg-red-600 border-red-400"
                            : "bg-gray-transparent border-gray-600"
                          : "bg-gray-transparent hover:border-gray-200 border-gray-600"
                      }`}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
  
                <div className="mt-8 text-center">
                  <button
                    onClick={handleCancel}
                    className="px-5 py-2 bg-red-500 rounded hover:bg-red-400"
                  >
                    Cancel Quiz
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    );
};

export default MdbQuiz;
