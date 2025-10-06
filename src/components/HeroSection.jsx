import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Link } from "react-router-dom";


const HeroSection = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesOptions = {
    background: { color: { value: "#040d21" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: false },
        onHover: { enable: false },
        resize: true,
      },
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
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Star Background */}
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight font-[Orbitron]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Predict Your Perfect Day, <br />
          <span className="text-blue-350 glow-text">Powered by Space</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
        >
          Explore NASA’s Earth observation data to forecast “very hot”, “very cold”, “very wet”, and “very windy” days — anywhere on Earth.
        </motion.p>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/predictor"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition duration-300"
          >
            Get Started
          </Link>
        </motion.div>

      </div>

      {/* Optional Earth Glow Effect */}
      <div className="absolute bottom-[-20%] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-t from-blue-600/30 to-transparent rounded-full blur-3xl opacity-70"></div>
    </div>
  );
};

export default HeroSection;
