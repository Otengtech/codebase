import React, { useEffect, useState } from "react";
import Navbar from "../Components/Home/Navbar";
import { topicGroups } from "./HtmlTopic";
import topicContents from "./HtmlContent";
import { Menu, X } from "lucide-react";

const flatTopics = topicGroups.flatMap(group => group.items);

const CourseLayout = () => {
  const defaultTopicId = localStorage.getItem("selectedTopicId") || flatTopics[0].id;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentTopic, setCurrentTopic] = useState(
    flatTopics.find(t => t.id === defaultTopicId) || flatTopics[0]
  );
  const [fade, setFade] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 150);
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Save current topic ID
    localStorage.setItem("selectedTopicId", currentTopic.id);

    return () => clearTimeout(timeout);
  }, [currentTopic]);

  const currentIndex = flatTopics.findIndex(t => t.id === currentTopic.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < flatTopics.length - 1;

  const handlePrev = () => {
    if (hasPrev) setCurrentTopic(flatTopics[currentIndex - 1]);
  };

  const handleNext = () => {
    if (hasNext) setCurrentTopic(flatTopics[currentIndex + 1]);
  };

  const renderExample = (id) => {
    switch (id) {
      case "html-headings":
        return `<h1>This is a Heading 1</h1>\n<h2>This is a Heading 2</h2>`;
      case "html-paragraphs":
        return `<p>This is a paragraph of text in HTML.</p>`;
      case "html-links":
        return `<a href="https://example.com">Visit Example</a>`;
      case "html-intro":
        return `<!-- HTML stands for HyperText Markup Language -->`;
      default:
        return `<!-- Example code for ${id} -->`;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex h-[calc(100vh-5rem)] mt-20 relative">
        {/* Mobile toggle button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden fixed top-20 right-0 z-50 bg-violet-700 rounded-bl-md text-white p-2 shadow-md focus:outline-none hover:bg-violet-600 transition"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Sidebar */}
        <aside
          className={`${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:static w-72 h-full custom-scroll bg-gradient-to-br from-gray-900 to-purple-600 text-white px-4 py-4 pb-16 z-40 transition-transform duration-300 ease-in-out overflow-y-auto`}
        >
          <h2 className="text-2xl font-bold text-sky-300 mb-4">HTML Course</h2>
          <div className="space-y-4">
            {topicGroups.map(group => (
              <div key={group.section}>
                <h3 className="text-sky-300 text-lg font-semibold border-b border-white/20 pb-1 ml-3 mb-2">
                  {group.section}
                </h3>
                <nav className="space-y-1 pl-2">
                  {group.items.map(({ id, title }) => (
                    <button
                      key={id}
                      onClick={() => {
                        setCurrentTopic({ id, title });
                        setIsSidebarOpen(false);
                      }}
                      className={`block w-full text-left text-sm px-3 py-1 rounded hover:bg-white/10 ${
                        currentTopic.id === id ? "bg-white/20" : ""
                      }`}
                    >
                      {title}
                    </button>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 custom-scroll md:py-10 md:px-20 pt-10 pb-16 px-4 overflow-y-auto bg-slate-100">
          <div
            className={`transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-3xl font-bold text-slate-700 mb-4">
              {currentTopic.title}
            </h1>
            <p className="mb-4 text-slate-600">
              Here's a quick example of how <strong>{currentTopic.title}</strong> works:
            </p>
            <pre className="rounded-lg shadow-md overflow-x-auto bg-slate-800 text-slate-100 p-4 text-sm mb-8">
              <code>{renderExample(currentTopic.id)}</code>
            </pre>

            {/* Full content from topicContents */}
            <div className="prose prose-slate max-w-full mb-10">
              {topicContents[currentTopic.title]?.content || (
                <p className="text-red-500">Content not available for this topic.</p>
              )}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex justify-between items-center gap-4">
              <button
                onClick={handlePrev}
                disabled={!hasPrev}
                className="px-4 py-2 rounded bg-purple-700 text-white disabled:opacity-40 hover:bg-purple-600 transition"
              >
                ← Previous
              </button>
              <button
                onClick={handleNext}
                disabled={!hasNext}
                className="px-4 py-2 rounded bg-purple-700 text-white disabled:opacity-40 hover:bg-purple-600 transition"
              >
                Next →
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default CourseLayout;
