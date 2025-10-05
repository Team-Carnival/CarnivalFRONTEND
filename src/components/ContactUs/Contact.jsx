import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For prototype, just show thank you message
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-[#031224] to-[#05132a] text-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold font-[Orbitron] text-sky-300 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Have questions, suggestions, or want to collaborate? Reach out to Team Zenith!
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a href="#" aria-label="GitHub" className="hover:text-sky-400 text-2xl">
            <FaGithub />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-sky-400 text-2xl">
            <FaLinkedin />
          </a>
          <a href="mailto:teamzenith@spaceweather.app" aria-label="Email" className="hover:text-sky-400 text-2xl">
            <FaEnvelope />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-sky-400 text-2xl">
            <FaTwitter />
          </a>
        </motion.div>

        {/* Contact Form */}
        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl max-w-xl mx-auto flex flex-col gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="px-4 py-2 rounded-md bg-[#0e1e35] text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="px-4 py-2 rounded-md bg-[#0e1e35] text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="px-4 py-2 rounded-md bg-[#0e1e35] text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 py-3 rounded-full font-semibold text-lg text-white transition-all duration-300"
            >
              Send Message
            </button>
          </motion.form>
        ) : (
          <motion.div
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-lg text-gray-200">
              Thank you! Your message has been sent. We'll get back to you soon 🚀
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;
