import React from "react";
import { FaReact, FaUsers } from "react-icons/fa";
import { PiGraphLight } from "react-icons/pi";

const HeroImageWithCards = () => {
  return (
    <div className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-col md:ml-20 justify-center relative">

      {/* Floating Cards - Centered */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col lg:flex-row items-center justify-center gap-4 px-4">
        
        {/* Card 1 */}
        <div className="backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-xl shadow-md w-60 flex items-center gap-3 animate-swing">
          <FaUsers className="text-sky-400 text-3xl" />
          <div className="text-white text-sm font-semibold">
            2000+ <br />
            students trained
          </div>
        </div>

        {/* Card 2 */}
        <div className="backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-xl shadow-md w-60 flex items-center gap-3 animate-swing delay-[200ms]">
          <FaReact className="text-sky-400 text-3xl" />
          <div className="text-white text-sm font-semibold">
            Built with <br />
            modern tech
          </div>
        </div>

        {/* Card 3 */}
        <div className="backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-xl shadow-md w-60 flex items-center gap-3 animate-swing delay-[400ms]">
          <PiGraphLight className="text-sky-400 text-3xl" />
          <div className="text-white text-sm font-semibold">
            95% <br />
            success rate
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImageWithCards;
