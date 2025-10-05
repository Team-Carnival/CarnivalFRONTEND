import React, { useState } from "react";
import axios from "axios";

const WeatherLikelihood = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const BASE_URL = "https://nasa-weather-backend.onrender.com/"; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    try {
      const res = await axios.get(`${BASE_URL}/api/weather`, {
        params: { location, date, time },
      });

      setResult(res.data);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to fetch weather data.");
      console.error(err);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#020a1f] to-[#05132a] text-white py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold font-[Orbitron] mb-6 text-sky-400">
          Weather Likelihood Predictor
        </h2>
        <p className="text-gray-300 mb-8">
          Enter your location, date, and time to get a customized likelihood of
          extreme weather conditions.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8"
        >
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-4 py-2 rounded-md w-full md:w-auto text-black font-medium bg-white/90 border border-gray-400 focus:border-sky-400 outline-none shadow-md"
            required
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="px-4 py-2 rounded-md w-full md:w-auto text-black font-medium bg-white/90 border border-gray-400 focus:border-sky-400 outline-none shadow-md"
            required
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="px-4 py-2 rounded-md w-full md:w-auto text-black font-medium bg-white/90 border border-gray-400 focus:border-sky-400 outline-none shadow-md"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg"
          >
            Predict
          </button>
        </form>

        {/* Error */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Result Card */}
        {result && (
          <div className="bg-gradient-to-r from-blue-900/40 to-sky-900/50 backdrop-blur-md p-8 rounded-3xl text-gray-100 shadow-xl mt-6">
            <h3 className="text-2xl font-semibold mb-4">
              Forecast for {location} on {date} at {time}
            </h3>
            <div className="flex flex-col gap-2 text-lg">
              <p>
                🌡 Temperature:{" "}
                <span className="font-bold">{result.temp}°C</span>
              </p>
              <p>
                🌧 Rain: <span className="font-bold">{result.rain} mm</span>
              </p>
              <p>
                💨 Wind: <span className="font-bold">{result.wind} m/s</span>
              </p>
              <p className="mt-3 font-semibold text-sky-300">
                Likely Conditions: {result.conditions.join(", ")}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WeatherLikelihood;
