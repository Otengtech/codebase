import React, { useState, useEffect, useRef } from "react";
import htmlImg from "../../assets/html.png";
import cssImg from "../../assets/css.png";
import jsImg from "../../assets/javascript.jpg";
import tailwindImg from "../../assets/tailwind.webp";
import nodejsImg from "../../assets/nodejs.png";
import mongodbImg from "../../assets/mongodb.png";
import { Link } from "react-router-dom";

const courses = [
  {
    name: "HTML Mastery",
    img: htmlImg,
    to: "/html",
    description:
      "Learn the foundational language of the web. Build structured and semantic web pages using modern HTML5 features.",
    duration: "1 Month",
    level: "Beginner",
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
      "Master the art of styling web pages using CSS3. Learn layout techniques, animations, and responsive design.",
    duration: "1.5 Months",
    level: "Beginner to Intermediate",
    topics: [
      "Selectors & Specificity",
      "Box Model",
      "Flexbox & Grid",
      "Media Queries",
      "Transitions & Animations",
      "Custom Properties (Variables)",
    ],
  },
  {
    name: "JavaScript for Web Development",
    img: jsImg,
    to: "/javascript",
    description:
      "Learn JavaScript from the ground up and understand how to build interactive, dynamic web applications.",
    duration: "2 Months",
    level: "Beginner to Intermediate",
    topics: [
      "Variables & Data Types",
      "DOM Manipulation",
      "Functions & Scope",
      "Events",
      "ES6+ Features",
      "APIs & Fetch",
    ],
  },
  {
    name: "Node.js Backend Fundamentals",
    img: nodejsImg,
    to: "/nodejs",
    description:
      "Understand the basics of server-side programming with Node.js. Build and deploy fast, scalable backend services.",
    duration: "2 Months",
    level: "Intermediate",
    topics: [
      "Node.js Basics",
      "File System & Streams",
      "Express.js",
      "Middleware",
      "Routing & REST APIs",
      "Error Handling",
    ],
  },
  {
    name: "Tailwind CSS Workshop",
    img: tailwindImg,
    to: "/tailwindcss",
    description:
      "Design elegant and responsive interfaces using Tailwind CSS utility classes. Learn how to build quickly without writing custom CSS.",
    duration: "3 Weeks",
    level: "Beginner to Intermediate",
    topics: [
      "Utility-first Approach",
      "Layout & Spacing",
      "Responsive Design",
      "Dark Mode",
      "Custom Themes",
      "Integration with React",
    ],
  },
  {
    name: "MongoDB for Developers",
    img: mongodbImg,
    to: "/mongodb",
    description:
      "Learn how to work with MongoDB, a flexible NoSQL database. Understand schemas, CRUD operations, and data modeling.",
    duration: "1.5 Months",
    level: "Intermediate",
    topics: [
      "MongoDB Basics",
      "CRUD Operations",
      "Aggregation Pipeline",
      "Schema Design",
      "Indexes",
      "Mongoose (for Node.js)",
    ],
  },
];

const Course = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <>
      {
        <section className="py-20 bg-gray-900 relative">
          <h2 className="text-3xl text-sky-300 md:text-4xl font-bold text-center mb-8">
            Our Courses
          </h2>
          <div className="flex justify-center px-4">
            <p className="w-full text-gray-300 md:w-1/2 mb-10">
              The MERN stack course is a comprehensive web development program
              that teaches students how to build dynamic, full-stack web
              applications using four powerful technologies: MongoDB,
              Express.js, React.js, and Node.js. This course covers both
              frontend and backend development, starting with creating user
              interfaces in React, handling client-server communication with
              Express and Node.js, and managing data with MongoDB, a NoSQL
              database.
            </p>
          </div>
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-10 overflow-x-auto scroll-smooth no-scrollbar px-8 py-8"
            >
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="min-w-[240px] cursor-pointer max-w-xs bg-gray-700 rounded-2xl shadow-xl hover:scale-105 transition duration-700 flex-shrink-0"
                >
                  <Link to={course.to}>
                    <img
                      src={course.img}
                      alt={course.name}
                      className="w-full h-48 rounded-t-2xl"
                    />
                    <div className="p-6">
                      <h3 className="text-base text-2xl font-bold text-sky-300 mb-1">
                        {course.name}
                      </h3>
                      <p className="text-sm text-gray-200">
                        {course.description}
                      </p>
                      <div className="text-sm text-gray-200 mt-2">
                        <p>
                          <strong className="text-sky-300">Duration:</strong>{" "}
                          {course.duration}
                        </p>
                        <p>
                          <strong className="text-sky-300">Level:</strong>{" "}
                          {course.level}
                        </p>
                      </div>
                      <ul className="list-disc list-inside text-gray-200 text-sm mt-2">
                        {course.topics.slice(0, 3).map((topic, i) => (
                          <li key={i}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center">
              {/* Scroll Buttons */}
              <button
                onClick={() => scroll("left")}
                className="bg-gray-700 shadow-xl rounded-full p-2 hover:bg-gray-600"
              >
                <svg
                  className="w-6 h-6 text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={() => scroll("right")}
                className="ml-4 bg-gray-700 shadow-xl rounded-full p-2 hover:bg-gray-600"
              >
                <svg
                  className="w-6 h-6 text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      }
    </>
  );
};

export default Course;
