import React, { useState } from "react";
import axios from "axios";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaThermometerHalf,
  FaCloudRain,
  FaWind,
} from "react-icons/fa";
import { motion } from "framer-motion";

const WeatherLikelihood = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "eee7c54757e5833590435dc0829299cf";
  const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);
    setLoading(true);

    try {
      const formattedLocation = location.trim();
      if (!formattedLocation) throw new Error("Please enter a valid location.");

      const { data } = await axios.get(BASE_URL, {
        params: {
          q: formattedLocation,
          units: "metric",
          appid: API_KEY,
        },
      });

      const now = new Date();
      const today = now.toISOString().split("T")[0];
      const defaultTime = "12:00:00";
      const targetDateTime = `${date || today} ${time ? time + ":00" : defaultTime}`;

      // Find forecast nearest to target datetime
      let forecast = data.list.find((item) => item.dt_txt.startsWith(date || today));
      if (!forecast) forecast = data.list[0];

      const { temp } = forecast.main;
      const rain = forecast.rain?.["3h"] || 0;
      const wind = forecast.wind.speed;

      // Generate readable condition
      const conditions = [];
      if (temp >= 35) conditions.push("very hot");
      else if (temp <= 5) conditions.push("very cold");
      if (wind >= 10) conditions.push("windy");
      if (rain >= 10) conditions.push("heavy rain");
      if (conditions.length === 0) conditions.push("normal");

      // Find next comfortable condition
      const suggested = data.list.find((f) => {
        const t = f.main.temp;
        const r = f.rain?.["3h"] || 0;
        const w = f.wind.speed;
        return t > 5 && t < 35 && r < 10 && w < 10;
      });

      setResult({
        temp,
        rain,
        wind,
        conditions,
        suggestedTime: suggested?.dt_txt || null,
      });
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to retrieve weather data. Please check the location or try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#020a1f] to-[#05132a] text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold font-[Orbitron] mb-6 text-sky-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Weather Predictor
        </motion.h2>

        <motion.p
          className="text-gray-300 mb-12 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Get a quick forecast to understand the likelihood of extreme or
          comfortable weather conditions based on your selected time and
          location.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl max-w-xl mx-auto flex flex-col gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[
            {
              icon: <FaMapMarkerAlt className="text-sky-300 text-xl" />,
              type: "text",
              placeholder: "Enter location (e.g., Kathmandu)",
              value: location,
              onChange: setLocation,
              required: true,
            },
            {
              icon: <FaCalendarAlt className="text-sky-300 text-xl" />,
              type: "date",
              value: date,
              onChange: setDate,
            },
            {
              icon: <FaClock className="text-sky-300 text-xl" />,
              type: "time",
              value: time,
              onChange: setTime,
            },
          ].map((field, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-white/20 rounded-md px-4 py-2"
            >
              {field.icon}
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                className="w-full bg-transparent text-white placeholder-gray-300 outline-none"
                required={field.required}
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="bg-sky-500 hover:bg-sky-600 disabled:bg-gray-500 py-3 rounded-full font-semibold text-lg text-white transition-all duration-300 shadow-lg"
          >
            {loading ? "Predicting..." : "Predict"}
          </button>
        </motion.form>

        {/* Error */}
        {error && (
          <motion.p
            className="text-red-500 mt-4 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.p>
        )}

        {/* Result */}
        {result && (
          <motion.div
            className="bg-gradient-to-r from-blue-900/50 to-sky-900/60 backdrop-blur-md p-8 rounded-3xl text-gray-100 shadow-2xl mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-sky-300 font-[Orbitron]">
              Forecast for {location} on {date || "today"} at {time || "12:00"}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg">
              {[
                {
                  icon: (
                    <FaThermometerHalf className="text-red-400 text-2xl" />
                  ),
                  label: "Temperature",
                  value: `${result.temp}°C`,
                },
                {
                  icon: <FaCloudRain className="text-blue-400 text-2xl" />,
                  label: "Rain",
                  value: `${result.rain} mm`,
                },
                {
                  icon: <FaWind className="text-green-400 text-2xl" />,
                  label: "Wind",
                  value: `${result.wind} m/s`,
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-1 p-3 bg-white/10 rounded-xl"
                >
                  {stat.icon}
                  <p>{stat.label}</p>
                  <p className="font-bold">{stat.value}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 font-semibold text-sky-300 text-center text-lg">
              Conditions:{" "}
              {Array.isArray(result.conditions)
                ? result.conditions.join(", ")
                : result.conditions}
            </p>

            {result.suggestedTime && (
              <p className="mt-2 text-gray-300 text-center">
                ✅ Next comfortable time: {result.suggestedTime}
              </p>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WeatherLikelihood;
