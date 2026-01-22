import React, { useContext, useMemo } from "react";
import heroBg from "../assets/webdev.svg";
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import cloud from "../assets/cloudBg.png";
import cloudDark from "../assets/cloudDark.png";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  // Memoize the Typical component so it doesn't re-render on theme changes
  const typicalComponent = useMemo(() => (
    <Typical
      steps={[
        "Hi, I am Anay Shah",
        500,
      ]}
      loop={1}
      wrapper="span"
    />
  ), []);
  return (
    <>
      <div
        style={
          darkMode
            ? { backgroundImage: `url('${cloud}')`, backgroundSize: "cover" }
            : { backgroundImage: `url('${cloudDark}'`, backgroundSize: "cover" }
        }
      >
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <motion.span
                className={darkMode ? "block text-black" : "block text-white"}
              >
                {typicalComponent}
              </motion.span>
            </h1>
            <p
              className={
                darkMode
                  ? "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  : "mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }
            >
              I am a 21 year old Software Development Engineer based in Toronto.
              Currently, I am working at Inclusive Media and Design Centre (IMDC), 
              where we are developing a cross-platform application that empowers Veterans
              with chronic pain to better understand, analyze, and manage their mental
              and physical well-being. I am also in my fourth year studying Computer Science
              at Toronto Metropolitan University. Driven by a passion for building impactful technology, 
              I aim to create scalable, user-centered solutions that solve real-world problems.
            </p>
            <div className="flex justify-center lg:justify-start mt-8 lg:ml-40">
              {contactLinks.map((el, index) => (
                <a
                  key={index}
                  href={el.link}
                  {...(el.name !== 'Resume' && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="mr-5 cursor-pointer hover:scale-110 transition-transform"
                >
                  <img alt={el.name} src={el.url} className="w-12 h-12 object-contain" />
                </a>
              ))}
            </div>
          </div>
          <motion.img
            initial="hidden"
            whileInView={"visible"}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                },
              },
              hidden: { opacity: 1, y: 80 },
            }}
            src={heroBg}
            alt=""
            className="md:w-3/6 hidden sm:block"
          />
        </main>
      </div>
    </>
  );
};

export default Home;
