// AboutUs.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaBullseye, FaExclamationTriangle, FaFlag } from "react-icons/fa";
import Asish from "../../assets/asish.jpg";
import BJ from "../../assets/bijay.jpg";

const members = [
  {
    name: "Asish Mehata",
    role: "Full Stack Developer",
    bio: "Leads both frontend and backend development, integrating APIs and ensuring a seamless, responsive platform for users.",
    img: Asish,
    links: { github: "https://github.com/asishmehata48", linkedin: "linkedin.com/in/asishmehata48", email: "mailto:asishmehata48@gmail.com" },
  },
  {
    name: "Bijay Singh Saud",
    role: "Frontend Developer",
    bio: "Builds responsive and interactive UI components, implements animations, and ensures smooth integration with backend APIs.",
    img: BJ,
    links: { github: "https://github.com/bijaysaud54", linkedin: "https://www.linkedin.com/in/bijaysinghsaud/", email: "mailto:bijaysinghsaud@gmail.com" },
  },
];

const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className="w-full bg-gradient-to-b from-[#031224] to-[#05132a] text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* About the Team */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold font-[Orbitron] tracking-tight text-sky-300 mb-4">
            About US
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-2">
            Team Carnival is dedicated to transforming NASA Earth observation and modern weather data into actionable insights. Our platform helps outdoor enthusiasts make informed decisions by providing accurate environmental information.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            We combine skills in full-stack development, frontend design, and UI/UX to deliver a seamless and intuitive experience, making it easy for users to access critical weather and climate data.
          </p>
        </motion.div>

          <h2 className="text-4xl md:text-5xl font-extrabold font-[Orbitron] tracking-tight text-sky-300 mb-4 pb-4 text-center">
            Meet the Developers
          </h2>


        {/* Team Members - Horizontal Layout */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-20">
          {members.map((m, idx) => (
            <motion.article
              key={m.name}
              className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300 flex-1 max-w-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx + 0.2 }}
            >
              {/* Image and Basic Info */}
              <div className="flex flex-col items-center text-center mb-4">
                <img
                  src={m.img || "/images/default.jpg"}
                  alt={`${m.name} photo`}
                  className="w-24 h-24 rounded-xl object-cover border border-white/10 mb-4"
                />
                <h4 className="text-xl font-semibold text-white mb-1">{m.name}</h4>
                <p className="text-sky-300 font-medium text-sm mb-3">{m.role}</p>
              </div>

              {/* Bio */}
              <div className="mb-4">
                <p className="text-gray-300 text-sm leading-relaxed text-center">{m.bio}</p>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4 pt-2">
                {m.links.github && (
                  <a 
                    href={m.links.github} 
                    aria-label={`${m.name} GitHub`} 
                    className="text-gray-300 hover:text-sky-300 transition-colors duration-300"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
                {m.links.linkedin && (
                  <a 
                    href={m.links.linkedin} 
                    aria-label={`${m.name} LinkedIn`} 
                    className="text-gray-300 hover:text-sky-300 transition-colors duration-300"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
                {m.links.email && (
                  <a 
                    href={m.links.email} 
                    aria-label={`${m.name} Email`} 
                    className="text-gray-300 hover:text-sky-300 transition-colors duration-300"
                  >
                    <FaEnvelope size={20} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* About the Challenge */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold font-[Orbitron] text-sky-300 mb-8 text-center">
            About the Challenge
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <FaBullseye size={40} className="text-sky-300 mb-4" />,
                title: "Our Mission",
                text: "To make Earth observation and weather data accessible and actionable, enabling users to plan outdoor activities safely and confidently."
              },
              {
                icon: <FaExclamationTriangle size={40} className="text-sky-300 mb-4" />,
                title: "Our Challenge",
                text: "Forecasting extreme outdoor conditions by integrating satellite imagery, historical climate data, and real-time weather feeds. Current platforms lack accurate, actionable insights for outdoor risk management."
              },
              {
                icon: <FaFlag size={40} className="text-sky-300 mb-4" />,
                title: "Our Goal",
                text: "Provide a reliable, user-friendly platform that delivers risk assessments, personalized recommendations, and future upgrades such as predictive analytics and mobile alerts."
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-sm flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * idx }}
              >
                {item.icon}
                <h3 className="text-xl font-semibold text-sky-300 mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
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