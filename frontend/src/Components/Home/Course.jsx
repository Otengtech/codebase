import React from "react";
import { FaArrowRight } from "react-icons/fa";
import htmlImg from "../../assets/html.png";
import cssImg from "../../assets/css.png";
import jsImg from "../../assets/javascript.jpg";
import tailwindImg from "../../assets/tailwind.webp";
import { Link } from "react-router-dom";
import { useInViewAnimation } from "../Animation/useInViewAnimation";

const allCourses = [
  {
    name: "HTML Mastery",
    img: htmlImg,
    to: "/html",
    description:
      "Build structured and semantic web pages using modern HTML5 features.",
    duration: "1 Month",
    level: "Beginner",
    prerequisites: "None",
    tools: ["VSCode", "Browser Dev Tools"],
    topics: [
      "HTML Basics",
      "Forms and Inputs",
      "Semantic Elements",
      "Multimedia Tags",
      "Tables & Lists",
      "SEO-friendly Structure",
    ],
  },
  {
    name: "CSS Essentials",
    img: cssImg,
    to: "/css",
    description:
      "Master styling web pages using CSS3, layout techniques, and responsive design.",
    duration: "1.5 Months",
    level: "Beginner to Intermediate",
    prerequisites: "HTML",
    tools: ["Chrome DevTools", "Figma"],
    topics: [
      "Selectors & Specificity",
      "Box Model",
      "Flexbox & Grid",
      "Media Queries",
      "Animations",
    ],
  },
  {
    name: "JavaScript for Web Development",
    img: jsImg,
    to: "/javascript",
    description:
      "Build interactive and dynamic web applications with JavaScript.",
    duration: "2 Months",
    level: "Beginner to Intermediate",
    prerequisites: "HTML & CSS",
    tools: ["Chrome DevTools", "Console", "Node"],
    topics: [
      "DOM Manipulation",
      "Functions & Scope",
      "Events",
      "ES6+ Features",
      "APIs & Fetch",
    ],
  },
  {
    name: "Tailwind CSS Workshop",
    img: tailwindImg,
    to: "/tailwindcss",
    description: "Create responsive designs fast using Tailwind CSS utilities.",
    duration: "3 Weeks",
    level: "Beginner to Intermediate",
    prerequisites: "CSS",
    tools: ["Tailwind Play", "React"],
    topics: [
      "Utility-first Approach",
      "Responsive Design",
      "Custom Themes",
      "Dark Mode",
    ],
  },
];

const Course = () => {
  const [leftRef, isLeftVisible] = useInViewAnimation();
  const visibleCourses = allCourses.slice(0, 3); // Show only 3
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-violet-900">
      <h2 className="text-4xl text-sky-300 font-bold text-center mb-8">
        Explore Our Courses
      </h2>
      <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
        Get hands-on with our expertly designed full-stack curriculum. Learn
        everything from HTML to backend development with MongoDB and Node.js —
        ideal for beginners and career changers!
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {visibleCourses.map((course, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-all duration-500"
          >
            <div
              ref={leftRef}
              className={`hidden-element transition-all duration-500 ${
                isLeftVisible ? "animate-left" : ""
              }`}
            >
              <Link to={course.to}>
                <img
                  src={course.img}
                  alt={course.name}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-bold text-sky-300">
                  {course.name}
                </h3>
                <p className="text-gray-300 mt-2">{course.description}</p>
                <div className="mt-4 space-y-1 text-sm text-gray-400">
                  <p>
                    <strong className="text-sky-300">Duration:</strong>{" "}
                    {course.duration}
                  </p>
                  <p>
                    <strong className="text-sky-300">Level:</strong>{" "}
                    {course.level}
                  </p>
                  <p>
                    <strong className="text-sky-300">Prerequisites:</strong>{" "}
                    {course.prerequisites}
                  </p>
                  <p>
                    <strong className="text-sky-300">Tools:</strong>{" "}
                    {course.tools.join(", ")}
                  </p>
                </div>
                <ul className="mt-3 text-sm text-gray-300 list-disc list-inside">
                  {course.topics.slice(0, 3).map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Link to="/course">
        <button className="m-5 flex items-center gap-2 text-sky-300 hover:text-sky-200 transition font-semibold">
          View All Courses <FaArrowRight />
        </button>
      </Link>
    </section>
  );
};

export default Course;
