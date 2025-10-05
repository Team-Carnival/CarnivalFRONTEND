import React from 'react';
import { FaCloudSunRain, FaWind, FaGlobeAmericas } from 'react-icons/fa';

const WhatWeDo = () => {
    return (
        <div className="min-h-screen bg-[rgba(7,25,40,0.85)] flex flex-col items-center justify-center py-12 px-5 text-white">
            <div className="bg-white/10 m-8 p-8 rounded-lg shadow-lg text-center max-w-6xl w-full">
                <h1 className="text-4xl text-white mb-6 font-sans tracking-wide">What We Do</h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Our project harnesses the power of <span className="text-sky-400 font-semibold">Earth observation data</span> 
                    and <span className="text-sky-300 font-semibold">weather intelligence</span> to predict environmental conditions 
                    for outdoor activities. Using NASA’s Earth science datasets and live weather APIs, our system helps users 
                    determine the likelihood of <span className="text-blue-300">very hot</span>, <span className="text-blue-300">wet</span>, 
                    or <span className="text-blue-300">windy</span> conditions for any chosen location and time.
                </p>
                
                <div className="flex flex-row justify-around items-center mx-auto w-full max-w-4xl flex-wrap">
                    <div className="max-w-[230px] text-center m-4 flex flex-col items-center bg-white/10 p-5 rounded-lg">
                        <FaCloudSunRain size={50} color="#00d9ff" />
                        <p className="text-lg text-gray-200 text-center leading-normal mt-4">
                            Analyze temperature, rainfall, and humidity trends using NASA POWER and real-time weather APIs.
                        </p>
                    </div>

                    <div className="max-w-[230px] text-center m-4 flex flex-col items-center bg-white/10 p-5 rounded-lg">
                        <FaWind size={50} color="#a0e7ff" />
                        <p className="text-lg text-gray-200 text-center leading-normal mt-4">
                            Assess wind and pressure variations to predict “very windy” or “uncomfortable” outdoor conditions.
                        </p>
                    </div>

                    <div className="max-w-[230px] text-center m-4 flex flex-col items-center bg-white/10 p-5 rounded-lg">
                        <FaGlobeAmericas size={50} color="#7dffb1" />
                        <p className="text-lg text-gray-200 text-center leading-normal mt-4">
                            Visualize global environmental data to make informed and sustainable outdoor planning decisions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;
