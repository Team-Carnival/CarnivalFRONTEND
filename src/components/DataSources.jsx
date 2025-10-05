import React from "react";
import { FaSatellite, FaCloudRain, FaWind, FaTemperatureHigh } from "react-icons/fa";
import { motion } from "framer-motion";

const dataSources = [
  {
    name: "NASA POWER",
    icon: <FaSatellite size={40} className="text-blue-400" />,
    description: "Provides global weather, solar, and climate data for any location and time."
  },
  {
    name: "OpenWeatherMap API",
    icon: <FaCloudRain size={40} className="text-cyan-400" />,
    description: "Real-time and forecast weather data, including temperature, rainfall, and wind."
  },
  {
    name: "NOAA Climate Data",
    icon: <FaTemperatureHigh size={40} className="text-red-400" />,
    description: "Historical climate data including temperature extremes, rainfall, and wind patterns."
  },
  {
    name: "ESA Earth Observation",
    icon: <FaWind size={40} className="text-green-400" />,
    description: "Satellite imagery and environmental monitoring for global Earth observation."
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
            We leverage trusted and open Earth observation data to forecast outdoor conditions accurately. Below are the key sources powering our predictions.
          </p>
        </motion.div>

        {/* Data Source Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dataSources.map((source, idx) => (
            <motion.div
              key={source.name}
              className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md hover:scale-[1.03] transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * idx }}
            >
              <div className="flex justify-center mb-4">{source.icon}</div>
              <h3 className="text-xl font-semibold text-sky-300 text-center mb-2">
                {source.name}
              </h3>
              <p className="text-gray-300 text-sm text-center">{source.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataSources;
