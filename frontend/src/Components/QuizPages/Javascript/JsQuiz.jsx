import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const JsQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(20);
  const [quizEnd, setQuizEnd] = useState(false);
  const [topScore, setTopScore] = useState(
    parseInt(localStorage.getItem("jsTopScore")) || 0
  );
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/js-quiz`)
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  useEffect(() => {
    if (!quizEnd && !cancelled) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 1) {
            handleNext();
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
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
      setTimeLeft(20);
    } else {
      setQuizEnd(true);
      if (!cancelled && score > topScore) {
        localStorage.setItem("jsTopScore", score);
        setTopScore(score);
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

  if (questions.length === 0)
    return <div className="text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl bg-gray-800 p-8 rounded-xl shadow-2xl relative overflow-hidden">
        {quizEnd ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              {cancelled ? "Quiz Cancelled" : "Quiz Finished!"}
            </h2>
            <p className="text-xl">
              {cancelled
                ? "Score not saved."
                : `Your Score: ${score} / ${questions.length}`}
            </p>
            {!cancelled && (
              <p className="text-sm mt-2">Top Score: {topScore}</p>
            )}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={handleRetry}
                className="px-5 py-2 bg-yellow-500 rounded hover:bg-yellow-400"
              >
                Try Again
              </button>
              <Link
                to="/jsquizstart"
                className="px-5 py-2 bg-gray-600 rounded hover:bg-gray-700"
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
                <span className="text-yellow-400">
                  Question {current + 1} / {questions.length}
                </span>
                <span>Score: {score}</span>
                <span className="text-green-400">Time: {timeLeft}s</span>
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
                    whileTap={{ scale: 0.98 }}
                    className={`w-full px-5 py-3 rounded text-left transition-all duration-300 ${
                      selected
                        ? option === questions[current].answer
                          ? "bg-green-600"
                          : option === selected
                          ? "bg-red-600"
                          : "bg-gray-700"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={handleCancel}
                  className="px-5 py-2 bg-yellow-500 rounded hover:bg-yellow-400"
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

export default JsQuiz;
