import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import jsImg from "../assets/javascript.jpg";
import tailwindImg from "../assets/tailwind.webp";
import nodejsImg from "../assets/nodejs.png";
import mongodbImg from "../assets/mongodb.png";
import { Link } from "react-router-dom";
import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";
import Loader from "../Components/Home/Loader";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    const timer = setTimeout(() => setLoader(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {loader && <Loader />}
      <Navbar />
      {!loader && (
        <div>
          <section className="py-28 bg-gradient-to-r from-gray-900 to-violet-900 relative">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 px-4"
            >
              <h2 className="text-3xl text-sky-300 md:text-4xl font-bold text-center mb-4">
                Our Courses
              </h2>
              <div className="flex justify-center">
                <p className="w-full text-gray-300 md:w-1/2 mx-3 mb-6">
                  The MERN stack course is a comprehensive web development
                  program that teaches students how to build dynamic, full-stack
                  web applications using four powerful technologies: MongoDB,
                  Express.js, React.js, and Node.js.
                </p>
              </div>

              {/* Search Input */}
              <div className="flex justify-center mb-6">
                <div className="relative w-full max-w-md">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search courses..."
                    className="w-full py-2 pl-10 pr-4 rounded-lg bg-transparent border border-sky-200 text-sky-200 placeholder-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300"
                  />
                  <i className="fas fa-search absolute top-1/2 left-3 -translate-y-1/2 text-sky-300 pointer-events-none" />
                </div>
              </div>
            </motion.div>

            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-3 md:px-28 py-8">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-all duration-500"
                    >
                      <Link to={course.to}>
                        <img
                          src={course.img}
                          alt={course.name}
                          className="w-full h-48 rounded-t-2xl"
                        />
                        <div className="py-6">
                          <h3 className="text-base text-2xl font-bold text-sky-300 mb-1">
                            {course.name}
                          </h3>
                          <p className="text-sm text-gray-300">
                            {course.description}
                          </p>
                          <div className="text-sm text-gray-400 mt-2">
                            <p>
                              <strong className="text-sky-300">
                                Duration:
                              </strong>{" "}
                              {course.duration}
                            </p>
                            <p>
                              <strong className="text-sky-300">Level:</strong>{" "}
                              {course.level}
                            </p>
                          </div>
                          <ul className="list-disc list-inside text-gray-300 text-sm mt-2">
                            {course.topics.slice(0, 3).map((topic, i) => (
                              <li key={i}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                      </Link>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-sky-200 col-span-full">
                    No courses match your search.
                  </p>
                )}
              </div>
            </div>
          </section>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Course;
