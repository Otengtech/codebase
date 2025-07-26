import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const BlogPost = () => {
  return (
    <>
      <Navbar />
      <section className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-20">
        {/* Blog Info */}
        <div className="mt-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Mastering Async/Await in JavaScript
          </h1>
          <p className="text-sm text-gray-500">
            By <span className="font-semibold">Oteng Ebenezer</span> | July 10, 2025 |{" "}
            <span className="text-blue-600">#JavaScript</span>
          </p>
        </div>

        {/* Content */}
        <div className="mt-6 text-gray-700 space-y-4">
          <p>
            Understanding <code>async/await</code> in JavaScript is crucial for writing readable,
            maintainable asynchronous code. Instead of chaining multiple <code>.then()</code> blocks
            from promises, you can write code that looks synchronous but is non-blocking.
          </p>

          <p>
            An <code>async</code> function always returns a promise. Inside it, you can use{" "}
            <code>await</code> to pause the execution until a promise resolves.
          </p>

          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`async function fetchUserData() {
  try {
    const response = await fetch("https://api.example.com/user");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}`}
          </pre>

          <p>
            In the example above, using <code>await</code> makes our asynchronous code flow like
            synchronous code. This improves readability and error handling using <code>try/catch</code>.
          </p>

          <p>
            Async/await is especially powerful in modern applications dealing with multiple API
            calls, database operations, or timers. However, always ensure you’re handling errors
            properly to avoid unhandled promise rejections.
          </p>

          <p>
            Mastering this pattern will make you a better developer, especially when working with
            frameworks like React, Node.js, or even during backend integrations.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogPost;
