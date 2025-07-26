import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const TailwindTips = () => {
  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg my-20">
        {/* Title and Meta */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Tailwind Tips: Building Components Fast
          </h1>
          <div className="text-sm text-gray-500 flex gap-4 flex-wrap">
            <span>
              By <strong>Melvynn Authur</strong>
            </span>
            <span>• July 15, 2025</span>
            <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-md">
              TailwindCSS
            </span>
          </div>
        </div>

        {/* Dual-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Deep Dive Content */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Why TailwindCSS Speeds You Up
            </h2>
            <p className="text-gray-600 mb-4">
              Tailwind CSS is a utility-first CSS framework that allows you to rapidly build
              custom designs without leaving your HTML. With its atomic class approach, you no
              longer need to write custom CSS for layout and spacing unless necessary.
            </p>

            <p className="text-gray-600 mb-4">
              This means faster prototyping, cleaner codebases, and reusable design patterns across
              your application. Let’s explore how Tailwind enables quick and scalable UI
              development.
            </p>

            <pre className="bg-gray-800 text-green-400 p-4 rounded mb-4 text-sm overflow-x-auto">
{`<button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click Me
</button>`}
            </pre>

            <p className="text-gray-600 mb-4">
              The code above creates a styled button—no custom CSS needed. You get hover states,
              colors, spacing, and typography out of the box using utility classes.
            </p>

            <h2 className="text-xl font-semibold text-gray-700 mt-8 mb-3">Extracting Components</h2>
            <p className="text-gray-600 mb-4">
              You can extract common UI parts into components or template snippets to keep things
              dry:
            </p>

            <pre className="bg-gray-800 text-green-400 p-4 rounded mb-4 text-sm overflow-x-auto">
{`function PrimaryButton({ children }) {
  return (
    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
      {children}
    </button>
  );
}`}
            </pre>

            <p className="text-gray-600 mb-4">
              This way, your design tokens stay consistent while your components remain flexible
              and easy to reuse across pages.
            </p>

            <h2 className="text-xl font-semibold text-gray-700 mt-8 mb-3">Responsive Design</h2>
            <p className="text-gray-600 mb-4">
              Tailwind also provides responsive utility classes out of the box. For example:
            </p>

            <pre className="bg-gray-800 text-green-400 p-4 rounded mb-4 text-sm overflow-x-auto">
{`<div class="text-sm md:text-base lg:text-lg">
  Responsive text size
</div>`}
            </pre>

            <p className="text-gray-600 mb-4">
              With just a few class prefixes, your components adapt smoothly across devices
              without media query declarations.
            </p>
          </div>

          {/* Right Column - Use Cases and Highlights */}
          <div>
            <h3 className="text-xl font-bold text-gray-700 mb-4">When Should You Use Tailwind?</h3>
            <p className="text-gray-600 mb-4">
              Tailwind is great for:
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Rapid UI prototyping</li>
                <li>Component-based frameworks like React, Vue, or Svelte</li>
                <li>Design systems with consistent spacing and typography</li>
              </ul>
            </p>

            <h3 className="text-xl font-bold text-gray-700 mt-10 mb-4">Avoiding Class Bloat</h3>
            <p className="text-gray-600 mb-4">
              One common concern with Tailwind is long className strings. You can solve this with:
            </p>

            <ul className="list-disc list-inside ml-4 text-gray-600 space-y-1 mb-4">
              <li>Component extraction</li>
              <li>Utility helper libraries like <code className="bg-gray-100 px-1 rounded">clsx</code> or <code className="bg-gray-100 px-1 rounded">classnames</code></li>
              <li>Tailwind’s built-in <code className="bg-gray-100 px-1 rounded">@apply</code> directive</li>
            </ul>

            <pre className="bg-gray-800 text-green-400 p-4 rounded mb-4 text-sm overflow-x-auto">
{`.btn-primary {
  @apply bg-purple-600 text-white py-2 px-4 rounded;
}`}
            </pre>

            <p className="text-gray-600 mb-4">
              This helps keep your HTML lean while still benefiting from utility-first styles.
            </p>

            <div className="bg-gray-100 p-4 mt-8 rounded">
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Final Takeaway</h4>
              <p className="text-gray-600">
                Tailwind CSS makes building consistent, responsive UIs incredibly fast. Whether
                you’re a solo developer or working with a team, it keeps your workflow clean and
                your components reusable. Embrace utility-first and watch your development speed
                soar.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TailwindTips;
