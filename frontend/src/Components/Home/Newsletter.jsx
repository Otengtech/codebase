// components/Newsletter.jsx
import React, { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("Please enter a valid email address.");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("🎉 Subscribed successfully!");
        setEmail("");
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error("Subscribe error:", err);
      setStatus("Failed to subscribe. Try again later.");
    }
  };

  return (
    <section className="bg-gradient-to-r from-gray-900 to-violet-900 py-16 px-6 text-center">
      <div className="max-w-2xl mx-auto text-white space-y-6">
        <h2 className="text-3xl font-bold text-sky-300">Join Our Community</h2>
        <p className="text-gray-300 text-md text-left">
          Join our ever-growing community of passionate learners, self-taught
          developers, and tech enthusiasts who are leveling up their skills,
          collaborating on exciting projects, and sharing knowledge in a
          friendly and supportive space. Whether you're just starting your
          journey or looking to stay sharp, you’ll always find value,
          inspiration, and encouragement here.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-6"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full sm:w-auto px-6 py-3 placeholder:text-sky-200 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-sky-300"
            required
          />
          <button
            type="submit"
            className="bg-sky-300 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-sky-200 transition"
          >
            Subscribe
          </button>
        </form>
        {status && <p className="text-sm mt-4 text-sky-200">{status}</p>}
      </div>
    </section>
  );
};

export default Newsletter;
