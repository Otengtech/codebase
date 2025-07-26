import React, { useState, useEffect } from "react";

const MoveTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Track scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div className="fixed bottom-6 right-4 z-50">
        <button
          onClick={scrollToTop}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black text-xl shadow-md shadow-gray-800 transition"
          title="Back to top"
        >
          ↑
        </button>
      </div>
    )
  );
};

export default MoveTop;
