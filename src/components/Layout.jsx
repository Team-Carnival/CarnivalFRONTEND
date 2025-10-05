// Layout.jsx
import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesOptions = {
    background: { color: { value: "#040d21" } },
    fpsLimit: 60,
    interactivity: {
      events: { onClick: { enable: false }, onHover: { enable: false }, resize: true },
    },
    particles: {
      color: { value: "#ffffff" },
      links: { enable: true, color: "#ffffff", distance: 150, opacity: 0.2 },
      move: { enable: true, speed: 0.3 },
      number: { value: 70 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: true,
  };

  return (
    <div className="relative min-h-screen w-full bg-[#040d21] text-white overflow-x-hidden">
      {/* 🪐 Fixed starry background */}
      <div className="fixed inset-0 -z-10">
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      </div>

      {/* 🌌 Scrollable content layer */}
      <div className="flex flex-col min-h-screen relative z-10">
        <Navbar />

        {/* Animated Page Content */}
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex-grow pt-20"
          >
            {children}
          </motion.main>
        </AnimatePresence>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
