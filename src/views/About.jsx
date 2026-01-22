import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode === true ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Work Timeline
        </h2>
        <div>
          <motion.div>
            
            <div className="mt-16 relative max-w-5xl mx-auto">
              {/* Timeline line - hidden on mobile */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
              
              {/* Timeline items */}
              <div className="space-y-16">
                {/* 1. IMDC - LEFT */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="md:flex md:items-center">
                    <div className="md:w-1/2 md:pr-8">
                      <div className={darkMode ? "bg-white p-6 rounded-lg shadow-xl border-2 border-blue-100" : "bg-gray-800 p-6 rounded-lg shadow-xl border-2 border-blue-500"}>
                        <span className="text-blue-500 font-bold text-sm">May 2025 - Present</span>
                        <h3 className={darkMode ? "text-xl font-bold mt-2 text-gray-900" : "text-xl font-bold mt-2 text-white"}>Software Development Engineer Intern</h3>
                        <p className={darkMode ? "text-gray-800 font-semibold" : "text-blue-400 font-semibold"}>Inclusive Media and Design Centre</p>
                        <p className={darkMode ? "mt-3 text-gray-700" : "mt-3 text-gray-300"}>Developed a cross-platform mobile app using React Native, TypeScript and MongoDB, integrating OpenAI and Whisper APIs for AI-driven transcription and analysis to support veterans with chronic pain.</p>
                      </div>
                    </div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="md:w-1/2"></div>
                  </div>
                </motion.div>

                {/* 2. CITI Freight - RIGHT */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <div className="md:flex md:items-center">
                    <div className="md:w-1/2"></div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="md:w-1/2 md:pl-8">
                      <div className={darkMode ? "bg-white p-6 rounded-lg shadow-xl border-2 border-blue-100" : "bg-gray-800 p-6 rounded-lg shadow-xl border-2 border-blue-500"}>
                        <span className="text-blue-500 font-bold text-sm">May 2024 - August 2024</span>
                        <h3 className={darkMode ? "text-xl font-bold mt-2 text-gray-900" : "text-xl font-bold mt-2 text-white"}>Software Engineer Intern</h3>
                        <p className={darkMode ? "text-gray-800 font-semibold" : "text-blue-400 font-semibold"}>CITI Freight Logistics</p>
                        <p className={darkMode ? "mt-3 text-gray-700" : "mt-3 text-gray-300"}>I built automation pipelines and client-facing dashboards using Python, OCR technologies, React, and Bootstrap to streamline logistics workflows and improve data accuracy.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 3. Orient Technologies - LEFT */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative"
                >
                  <div className="md:flex md:items-center">
                    <div className="md:w-1/2 md:pr-8">
                      <div className={darkMode ? "bg-white p-6 rounded-lg shadow-xl border-2 border-blue-100" : "bg-gray-800 p-6 rounded-lg shadow-xl border-2 border-blue-500"}>
                        <span className="text-blue-500 font-bold text-sm">May 2023 - August 2023</span>
                        <h3 className={darkMode ? "text-xl font-bold mt-2 text-gray-900" : "text-xl font-bold mt-2 text-white"}>Data Analyst Intern</h3>
                        <p className={darkMode ? "text-gray-800 font-semibold" : "text-blue-400 font-semibold"}>Orient Technologies</p>
                        <p className={darkMode ? "mt-3 text-gray-700" : "mt-3 text-gray-300"}>I analyzed and visualized business data using SQL, Python, and Power BI to deliver dashboards and reports that supported data-driven decision-making.</p>
                      </div>
                    </div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="md:w-1/2"></div>
                  </div>
                </motion.div>

                {/* 4. TMU Student - RIGHT */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="relative"
                >
                  <div className="md:flex md:items-center">
                    <div className="md:w-1/2"></div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="md:w-1/2 md:pl-8">
                      <div className={darkMode ? "bg-white p-6 rounded-lg shadow-xl border-2 border-blue-100" : "bg-gray-800 p-6 rounded-lg shadow-xl border-2 border-blue-500"}>
                        <span className="text-blue-500 font-bold text-sm">Sept 2022 - Present</span>
                        <h3 className={darkMode ? "text-xl font-bold mt-2 text-gray-900" : "text-xl font-bold mt-2 text-white"}>Computer Science Student</h3>
                        <p className={darkMode ? "text-gray-800 font-semibold" : "text-blue-400 font-semibold"}>Toronto Metropolitan University</p>
                        <p className={darkMode ? "mt-3 text-gray-700" : "mt-3 text-gray-300"}>Bachelor of Science in Computer Science. Relevant coursework: Data Structures & Algorithms, Artificial Intelligence, Databases, Software Design, Computer Security.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
