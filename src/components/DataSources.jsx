import React from "react";
import { FaSatellite, FaCloudRain, FaWind, FaTemperatureHigh } from "react-icons/fa";
import { motion } from "framer-motion";

const dataSources = [
  {
    name: "NASA POWER",
    icon: <FaSatellite size={40} className="text-blue-400" />,
    description:
      "NASA POWER provides high-quality global weather, solar, and climate data for any location on Earth. It helps in analyzing historical patterns and forecasting environmental conditions accurately, making it ideal for researchers and developers.",
    link: "https://power.larc.nasa.gov/",
  },
  {
    name: "OpenWeatherMap API",
    icon: <FaCloudRain size={40} className="text-cyan-400" />,
    description:
      "OpenWeatherMap offers real-time weather updates and forecast data including temperature, precipitation, wind speed, and humidity. It’s perfect for integrating live weather data into apps and websites to provide users with accurate and timely information.",
    link: "https://openweathermap.org/api",
  },
  {
    name: "NOAA Climate Data",
    icon: <FaTemperatureHigh size={40} className="text-red-400" />,
    description:
      "The NOAA Climate Data service gives access to comprehensive historical climate records, including temperature extremes, rainfall, and wind patterns. This data is crucial for climate research, environmental studies, and long-term weather trend analysis.",
    link: "https://www.ncei.noaa.gov/",
  },
  {
    name: "ESA Earth Observation",
    icon: <FaWind size={40} className="text-green-400" />,
    description:
      "ESA Earth Observation provides satellite imagery and environmental monitoring data from around the globe. It enables detailed observation of natural events, environmental changes, and supports research in climate science, agriculture, and disaster management.",
    link: "https://www.esa.int/Applications/Observing_the_Earth",
  },
];

const DataSources = () => {
  return (
    <section
      id="datasources"
      className="min-h-screen bg-gradient-to-b from-[#031224] to-[#05132a] text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold font-[Orbitron] text-sky-300">
            Data Sources
          </h2>
          <p className="mt-4 text-gray-300 text-lg leading-relaxed">
            We leverage trusted and open Earth observation data to forecast outdoor conditions accurately. Each source provides valuable insights into weather patterns, climate changes, and environmental monitoring to help make informed decisions.
          </p>
        </motion.div>

        {/* Data Source Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dataSources.map((source, idx) => (
            <motion.div
              key={source.name}
              className="bg-white/5 p-10 mx-10 rounded-2xl  border border-white/10 backdrop-blur-md hover:scale-[1.03] transition-transform duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * idx }}
            >
              <div className="flex flex-col items-center mb-4">
                {source.icon}
                <h3 className="text-xl font-semibold text-sky-300 text-center mt-2 mb-2">
                  <a href={source.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {source.name}
                  </a>
                </h3>
                <p className="text-gray-300 text-sm text-center">{source.description}</p>
              </div>
              <div className="flex justify-center mt-4">
                <a
                  href={source.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition"
                >
                  Try Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataSources;
