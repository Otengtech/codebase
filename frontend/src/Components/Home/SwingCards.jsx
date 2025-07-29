import React from "react";
import { FaReact, FaUsers } from "react-icons/fa";
import { PiGraphLight } from "react-icons/pi";
import { useInViewAnimation } from "../Animation/useInViewAnimation";

const HeroImageWithCards = () => {
  const [leftRef, isLeftVisible] = useInViewAnimation();

  return (
    <div className="w-full bg-gradient-to-r from-gray-900 to-violet-900 flex flex-col justify-center items-center">
      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-10">
        {/* Card 1 */}
        <div
          ref={leftRef}
          className={`hidden-element transition-all duration-500 ${
            isLeftVisible ? "animate-left" : ""
          }`}
        >
          <div className="backdrop-blur-md bg-white/10 border border-white/20 px-4 py-6 md:px-5 md:py-8 rounded-xl shadow-md w-60 flex items-center gap-3 animate-swing">
            <FaUsers className="text-sky-400 text-3xl" />
            <div className="text-white text-sm font-semibold">
              2000+ <br />
              students trained
            </div>
          </div>

          {/* Card 2 */}

          <div className="backdrop-blur-md bg-white/10 border border-white/20 px-4 py-6 md:px-5 md:py-8 rounded-xl shadow-md w-60 flex items-center gap-3 animate-swing delay-200">
            <FaReact className="text-sky-400 text-3xl" />
            <div className="text-white text-sm font-semibold">
              Built with <br />
              modern tech
            </div>
          </div>

          {/* Card 3 */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 px-4 py-6 md:px-5 md:py-8 rounded-xl shadow-md w-60 flex items-center gap-3 animate-swing delay-400">
            <PiGraphLight className="text-sky-400 text-3xl" />
            <div className="text-white text-sm font-semibold">
              95% <br />
              success rate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImageWithCards;
