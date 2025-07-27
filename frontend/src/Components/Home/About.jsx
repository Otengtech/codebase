import React from "react";
import aboutImage from "../../assets/about.jpg"; // Make sure this is a wide landscape image
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      {/* CONTENT SECTION */}
      <section className="bg-gray-900 text-white py-28 px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-sky-300 mb-4">
              About LearnBase
            </h2>
            <p className="text-gray-300 text-md max-w-3xl mx-auto leading-relaxed">
              LearnBase is your go-to platform for mastering web development with interactive quizzes, structured lessons, and real-world projects. Whether you're a curious beginner or a professional brushing up, LearnBase supports your growth every step of the way.
            </p>
          </div>

          {/* Left and Right Blocks */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <div className="bg-gray-800 p-6 rounded-md shadow-md">
                <h3 className="text-2xl font-semibold text-sky-300 mb-2">Interactive Learning</h3>
                <p className="text-gray-400">
                  Reinforce your skills with quizzes, timed challenges, and feedback-based learning. Our platform ensures you're not just reading—you’re doing.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-md shadow-md">
                <h3 className="text-2xl font-semibold text-sky-300 mb-2">Hands-on Projects</h3>
                <p className="text-gray-400">
                  Apply what you learn with guided and open-ended projects that mirror real-world development tasks.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-md shadow-md">
                <h3 className="text-2xl font-semibold text-sky-300 mb-2">Community Support</h3>
                <p className="text-gray-400">
                  Join a growing community of learners and mentors who help you troubleshoot, grow, and stay motivated.
                </p>
              </div>
            </div>

            <div className="space-y-10">
              <div className="bg-gray-800 p-6 rounded-md shadow-md">
                <h3 className="text-2xl font-semibold text-sky-300 mb-2">Comprehensive Curriculum</h3>
                <p className="text-gray-400">
                  From HTML, CSS, and JavaScript to React, Node.js, and MongoDB—we cover everything you need to build full-stack applications.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-md shadow-md">
                <h3 className="text-2xl font-semibold text-sky-300 mb-2">Career-Driven Approach</h3>
                <p className="text-gray-400">
                  LearnBase prepares you for tech interviews, freelance work, and job placements with practical skills and confidence.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-md shadow-md">
                <h3 className="text-2xl font-semibold text-sky-300 mb-2">Track Your Progress</h3>
                <p className="text-gray-400">
                  Visual dashboards and progress tracking help you stay focused, measure growth, and reach your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
