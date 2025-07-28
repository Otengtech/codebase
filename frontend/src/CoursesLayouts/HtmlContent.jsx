import React from "react";

const topicContents = {
  "HTML Home": {
    title: "HTML Home Setup",
    content: (
      <div className="space-y-6">
        {/* Introduction Section */}
        <div className="relative rounded-2xl bg-white/5 p-6 text-gray-700 shadow-md">
          <h2 className="text-3xl font-bold mb-3 text-purple-700">
            Setting Up Your First HTML Page
          </h2>
          <p className="text-md">
            Before diving into complex structures, it’s essential to know how to
            properly set up an HTML file. This ensures browsers can interpret
            and display your content correctly.
          </p>
          <p className="text-md">
            A complete HTML document contains specific tags that define the
            structure of the web page.
          </p>

          {/* Decorative Shape */}
          <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-30 blur-xl"></div>
        </div>

        {/* File Setup */}
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-purple-600">
            HTML File Setup:
          </h3>
          <p className="text-gray-700">
            To get started, all you need is a simple text editor like VS Code,
            Notepad++, or even Notepad. Save the file with a
            <code className="bg-white/10 px-2 py-0.5 rounded text-purple-700 ml-1">
              .html
            </code>{" "}
            extension — for example:
            <span className="italic ml-1">index.html</span>
          </p>
          <p className="text-gray-700">
            Then, include the following basic structure to make sure your
            browser can interpret your webpage correctly:
          </p>
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-violet-700 to-purple-900 p-4 text-green-100 text-sm shadow-lg">
            <pre>
              <code>{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>My Homepage</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is the homepage of my first website.</p>
  </body>
</html>`}</code>
            </pre>
          </div>
        </div>

        {/* Usefulness Box */}
        <div className="border-l-4 border-pink-500 pl-5 bg-pink-50 p-4 rounded-lg">
          <h4 className="text-xl font-medium text-pink-700 mb-2">
            Key Elements:
          </h4>
          <ul className="list-disc ml-5 text-gray-800 space-y-1">
            <li>
              <strong>&lt;!DOCTYPE html&gt;</strong>: Declares the document type
              (HTML5).
            </li>
            <li>
              <strong>&lt;html&gt;</strong>: The root of your HTML document.
            </li>
            <li>
              <strong>&lt;head&gt;</strong>: Metadata, page title, charset,
              links.
            </li>
            <li>
              <strong>&lt;body&gt;</strong>: Contains everything the user sees
              (content).
            </li>
          </ul>
        </div>

        {/* Visual Cue / Tip Box */}
        <div className="flex flex-col md:flex-row items-center gap-4 bg-white/10 p-6 rounded-2xl shadow-md border border-purple-200">
          <div className="flex-1 text-gray-700 space-y-2">
            <h4 className="text-lg font-semibold text-purple-700">
              {" "}
              File Saving Tips
            </h4>
            <ul className="list-disc ml-6 text-gray-800 text-sm space-y-1">
              <li>
                Always use <strong>.html</strong> extension.
              </li>
              <li>
                Use lowercase names (e.g., <code>home.html</code>,{" "}
                <code>about.html</code>).
              </li>
              <li>
                Store files in a project folder (like <code>myWebsite/</code>).
              </li>
            </ul>
          </div>
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold shadow-md"></div>
        </div>

        {/* Final Note */}
        <div className="text-center text-gray-600">
          <p className="mt-6 italic">
            "Every great website starts with a single{" "}
            <strong>&lt;html&gt;</strong> tag!"
          </p>
        </div>
      </div>
    ),
  },
  "HTML Introduction": {
    title: "HTML Introduction",
    content: (
      <div className="space-y-6">
        <div className="relative rounded-2xl text-gray-700">
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

        <div className="text-center text-gray-600">
          <p className="mt-4 italic">
            "HTML is not a programming language; it's a markup language!"
          </p>
        </div>
      </div>
    ),
  },
  "HTML Editors": {
    title: "HTML Editors",
    content: (
      <div className="space-y-6">
        <div className="relative rounded-2xl text-gray-700">
          <h2 className="text-3xl font-bold mb-2">Choosing an HTML Editor</h2>
          <p className="text-lg">
            An <strong>HTML editor</strong> is a tool used to write and edit
            HTML code. While you can use any plain text editor to write HTML,
            choosing a specialized code editor can boost your productivity and
            improve code readability.
          </p>
          <p className="text-lg">
            Modern HTML editors come with features like syntax highlighting,
            autocompletion, live preview, and integrated terminal support.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-purple-600">
            Popular HTML Editors:
          </h3>
          <ul className="list-disc ml-6 text-gray-800 mt-2 space-y-1">
            <li>
              <span className="font-semibold">VS Code:</span> Lightweight and
              powerful editor from Microsoft with a vast extension marketplace.
            </li>
            <li>
              <span className="font-semibold">Sublime Text:</span> Clean and
              fast with a distraction-free interface.
            </li>
            <li>
              <span className="font-semibold">Atom:</span> Open-source editor
              developed by GitHub, good for collaborative coding.
            </li>
            <li>
              <span className="font-semibold">Notepad++:</span> Simple and
              lightweight — perfect for beginners on Windows.
            </li>
            <li>
              <span className="font-semibold">Brackets:</span> Ideal for web
              design with live preview and visual tools.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-purple-600">
            Basic Editing Example:
          </h3>
          <p>
            Here’s what writing HTML in an editor like VS Code might look like:
          </p>
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-violet-700 to-purple-900 p-4 text-green-200 text-sm shadow-lg">
            <pre>
              <code>{`<!DOCTYPE html>
<html>
  <head>
    <title>Editor Demo</title>
  </head>
  <body>
    <h2>This is written in VS Code!</h2>
    <p>Great editors make coding HTML much easier.</p>
  </body>
</html>`}</code>
            </pre>
          </div>
        </div>

        <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded-lg">
          <h4 className="text-xl font-medium text-purple-700">
            Tips for Using Editors
          </h4>
          <ul className="list-disc ml-6 text-gray-800 mt-2 space-y-1">
            <li>Use extensions or plugins to enhance productivity.</li>
            <li>Turn on autosave or use version control like Git.</li>
            <li>Make use of Emmet for quick HTML snippets.</li>
            <li>Learn editor shortcuts to speed up development.</li>
          </ul>
        </div>

        <div className="text-center text-gray-600">
          <p className="mt-4 italic">
            "A good editor doesn’t just write code — it makes you a better
            developer."
          </p>
        </div>
      </div>
    ),
  },
  "HTML Basic": {
    title: "HTML Basic",
    content: (
      <div className="space-y-6">
        <div className="relative rounded-2xl text-gray-700">
          <h2 className="text-3xl font-bold mb-2">
            Basic Structure of an HTML Page
          </h2>
          <p className="text-lg">
            Every HTML page follows a simple structure. At the top, we define
            the document type, then we nest elements like{" "}
            <code className="bg-white/10 px-1 rounded">&lt;html&gt;</code>,{" "}
            <code className="bg-white/10 px-1 rounded">&lt;head&gt;</code>, and{" "}
            <code className="bg-white/10 px-1 rounded">&lt;body&gt;</code>.
          </p>
          <p className="text-lg">
            Think of{" "}
            <code className="bg-white/10 px-1 rounded">&lt;head&gt;</code> as
            the brain (meta info, title, links) and{" "}
            <code className="bg-white/10 px-1 rounded">&lt;body&gt;</code> as
            the muscle (visible content).
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-purple-600">
            Basic HTML Document:
          </h3>
          <div className="rounded-xl overflow-hidden bg-gray-900 p-4 text-green-400 text-sm shadow-lg">
            <pre>
              <code>{`<!DOCTYPE html>
<html>
  <head>
    <title>HTML Basics</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a basic HTML document.</p>
  </body>
</html>`}</code>
            </pre>
          </div>
        </div>

        <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded-lg">
          <h4 className="text-xl font-medium text-purple-700">
            Common HTML Tags
          </h4>
          <ul className="list-disc ml-6 text-gray-800 mt-2 space-y-1">
            <li>
              <code className="bg-white/10 px-1 rounded">
                &lt;h1&gt; - &lt;h6&gt;
              </code>
              : Headings
            </li>
            <li>
              <code className="bg-white/10 px-1 rounded">&lt;p&gt;</code>:
              Paragraphs
            </li>
            <li>
              <code className="bg-white/10 px-1 rounded">&lt;a&gt;</code>: Links
            </li>
            <li>
              <code className="bg-white/10 px-1 rounded">&lt;img&gt;</code>:
              Images
            </li>
            <li>
              <code className="bg-white/10 px-1 rounded">&lt;br&gt;</code>: Line
              Break
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-purple-600">
            Example with Headings and Paragraphs:
          </h3>
          <div className="rounded-xl overflow-hidden bg-gray-900 p-4 text-green-400 text-sm shadow-lg">
            <pre>
              <code>{`<h1>This is a Main Heading</h1>
<h2>This is a Subheading</h2>
<p>This is a paragraph describing the topic in detail.</p>`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-violet-900 text-white p-4 rounded-xl shadow-xl">
          <p className="text-lg">
            HTML tags often come in pairs: an opening tag{" "}
            <code className="bg-white/10 px-1 rounded">&lt;p&gt;</code> and a
            closing tag{" "}
            <code className="bg-white/10 px-1 rounded">&lt;/p&gt;</code>.
          </p>
        </div>

        <div className="text-center text-gray-600 mt-4 italic">
          <p>
            “Every great webpage starts with a single <code>&lt;html&gt;</code>
            !”
          </p>
        </div>
      </div>
    ),
  },
  "HTML Elements": {
    title: "HTML Elements",
    content: (
      <div className="space-y-6 text-gray-700">
        <h2 className="text-3xl font-bold">Understanding HTML Elements</h2>
        <p className="text-lg">
          An <strong>HTML element</strong> defines the structure and content of
          a web page. It usually consists of a start tag, content, and an end
          tag.
        </p>

        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-purple-600">
            Element Syntax:
          </h3>
          <p className="text-lg">Here’s the basic structure:</p>
          <div className="bg-gradient-to-br from-violet-700 to-purple-900 p-4 rounded-xl text-green-200 text-sm shadow-lg">
            <pre>
              <code>{`<tagname>Content goes here...</tagname>`}</code>
            </pre>
          </div>
          <p className="text-lg">Example:</p>
          <div className="bg-gradient-to-br from-violet-700 to-purple-900 p-4 rounded-xl text-green-200 text-sm shadow-lg">
            <pre>
              <code>{`<h1>This is a heading</h1>
<p>This is a paragraph.</p>`}</code>
            </pre>
          </div>
        </div>

        <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded-lg">
          <h4 className="text-xl font-medium text-purple-700">
            Types of Elements
          </h4>
          <ul className="list-disc ml-6 text-gray-800 mt-2 space-y-1">
            <li>
              <strong>Block-level elements</strong>: start on a new line (e.g.{" "}
              <code className="bg-white/10 px-1 rounded">&lt;div&gt;</code>,{" "}
              <code className="bg-white/10 px-1 rounded">&lt;p&gt;</code>,{" "}
              <code className="bg-white/10 px-1 rounded">&lt;h1&gt;</code>)
            </li>
            <li>
              <strong>Inline elements</strong>: do not start on a new line (e.g.{" "}
              <code className="bg-white/10 px-1 rounded">&lt;span&gt;</code>,{" "}
              <code className="bg-white/10 px-1 rounded">&lt;a&gt;</code>,{" "}
              <code className="bg-white/10 px-1 rounded">&lt;strong&gt;</code>)
            </li>
          </ul>
        </div>

        <div className="text-center text-gray-600 italic">
          “HTML elements are the building blocks of web pages.”
        </div>
      </div>
    ),
  },
  "HTML Attributes": {
    title: "HTML Attributes",
    content: (
      <div className="space-y-6 text-gray-700">
        <h2 className="text-3xl font-bold">What are HTML Attributes?</h2>
        <p className="text-lg">
          <strong>HTML attributes</strong> provide additional information about
          elements. They are always included in the opening tag and usually come
          in name/value pairs like:{" "}
          <code className="bg-white/10 px-1 rounded">name="value"</code>
        </p>

        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-purple-600">Example:</h3>
          <p>
            Here’s how an{" "}
            <code className="bg-white/10 px-1 rounded">&lt;a&gt;</code> tag uses
            attributes:
          </p>
          <div className="bg-gradient-to-br from-violet-700 to-purple-900 p-4 rounded-xl text-green-200 text-sm shadow-lg">
            <pre>
              <code>{`<a href="https://www.example.com" target="_blank">Visit Example</a>`}</code>
            </pre>
          </div>
          <p>
            This link opens a new tab and goes to{" "}
            <code className="bg-white/10 px-1 rounded">example.com</code>.
          </p>
        </div>

        <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded-lg">
          <h4 className="text-xl font-medium text-purple-700">
            Common HTML Attributes
          </h4>
          <ul className="list-disc ml-6 text-gray-800 mt-2 space-y-1">
            <li>
              <strong>href</strong>: Specifies the URL for a link
            </li>
            <li>
              <strong>src</strong>: Specifies the path to an image
            </li>
            <li>
              <strong>alt</strong>: Provides alternative text for images
            </li>
            <li>
              <strong>style</strong>: Adds inline styles
            </li>
            <li>
              <strong>id</strong> & <strong>class</strong>: Used for CSS and
              JavaScript targeting
            </li>
          </ul>
        </div>

        <div className="text-center text-gray-600 italic">
          “Attributes make HTML elements more powerful and flexible.”
        </div>
      </div>
    ),
  },
  "HTML Headings": {
    title: "HTML Headings",
    content: (
      <div className="space-y-4">
        <p>
          HTML headings are used to define the titles or subtitles on a web
          page. They range from{" "}
          <code className="text-purple-300">&lt;h1&gt;</code> (most important)
          to <code className="text-purple-300">&lt;h6&gt;</code> (least
          important).
        </p>

        <p>
          Headings help structure your content for both users and search
          engines. Proper use of headings improves readability and
          accessibility.
        </p>

        <p>
          A typical structure starts with one{" "}
          <code className="text-purple-300">&lt;h1&gt;</code> tag for the main
          title, followed by lower level headings as sub-sections.
        </p>

        <div className="bg-gradient-to-br from-violet-800 to-violet-950 text-green-300 p-4 rounded-lg">
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

        <p>Example use in a full HTML document:</p>

        <div className="bg-gradient-to-br from-violet-800 to-violet-950 text-green-300 p-4 rounded-lg">
          <pre>
            <code>{`
<!DOCTYPE html>
<html>
  <head>
    <title>Heading Example</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <h2>About Us</h2>
    <p>We are learning HTML headings.</p>
    <h3>Team</h3>
    <p>Meet our awesome team members.</p>
    <h4>Developer</h4>
    <p>Jane Doe</p>
  </body>
</html>
          `}</code>
          </pre>
        </div>

        <p>
          💡 Tip: Never skip heading levels for styling reasons. Use CSS if you
          want to adjust size but keep semantic structure correct.
        </p>
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
  "HTML Styles": {
    title: "HTML Styles",
    content: (
      <div className="space-y-4">
        <p>
          HTML styles are used to add design and visual formatting to elements.
          The <code>&lt;style&gt;</code> attribute is used inside HTML tags to
          apply inline styles using CSS properties.
        </p>

        <p>
          The <code>style</code> attribute can be applied to almost any HTML
          element and contains one or more CSS properties and values.
        </p>

        <p>Example:</p>

        <div className="bg-gray-900 text-green-300 p-4 rounded-lg">
          <pre>
            <code>{`
<p style="color:blue;">This is a blue paragraph.</p>
<h1 style="font-size:40px;">This is a large heading</h1>
<div style="background-color:yellow; padding:10px;">Styled box</div>
          `}</code>
          </pre>
        </div>

        <p>Common CSS properties used in HTML styles include:</p>
        <ul className="list-disc list-inside">
          <li>
            <strong>color</strong> – text color
          </li>
          <li>
            <strong>background-color</strong> – background color
          </li>
          <li>
            <strong>font-size</strong> – size of text
          </li>
          <li>
            <strong>font-family</strong> – typeface used
          </li>
          <li>
            <strong>text-align</strong> – alignment of text (left, center,
            right)
          </li>
          <li>
            <strong>padding / margin</strong> – spacing inside or around
            elements
          </li>
        </ul>

        <p>Another example with multiple properties:</p>

        <div className="bg-gray-900 text-green-300 p-4 rounded-lg">
          <pre>
            <code>{`
<p style="color:white; background-color:green; font-size:20px; padding:10px;">
  Styled paragraph with multiple CSS properties.
</p>
          `}</code>
          </pre>
        </div>

        <p>
          💡 Tip: For large projects, it's better to use internal or external
          CSS instead of inline styles to keep code clean and maintainable.
        </p>
      </div>
    ),
  },
  "HTML Formatting": {
    title: "HTML Formatting",
    content: (
      <div className="space-y-4">
        <p>
          HTML formatting tags are used to format text in specific ways like
          bold, italic, underline, etc. These tags help emphasize or structure
          text content.
        </p>

        <p>Common HTML formatting tags include:</p>
        <ul className="list-disc list-inside">
          <li>
            <code>&lt;b&gt;</code> – Bold text
          </li>
          <li>
            <code>&lt;strong&gt;</code> – Important text (bold)
          </li>
          <li>
            <code>&lt;i&gt;</code> – Italic text
          </li>
          <li>
            <code>&lt;em&gt;</code> – Emphasized text (italic)
          </li>
          <li>
            <code>&lt;mark&gt;</code> – Marked/highlighted text
          </li>
          <li>
            <code>&lt;small&gt;</code> – Smaller text
          </li>
          <li>
            <code>&lt;del&gt;</code> – Deleted (strikethrough) text
          </li>
          <li>
            <code>&lt;ins&gt;</code> – Inserted (underlined) text
          </li>
          <li>
            <code>&lt;sub&gt;</code> – Subscript text
          </li>
          <li>
            <code>&lt;sup&gt;</code> – Superscript text
          </li>
        </ul>

        <p>Example:</p>
        <div className="bg-gray-900 text-green-300 p-4 rounded-lg">
          <pre>
            <code>{`
<p>This is <b>bold</b> text.</p>
<p>This is <strong>important</strong> text.</p>
<p>This is <i>italic</i> text.</p>
<p>This is <em>emphasized</em> text.</p>
<p>This is <mark>highlighted</mark> text.</p>
<p>This is <small>smaller</small> text.</p>
<p>This is <del>deleted</del> text.</p>
<p>This is <ins>inserted</ins> text.</p>
<p>This is H<sub>2</sub>O (subscript).</p>
<p>This is x<sup>2</sup> (superscript).</p>
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Quotations": {
    title: "HTML Quotations",
    content: (
      <div className="space-y-4">
        <p>
          HTML provides several elements for adding quotations and cited text.
          These elements help indicate that text is quoted or referenced from
          another source.
        </p>

        <ul className="list-disc list-inside">
          <li>
            <code>&lt;blockquote&gt;</code> – Defines a section quoted from
            another source (usually indented).
          </li>
          <li>
            <code>&lt;q&gt;</code> – Defines a short inline quotation
            (automatically adds quotation marks).
          </li>
          <li>
            <code>&lt;abbr&gt;</code> – Defines an abbreviation or acronym with
            a tooltip.
          </li>
          <li>
            <code>&lt;cite&gt;</code> – Defines the title of a creative work
            (like books, websites, movies).
          </li>
          <li>
            <code>&lt;bdo&gt;</code> – Overrides text direction (Bi-Directional
            Override).
          </li>
        </ul>

        <p>Example:</p>
        <div className="bg-gray-900 text-green-300 p-4 rounded-lg">
          <pre>
            <code>{`
<blockquote>
  This is a blockquote element. It is used to quote long sections from another source.
</blockquote>

<p>The author once said: <q>Knowledge is power.</q></p>

<p><abbr title="World Health Organization">WHO</abbr> is a specialized agency of the United Nations.</p>

<p><cite>The Great Gatsby</cite> is a novel written by F. Scott Fitzgerald.</p>

<p><bdo dir="rtl">This text is displayed from right to left.</bdo></p>
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Comments": {
    title: "HTML Comments",
    content: (
      <div className="space-y-4">
        <p>
          HTML comments are not displayed in the browser but can help you
          document your code. Use them to explain sections or leave notes.
        </p>
        <p>Syntax:</p>
        <div className="bg-gray-900 text-green-300 p-4 rounded-lg">
          <pre>
            <code>{`
<!-- This is a single-line comment -->

<!-- 
  This is a multi-line comment.
  It spans multiple lines.
-->
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Colors": {
    title: "HTML Colors",
    content: (
      <div className="space-y-4">
        <p>
          HTML colors can be defined using names, HEX codes, RGB, RGBA, HSL, or
          HSLA values. Colors are mostly used in CSS but can also be applied
          with HTML attributes.
        </p>

        <ul className="list-disc list-inside">
          <li>
            Color Name: <code>red</code>, <code>blue</code>
          </li>
          <li>
            HEX: <code>#ff0000</code>
          </li>
          <li>
            RGB: <code>rgb(255, 0, 0)</code>
          </li>
          <li>
            RGBA: <code>rgba(255, 0, 0, 0.5)</code>
          </li>
          <li>
            HSL: <code>hsl(0, 100%, 50%)</code>
          </li>
          <li>
            HSLA: <code>hsla(0, 100%, 50%, 0.3)</code>
          </li>
        </ul>

        <p>Example:</p>
        <div className="bg-gray-900 text-green-300 p-4 rounded-lg">
          <pre>
            <code>{`
<p style="color:blue;">This is blue text</p>
<p style="color:#ff0000;">This is red text using HEX</p>
<p style="color:rgb(0,255,0);">This is green using RGB</p>
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML CSS": {
    title: "HTML CSS",
    content: (
      <div className="space-y-4">
        <p>
          CSS (Cascading Style Sheets) is used to style HTML elements. You can
          apply CSS in 3 ways:
        </p>

        <ul className="list-disc list-inside">
          <li>
            <strong>Inline CSS</strong> – uses the <code>style</code> attribute
            inside HTML elements.
          </li>
          <li>
            <strong>Internal CSS</strong> – uses a <code>&lt;style&gt;</code>{" "}
            tag in the <code>&lt;head&gt;</code>.
          </li>
          <li>
            <strong>External CSS</strong> – links an external <code>.css</code>{" "}
            file using <code>&lt;link&gt;</code>.
          </li>
        </ul>

        <p>Examples:</p>

        <p>
          <strong>1. Inline CSS</strong>
        </p>
        <div className="bg-gray-900 text-green-300 p-4 rounded-lg">
          <pre>
            <code>{`<p style="color:red;">This is styled with inline CSS</p>`}</code>
          </pre>
        </div>

        <p>
          <strong>2. Internal CSS</strong>
        </p>
        <div className="bg-gray-900 text-green-300 p-4 rounded-lg">
          <pre>
            <code>{`
<head>
  <style>
    p {
      color: blue;
    }
  </style>
</head>
<body>
  <p>This is styled with internal CSS</p>
</body>
          `}</code>
          </pre>
        </div>

        <p>
          <strong>3. External CSS</strong>
        </p>
        <div className="bg-gray-900 text-green-300 p-4 rounded-lg">
          <pre>
            <code>{`
<!-- HTML file -->
<link rel="stylesheet" href="styles.css">

<!-- styles.css -->
p {
  color: green;
}
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
  "HTML Images": {
    title: "HTML Images",
    content: (
      <div className="space-y-4">
        <p>Images can improve the design and appearance of a web page.</p>
        <p>
          The <code className="text-purple-300">&lt;img&gt;</code> tag is used
          to embed an image in an HTML page. It is an empty tag, meaning it has
          no closing tag.
        </p>
        <p>
          The <code className="text-purple-300">src</code> attribute specifies
          the path to the image. The{" "}
          <code className="text-purple-300">alt</code> attribute provides
          alternative text.
        </p>
        <div className="bg-gradient-to-r from-violet-800 to-purple-900 text-green-400 p-4 rounded-lg">
          <pre>
            <code>{`
<img src="dog.jpg" alt="Cute dog" width="300" height="200">
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Favicon": {
    title: "HTML Favicon",
    content: (
      <div className="space-y-4">
        <p>A favicon is a small icon displayed in the browser tab.</p>
        <p>
          To add a favicon to your website, use the{" "}
          <code className="text-purple-300">&lt;link&gt;</code> tag inside the{" "}
          <code className="text-purple-300">&lt;head&gt;</code> section.
        </p>
        <div className="bg-gradient-to-r from-violet-800 to-purple-900 text-green-400 p-4 rounded-lg">
          <pre>
            <code>{`
<head>
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Page Title": {
    title: "HTML Page Title",
    content: (
      <div className="space-y-4">
        <p>
          The <code className="text-purple-300">&lt;title&gt;</code> tag defines
          the title of the HTML document.
        </p>
        <p>
          It is shown in the browser's title bar or tab and helps with SEO and
          accessibility.
        </p>
        <div className="bg-gradient-to-r from-violet-800 to-purple-900 text-green-400 p-4 rounded-lg">
          <pre>
            <code>{`
<!DOCTYPE html>
<html>
<head>
  <title>My Web Page</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Tables": {
    title: "HTML Tables",
    content: (
      <div className="space-y-4">
        <p>
          HTML tables allow you to arrange data into rows and columns using the{" "}
          <code className="text-purple-300">&lt;table&gt;</code> tag.
        </p>
        <p>Common table tags include:</p>
        <ul className="list-disc pl-5">
          <li>
            <code className="text-purple-300">&lt;tr&gt;</code> — table row
          </li>
          <li>
            <code className="text-purple-300">&lt;th&gt;</code> — table header
          </li>
          <li>
            <code className="text-purple-300">&lt;td&gt;</code> — table
            data/cell
          </li>
        </ul>
        <div className="bg-gradient-to-r from-violet-800 to-purple-900 text-green-400 p-4 rounded-lg">
          <pre>
            <code>{`
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>24</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>30</td>
  </tr>
</table>
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Lists": {
    title: "HTML Lists",
    content: (
      <div className="space-y-4">
        <p>HTML provides three types of lists:</p>
        <ul className="list-disc pl-5">
          <li>
            <strong>Ordered list</strong> - uses the &lt;ol&gt; tag.
          </li>
          <li>
            <strong>Unordered list</strong> - uses the &lt;ul&gt; tag.
          </li>
          <li>
            <strong>Description list</strong> - uses the &lt;dl&gt;, &lt;dt&gt;,
            and &lt;dd&gt; tags.
          </li>
        </ul>
        <div className="bg-gradient-to-r from-violet-800 to-purple-900 text-green-400 p-4 rounded-lg">
          <pre>
            <code>{`
<!-- Ordered list -->
<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>

<!-- Unordered list -->
<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>

<!-- Description list -->
<dl>
  <dt>HTML</dt>
  <dd>Standard markup language for web pages</dd>
</dl>
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Block & Inline": {
    title: "HTML Block & Inline",
    content: (
      <div className="space-y-4">
        <p>
          HTML elements are either <strong>block-level</strong> or{" "}
          <strong>inline</strong>.
        </p>
        <p>
          <strong>Block-level</strong> elements take up the full width
          available, starting on a new line. Examples: &lt;div&gt;, &lt;p&gt;,
          &lt;h1&gt;-&lt;h6&gt;
        </p>
        <p>
          <strong>Inline</strong> elements only take up as much width as
          necessary. Examples: &lt;span&gt;, &lt;a&gt;, &lt;img&gt;
        </p>
        <div className="bg-gradient-to-r from-violet-800 to-purple-900 text-green-400 p-4 rounded-lg">
          <pre>
            <code>{`
<!-- Block element -->
<div>This is a block element</div>

<!-- Inline element -->
<span>This is an inline element</span>
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Div": {
    title: "HTML Div",
    content: (
      <div className="space-y-4">
        <p>
          The <code className="text-purple-300">&lt;div&gt;</code> tag is used
          as a container for HTML elements. It's a block-level element and has
          no default style.
        </p>
        <p>
          It is useful for grouping content and applying CSS styles or layout.
        </p>
        <div className="bg-gradient-to-r from-violet-800 to-purple-900 text-green-400 p-4 rounded-lg">
          <pre>
            <code>{`
<div style="background-color:lightgray;">
  <h2>Title</h2>
  <p>This is inside a div container</p>
</div>
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Classes": {
    title: "HTML Classes",
    content: (
      <div className="space-y-4">
        <p>
          The <code className="text-purple-300">class</code> attribute specifies
          one or more class names for an element. Classes are used by CSS and
          JavaScript to select and manipulate elements.
        </p>
        <div className="bg-gradient-to-r from-violet-800 to-purple-900 text-green-400 p-4 rounded-lg">
          <pre>
            <code>{`
<!-- HTML -->
<p class="intro">This is a paragraph.</p>

<!-- CSS -->
<style>
.intro {
  color: blue;
  font-weight: bold;
}
</style>
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Id": {
    title: "HTML Id",
    content: (
      <div className="space-y-4">
        <p>
          The <code className="text-purple-300">id</code> attribute defines a
          unique identifier for an HTML element. It must be unique within the
          document.
        </p>
        <p>Useful for JavaScript targeting or CSS styling.</p>
        <div className="bg-gradient-to-r from-violet-800 to-purple-900 text-green-400 p-4 rounded-lg">
          <pre>
            <code>{`
<!-- HTML -->
<h2 id="main-title">Welcome</h2>

<!-- CSS -->
<style>
#main-title {
  color: green;
}
</style>
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Iframes": {
    title: "HTML Iframes",
    content: (
      <div className="space-y-4">
        <p>
          The <code className="text-purple-300">&lt;iframe&gt;</code> tag embeds
          another HTML page within the current page.
        </p>
        <p>Useful for embedding videos, maps, or web pages.</p>
        <div className="bg-gradient-to-r from-violet-800 to-purple-900 text-green-400 p-4 rounded-lg">
          <pre>
            <code>{`
<iframe src="https://www.example.com" width="300" height="200"></iframe>
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML JavaScript": {
    title: "HTML JavaScript",
    content: (
      <div className="space-y-4">
        <p>
          JavaScript can be added to an HTML document using the{" "}
          <code className="text-purple-400">&lt;script&gt;</code> tag. It allows
          you to make the page interactive and dynamic.
        </p>

        <p>Here is a simple example that shows an alert when the page loads:</p>

        <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Example</title>
  </head>
  <body>
    <h1>Hello JavaScript</h1>
    <script>
      alert("Welcome to my website!");
    </script>
  </body>
</html>
          `}</code>
          </pre>
        </div>

        <p>You can also use external JavaScript files like this:</p>
        <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<script src="script.js"></script>
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML File Paths": {
    title: "HTML File Paths",
    content: (
      <div className="space-y-4">
        <p>
          HTML file paths are used to link external resources like images,
          stylesheets, and scripts. They tell the browser where to find the
          files.
        </p>

        <p>There are two main types of file paths:</p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Relative Path</strong> – Based on the current file location.
          </li>
          <li>
            <strong>Absolute Path</strong> – Full URL or root-based path.
          </li>
        </ul>

        <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<!-- Relative Path -->
<img src="images/logo.png" alt="Logo" />

<!-- Go up one folder -->
<img src="../logo.png" alt="Logo" />

<!-- Absolute Path -->
<img src="https://example.com/images/logo.png" alt="Logo" />
          `}</code>
          </pre>
        </div>

        <p>Project Structure Example:</p>
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
📁 project-folder/
├── index.html
├── images/
│   └── logo.png
├── css/
│   └── style.css
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Head": {
    title: "HTML Head",
    content: (
      <div className="space-y-4">
        <p>
          The <code className="text-purple-400">&lt;head&gt;</code> element
          contains meta-information about the HTML document. It is not displayed
          on the page.
        </p>

        <p>
          Common tags inside <code>&lt;head&gt;</code>:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>&lt;title&gt;</code> – Document title
          </li>
          <li>
            <code>&lt;meta&gt;</code> – Metadata like description, charset
          </li>
          <li>
            <code>&lt;link&gt;</code> – External CSS
          </li>
          <li>
            <code>&lt;script&gt;</code> – JavaScript files
          </li>
          <li>
            <code>&lt;style&gt;</code> – Internal styles
          </li>
        </ul>

        <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Learn HTML the easy way!" />
  <title>HTML Course</title>
  <link rel="stylesheet" href="style.css" />
  <script src="main.js" defer></script>
</head>
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Layout": {
    title: "HTML Layout",
    content: (
      <div className="space-y-4">
        <p>
          HTML layout refers to the structure and arrangement of elements on a
          webpage.
        </p>

        <p>Common semantic layout elements include:</p>
        <ul className="list-disc list-inside">
          <li>
            <code>&lt;header&gt;</code>
          </li>
          <li>
            <code>&lt;nav&gt;</code>
          </li>
          <li>
            <code>&lt;main&gt;</code>
          </li>
          <li>
            <code>&lt;section&gt;</code>
          </li>
          <li>
            <code>&lt;aside&gt;</code>
          </li>
          <li>
            <code>&lt;footer&gt;</code>
          </li>
        </ul>

        <p>Basic layout example:</p>
        <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<body>
  <header>My Website</header>
  <nav>Links</nav>
  <main>
    <section>Main Content</section>
    <aside>Sidebar</aside>
  </main>
  <footer>Footer Info</footer>
</body>
          `}</code>
          </pre>
        </div>

        <p>Sample CSS using Flexbox:</p>
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
main {
  display: flex;
  gap: 1rem;
}
section {
  flex: 3;
}
aside {
  flex: 1;
}
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Responsive": {
    title: "HTML Responsive",
    content: (
      <div className="space-y-4">
        <p>
          Responsive design allows your HTML page to look great on all devices —
          mobile, tablet, or desktop.
        </p>

        <p>Key techniques include:</p>
        <ul className="list-disc list-inside">
          <li>
            Using the <code>&lt;meta name="viewport"&gt;</code> tag
          </li>
          <li>CSS media queries</li>
          <li>Flexible layouts and images</li>
        </ul>

        <p>Viewport meta tag example:</p>
        <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<meta name="viewport" content="width=device-width, initial-scale=1.0">
          `}</code>
          </pre>
        </div>

        <p>Media query CSS example:</p>
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
body {
  font-size: 16px;
}

@media (min-width: 768px) {
  body {
    font-size: 18px;
  }
}

@media (min-width: 1024px) {
  body {
    font-size: 20px;
  }
}
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Semantics": {
    title: "HTML Semantics",
    content: (
      <div className="space-y-4">
        <p>
          Semantic HTML uses meaningful tags that clearly describe their
          purpose. It helps improve accessibility, SEO, and code readability.
        </p>

        <p>Examples of semantic tags:</p>
        <ul className="list-disc list-inside">
          <li>
            <code>&lt;header&gt;</code> – Introductory content or navigation
            links
          </li>
          <li>
            <code>&lt;nav&gt;</code> – Navigation links
          </li>
          <li>
            <code>&lt;main&gt;</code> – Main content area
          </li>
          <li>
            <code>&lt;section&gt;</code> – Group of related content
          </li>
          <li>
            <code>&lt;article&gt;</code> – Independent content
          </li>
          <li>
            <code>&lt;footer&gt;</code> – Footer information
          </li>
        </ul>

        <p>Example:</p>
        <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<body>
  <header>
    <h1>My Website</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>
  <main>
    <section>
      <article>
        <h2>Post Title</h2>
        <p>This is a blog post.</p>
      </article>
    </section>
  </main>
  <footer>© 2025 MySite</footer>
</body>
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Style Guide": {
    title: "HTML Style Guide",
    content: (
      <div className="space-y-4">
        <p>
          An HTML style guide is a set of rules to keep your code clean,
          readable, and consistent. It improves collaboration and
          maintainability.
        </p>

        <p>🧑‍💻 Best Practices:</p>
        <ul className="list-disc list-inside">
          <li>
            Use lowercase tag names: <code>&lt;div&gt;</code>, not{" "}
            <code>&lt;DIV&gt;</code>
          </li>
          <li>Close all HTML tags properly</li>
          <li>Use double quotes around attributes</li>
          <li>Indent nested elements for clarity</li>
          <li>Use semantic tags where possible</li>
        </ul>

        <p>💡 Good Example:</p>
        <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Best Practices</title>
  </head>
  <body>
    <header>
      <h1>Welcome</h1>
    </header>
    <main>
      <p>This is a clean HTML structure.</p>
    </main>
  </body>
</html>
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Entities": {
    title: "HTML Entities",
    content: (
      <div className="space-y-4">
        <p>
          HTML entities are used to display reserved characters (like{" "}
          <code>&lt;</code> and <code>&gt;</code>) or special symbols that can't
          be typed directly.
        </p>

        <p>Examples:</p>
        <ul className="list-disc list-inside">
          <li>
            <code>&amp;lt;</code> → &lt;
          </li>
          <li>
            <code>&amp;gt;</code> → &gt;
          </li>
          <li>
            <code>&amp;amp;</code> → &amp;
          </li>
          <li>
            <code>&amp;copy;</code> → ©
          </li>
          <li>
            <code>&amp;nbsp;</code> → (non-breaking space)
          </li>
        </ul>

        <p>🧪 Example usage:</p>
        <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<p>This is &lt;em&gt;important&lt;/em&gt; text.</p>
<p>Use &amp;copy; to represent copyright.</p>
<p>Don’t forget to escape &amp; signs!</p>
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Forms": {
    title: "HTML Forms",
    content: (
      <div className="space-y-4">
        <p>
          HTML forms are used to collect user input. The data is usually sent to
          a server for processing.
        </p>

        <p>
          A form is created using the{" "}
          <code className="text-purple-400">&lt;form&gt;</code> tag.
        </p>

        <p>🔰 Basic example:</p>
        <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />
  <br />
  <input type="submit" value="Submit" />
</form>
          `}</code>
          </pre>
        </div>

        <p>
          The <code>action</code> attribute defines where the form data is sent,
          and <code>method</code> specifies how it's sent (GET or POST).
        </p>
      </div>
    ),
  },
  "HTML Form Attributes": {
    title: "HTML Form Attributes",
    content: (
      <div className="space-y-4">
        <p>
          HTML form attributes define the behavior and destination of the form
          data.
        </p>

        <p>📝 Common form attributes:</p>
        <ul className="list-disc list-inside">
          <li>
            <code>action</code> – URL to send the form data
          </li>
          <li>
            <code>method</code> – HTTP method: <code>GET</code> or{" "}
            <code>POST</code>
          </li>
          <li>
            <code>target</code> – Where to open the response (<code>_self</code>
            , <code>_blank</code>, etc.)
          </li>
          <li>
            <code>autocomplete</code> – Enables or disables autofill
          </li>
          <li>
            <code>novalidate</code> – Disables form validation
          </li>
        </ul>

        <p>🎯 Example with attributes:</p>
        <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<form action="/register" method="POST" target="_blank" autocomplete="on">
  <input type="text" name="username" />
  <input type="submit" />
</form>
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Form Elements": {
    title: "HTML Form Elements",
    content: (
      <div className="space-y-4">
        <p>
          HTML provides various elements to build interactive forms and collect
          input from users.
        </p>

        <p>📋 Common form elements:</p>
        <ul className="list-disc list-inside">
          <li>
            <code>&lt;input&gt;</code> – Single-line input
          </li>
          <li>
            <code>&lt;textarea&gt;</code> – Multi-line input
          </li>
          <li>
            <code>&lt;select&gt;</code> – Dropdown menu
          </li>
          <li>
            <code>&lt;option&gt;</code> – Options inside{" "}
            <code>&lt;select&gt;</code>
          </li>
          <li>
            <code>&lt;button&gt;</code> – Clickable button
          </li>
          <li>
            <code>&lt;label&gt;</code> – Label for an input
          </li>
        </ul>

        <p>🧪 Example:</p>
        <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />
  <br />
  <label for="message">Message:</label>
  <textarea id="message" name="message"></textarea>
  <br />
  <label for="gender">Gender:</label>
  <select id="gender" name="gender">
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
  <br />
  <button type="submit">Send</button>
</form>
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Input Types": {
    title: "HTML Input Types",
    content: (
      <div className="space-y-4">
        <p>
          The <code className="text-purple-400">&lt;input&gt;</code> tag
          supports various <strong>types</strong> to define the kind of user
          data expected.
        </p>

        <p>🎛️ Common input types:</p>
        <ul className="list-disc list-inside">
          <li>
            <code>text</code> – Single-line text input
          </li>
          <li>
            <code>email</code> – Validates email format
          </li>
          <li>
            <code>password</code> – Obscured text for passwords
          </li>
          <li>
            <code>number</code> – Numeric input
          </li>
          <li>
            <code>date</code> – Date picker
          </li>
          <li>
            <code>radio</code> – Single option from a group
          </li>
          <li>
            <code>checkbox</code> – Multiple selections
          </li>
          <li>
            <code>submit</code> – Submits the form
          </li>
          <li>
            <code>file</code> – File upload
          </li>
        </ul>

        <p>🔧 Example:</p>
        <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<form>
  <input type="text" placeholder="Name" />
  <input type="email" placeholder="Email" />
  <input type="password" placeholder="Password" />
  <input type="date" />
  <input type="checkbox" /> Accept terms
  <br />
  <input type="submit" value="Register" />
</form>
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Input Attributes": {
    title: "HTML Input Attributes",
    content: (
      <div className="space-y-4">
        <p>
          HTML <code className="text-purple-400">&lt;input&gt;</code> elements
          support various attributes to control input behavior, validation, and
          accessibility.
        </p>

        <p>🔧 Common input attributes:</p>
        <ul className="list-disc list-inside">
          <li>
            <code>type</code> – Specifies input type (text, email, password,
            etc.)
          </li>
          <li>
            <code>name</code> – Name used when submitting form data
          </li>
          <li>
            <code>value</code> – Default value
          </li>
          <li>
            <code>placeholder</code> – Temporary hint inside the field
          </li>
          <li>
            <code>required</code> – Makes the field mandatory
          </li>
          <li>
            <code>readonly</code> – Makes field uneditable
          </li>
          <li>
            <code>disabled</code> – Disables the field
          </li>
          <li>
            <code>maxlength</code> – Max number of characters allowed
          </li>
        </ul>

        <p>🧪 Example:</p>
        <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<input type="text" name="username" placeholder="Enter your name" required maxlength="20" />
<input type="email" name="email" value="user@example.com" readonly />
<input type="password" disabled />
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "Input Form Attributes": {
    title: "Input Form Attributes",
    content: (
      <div className="space-y-4">
        <p>
          Some attributes on{" "}
          <code className="text-purple-400">&lt;input&gt;</code> elements
          control how they behave inside forms or interact with form
          submissions.
        </p>

        <p>📋 Useful input-specific form attributes:</p>
        <ul className="list-disc list-inside">
          <li>
            <code>form</code> – Binds input to a form outside its nesting
          </li>
          <li>
            <code>formaction</code> – Overrides the form's action URL (on submit
            buttons)
          </li>
          <li>
            <code>formenctype</code> – Encoding type for form data (e.g.{" "}
            <code>multipart/form-data</code>)
          </li>
          <li>
            <code>formmethod</code> – Overrides the form's method (GET/POST)
          </li>
          <li>
            <code>formtarget</code> – Where to open response (e.g.{" "}
            <code>_blank</code>)
          </li>
          <li>
            <code>formnovalidate</code> – Bypasses HTML validation
          </li>
        </ul>

        <p>🧪 Example with a submit button:</p>
        <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<form id="mainForm" action="/default" method="POST">
  <input type="text" name="name" />
  <button type="submit">Submit Normally</button>
  <button type="submit" formaction="/alternate" formmethod="GET" formtarget="_blank">
    Submit to Another Page
  </button>
</form>
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Canvas": {
    title: "HTML Canvas",
    content: (
      <div className="space-y-4">
        <p>
          The <code className="text-purple-400">&lt;canvas&gt;</code> element is
          used to draw graphics via JavaScript. It can render shapes, graphs,
          games, animations, and more.
        </p>

        <p>🖼️ Canvas must be accessed and drawn using JavaScript:</p>
        <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<canvas id="myCanvas" width="300" height="150" style="border:1px solid #000;"></canvas>

<script>
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(20, 20, 100, 50);
</script>
          `}</code>
          </pre>
        </div>

        <p>
          The <code>getContext("2d")</code> method returns a drawing context for
          2D rendering.
        </p>
      </div>
    ),
  },
  "HTML SVG": {
    title: "HTML SVG",
    content: (
      <div className="space-y-4">
        <p>
          SVG (Scalable Vector Graphics) is an XML-based markup for creating
          vector graphics directly in HTML.
        </p>

        <p>
          🎯 SVG is perfect for icons, charts, and responsive illustrations. It
          scales without losing quality.
        </p>

        <p>🖌️ Example of a simple SVG shape:</p>
        <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<svg width="200" height="100">
  <rect width="200" height="100" style="fill:blue;" />
  <text x="50" y="55" fill="white" font-size="20">SVG Box</text>
</svg>
          `}</code>
          </pre>
        </div>

        <p>
          You can style SVGs with CSS or inline <code>style</code> attributes,
          and they can be interactive using JavaScript.
        </p>
      </div>
    ),
  },
  "HTML Media": {
    title: "HTML Media",
    content: (
      <div className="space-y-4">
        <p>
          HTML allows you to embed media like <strong>video</strong>,{" "}
          <strong>audio</strong>, and other external content directly into
          webpages.
        </p>

        <p>✨ Common media elements:</p>
        <ul className="list-disc list-inside">
          <li>
            <code>&lt;video&gt;</code> – Embed videos
          </li>
          <li>
            <code>&lt;audio&gt;</code> – Embed sound files
          </li>
          <li>
            <code>&lt;iframe&gt;</code> – Embed external resources (e.g.,
            YouTube)
          </li>
          <li>
            <code>&lt;object&gt;</code> / <code>&lt;embed&gt;</code> – Load
            plug-in-based content
          </li>
        </ul>

        <p>🧪 Basic example:</p>
        <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<video width="300" controls>
  <source src="movie.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Video": {
    title: "HTML Video",
    content: (
      <div className="space-y-4">
        <p>
          The <code className="text-purple-400">&lt;video&gt;</code> tag is used
          to embed video content. It supports multiple formats and fallback
          text.
        </p>

        <p>🎥 Common attributes:</p>
        <ul className="list-disc list-inside">
          <li>
            <code>controls</code> – Show play/pause/volume buttons
          </li>
          <li>
            <code>autoplay</code> – Start playing automatically
          </li>
          <li>
            <code>muted</code> – Start muted
          </li>
          <li>
            <code>loop</code> – Play video in a loop
          </li>
          <li>
            <code>poster</code> – Show an image before playback
          </li>
        </ul>

        <p>🧪 Example:</p>
        <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<video width="400" controls poster="thumbnail.jpg">
  <source src="sample.mp4" type="video/mp4" />
  <source src="sample.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Audio": {
    title: "HTML Audio",
    content: (
      <div className="space-y-4">
        <p>
          The <code className="text-purple-400">&lt;audio&gt;</code> tag is used
          to embed sound files. It supports multiple audio formats and fallback
          text.
        </p>

        <p>🎧 Common attributes:</p>
        <ul className="list-disc list-inside">
          <li>
            <code>controls</code> – Show playback controls
          </li>
          <li>
            <code>autoplay</code> – Play automatically when page loads
          </li>
          <li>
            <code>loop</code> – Repeat the audio indefinitely
          </li>
          <li>
            <code>muted</code> – Mute by default
          </li>
        </ul>

        <p>🎼 Example:</p>
        <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<audio controls>
  <source src="sound.mp3" type="audio/mpeg" />
  <source src="sound.ogg" type="audio/ogg" />
  Your browser does not support the audio element.
</audio>
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML Plug-ins": {
    title: "HTML Plug-ins",
    content: (
      <div className="space-y-4">
        <p>
          HTML supports embedding external content or applications using{" "}
          <code className="text-purple-400">&lt;object&gt;</code>,{" "}
          <code>&lt;embed&gt;</code>, and <code>&lt;iframe&gt;</code>.
        </p>

        <p>
          🔌 These were mainly used for things like Flash, PDFs, and Java
          applets. Modern usage favors <code>&lt;iframe&gt;</code> for safer,
          flexible embeds.
        </p>

        <p>
          📄 Example with PDF using <code>&lt;embed&gt;</code>:
        </p>
        <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<embed src="file.pdf" width="600" height="500" type="application/pdf" />
          `}</code>
          </pre>
        </div>

        <p>
          🖼️ Using <code>&lt;object&gt;</code>:
        </p>
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<object data="file.pdf" type="application/pdf" width="600" height="500">
  <p>Your browser does not support PDFs. <a href="file.pdf">Download</a> instead.</p>
</object>
          `}</code>
          </pre>
        </div>
      </div>
    ),
  },
  "HTML YouTube": {
    title: "HTML YouTube",
    content: (
      <div className="space-y-4">
        <p>
          You can embed YouTube videos in your HTML pages using the{" "}
          <code className="text-purple-400">&lt;iframe&gt;</code> tag. YouTube
          provides a shareable embed code.
        </p>

        <p>📺 Example embed code from YouTube:</p>
        <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<iframe width="560" height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen>
</iframe>
          `}</code>
          </pre>
        </div>

        <p>
          You can change the video by replacing the URL in the <code>src</code>{" "}
          attribute with any other YouTube video’s embed link.
        </p>
      </div>
    ),
  },
  "HTML Web APIs": {
    title: "HTML Web APIs",
    content: (
      <div className="space-y-4">
        <p>
          HTML can interact with various Web APIs provided by the browser to add
          advanced functionality like geolocation, drag and drop, and storage.
        </p>
        <p>
          These APIs are usually accessed through JavaScript and allow your web
          applications to be more interactive and powerful.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Geolocation API:</strong> Get the user's location.
          </li>
          <li>
            <strong>Drag and Drop API:</strong> Allow draggable HTML elements.
          </li>
          <li>
            <strong>Web Storage API:</strong> Store data in browser
            (localStorage/sessionStorage).
          </li>
        </ul>
        <p>
          Each API has specific use cases and requires permission or event
          handling logic.
        </p>
      </div>
    ),
  },
  "HTML Geolocation": {
    title: "HTML Geolocation",
    content: (
      <div className="space-y-4">
        <p>
          The Geolocation API allows the browser to detect and return the user’s
          geographical location. It’s useful for maps, local services, etc.
        </p>
        <p>Here's a basic example:</p>
        <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<script>
  navigator.geolocation.getCurrentPosition(function(position) {
    alert("Latitude: " + position.coords.latitude + 
          "\\nLongitude: " + position.coords.longitude);
  });
</script>
          `}</code>
          </pre>
        </div>
        <p>
          This API typically requires user permission and may not work if denied
          or blocked.
        </p>
      </div>
    ),
  },
  "HTML Drag and Drop": {
    title: "HTML Drag and Drop",
    content: (
      <div className="space-y-4">
        <p>
          The HTML Drag and Drop API allows elements to be moved using the
          mouse. It’s commonly used in UI elements like file uploads or sortable
          lists.
        </p>

        <p>Example of making a draggable element:</p>
        <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<div id="dragme" draggable="true" ondragstart="drag(event)">Drag me!</div>

<script>
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
</script>
          `}</code>
          </pre>
        </div>

        <p>
          You also need drop targets with events like <code>ondragover</code>{" "}
          and <code>ondrop</code> to complete the interaction.
        </p>
      </div>
    ),
  },
  "HTML Web Storage": {
    title: "HTML Web Storage",
    content: (
      <div className="space-y-4">
        <p>
          The Web Storage API allows storing data in the browser using{" "}
          <code>localStorage</code> or <code>sessionStorage</code>. It provides
          better performance and security than cookies.
        </p>

        <p>
          Example using <code>localStorage</code>:
        </p>
        <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white p-4 rounded-lg overflow-x-auto">
          <pre>
            <code>{`
<script>
  // Store data
  localStorage.setItem("username", "John");

  // Retrieve data
  let user = localStorage.getItem("username");
  alert(user);
</script>
          `}</code>
          </pre>
        </div>

        <p>
          Use <code>sessionStorage</code> to store data for a single session.
          It's cleared when the page session ends.
        </p>
      </div>
    ),
  },
};

export default topicContents;
