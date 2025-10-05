// AboutUs.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";

const members = [
  {
    name: "Bijay Singh Saud",
    role: "Frontend Lead (React & UI)",
    bio: "Builds the interactive UI, animations and ensures responsive design.",
    img: "/images/bijay.jpg", // replace with real image path or gravatar
    links: { github: "#", linkedin: "#", email: "mailto:bijay@example.com" },
  },
  {
    name: "Member Two",
    role: "Backend & APIs",
    bio: "Integrates NASA POWER, OpenWeather and builds the Node.js API layer.",
    img: "/images/member2.jpg",
    links: { github: "#", linkedin: "#", email: "mailto:member2@example.com" },
  },
  {
    name: "Member Three",
    role: "Data Scientist",
    bio: "Designs risk scoring logic and validates results using Earth observation data.",
    img: "/images/member3.jpg",
    links: { github: "#", linkedin: "#", email: "mailto:member3@example.com" },
  },
];

const AboutUs = () => {
  return (
    <section
      id="team"
      className="w-full bg-gradient-to-b from-[#031224] to-[#05132a] text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold font-[Orbitron] tracking-tight text-sky-300">
            About Team Zenith
          </h2>
          <p className="mt-4 text-gray-300 text-lg leading-relaxed">
            We harness NASA Earth observation data and modern weather APIs to help people
            plan outdoor experiences with confidence. Our mission is to make Earth data
            actionable and accessible — whether you’re hiking, fishing, or hosting an event.
          </p>
        </motion.div>

        {/* Mission + Quick Info */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
        >
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-sm">
            <h3 className="text-xl font-semibold text-sky-300 mb-2">Our Mission</h3>
            <p className="text-gray-300">
              Turn NASA’s Earth data into practical weather insights for outdoor planning
              worldwide.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-sm">
            <h3 className="text-xl font-semibold text-sky-300 mb-2">Challenge</h3>
            <p className="text-gray-300">
              NASA Space Apps Challenge 2025 — Forecast the likelihood of extreme
              outdoor conditions using satellite and ground data.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-sm">
            <h3 className="text-xl font-semibold text-sky-300 mb-2">Contact</h3>
            <div className="text-gray-300">
              <p>teamzenith@spaceweather.app</p>
              <div className="flex items-center gap-3 mt-3">
                <a href="#" aria-label="GitHub" className="hover:text-sky-300">
                  <FaGithub />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-sky-300">
                  <FaLinkedin />
                </a>
                <a href="mailto:teamzenith@spaceweather.app" aria-label="Email" className="hover:text-sky-300">
                  <FaEnvelope />
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-sky-300">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((m, idx) => (
            <motion.article
              key={m.name}
              className="bg-white/4 p-6 rounded-2xl border border-white/10 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx + 0.2 }}
            >
              <div className="flex items-center gap-4">
                <img
                  src={m.img}
                  alt={`${m.name} photo`}
                  className="w-16 h-16 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h4 className="text-xl font-semibold text-white">{m.name}</h4>
                  <p className="text-sm text-sky-300 font-medium">{m.role}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-300 text-sm leading-relaxed">{m.bio}</p>

              <div className="mt-4 flex items-center gap-3">
                {m.links.github && (
                  <a
                    href={m.links.github}
                    aria-label={`${m.name} GitHub`}
                    className="text-gray-300 hover:text-sky-300"
                  >
                    <FaGithub />
                  </a>
                )}
                {m.links.linkedin && (
                  <a
                    href={m.links.linkedin}
                    aria-label={`${m.name} LinkedIn`}
                    className="text-gray-300 hover:text-sky-300"
                  >
                    <FaLinkedin />
                  </a>
                )}
                {m.links.email && (
                  <a
                    href={m.links.email}
                    aria-label={`${m.name} Email`}
                    className="text-gray-300 hover:text-sky-300"
                  >
                    <FaEnvelope />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer small note */}
        <motion.p
          className="text-center text-sm text-gray-400 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Built for NASA Space Apps Challenge 2025 • Powered by NASA POWER & OpenWeather
        </motion.p>
      </div>
    </section>
  );
};

export default AboutUs;
