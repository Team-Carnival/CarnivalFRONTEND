// Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // to detect current path

  const links = [
    { name: "Home", to: "/" },
    { name: "Weather Predictor", to: "/predictor" },
    { name: "Data Sources", to: "/datasources" },
    { name: "About Team", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-90 text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-sky-400 font-[Orbitron]">
          Space Weather Insight
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                className={`transition-colors duration-300 ${
                  location.pathname === link.to
                    ? "text-blue-400"
                    : "hover:text-sky-400"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-black bg-opacity-95 py-6 space-y-4">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`text-lg transition-colors duration-300 ${
                  location.pathname === link.to
                    ? "text-blue-400"
                    : "hover:text-sky-400"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
