import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUserCircle, FaClock, FaTag } from "react-icons/fa";
import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";
import closure from "../assets/closure.jpg";
import async from "../assets/async.png";
import flexbox from "../assets/flexbox.jpg";
import nodetips from "../assets/nodetips.jpg";
import responsive from "../assets/responsive.png";
import tips from "../assets/tips.webp";
import { Link } from "react-router-dom";
import Loader from "../Components/Home/Loader";

const blogPosts = [
  {
    title: "Understanding Closures in JavaScript",
    author: "Micheal Opare",
    date: "July 25, 2025",
    tag: "JavaScript",
    excerpt:
      "Closures are an important and often misunderstood concept in JavaScript. In this blog, we break them down simply...",
    image: closure,
    to: "/closurepost",
  },
  {
    title: "How Flexbox Works",
    author: "Bill Mosh",
    date: "July 20, 2025",
    tag: "CSS",
    excerpt:
      "Flexbox is a one-dimensional layout model that makes it easier to design flexible responsive layout structure...",
    image: flexbox,
    to: "/flexbox",
  },
  {
    title: "Tailwind Tips: Building Components Fast",
    author: "Melvynn Authur",
    date: "July 15, 2025",
    tag: "TailwindCSS",
    excerpt:
      "Tailwind CSS can significantly speed up development. Learn how to use utility-first classes to create reusable...",
    image: tips,
    to: "/tailwindtips",
  },
  {
    title: "Mastering Async/Await in JavaScript",
    author: "Oteng Ebenezer",
    date: "July 10, 2025",
    tag: "JavaScript",
    excerpt:
      "Understanding async/await helps you write cleaner asynchronous code. This post walks through practical examples...",
    image: async,
    to: "/async",
  },
  {
    title: "Responsive Design: Mobile-First Approach",
    author: "Jefferson Asuma",
    date: "July 5, 2025",
    tag: "Web Design",
    excerpt:
      "Designing for mobile-first ensures your site works on all devices. Learn how to build responsive layouts efficiently...",
    image: responsive,
    to: "/responsive",
  },
  {
    title: "Some tips and trick in NodeJS",
    author: "John Wayne",
    date: "July 1, 2025",
    tag: "NodeJS",
    excerpt:
      "Hooks like useState and useEffect are just the beginning. Explore lesser-known hooks that can supercharge your apps...",
    image: nodetips,
    to: "/nodetips",
  },
];

const Blog = () => {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    const timer = setTimeout(() => setLoader(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loader && <Loader />}
      <Navbar />
      {!loader && (
        <div>
          <div className="bg-gradient-to-r from-gray-900 to-violet-900 text-gray-100 py-28 px-6">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-bold text-sky-300 mb-4">
                CodeBase Blog
              </h1>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Dive into the latest articles, guides, and developer insights
                from the CodeBase community. Learn, share, and grow your skills.
              </p>
            </motion.div>

            <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
              {blogPosts.map((post, i) => (
                <Link to={post.to}>
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 120 }}
                    className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl cursor-pointer shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6 flex flex-col gap-3">
                      <span className="inline-block bg-sky-300 text-gray-900 text-xs font-bold px-3 py-1 rounded-full self-start">
                        {post.tag}
                      </span>
                      <h3 className="text-2xl font-semibold hover:text-sky-300 cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <FaUserCircle /> {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaClock /> {post.date}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Blog;
