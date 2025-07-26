import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-700 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand / Description */}
        <div>
          <h2 className="text-2xl text-sky-300 font-bold mb-4">CodeBase</h2>
          <p className="text-sm text-gray-400">
            Empowering your lifestyle through innovation, style, and wellness.
            Stay connected with us!
          </p>
        </div>

        {/* Quick Links and Resources */}
        <div className="flex justify-between">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sky-300 text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-sky-300 text-lg mb-3">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/faq" className="hover:text-white">FAQ</a></li>
              <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-2xl text-sky-300 font-bold mb-2">Join Our Community</h2>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to our newsletter and never miss an update.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter email"
              className="px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
            <button
              type="submit"
              className="bg-sky-300 text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-sky-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-500">
        © 2025 CodeBase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
