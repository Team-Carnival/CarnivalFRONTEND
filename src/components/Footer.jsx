import React from 'react';
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 text-center py-8 flex flex-col justify-center relative z-50">
      <div className="mx-auto flex flex-col justify-center items-center gap-4">
        <p className="text-xl md:text-2xl text-blue-300 italic">
          "Connecting Earth and Space — forecasting the future, one cloud at a time."
        </p>

        <ul className="list-none p-0 my-5 flex justify-center flex-wrap">
          {[
            { icon: FaYoutube, href: "https://www.youtube.com", label: "YouTube" },
            { icon: FaFacebook, href: "https://www.facebook.com", label: "Facebook" },
            { icon: FaTwitter, href: "https://www.twitter.com", label: "Twitter" },
            { icon: FaInstagram, href: "https://www.instagram.com", label: "Instagram" },
            { icon: FaLinkedin, href: "https://www.linkedin.com", label: "LinkedIn" }
          ].map((social, index) => (
            <li key={index} className="mx-4">
              <a 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={social.label}
                className="text-white text-3xl transition-colors duration-300 relative hover:text-sky-400"
              >
                <social.icon />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-sm text-gray-400">
          © 2025 Team Carnival | NASA Space Apps Challenge 2025
        </p>
        <p className="text-sm text-gray-400">
          All rights reserved | Developed by <span className="text-sky-400 font-semibold">Team Carnival</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
