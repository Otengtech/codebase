import React from "react";

const Loader = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-gray-900 to-violet-900 justify-center items-center">
      <div className="my-14 w-16 h-16 border-4 border-gray-800 border-t-sky-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
