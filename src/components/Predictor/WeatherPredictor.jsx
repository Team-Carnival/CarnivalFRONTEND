import React, { useState } from "react";
import axios from "axios";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaThermometerHalf, FaCloudRain, FaWind } from "react-icons/fa";
import { motion } from "framer-motion";

const WeatherLikelihood = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const BASE_URL = "https://nasa-weather-backend.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);
    setLoading(true);

    try {
      const res = await axios.get(`${BASE_URL}/api/weather`, {
        params: { location, date, time },
      });
      setResult(res.data);
    } catch (err) {
      setError(err.response?.data?.error || err.message || "Failed to fetch weather data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#020a1f] to-[#05132a] text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold font-[Orbitron] mb-6 text-sky-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Weather Likelihood Predictor
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-12 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Enter your location, date, and time to get a customized forecast for extreme weather conditions.
        </motion.p>

        {/* Form Card */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl max-w-xl mx-auto flex flex-col gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3 bg-white/20 rounded-md px-4 py-2">
            <FaMapMarkerAlt className="text-sky-300 text-xl" />
            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-transparent text-white placeholder-gray-300 outline-none"
              required
            />
          </div>

          <div className="flex items-center gap-3 bg-white/20 rounded-md px-4 py-2">
            <FaCalendarAlt className="text-sky-300 text-xl" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-transparent text-white outline-none"
              required
            />
          </div>

          <div className="flex items-center gap-3 bg-white/20 rounded-md px-4 py-2">
            <FaClock className="text-sky-300 text-xl" />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full bg-transparent text-white outline-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-sky-500 hover:bg-sky-600 disabled:bg-gray-500 py-3 rounded-full font-semibold text-lg text-white transition-all duration-300 shadow-lg"
          >
            {loading ? "Predicting..." : "Predict"}
          </button>
        </motion.form>

        {/* Error */}
        {error && <p className="text-red-500 mt-4">{error}</p>}

        {/* Result Card */}
        {result && (
          <motion.div
            className="bg-gradient-to-r from-blue-900/50 to-sky-900/60 backdrop-blur-md p-8 rounded-3xl text-gray-100 shadow-2xl mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-sky-300">
              Forecast for {location} on {date} at {time}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg">
              <div className="flex flex-col items-center gap-1 p-3 bg-white/10 rounded-xl">
                <FaThermometerHalf className="text-red-400 text-2xl" />
                <p>Temperature</p>
                <p className="font-bold">{result.temp}°C</p>
              </div>
              <div className="flex flex-col items-center gap-1 p-3 bg-white/10 rounded-xl">
                <FaCloudRain className="text-blue-400 text-2xl" />
                <p>Rain</p>
                <p className="font-bold">{result.rain} mm</p>
              </div>
              <div className="flex flex-col items-center gap-1 p-3 bg-white/10 rounded-xl">
                <FaWind className="text-green-400 text-2xl" />
                <p>Wind</p>
                <p className="font-bold">{result.wind} m/s</p>
              </div>
            </div>
            <p className="mt-4 font-semibold text-sky-300 text-center">
              Likely Conditions: {Array.isArray(result.conditions) ? result.conditions.join(", ") : result.conditions}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WeatherLikelihood;
