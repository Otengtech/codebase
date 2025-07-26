import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const FlexboxBlogPost = () => {
  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg my-20">
        {/* Title and Meta */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            How Flexbox Works in CSS
          </h1>
          <div className="text-sm text-gray-500 flex gap-4 flex-wrap">
            <span>
              By <strong>Micheal Opare</strong>
            </span>
            <span>• July 25, 2025</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md">
              CSS
            </span>
          </div>
        </div>

        {/* Dual-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Deep Dive Content */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              What is Flexbox?
            </h2>
            <p className="text-gray-600 mb-4">
              Flexbox is a one-dimensional layout system in CSS that allows you to align,
              distribute, and space elements within a container, even when their size is dynamic.
              It simplifies complex layouts without using floats or positioning.
            </p>

            <p className="text-gray-600 mb-4">
              To start using Flexbox, you first define a flex container using <code className="bg-gray-100 px-1 rounded">display: flex</code>.
            </p>

            <pre className="bg-gray-800 text-green-400 p-4 rounded mb-4 text-sm overflow-x-auto">
{`<div class="flex-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<style>
  .flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>`}
            </pre>

            <p className="text-gray-600 mb-4">
              The items inside the container now behave as flex items, responding to spacing and alignment rules along the main and cross axes.
            </p>

            <h2 className="text-xl font-semibold text-gray-700 mt-8 mb-3">
              Key Properties of Flexbox
            </h2>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600 mb-4">
              <li>
                <code className="bg-gray-100 px-1 rounded">justify-content</code> – aligns items on the main axis.
              </li>
              <li>
                <code className="bg-gray-100 px-1 rounded">align-items</code> – aligns items on the cross axis.
              </li>
              <li>
                <code className="bg-gray-100 px-1 rounded">flex-direction</code> – sets the direction (row, column).
              </li>
              <li>
                <code className="bg-gray-100 px-1 rounded">flex-wrap</code> – allows items to wrap on multiple lines.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-700 mt-8 mb-3">
              Controlling Flex Items
            </h2>
            <p className="text-gray-600 mb-4">
              You can control individual item behavior using these properties:
            </p>

            <pre className="bg-gray-800 text-green-400 p-4 rounded mb-4 text-sm overflow-x-auto">
{`<style>
  .item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px;
  }
</style>`}
            </pre>

            <p className="text-gray-600 mb-4">
              <code className="bg-gray-100 px-1 rounded">flex-grow</code> allows items to grow to fill space, 
              <code className="bg-gray-100 px-1 rounded">flex-shrink</code> controls shrink behavior, and 
              <code className="bg-gray-100 px-1 rounded">flex-basis</code> sets the initial size.
            </p>
          </div>

          {/* Right Column - Use Cases and Highlights */}
          <div>
            <h3 className="text-xl font-bold text-gray-700 mb-4">Flexbox Use Cases</h3>
            <p className="text-gray-600 mb-4">
              Flexbox is perfect for building modern UI layouts like navigation bars, cards,
              sidebars, or content sections that adapt across screen sizes.
            </p>

            <p className="text-gray-600 mb-4">
              Here's how to center an item both vertically and horizontally:
            </p>

            <pre className="bg-gray-800 text-green-400 p-4 rounded mb-4 text-sm overflow-x-auto">
{`<div class="centered-box">
  <p>Centered Text</p>
</div>

<style>
  .centered-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }
</style>`}
            </pre>

            <p className="text-gray-600 mb-4">
              With just a few lines, Flexbox handles complex centering logic that would otherwise
              require additional hacks in older CSS approaches.
            </p>

            <h3 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Flexbox vs Grid
            </h3>
            <p className="text-gray-600 mb-4">
              While Flexbox is great for one-dimensional layouts (row or column), CSS Grid is
              better suited for two-dimensional layouts (rows + columns). Use Flexbox for simple
              alignment and spacing between elements in a single axis.
            </p>

            <div className="bg-gray-100 p-4 mt-8 rounded">
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Final Takeaway</h4>
              <p className="text-gray-600">
                Flexbox is an essential tool for any front-end developer. Its simplicity and
                versatility make it the default choice for aligning and spacing items in modern
                responsive designs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FlexboxBlogPost;
