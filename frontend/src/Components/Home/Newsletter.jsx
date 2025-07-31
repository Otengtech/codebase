// components/Newsletter.jsx
import React, { useState } from "react";
import { useInViewAnimation } from "../Animation/useInViewAnimation";

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

  const [leftRef, isLeftVisible] = useInViewAnimation();

  return (
    <>
      <section className="bg-gradient-to-r from-gray-900 to-violet-900 py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto text-white space-y-6">
          <h2 className="text-3xl font-bold text-sky-300 block">
            Join Our Community
          </h2>
          <p className="text-gray-300 text-md text-left block">
            Join our ever-growing community of passionate learners, self-taught
            developers, and tech enthusiasts who are leveling up their skills,
            collaborating on exciting projects, and sharing knowledge in a
            friendly and supportive space.
          </p>
        </div>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row justify-center block items-center gap-3 mt-6"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full sm:w-auto px-6 py-3 placeholder:text-gray-200 rounded-md bg-transparent border border-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-sky-200"
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
      </section>
    </>
  );
};

export default Newsletter;
