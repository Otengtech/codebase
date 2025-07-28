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
};

export default topicContents;
