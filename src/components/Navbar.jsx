// Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", to: "/" },
    { name: "Weather Predictor", to: "/predictor" },
    { name: "Data Sources", to: "/datasources" },
    { name: "About Team", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed top-8 w-full bg-transparent text-white z-50">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-transparent border border-white border-opacity-30 rounded-2xl backdrop-blur-md shadow-2xl shadow-blue-500/20 hover:shadow-blue-400/30 transition-all duration-500 hover:border-opacity-50 mx-4">
          <div className="flex justify-between items-center py-6 px-8">
            {/* Logo */}
            <h1 className="text-2xl font-bold font-[Orbitron] bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Team Carnival
            </h1>

            {/* Desktop Links */}
            <ul className="hidden md:flex space-x-10">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className={`relative transition-all duration-300 font-medium px-3 py-2 rounded-lg ${
                      location.pathname === link.to
                        ? "text-blue-400 bg-blue-500/10 border border-blue-400/30"
                        : "text-gray-300 hover:text-blue-400 hover:bg-blue-500/10"
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.to && (
                      <span className="absolute inset-0 border border-blue-400 border-opacity-40 rounded-lg animate-pulse"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-blue-400 transition-colors border border-white border-opacity-30 rounded-lg p-2 hover:border-blue-400 hover:border-opacity-60"
              >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-black bg-opacity-80 backdrop-blur-lg border border-white border-opacity-30 rounded-2xl shadow-2xl">
              <ul className="flex flex-col items-center py-6 space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg transition-all duration-300 font-medium px-6 py-3 rounded-xl ${
                        location.pathname === link.to
                          ? "text-blue-400 bg-blue-500/10 border border-blue-400/40"
                          : "text-gray-300 hover:text-blue-400 hover:bg-blue-500/10"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
