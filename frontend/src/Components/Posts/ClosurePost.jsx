import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const BlogPost = () => {
  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg my-20">
        {/* Title and Meta */}
        <div className="mb-10 ">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Understanding Closures in JavaScript
          </h1>
          <div className="text-sm text-gray-500 flex gap-4 flex-wrap">
            <span>
              By <strong>Micheal Opare</strong>
            </span>
            <span>• July 25, 2025</span>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md">
              JavaScript
            </span>
          </div>
        </div>

        {/* Dual-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Deep Dive Content */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is a Closure?</h2>
            <p className="text-gray-600 mb-4">
              A closure is a combination of a function and the lexical environment within which
              that function was declared. This means the function remembers the variables from
              the place it was created, not where it is executed.
            </p>

            <p className="text-gray-600 mb-4">
              Closures give JavaScript developers powerful tools for encapsulation, state
              management, and functional programming patterns. Let’s break it down:
            </p>

            <pre className="bg-gray-800 text-green-400 p-4 rounded mb-4 text-sm overflow-x-auto">
{`function greet(message) {
  return function(name) {
    console.log(message + ', ' + name);
  };
}

const sayHello = greet("Hello");
sayHello("Oteng"); // Output: Hello, Oteng`}
            </pre>

            <p className="text-gray-600 mb-4">
              In the example above, `sayHello` still has access to the `message` variable even
              though `greet()` has finished execution. That’s a closure in action.
            </p>

            <h2 className="text-xl font-semibold text-gray-700 mt-8 mb-3">Why Are Closures Useful?</h2>
            <p className="text-gray-600 mb-4">
              Closures allow you to:
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Preserve state between function calls</li>
                <li>Simulate private variables</li>
                <li>Enable partial function application (currying)</li>
              </ul>
            </p>

            <h2 className="text-xl font-semibold text-gray-700 mt-8 mb-3">Simulating Private Variables</h2>
            <p className="text-gray-600 mb-4">
              Closures make it possible to protect variables from being accessed or modified directly:
            </p>

            <pre className="bg-gray-800 text-green-400 p-4 rounded mb-4 text-sm overflow-x-auto">
{`function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.getCount()); // 1`}
            </pre>

            <p className="text-gray-600 mb-4">
              Here, `count` is not accessible outside `createCounter`, but its value is safely modified via closures.
            </p>

            <h2 className="text-xl font-semibold text-gray-700 mt-8 mb-3">Closures in Loops</h2>
            <p className="text-gray-600 mb-4">
              Closures help fix common problems with loops and asynchronous functions:
            </p>

            <pre className="bg-gray-800 text-green-400 p-4 rounded mb-4 text-sm overflow-x-auto">
{`for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // Outputs 3, 3, 3
  }, 1000);
}`}

{`// Correct version using closure:
for (var i = 0; i < 3; i++) {
  ((j) => {
    setTimeout(() => {
      console.log(j); // Outputs 0, 1, 2
    }, 1000);
  })(i);
}`}
            </pre>
          </div>

          {/* Right Column - Use Cases and Highlights */}
          <div>
            <h3 className="text-xl font-bold text-gray-700 mb-4">Closures in the Real World</h3>
            <p className="text-gray-600 mb-4">
              Frameworks like React, Vue, and Svelte make heavy use of closures to manage internal
              states, event handlers, and scoped behavior.
            </p>

            <p className="text-gray-600 mb-4">
              Event listeners often rely on closures to remember data during DOM interaction:
            </p>

            <pre className="bg-gray-800 text-green-400 p-4 rounded mb-4 text-sm overflow-x-auto">
{`function setupButton(id) {
  let count = 0;
  document.getElementById(id).addEventListener("click", () => {
    count++;
    console.log("Clicked", count, "times");
  });
}

setupButton("myBtn");`}
            </pre>

            <p className="text-gray-600 mb-4">
              The `count` variable persists with every click because the event handler is a closure
              that retains access to `count`.
            </p>

            <h3 className="text-xl font-bold text-gray-700 mt-10 mb-4">Closures + Functional Programming</h3>
            <p className="text-gray-600 mb-4">
              Functional patterns like currying and memoization rely heavily on closures.
              Here's how currying works:
            </p>

            <pre className="bg-gray-800 text-green-400 p-4 rounded mb-4 text-sm overflow-x-auto">
{`function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const triple = multiply(3);
console.log(triple(10)); // 30`}
            </pre>

            <p className="text-gray-600 mb-4">
              `triple` remembers `a = 3` through closure, and applies it later when `b` is passed.
            </p>

            <div className="bg-gray-100 p-4 mt-8 rounded">
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Final Takeaway</h4>
              <p className="text-gray-600">
                Closures might seem confusing at first, but they unlock a powerful way of writing
                expressive, modular, and safe JavaScript. Mastering closures will make you a better
                developer—especially when building interactive UIs, using hooks, or architecting complex logic.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogPost;
