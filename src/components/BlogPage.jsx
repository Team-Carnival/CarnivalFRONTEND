import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const blogPosts = [
  {
    title: "Our Journey at NASA Space Apps Challenge 2025",
    date: "October 5, 2025",
    description:
      "Team Carnival started as a small idea — to turn NASA Earth observation data into something meaningful for everyone. In just 48 hours, we built a weather intelligence platform that helps outdoor enthusiasts make smarter decisions.",
    link: "#", // Replace with your actual blog link or page later
  },
  {
    title: "Behind the Scenes: Building the Carnival Weather App",
    date: "October 4, 2025",
    description:
      "From setting up APIs to designing the user interface, here’s how we transformed NASA POWER and OpenWeather data into an intuitive and visually appealing platform.",
    link: "#",
  },
  {
    title: "What We Learned from NASA Space Apps 2025",
    date: "October 3, 2025",
    description:
      "Beyond coding and design, this challenge taught us teamwork, time management, and the importance of open collaboration in science and technology.",
    link: "#",
  },
];

const BlogPage = () => {
  return (
    <section
      id="blog"
      className="w-full bg-gradient-to-b from-[#031224] to-[#05132a] text-white py-20 px-6 min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold font-[Orbitron] tracking-tight text-sky-300 mb-4">
            Team Carnival Blog
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Sharing our journey, insights, and innovations from the NASA Space
            Apps Challenge 2025 🚀
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div>
                <h2 className="text-2xl font-semibold text-white mb-3 font-[Orbitron]">
                  {post.title}
                </h2>
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <FaCalendarAlt className="mr-2 text-sky-300" />
                  {post.date}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {post.description}
                </p>
              </div>

              <a
                href={post.link}
                className="flex items-center text-sky-300 font-medium hover:underline mt-auto"
              >
                Read More
                <FaArrowRight className="ml-2" />
              </a>
            </motion.article>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          className="text-center text-sm text-gray-400 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          © {new Date().getFullYear()} Team Carnival — Built for NASA Space Apps
          Challenge 2025 🌍
        </motion.p>
      </div>
    </section>
  );
};

export default BlogPage;
