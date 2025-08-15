import React from "react";

const topicContents = {
  "CSS Home": {
    title: "CSS Home Setup",
    content: (
      <div className="space-y-6">
        {/* Introduction Section */}
        <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
          <h2 className="text-3xl font-bold mb-3 text-blue-700">
            Getting Started with CSS
          </h2>
          <p className="text-md">
            CSS (Cascading Style Sheets) is the language that makes your HTML
            pages look beautiful. It controls colors, layouts, fonts, spacing,
            and even animations.
          </p>
          <p className="text-md">
            Learning CSS is like learning how to decorate your house after
            building its walls with HTML — you make it appealing, organized, and
            user-friendly.
          </p>

          {/* Decorative Shape */}
          <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full opacity-30 blur-xl"></div>
        </div>

        {/* Why Learn CSS */}
        <div className="border-l-4 border-green-500 pl-5 bg-green-50 p-4 rounded-lg">
          <h4 className="text-xl font-medium text-green-700 mb-2">
            Why CSS is Important:
          </h4>
          <ul className="list-disc ml-5 text-gray-800 space-y-1">
            <li>Separates design from content for easier maintenance.</li>
            <li>Improves website accessibility and readability.</li>
            <li>Allows responsive design for mobile and desktop.</li>
            <li>Enables animations and smooth user experiences.</li>
          </ul>
        </div>

        {/* Ways to Add CSS */}
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-blue-600">
            Three Ways to Add CSS:
          </h3>
          <ol className="list-decimal ml-6 text-gray-700 space-y-2">
            <li>
              <strong>Inline CSS:</strong> Style applied directly to HTML
              elements via the <code>style</code> attribute.
            </li>
            <li>
              <strong>Internal CSS:</strong> CSS written inside a{" "}
              <code>&lt;style&gt;</code> tag in the HTML{" "}
              <code>&lt;head&gt;</code>.
            </li>
            <li>
              <strong>External CSS:</strong> A separate <code>.css</code> file
              linked to the HTML page (recommended).
            </li>
          </ol>
        </div>

        {/* Example External CSS Setup */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Example: Linking an External CSS File
          </h3>
          <div className="rounded-xl overflow-hidden overflow-x-auto bg-gradient-to-br from-blue-700 to-green-900 p-4 text-green-100 text-sm shadow-lg">
            <pre>
              <code>{`<!-- HTML File -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Styled Page</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <p>This is a styled paragraph.</p>
  </body>
</html>`}</code>
            </pre>
          </div>
          <div className="rounded-xl overflow-hidden overflow-x-auto bg-gradient-to-br from-green-700 to-blue-900 p-4 text-green-100 text-sm shadow-lg mt-4">
            <pre>
              <code>{`/* styles.css */
body {
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
}

h1 {
  color: #2b6cb0;
  text-align: center;
}

p {
  color: #333;
  font-size: 16px;
}`}</code>
            </pre>
          </div>
        </div>

        {/* CSS Core Concepts */}
        <div className="border-l-4 border-blue-500 pl-5 bg-blue-50 p-4 rounded-lg">
          <h4 className="text-xl font-medium text-blue-700 mb-2">
            Core CSS Concepts:
          </h4>
          <ul className="list-disc ml-5 text-gray-800 space-y-1">
            <li>
              <strong>Selectors:</strong> Choose which HTML elements to style.
            </li>
            <li>
              <strong>Properties:</strong> The style aspects you want to change
              (color, margin, etc.).
            </li>
            <li>
              <strong>Values:</strong> The settings for the properties (red,
              20px, bold, etc.).
            </li>
            <li>
              <strong>Box Model:</strong> Content, padding, border, and margin
              around elements.
            </li>
            <li>
              <strong>Responsive Design:</strong> Making your page adjust to
              different devices.
            </li>
          </ul>
        </div>

        {/* Learning Tips */}
        <div className="flex flex-col md:flex-row items-center gap-4 bg-white/10 p-6 rounded-2xl shadow-md border border-blue-200">
          <div className="flex-1 text-gray-700 space-y-2">
            <h4 className="text-lg font-semibold text-blue-700">
              CSS Learning Tips
            </h4>
            <ul className="list-disc ml-6 text-gray-800 text-sm space-y-1">
              <li>
                Start small — style headings, paragraphs, and backgrounds first.
              </li>
              <li>
                Experiment with colors and fonts to understand their impact.
              </li>
              <li>
                Use browser developer tools to inspect and modify styles live.
              </li>
              <li>Learn about CSS specificity and cascading rules.</li>
              <li>Practice responsive design using media queries.</li>
            </ul>
          </div>
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-700 rounded-full flex items-center justify-center text-white font-bold shadow-md">
            CSS
          </div>
        </div>

        {/* Final Study Note */}
        <div className="text-center text-gray-600">
          <p className="mt-6 italic">
            "CSS turns plain pages into beautiful experiences — master it, and
            you control the look and feel of the web."
          </p>
        </div>
      </div>
    ),
  },
  "CSS Introduction": {
    title: "CSS Introduction",
    content: (
      <div className="space-y-6">
        {/* Intro Section */}
        <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
          <h2 className="text-3xl font-bold mb-3 text-blue-700">
            What is CSS?
          </h2>
          <p>
            CSS (Cascading Style Sheets) is the language used to control the
            visual presentation of HTML documents. While HTML gives structure,
            CSS adds style — colors, layouts, fonts, animations, and more.
          </p>
          <p>
            Without CSS, websites would look plain and unstyled. With it, you
            can create beautiful, responsive, and engaging designs.
          </p>
          <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full opacity-30 blur-xl"></div>
        </div>

        {/* Why Learn */}
        <div className="border-l-4 border-blue-500 pl-5 bg-blue-50 p-4 rounded-lg">
          <h4 className="text-xl font-medium text-blue-700 mb-2">
            Why Learn CSS?
          </h4>
          <ul className="list-disc ml-5 space-y-1">
            <li>Separates design from content for better organization.</li>
            <li>Allows responsive designs for all devices.</li>
            <li>Enables animations, effects, and visual improvements.</li>
            <li>Essential for professional web development.</li>
          </ul>
        </div>

        {/* How CSS Works */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">
            How CSS Works:
          </h3>
          <p>
            CSS works by selecting HTML elements and applying style rules to
            them. Styles “cascade,” meaning that if there’s a conflict, the most
            specific rule wins.
          </p>
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-blue-700 to-blue-900 p-4 text-green-100 text-sm">
            <pre>
              <code>{`h1 {
  color: red;
  text-align: center;
}

p {
  font-size: 16px;
}`}</code>
            </pre>
          </div>
        </div>

        {/* Fun Note */}
        <div className="text-center text-gray-600 italic">
          "CSS is the paintbrush of the web — without it, pages are just
          blueprints."
        </div>
      </div>
    ),
  },
  "CSS Syntax": {
    title: "CSS Syntax",
    content: (
      <div className="space-y-6">
        {/* Intro */}
        <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
          <h2 className="text-3xl font-bold mb-3 text-indigo-700">
            Understanding CSS Syntax
          </h2>
          <p>
            CSS syntax is simple but powerful. A CSS rule consists of a selector
            and a declaration block containing properties and values.
          </p>
          <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-30 blur-xl"></div>
        </div>

        {/* Syntax Structure */}
        <div>
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            Basic Structure:
          </h3>
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-indigo-700 to-purple-900 p-4 text-green-100 text-sm">
            <pre>
              <code>{`selector {
  property: value;
}`}</code>
            </pre>
          </div>
        </div>

        {/* Example */}
        <div>
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            Example:
          </h3>
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-purple-700 to-indigo-900 p-4 text-green-100 text-sm">
            <pre>
              <code>{`p {
  color: blue;
  font-size: 18px;
}`}</code>
            </pre>
          </div>
        </div>

        {/* Key Points */}
        <div className="border-l-4 border-purple-500 pl-5 bg-purple-50 p-4 rounded-lg">
          <h4 className="text-xl font-medium text-purple-700 mb-2">
            Key Points:
          </h4>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              <strong>Selector:</strong> Targets the HTML element(s).
            </li>
            <li>
              <strong>Property:</strong> The style you want to change.
            </li>
            <li>
              <strong>Value:</strong> The setting for that property.
            </li>
            <li>
              Each declaration ends with a semicolon (<code>;</code>).
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  "CSS Selectors": {
    title: "CSS Selectors",
    content: (
      <div className="space-y-6">
        {/* Intro */}
        <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
          <h2 className="text-3xl font-bold mb-3 text-green-700">
            Mastering CSS Selectors
          </h2>
          <p>
            Selectors are patterns used to target HTML elements for styling. The
            better you understand selectors, the more precise and powerful your
            CSS will be.
          </p>
          <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-green-500 to-lime-500 rounded-full opacity-30 blur-xl"></div>
        </div>

        {/* Common Selectors */}
        <div>
          <h3 className="text-xl font-semibold text-green-600 mb-2">
            Common CSS Selectors:
          </h3>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>Type Selector:</strong> <code>p</code>, <code>h1</code> —
              selects all elements of that type.
            </li>
            <li>
              <strong>Class Selector:</strong> <code>.classname</code> — selects
              elements with a specific class.
            </li>
            <li>
              <strong>ID Selector:</strong> <code>#idname</code> — selects the
              element with that ID.
            </li>
            <li>
              <strong>Universal Selector:</strong> <code>*</code> — selects all
              elements.
            </li>
            <li>
              <strong>Group Selector:</strong> <code>h1, p</code> — applies
              styles to multiple selectors.
            </li>
          </ul>
        </div>

        {/* Example */}
        <div className="rounded-xl overflow-hidden bg-gradient-to-br from-green-700 to-lime-900 p-4 text-green-100 text-sm">
          <pre>
            <code>{`/* Class selector */
.button {
  background-color: blue;
  color: white;
}

/* ID selector */
#main-title {
  font-size: 24px;
  font-weight: bold;
}`}</code>
          </pre>
        </div>

        {/* Tip */}
        <div className="border-l-4 border-green-500 pl-5 bg-green-50 p-4 rounded-lg">
          <h4 className="text-xl font-medium text-green-700 mb-2">Pro Tip:</h4>
          <p>
            Overusing IDs for styling can lead to specificity issues. Prefer
            classes for reusable styles.
          </p>
        </div>
      </div>
    ),
  },
  "CSS Comments": {
    title: "CSS Comments",
    content: (
      <div className="space-y-6">
        {/* Intro */}
        <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
          <h2 className="text-3xl font-bold mb-3 text-pink-700">
            CSS Comments
          </h2>
          <p>
            Comments in CSS are ignored by the browser and are used to explain
            your code, leave notes, or temporarily disable styles without
            deleting them.
          </p>
          <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-full opacity-30 blur-xl"></div>
        </div>

        {/* Syntax */}
        <div>
          <h3 className="text-xl font-semibold text-pink-600 mb-2">Syntax:</h3>
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-pink-700 to-red-900 p-4 text-green-100 text-sm">
            <pre>
              <code>{`/* This is a CSS comment */`}</code>
            </pre>
          </div>
        </div>

        {/* Example */}
        <div>
          <h3 className="text-xl font-semibold text-pink-600 mb-2">Example:</h3>
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-red-700 to-pink-900 p-4 text-green-100 text-sm">
            <pre>
              <code>{`/* Main heading styles */
h1 {
  color: purple;
  font-size: 30px;
}

/* Navigation styles - temporary disabled
nav {
  background-color: black;
  color: white;
}
*/`}</code>
            </pre>
          </div>
        </div>

        {/* Best Practices */}
        <div className="border-l-4 border-pink-500 pl-5 bg-pink-50 p-4 rounded-lg">
          <h4 className="text-xl font-medium text-pink-700 mb-2">
            Best Practices:
          </h4>
          <ul className="list-disc ml-5 space-y-1">
            <li>Use comments to explain complex style rules.</li>
            <li>Keep them short and meaningful.</li>
            <li>Remove outdated comments to avoid confusion.</li>
          </ul>
        </div>
      </div>
    ),
  },
  "CSS Colors": {
  title: "CSS Colors",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-rose-700">
          CSS Colors
        </h2>
        <p>
          CSS colors define the look and feel of your design. You can set colors for text, backgrounds, borders, and more.
        </p>
        <p>
          Colors can be defined using names, HEX codes, RGB, RGBA, HSL, and HSLA values.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Formats */}
      <div className="border-l-4 border-rose-500 pl-5 bg-rose-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-rose-700 mb-2">Color Formats:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Color Names:</strong> <code>red</code>, <code>blue</code>, <code>green</code></li>
          <li><strong>HEX:</strong> <code>#ff0000</code></li>
          <li><strong>RGB:</strong> <code>rgb(255,0,0)</code></li>
          <li><strong>RGBA:</strong> <code>rgba(255,0,0,0.5)</code> (with transparency)</li>
          <li><strong>HSL:</strong> <code>hsl(0, 100%, 50%)</code></li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-rose-700 to-orange-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`h1 { color: red; }
p { color: #333333; }
div { background-color: rgba(0, 128, 0, 0.3); }`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Backgrounds": {
  title: "CSS Backgrounds",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-teal-700">
          CSS Backgrounds
        </h2>
        <p>
          The background properties in CSS allow you to add colors, images, gradients, and patterns behind elements.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-teal-500 pl-5 bg-teal-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-teal-700 mb-2">Common Properties:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li><code>background-color</code></li>
          <li><code>background-image</code></li>
          <li><code>background-repeat</code> (<em>repeat, no-repeat</em>)</li>
          <li><code>background-size</code> (<em>cover, contain</em>)</li>
          <li><code>background-position</code></li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-teal-700 to-blue-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`body {
  background-color: lightblue;
}

div {
  background-image: url('bg.jpg');
  background-size: cover;
  background-position: center;
}`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Borders": {
  title: "CSS Borders",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-amber-700">
          CSS Borders
        </h2>
        <p>
          Borders define the outline of an element. You can control their width, style, and color.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-amber-500 pl-5 bg-amber-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-amber-700 mb-2">Common Border Styles:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li><code>solid</code></li>
          <li><code>dotted</code></li>
          <li><code>dashed</code></li>
          <li><code>double</code></li>
          <li><code>none</code></li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-amber-700 to-yellow-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`p {
  border: 2px solid red;
}

div {
  border: 5px dashed blue;
  border-radius: 10px;
}`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Margins": {
  title: "CSS Margins",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-fuchsia-700">
          CSS Margins
        </h2>
        <p>
          Margins create space outside the border of an element, pushing it away from surrounding elements.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-fuchsia-500 pl-5 bg-fuchsia-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-fuchsia-700 mb-2">Margin Properties:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li><code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, <code>margin-left</code></li>
          <li><code>margin</code> (shorthand)</li>
          <li><code>auto</code> for centering</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-fuchsia-700 to-pink-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`div {
  margin: 20px;
}

p {
  margin: 10px 0;
}`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Padding": {
  title: "CSS Padding",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-emerald-700">
          CSS Padding
        </h2>
        <p>
          Padding is the space between the content of an element and its border, creating breathing room inside the element.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-emerald-500 pl-5 bg-emerald-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-emerald-700 mb-2">Padding Properties:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li><code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, <code>padding-left</code></li>
          <li><code>padding</code> (shorthand)</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-emerald-700 to-green-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`div {
  padding: 20px;
}

p {
  padding: 10px 5px;
}`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Height/Width": {
  title: "CSS Height and Width",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS Height & Width
        </h2>
        <p>
          The height and width properties control the size of an element’s box. You can set fixed, percentage, or auto values.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-indigo-500 pl-5 bg-indigo-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-indigo-700 mb-2">Common Units:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li><code>px</code> - pixels (fixed size)</li>
          <li><code>%</code> - percentage of parent element</li>
          <li><code>auto</code> - adjusts automatically</li>
          <li><code>vh/vw</code> - viewport height/width</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-indigo-700 to-purple-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`div {
  width: 300px;
  height: 200px;
}

section {
  width: 80%;
  height: auto;
}`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Box Model": {
  title: "CSS Box Model",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-teal-700">
          CSS Box Model
        </h2>
        <p>
          The CSS Box Model explains how every element on a web page is a rectangular box consisting of margins, borders, padding, and content. Understanding it is key to precise layout control.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Structure */}
      <div className="border-l-4 border-teal-500 pl-5 bg-teal-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-teal-700 mb-2">Box Model Parts:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Content</strong> - The actual text, image, or media inside the box.</li>
          <li><strong>Padding</strong> - Space between content and border.</li>
          <li><strong>Border</strong> - Surrounds the padding and content.</li>
          <li><strong>Margin</strong> - Space between the element and surrounding elements.</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-teal-700 to-green-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`div {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Outline": {
  title: "CSS Outline",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-orange-700">
          CSS Outline
        </h2>
        <p>
          An outline is a line drawn outside an element’s border. Unlike borders, outlines do not take up space and can be used for focus or highlighting.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-orange-500 pl-5 bg-orange-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-orange-700 mb-2">Common Properties:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li><code>outline-style</code> - solid, dashed, dotted, none</li>
          <li><code>outline-width</code> - thin, medium, thick, px value</li>
          <li><code>outline-color</code> - color name, hex, rgb</li>
          <li><code>outline-offset</code> - space between outline and border</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-orange-700 to-red-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`button {
  outline: 3px solid blue;
  outline-offset: 5px;
}`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Text": {
  title: "CSS Text",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-purple-700">
          CSS Text
        </h2>
        <p>
          CSS text properties allow you to style, align, and decorate text for better readability and design aesthetics.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-purple-500 pl-5 bg-purple-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-purple-700 mb-2">Common Text Properties:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li><code>color</code> - sets text color</li>
          <li><code>text-align</code> - left, right, center, justify</li>
          <li><code>text-transform</code> - uppercase, lowercase, capitalize</li>
          <li><code>text-decoration</code> - underline, overline, line-through, none</li>
          <li><code>letter-spacing</code> & <code>word-spacing</code></li>
          <li><code>line-height</code> - space between lines</li>
          <li><code>text-shadow</code> - adds shadow effects</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-purple-700 to-pink-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`p {
  color: #333;
  text-align: center;
  text-transform: uppercase;
  text-decoration: underline;
  line-height: 1.5;
}`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Fonts": {
  title: "CSS Fonts",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-blue-700">
          CSS Fonts
        </h2>
        <p>
          CSS font properties control the appearance of text, including typeface, size, weight, and style. You can use system fonts or web fonts.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-blue-500 pl-5 bg-blue-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-blue-700 mb-2">Common Font Properties:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li><code>font-family</code> - primary and fallback fonts</li>
          <li><code>font-size</code> - px, em, rem, %</li>
          <li><code>font-weight</code> - normal, bold, 100–900</li>
          <li><code>font-style</code> - normal, italic, oblique</li>
          <li><code>font-variant</code> - small-caps</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-blue-700 to-cyan-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`body {
  font-family: "Arial", sans-serif;
  font-size: 16px;
  font-weight: bold;
}`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Icons": {
  title: "CSS Icons",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-pink-700">
          CSS Icons
        </h2>
        <p>
          Icons can be added using icon fonts, SVGs, or images. CSS helps position and style them for various UI elements.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Methods */}
      <div className="border-l-4 border-pink-500 pl-5 bg-pink-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-pink-700 mb-2">Common Methods:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li>Font icons (Font Awesome, Bootstrap Icons)</li>
          <li>Inline SVGs</li>
          <li>Background-image icons</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-pink-700 to-red-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
<i class="fa fa-home"></i>`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Links": {
  title: "CSS Links",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-green-700">
          CSS Links
        </h2>
        <p>
          Links can be styled for different states: unvisited, visited, hover, and active. Use pseudo-classes to apply styles based on interaction.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* States */}
      <div className="border-l-4 border-green-500 pl-5 bg-green-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-green-700 mb-2">Pseudo-Classes:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li><code>:link</code> - default state</li>
          <li><code>:visited</code> - after the link is clicked</li>
          <li><code>:hover</code> - when the mouse is over</li>
          <li><code>:active</code> - when the link is being clicked</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-green-700 to-emerald-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`a:link { color: blue; }
a:visited { color: purple; }
a:hover { color: red; }
a:active { color: orange; }`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Lists": {
  title: "CSS Lists",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS Lists
        </h2>
        <p>
          Lists can be customized with different markers, images, and positioning. CSS allows styling both ordered and unordered lists.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-indigo-500 pl-5 bg-indigo-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-indigo-700 mb-2">Common Properties:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li><code>list-style-type</code> - disc, circle, square, decimal, roman</li>
          <li><code>list-style-position</code> - inside, outside</li>
          <li><code>list-style-image</code> - custom image for bullets</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-indigo-700 to-purple-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`ul {
  list-style-type: square;
  list-style-position: inside;
}

ol {
  list-style-type: upper-roman;
}`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Tables": {
  title: "CSS Tables",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS Tables
        </h2>
        <p>
          CSS lets you style HTML tables with control over borders, spacing, alignment, and background colors for better readability.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-indigo-500 pl-5 bg-indigo-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-indigo-700 mb-2">Common Properties:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li><code>border-collapse</code> - separate or collapse borders</li>
          <li><code>border-spacing</code> - space between cells</li>
          <li><code>table-layout</code> - auto or fixed</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-indigo-700 to-purple-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 8px;
  border: 1px solid #ccc;
}`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Max-width": {
  title: "CSS Max-width",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS Max-width
        </h2>
        <p>
          The max-width property sets the maximum width of an element, ensuring it doesn't grow beyond a set limit while remaining responsive.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-indigo-500 pl-5 bg-indigo-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-indigo-700 mb-2">Usage:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li><code>max-width: value;</code> - e.g., px, %, em, rem</li>
          <li>Commonly used with responsive images and layouts</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-indigo-700 to-purple-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`img {
  max-width: 100%;
  height: auto;
}`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Position": {
  title: "CSS Position",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS Position
        </h2>
        <p>
          The position property defines how an element is placed in the document flow and how it is positioned relative to other elements.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-indigo-500 pl-5 bg-indigo-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-indigo-700 mb-2">Common Values:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li><code>static</code> - default positioning</li>
          <li><code>relative</code> - positioned relative to its normal spot</li>
          <li><code>absolute</code> - positioned relative to nearest positioned ancestor</li>
          <li><code>fixed</code> - positioned relative to viewport</li>
          <li><code>sticky</code> - toggles between relative and fixed</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-indigo-700 to-purple-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`div {
  position: absolute;
  top: 20px;
  left: 50px;
}`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Overflow": {
  title: "CSS Overflow",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS Overflow
        </h2>
        <p>
          The overflow property controls what happens when content is too big for its container.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-indigo-500 pl-5 bg-indigo-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-indigo-700 mb-2">Common Values:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li><code>visible</code> - content is not clipped</li>
          <li><code>hidden</code> - content is clipped</li>
          <li><code>scroll</code> - adds scrollbars</li>
          <li><code>auto</code> - adds scrollbars when needed</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-indigo-700 to-purple-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`div {
  overflow: auto;
}`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Float": {
  title: "CSS Float",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS Float
        </h2>
        <p>
          The float property moves elements to the left or right, allowing text and inline elements to wrap around them.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-indigo-500 pl-5 bg-indigo-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-indigo-700 mb-2">Common Values:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li><code>left</code> - floats element to the left</li>
          <li><code>right</code> - floats element to the right</li>
          <li><code>none</code> - default, no float</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-indigo-700 to-purple-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`img {
  float: right;
  margin-left: 10px;
}`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Inline-Block": {
  title: "CSS Inline-Block",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS Inline-Block
        </h2>
        <p>
          The inline-block value lets elements sit inline while still accepting width, height, and margin properties like block elements.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-indigo-500 pl-5 bg-indigo-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-indigo-700 mb-2">Key Features:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li>Flows inline like text</li>
          <li>Supports block properties</li>
          <li>Does not start on a new line</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-indigo-700 to-purple-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`span {
  display: inline-block;
  width: 100px;
  height: 50px;
}`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Align": {
  title: "CSS Align",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS Align
        </h2>
        <p>
          CSS alignment properties help position elements horizontally and vertically within their containers.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-indigo-500 pl-5 bg-indigo-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-indigo-700 mb-2">Common Techniques:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li><code>text-align</code> - aligns inline content horizontally</li>
          <li><code>vertical-align</code> - aligns inline or table-cell elements vertically</li>
          <li><code>align-items</code> &amp; <code>justify-content</code> - used in flexbox</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-indigo-700 to-purple-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`.container {
  display: flex;
  align-items: center;
  justify-content: center;
}`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Combinators": {
  title: "CSS Combinators",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS Combinators
        </h2>
        <p>
          CSS combinators define relationships between selectors, allowing you to target elements based on their position in the HTML hierarchy.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-indigo-500 pl-5 bg-indigo-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-indigo-700 mb-2">Types:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li><code>descendant (space)</code> - targets all nested elements</li>
          <li><code>child (>)</code> - targets direct children</li>
          <li><code>adjacent sibling (+)</code> - targets the element immediately after</li>
          <li><code>general sibling (~)</code> - targets all siblings after</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-indigo-700 to-purple-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`div p { color: red; }
div > p { color: blue; }
h1 + p { color: green; }
h1 ~ p { color: orange; }`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Pseudo-classes": {
  title: "CSS Pseudo-classes",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS Pseudo-classes
        </h2>
        <p>
          Pseudo-classes define the special state of an element, such as when a user hovers over it or when it’s the first child of its parent.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-indigo-500 pl-5 bg-indigo-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-indigo-700 mb-2">Common Examples:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li><code>:hover</code> - mouse over element</li>
          <li><code>:first-child</code> - first child of parent</li>
          <li><code>:last-child</code> - last child of parent</li>
          <li><code>:focus</code> - element in focus</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-indigo-700 to-purple-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`a:hover { color: red; }
p:first-child { font-weight: bold; }`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Pseudo-elements": {
  title: "CSS Pseudo-elements",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS Pseudo-elements
        </h2>
        <p>
          Pseudo-elements allow you to style specific parts of an element, such as the first letter or content before/after it.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-indigo-500 pl-5 bg-indigo-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-indigo-700 mb-2">Common Examples:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li><code>::first-letter</code> - styles first letter</li>
          <li><code>::first-line</code> - styles first line</li>
          <li><code>::before</code> - inserts content before</li>
          <li><code>::after</code> - inserts content after</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-indigo-700 to-purple-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`p::first-letter { font-size: 2em; }
p::after { content: "✓"; color: green; }`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Opacity": {
  title: "CSS Opacity",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS Opacity
        </h2>
        <p>
          The opacity property sets the transparency level of an element, affecting both its content and background.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-indigo-500 pl-5 bg-indigo-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-indigo-700 mb-2">Usage:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li>Values range from <code>0</code> (transparent) to <code>1</code> (opaque)</li>
          <li>Applies to the entire element</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-indigo-700 to-purple-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`div {
  opacity: 0.5;
}`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Navigation Bar": {
  title: "CSS Navigation Bar",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS Navigation Bar
        </h2>
        <p>
          A navigation bar is a menu of links for website navigation. CSS styles it for layout, spacing, and hover effects.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-indigo-500 pl-5 bg-indigo-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-indigo-700 mb-2">Styling Tips:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li>Use <code>display: flex;</code> for horizontal menus</li>
          <li>Add <code>:hover</code> effects for interaction</li>
          <li>Remove default list styles</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-indigo-700 to-purple-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`nav ul {
  display: flex;
  list-style: none;
}

nav a:hover {
  color: red;
}`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Dropdowns": {
  title: "CSS Dropdowns",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS Dropdowns
        </h2>
        <p>
          A dropdown menu reveals additional links or content when hovered over or clicked.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-indigo-500 pl-5 bg-indigo-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-indigo-700 mb-2">Common Techniques:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li>Use <code>position: relative;</code> for parent</li>
          <li>Dropdown content <code>position: absolute;</code></li>
          <li>Hide/show with <code>display</code> or <code>opacity</code></li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-indigo-700 to-purple-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`.dropdown:hover .dropdown-content {
  display: block;
}`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Image Gallery": {
  title: "CSS Image Gallery",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS Image Gallery
        </h2>
        <p>
          An image gallery displays multiple images in a grid or layout, often with hover effects and responsiveness.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-indigo-500 pl-5 bg-indigo-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-indigo-700 mb-2">Styling Tips:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li>Use CSS Grid or Flexbox for layout</li>
          <li>Add hover effects for interactivity</li>
          <li>Make it responsive with <code>max-width</code></li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-indigo-700 to-purple-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Rounded Corners": {
  title: "CSS Rounded Corners",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">CSS Rounded Corners</h2>
        <p className="text-base leading-relaxed">
          CSS rounded corners allow you to soften the edges of elements, making them more visually appealing.
          This is achieved using the <code>border-radius</code> property.
        </p>
      </div>

      {/* Syntax */}
      <div className="relative rounded-2xl bg-blue-50 p-6 text-gray-700 shadow-md">
        <h3 className="text-xl font-semibold mb-2 text-indigo-700">Syntax</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          border-radius: value;
        </pre>
        <p className="mt-2">
          The value can be in <code>px</code>, <code>%</code>, or <code>em</code>.
        </p>
      </div>

      {/* Examples */}
      <div className="relative rounded-2xl bg-green-50 p-6 text-gray-700 shadow-md">
        <h3 className="text-xl font-semibold mb-2 text-green-700">Examples</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          {`/* Rounded corners on all sides */
.box {
  border-radius: 10px;
}

/* Circle shape */
.circle {
  border-radius: 50%;
}

/* Different radius for each corner */
.custom {
  border-radius: 10px 20px 30px 40px;
}`}
        </pre>
      </div>

      {/* Notes */}
      <div className="relative rounded-2xl bg-yellow-50 p-6 text-gray-700 shadow-md">
        <h3 className="text-xl font-semibold mb-2 text-yellow-700">Important Notes</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Percentages are based on the element's dimensions.</li>
          <li><code>border-radius: 50%</code> makes a perfect circle if width and height are equal.</li>
          <li>Works with images, buttons, divs, and more.</li>
        </ul>
      </div>
    </div>
  )
},
"CSS Border Images": {
  title: "CSS Border Images",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-green-700">
          CSS Border Images
        </h2>
        <p>
          The <code>border-image</code> property lets you use an image instead of a solid color or gradient for element borders.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-green-500 to-lime-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-green-500 pl-5 bg-green-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-green-700 mb-2">Key Properties:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li><code>border-image-source</code> - image URL</li>
          <li><code>border-image-slice</code> - how to slice the image</li>
          <li><code>border-image-repeat</code> - stretch, repeat, round</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-green-700 to-lime-900 p-4 text-green-100 text-sm">
        <pre>
          <code>{`div {
  border: 10px solid transparent;
  border-image: url(border.png) 30 round;
}`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Multiple Backgrounds": {
  title: "CSS Multiple Backgrounds",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-teal-700">
          CSS Multiple Backgrounds
        </h2>
        <p>
          You can set multiple background images on one element by separating them with commas.
          Each can have its own size, position, and repeat properties.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-teal-500 pl-5 bg-teal-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-teal-700 mb-2">Key Properties:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li><code>background-image</code> - list of images</li>
          <li><code>background-position</code> - one value per image</li>
          <li><code>background-size</code> - scale each background</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-teal-700 to-cyan-900 p-4 text-teal-100 text-sm">
        <pre>
          <code>{`div {
  background-image: url(bg1.png), url(bg2.png);
  background-position: top left, bottom right;
  background-repeat: no-repeat, repeat;
}`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Gradients": {
  title: "CSS Gradients",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-pink-700">
          CSS Gradients
        </h2>
        <p>
          Gradients create smooth transitions between colors without using images.
          You can use linear, radial, or conic gradients for creative backgrounds.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-pink-500 pl-5 bg-pink-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-pink-700 mb-2">Gradient Types:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li>Linear Gradient</li>
          <li>Radial Gradient</li>
          <li>Conic Gradient</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-pink-700 to-rose-900 p-4 text-pink-100 text-sm">
        <pre>
          <code>{`div {
  background: linear-gradient(to right, red, yellow);
}

section {
  background: radial-gradient(circle, blue, white);
}`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Shadows": {
  title: "CSS Shadows",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-gray-700">
          CSS Shadows
        </h2>
        <p>
          Shadows add depth to elements. Use <code>box-shadow</code> for elements and
          <code>text-shadow</code> for text.
        </p>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-gray-500 to-black rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Properties */}
      <div className="border-l-4 border-gray-500 pl-5 bg-gray-50 p-4 rounded-lg">
        <h4 className="text-xl font-medium text-gray-700 mb-2">Key Properties:</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li>Horizontal offset</li>
          <li>Vertical offset</li>
          <li>Blur radius</li>
          <li>Color</li>
        </ul>
      </div>

      {/* Example */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-700 to-black p-4 text-gray-100 text-sm">
        <pre>
          <code>{`div {
  box-shadow: 5px 5px 15px rgba(0,0,0,0.3);
}

h1 {
  text-shadow: 2px 2px 4px #999;
}`}</code>
        </pre>
      </div>
    </div>
  )
},
"CSS Text Effects": {
  title: "CSS Text Effects",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS Text Effects
        </h2>
        <p>
          CSS provides many creative ways to style and enhance text on a webpage. 
          Text effects can be used to make content visually engaging, highlight 
          important information, or create interactive design elements.
        </p>
      </div>

      {/* Common Effects */}
      <div className="relative rounded-2xl bg-white/5 p-6 shadow-md">
        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Common Text Effects</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><b>Text Shadow:</b> Adds shadows to text for depth or glow effects.</li>
          <li><b>Text Overflow:</b> Handles overflowing text with ellipsis (...) or clipping.</li>
          <li><b>Text Transform:</b> Changes text case to uppercase, lowercase, or capitalize.</li>
          <li><b>Letter Spacing:</b> Adjusts space between letters.</li>
          <li><b>Word Spacing:</b> Adjusts space between words.</li>
        </ul>
      </div>

      {/* Example */}
      <div className="relative rounded-2xl bg-white/5 p-6 shadow-md">
        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Example</h3>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto">
{`h1 {
  text-shadow: 2px 2px 5px gray;
  letter-spacing: 2px;
  text-transform: uppercase;
}`}
        </pre>
      </div>
    </div>
  )
},
"CSS Web Fonts": {
  title: "CSS Web Fonts",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS Web Fonts
        </h2>
        <p>
          Web fonts allow you to use fonts that are not installed on the user’s 
          computer. With services like Google Fonts, you can enhance typography 
          without relying on system fonts.
        </p>
      </div>

      {/* Benefits */}
      <div className="relative rounded-2xl bg-white/5 p-6 shadow-md">
        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Benefits of Web Fonts</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Consistent typography across all devices.</li>
          <li>Large selection of styles and weights.</li>
          <li>No need for users to install fonts manually.</li>
        </ul>
      </div>

      {/* Example */}
      <div className="relative rounded-2xl bg-white/5 p-6 shadow-md">
        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Example using Google Fonts</h3>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto">
{`@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}`}
        </pre>
      </div>
    </div>
  )
},
"CSS 3D Transforms": {
  title: "CSS 3D Transforms",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS 3D Transforms
        </h2>
        <p>
          3D transforms extend the capabilities of 2D transforms by adding depth 
          (Z-axis), enabling you to create more immersive visual effects.
        </p>
      </div>

      {/* Functions */}
      <div className="relative rounded-2xl bg-white/5 p-6 shadow-md">
        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Common 3D Transform Functions</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><b>rotateX(angle):</b> Rotates an element around the X-axis.</li>
          <li><b>rotateY(angle):</b> Rotates an element around the Y-axis.</li>
          <li><b>rotateZ(angle):</b> Rotates an element around the Z-axis.</li>
          <li><b>translateZ(length):</b> Moves an element along the Z-axis.</li>
        </ul>
      </div>

      {/* Example */}
      <div className="relative rounded-2xl bg-white/5 p-6 shadow-md">
        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Example</h3>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto">
{`div {
  transform: rotateY(60deg) translateZ(50px);
  transform-style: preserve-3d;
}`}
        </pre>
      </div>
    </div>
  )
},
"CSS Transitions": {
  title: "CSS Transitions",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS Transitions
        </h2>
        <p>
          CSS transitions allow property changes in CSS values to occur smoothly 
          over a specified duration, enhancing interactivity without JavaScript.
        </p>
      </div>

      {/* Syntax */}
      <div className="relative rounded-2xl bg-white/5 p-6 shadow-md">
        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Syntax</h3>
        <p>
          <code>transition: property duration timing-function delay;</code>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><b>property:</b> The CSS property to animate.</li>
          <li><b>duration:</b> How long the transition lasts.</li>
          <li><b>timing-function:</b> The speed curve (ease, linear, ease-in-out).</li>
          <li><b>delay:</b> Time before starting.</li>
        </ul>
      </div>

      {/* Example */}
      <div className="relative rounded-2xl bg-white/5 p-6 shadow-md">
        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Example</h3>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto">
{`button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: red;
}`}
        </pre>
      </div>
    </div>
  )
},
"CSS Animations": {
  title: "CSS Animations",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS Animations
        </h2>
        <p>
          CSS Animations allow you to change property values smoothly over a specified duration 
          without using JavaScript. You can animate colors, positions, sizes, rotations, and more.
        </p>
      </div>

      {/* How It Works */}
      <div className="relative rounded-2xl bg-blue-50 p-6 shadow">
        <h3 className="text-xl font-semibold text-blue-700">How It Works</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Define a set of styles using <code>@keyframes</code>.</li>
          <li>Assign the animation to an element using the <code>animation</code> property.</li>
          <li>Control duration, timing, delay, iteration, and direction.</li>
        </ul>
      </div>

      {/* Example */}
      <div className="relative rounded-2xl bg-green-50 p-6 shadow">
        <h3 className="text-xl font-semibold text-green-700">Example</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`/* Define animation */
@keyframes slideIn {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

/* Apply animation */
.box {
  animation: slideIn 1s ease-out forwards;
}`}
        </pre>
      </div>
    </div>
  ),
},
"CSS Tooltips": {
  title: "CSS Tooltips",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS Tooltips
        </h2>
        <p>
          A tooltip is a small text box that appears when the user hovers over an element, 
          providing additional information without cluttering the UI.
        </p>
      </div>

      {/* Basic Tooltip */}
      <div className="relative rounded-2xl bg-yellow-50 p-6 shadow">
        <h3 className="text-xl font-semibold text-yellow-700">Basic Tooltip</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`.tooltip {
  position: relative;
  cursor: pointer;
}

.tooltip::after {
  content: "Tooltip text";
  position: absolute;
  background: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip:hover::after {
  opacity: 1;
}`}
        </pre>
      </div>
    </div>
  ),
},
"CSS Style Images": {
  title: "CSS Style Images",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS Style Images
        </h2>
        <p>
          CSS allows you to enhance and manipulate images using properties like borders, shadows, 
          filters, and hover effects, without editing the image itself.
        </p>
      </div>

      {/* Examples */}
      <div className="relative rounded-2xl bg-purple-50 p-6 shadow">
        <h3 className="text-xl font-semibold text-purple-700">Examples</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`img {
  border-radius: 10px;     /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);  /* Shadow effect */
  filter: grayscale(50%);  /* Black and white effect */
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.05);  /* Zoom in */
  filter: grayscale(0%);
}`}
        </pre>
      </div>
    </div>
  ),
},
"CSS Object-fit": {
  title: "CSS Object-fit",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS Object-fit
        </h2>
        <p>
          The <code>object-fit</code> property defines how an image or video should be resized to 
          fit its container, without distorting the aspect ratio.
        </p>
      </div>

      {/* Common Values */}
      <div className="relative rounded-2xl bg-pink-50 p-6 shadow">
        <h3 className="text-xl font-semibold text-pink-700">Common Values</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li><code>fill</code> - Stretches to fill container (may distort).</li>
          <li><code>contain</code> - Fits inside container, preserving aspect ratio.</li>
          <li><code>cover</code> - Fills container, may crop.</li>
          <li><code>none</code> - No resizing.</li>
          <li><code>scale-down</code> - Similar to <code>none</code> or <code>contain</code>, whichever is smaller.</li>
        </ul>
      </div>

      {/* Example */}
      <div className="relative rounded-2xl bg-green-50 p-6 shadow">
        <h3 className="text-xl font-semibold text-green-700">Example</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}`}
        </pre>
      </div>
    </div>
  ),
},
"CSS Responsive Web Design": {
  title: "CSS Responsive Web Design",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS Responsive Web Design
        </h2>
        <p>
          Responsive Web Design (RWD) is an approach to web development that ensures
          a website's layout and content automatically adjust to fit different screen
          sizes and devices. It provides a seamless user experience on desktops,
          tablets, and smartphones without needing separate versions of a site.
        </p>
        <p>
          With RWD, layouts are fluid, images are flexible, and styles are
          adapted using CSS techniques like media queries, flexible grids,
          and responsive images.
        </p>
      </div>

      {/* Key Concepts */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h3 className="text-2xl font-semibold mb-3 text-indigo-700">Core Features</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Flexible layouts using relative units like percentages and ems.</li>
          <li>Responsive images that scale according to their container.</li>
          <li>CSS media queries to adapt designs to specific device widths.</li>
          <li>Mobile-first design approach for better performance.</li>
        </ul>
      </div>

      {/* Example */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h3 className="text-2xl font-semibold mb-3 text-indigo-700">Example</h3>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-xl overflow-x-auto text-sm">
{`img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  body {
    background-color: lightblue;
  }
}`}
        </pre>
      </div>
    </div>
  )
},
"RWD Introduction": {
  title: "RWD Introduction",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">RWD Introduction</h2>
        <p>
          Responsive Web Design (RWD) ensures that a website looks and functions
          well on all devices — from large desktop monitors to small smartphones.
          Instead of building separate sites for each device type, RWD uses fluid
          grids, flexible images, and CSS media queries to adjust layouts dynamically.
        </p>
      </div>

      {/* Advantages */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h3 className="text-2xl font-semibold mb-3 text-indigo-700">Why Use RWD?</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Improves user experience across devices.</li>
          <li>Eliminates the need for multiple website versions.</li>
          <li>Helps with SEO — Google recommends responsive design.</li>
          <li>Adapts to future devices automatically.</li>
        </ul>
      </div>
    </div>
  )
},
"RWD Viewport": {
  title: "RWD Viewport",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">RWD Viewport</h2>
        <p>
          The viewport is the user's visible area of a web page. For responsive
          designs, you must set the viewport so browsers render pages correctly
          on all devices. Without this, pages may be zoomed out or poorly scaled.
        </p>
      </div>

      {/* Meta Tag */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h3 className="text-2xl font-semibold mb-3 text-indigo-700">Meta Tag Example</h3>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-xl overflow-x-auto text-sm">
{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
        </pre>
        <p className="mt-2">
          <strong>width=device-width</strong> sets the page width to match the
          device's screen width, and <strong>initial-scale=1.0</strong> sets the
          initial zoom level.
        </p>
      </div>
    </div>
  )
},
"CSS Grid View": {
  title: "CSS Grid View",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">CSS Grid View</h2>
        <p>
          CSS Grid Layout is a powerful 2D layout system that allows developers
          to arrange content in rows and columns. It's perfect for creating
          complex, responsive layouts with ease.
        </p>
      </div>

      {/* Example */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h3 className="text-2xl font-semibold mb-3 text-indigo-700">Example</h3>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-xl overflow-x-auto text-sm">
{`.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.grid-item {
  background-color: lightblue;
  padding: 20px;
  text-align: center;
}`}
        </pre>
      </div>
    </div>
  )
},
"CSS Flexbox": {
  title: "CSS Flexbox",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">CSS Flexbox</h2>
        <p>
          CSS Flexbox is a layout model that makes it easy to align and distribute
          space among items in a container, even when their sizes are unknown.
          It's particularly useful for creating responsive and dynamic layouts.
        </p>
      </div>

      {/* Example */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h3 className="text-2xl font-semibold mb-3 text-indigo-700">Example</h3>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-xl overflow-x-auto text-sm">
{`.flex-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.flex-item {
  background-color: lightgreen;
  padding: 20px;
}`}
        </pre>
      </div>
    </div>
  )
},
"CSS Grid Layout": {
  title: "CSS Grid Layout",
  content: (
    <div className="space-y-6">
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">CSS Grid Layout</h2>
        <p>
          CSS Grid Layout is a two-dimensional layout system for the web. It allows you to arrange elements
          into rows and columns, making complex designs easier to create and maintain.
        </p>
      </div>
    </div>
  ),
},
"CSS Grid Introduction": {
  title: "CSS Grid Introduction",
  content: (
    <div className="space-y-6">
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">CSS Grid Introduction</h2>
        <p>
          The CSS Grid Introduction covers the basics of using the grid system, including defining containers,
          setting rows and columns, and positioning items with precision.
        </p>
      </div>
    </div>
  ),
},
"CSS Grid Item": {
  title: "CSS Grid Item",
  content: (
    <div className="space-y-6">
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">CSS Grid Item</h2>
        <p>
          A Grid Item is any direct child of a grid container. You can control its placement, size, and behavior
          within the grid using properties like <code>grid-column</code> and <code>grid-row</code>.
        </p>
      </div>
    </div>
  ),
},
"CSS SASS": {
  title: "CSS SASS",
  content: (
    <div className="space-y-6">
      {/* Intro */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          CSS SASS
        </h2>
        <p className="text-lg leading-relaxed">
          SASS (Syntactically Awesome Stylesheets) is a CSS preprocessor that adds
          powerful features like variables, nesting, mixins, and more, making CSS
          easier to write and maintain. It compiles into regular CSS for use in
          browsers.
        </p>
      </div>
    </div>
  ),
},
"SASS Syntax": {
  title: "SASS Syntax",
  content: (
    <div className="space-y-6">
      {/* Syntax */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          SASS Syntax
        </h2>
        <p className="text-lg leading-relaxed">
          SASS offers two syntaxes: the original indented syntax (no curly braces or
          semicolons) and SCSS (Sassy CSS) syntax, which is more like traditional CSS.
          SCSS is the most widely used as it’s fully compatible with CSS.
        </p>
      </div>
    </div>
  ),
},
"SASS Variables": {
  title: "SASS Variables",
  content: (
    <div className="space-y-6">
      {/* Variables */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          SASS Variables
        </h2>
        <p className="text-lg leading-relaxed">
          Variables in SASS let you store values (like colors, fonts, or sizes) and reuse them throughout your stylesheet. 
          This improves consistency and makes updates easier.
        </p>
      </div>
    </div>
  ),
},
"SASS Nesting": {
  title: "SASS Nesting",
  content: (
    <div className="space-y-6">
      {/* Nesting */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          SASS Nesting
        </h2>
        <p className="text-lg leading-relaxed">
          Nesting in SASS allows you to write CSS selectors in a hierarchical way
          that mirrors your HTML structure. This makes your stylesheets more readable 
          and organized.
        </p>
      </div>
    </div>
  ),
},
"SASS Mixins": {
  title: "SASS Mixins",
  content: (
    <div className="space-y-6">
      {/* Mixins */}
      <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
        <h2 className="text-3xl font-bold mb-3 text-indigo-700">
          SASS Mixins
        </h2>
        <p className="text-lg leading-relaxed">
          Mixins in SASS are reusable blocks of CSS declarations that can take 
          arguments, making it easier to avoid repetitive code and maintain 
          flexibility.
        </p>
      </div>
    </div>
  ),
},
};

export default topicContents;
