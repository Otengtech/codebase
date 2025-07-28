import React from "react";

const topicContents = {
  "HTML Introduction": {
    title: "HTML Introduction",
    content: (
      <div className="space-y-6">
        <div className="relative p-6 bg-gradient-to-br from-violet-700 to-purple-900 rounded-2xl shadow-xl text-white">
          <h2 className="text-3xl font-bold mb-2">What is HTML?</h2>
          <p className="text-lg">
            <strong>HTML (HyperText Markup Language)</strong> is the foundation
            of every webpage. It allows you to structure your content with
            elements like{" "}
            <code className="bg-white/10 px-1 rounded">headings</code>,{" "}
            <code className="bg-white/10 px-1 rounded">paragraphs</code>,{" "}
            <code className="bg-white/10 px-1 rounded">images</code>, and{" "}
            <code className="bg-white/10 px-1 rounded">links</code>.
          </p>
          <p className="text-lg">
            Think of HTML as the blueprint that gives your website structure.
            Browsers read HTML to display content to users.
          </p>
          {/* Decorative shape */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-xl opacity-60 animate-pulse"></div>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-purple-600">
            Basic HTML Example:
          </h3>
          <p>
            Below is a simple HTML document. Every webpage starts with{" "}
            <code>&lt;!DOCTYPE html&gt;</code> and contains the{" "}
            <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and{" "}
            <code>&lt;body&gt;</code> tags.
          </p>
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-violet-700 to-purple-900 p-4 text-green-200 text-sm shadow-lg">
            <pre>
              <code>{`<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Welcome to HTML</h1>
    <p>This is my first web page using HTML!</p>
  </body>
</html>`}</code>
            </pre>
          </div>
        </div>

        <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded-lg">
          <h4 className="text-xl font-medium text-purple-700">
            Why HTML is Important
          </h4>
          <ul className="list-disc ml-6 text-gray-800 mt-2 space-y-1">
            <li>It defines the structure of web content.</li>
            <li>Works hand-in-hand with CSS and JavaScript.</li>
            <li>Every web developer must learn HTML first.</li>
          </ul>
        </div>

        {/* Fun object */}
        <div className="flex justify-center mt-6">
          <div className="w-40 h-40 bg-gradient-to-tr from-purple-400 to-pink-600 rounded-full shadow-2xl flex items-center justify-center text-white font-bold text-lg transform hover:scale-105 transition duration-300">
            HTML = Structure 💡
          </div>
        </div>

        <div className="text-center text-gray-600">
          <p className="mt-4 italic">
            "HTML is not a programming language; it's a markup language!"
          </p>
        </div>
      </div>
    ),
  },
  "HTML Headings": {
    title: "HTML Headings",
    content: (
      <div className="space-y-4">
        <p>
          HTML headings are defined with the{" "}
          <code className="text-purple-300">&lt;h1&gt;</code> to{" "}
          <code className="text-purple-300">&lt;h6&gt;</code> tags.
          <br />
          <code className="text-purple-300">&lt;h1&gt;</code> defines the most
          important heading, and{" "}
          <code className="text-purple-300">&lt;h6&gt;</code> the least
          important.
        </p>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            <code>{`
<h1>This is a Heading 1</h1>
<h2>This is a Heading 2</h2>
<h3>This is a Heading 3</h3>
<h4>This is a Heading 4</h4>
<h5>This is a Heading 5</h5>
<h6>This is a Heading 6</h6>
            `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Paragraphs": {
    title: "HTML Paragraphs",
    content: (
      <div className="space-y-4">
        <p>
          HTML paragraphs are defined with the{" "}
          <code className="text-purple-300">&lt;p&gt;</code> tag. A paragraph
          always starts on a new line, and browsers automatically add some space
          before and after a paragraph.
        </p>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            <code>{`
<p>This is a paragraph of text in HTML.</p>
<p>This is another paragraph.</p>
            `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Links": {
    title: "HTML Links",
    content: (
      <div className="space-y-4">
        <p>
          HTML links are defined with the{" "}
          <code className="text-purple-300">&lt;a&gt;</code> tag. The{" "}
          <code className="text-purple-300">href</code> attribute specifies the
          URL of the page the link goes to.
        </p>
        <p>By default, links appear as underlined blue text.</p>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            <code>{`
<a href="https://www.w3schools.com">Visit W3Schools</a>
            `}</code>
          </pre>
        </div>
      </div>
    ),
  },
};

export default topicContents;
