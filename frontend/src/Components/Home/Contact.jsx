import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Footer from "./Footer";
import Navbar from "./Navbar";

const API_URL = import.meta.env.VITE_API_URL;

const Contact = () => {
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Email Sent:", data);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };

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
        <div className="min-h-screen py-12 bg-gradient-to-r from-gray-900 to-violet-900">
          <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
            {/* LEFT: Contact Info */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-sky-300">
                Contact LearnBase
              </h1>
              <p className="text-gray-300 leading-relaxed">
                We’re happy to connect with you. Whether it's feedback,
                questions, or support, just send us a message and we’ll get back
                to you shortly.
              </p>

              <div className="space-y-4 mt-10 text-gray-400">
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  LearnBase is your go-to platform for mastering web development
                  with interactive quizzes, structured lessons, and real-world
                  projects. Whether you're a beginner or a seasoned developer,
                  we’ve tailored tools and content to keep you challenged.
                </p>
                <p className="text-gray-300 text-lg">
                  Our mission is to make high-quality, practical tech education
                  available to everyone—learn by doing, not just watching!
                </p>
              </div>
            </div>

            {/* RIGHT: Contact Form */}
            <form
              className="bg-gray-800/30 backdrop-blur-md p-8 rounded-xl shadow-xl space-y-6 border border-white/10"
              onSubmit={handleSubmit}
            >
              <h2 className="text-2xl font-bold text-sky-300 mb-4">
                Send a Message
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 placeholder:text-sky-200 rounded-md bg-gray-700/40 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="Your name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 placeholder:text-sky-200 rounded-md bg-gray-700/40 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="Your email"
                  required
                />
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 placeholder:text-sky-200 rounded-md bg-gray-700/40 text-white border border-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-400 text-gray-900 font-semibold py-3 rounded-md transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Contact;
