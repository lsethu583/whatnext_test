import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-[#0a192f] text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="logo-container p-2 rounded-lg bg-gradient-to-r from-emerald-400 to-blue-500">
          <img src="/Logo.png" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Central Content */}
        <div className="flex-1 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
              WhatNext?!
            </h1>
            <p className="text-sm text-gray-300">
              Preparing the next generation to lead and succeed.
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-4">
          <Link to="/about" className="hover:text-emerald-400">
            About
          </Link>
          <Link to="/services" className="hover:text-emerald-400">
            Services
          </Link>
          <Link to="/contact" className="hover:text-emerald-400">
            Contact
          </Link>
          <Link
            to="/login"
            className="bg-emerald-400 text-white p-1 rounded-md hover:bg-emerald-600 flex items-center justify-center"
          >
            <FaSignInAlt className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
