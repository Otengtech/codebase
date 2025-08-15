import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <>
      <footer className="bg-gradient-to-r from-gray-800 to-violet-900 text-white border-t border-gray-700 px-6 pt-12 pb-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand and Vision */}
          <div>
            <h2 className="text-2xl text-sky-300 font-bold mb-4 block">CodeBase</h2>
            <p className="text-sm text-gray-300 mb-4">
              At CodeBase, we aim to cultivate a thriving community of
              developers and learners by providing top-notch resources,
              real-world projects, and continuous support.
            </p>
            <p className="text-sm text-gray-300 block">
              Empower your lifestyle through technology, wellness, and
              innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold block text-sky-300 text-lg mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm block">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold block text-sky-300 text-lg mb-3">
              Resources
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm block">
              <li>
                <Link to="/course" className="hover:text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="hover:text-white">
                  Quiz
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold block text-sky-300 text-lg mb-3">
              Connect with Us
            </h3>
            <p className="text-sm text-gray-300 mb-3 block">
              We’d love to hear from you.
            </p>
            <p className="text-sm text-gray-300">
              Email:{" "}
              <a href="codebase326@gmail.com" className="hover:text-white block">
                codebase326@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-300 mb-4">Phone: +233593957373</p>

            {/* Social Links */}
            <div className="flex gap-4 mt-2 block">
              <a
                href="#"
                className="text-gray-300 hover:text-sky-300 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-sky-300 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-sky-300 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-sky-300 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} CodeBase. All rights reserved.
        </div>
        <div className=" pt-4 pb-10 md:pb-1 text-center text-sm text-gray-300">
          Designed by Ebenezer Oteng
        </div>
      </footer>
    </>
  );
};

export default Footer;
