import React, { useEffect, useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import rightImage from "../../assets/rightImage.png"

const phrases = [
  "Explore. Learn. Win.",
  "Empower your mind.",
  "Learn. Grow. Succeed.",
  "Knowledge made simple.",
  "Start your journey.",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name") || "Learner";
    setName(storedName);
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[index];
    if (charIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentPhrase[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayText("");
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index]);

  return (
    <div className="w-full min-h-[90vh] bg-gradient-to-r from-gray-900 to-violet-900 flex flex-col md:flex-row items-center justify-between px-6 md:px-28 py-20 text-white">
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-lg text-violet-200">WELCOME {name}</h1>
        <h2 className="text-4xl md:text-5xl text-sky-200 font-bold leading-tight">
          {displayText}
          <span className="animate-pulse text-violet-300">|</span>
        </h2>
        <p className="text-gray-300 text-base md:text-lg">
          Get the skills and real-world experience — begin your journey with us.
          Transition from Beginner to Ultimate is no time.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link to="/course">
            <button className="py-3 text-gray-900 px-6 bg-violet-600 hover:bg-violet-500 rounded-md transition">
              OUR COURSES
            </button>
          </Link>
          <Link to="/blog">
            <button className="py-3 px-6 bg-sky-300 text-gray-900 hover:bg-sky-200 rounded-md transition">
              OUR BLOG
            </button>
          </Link>
          <div className="flex items-center mt-6 space-x-3">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`w-10 h-10 rounded-full ${
                i % 2 === 0 ? "bg-violet-500" : "bg-sky-200"
              } animate-bounce-custom1`}
              style={{
                animationDelay: `${i * 0.2}s`,
              }}
            ></div>
          ))}
        </div>
        </div>
      </div>

      {/* Right Section - Animated Circles */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-col md:ml-20 justify-center space-y-6">
        <img src={rightImage} alt="hero-image" 
        className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
