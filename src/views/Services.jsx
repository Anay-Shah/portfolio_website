import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={
        theme.state.darkMode ? "pb-20 bg-fixed bg-gray-100 overflow-x-hidden" : "pb-20 bg-black overflow-x-hidden"
      }
      // style={{backgroundImage: `url('https://i.pinimg.com/originals/b0/b1/f5/b0b1f5d33de00e3c21ad29bbba25e31b.gif')`}}>
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4 pt-20 overflow-x-hidden"
        id="services"
      >
        <h2
          className={
            theme.state.darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Technical Skills
        </h2>
        <div className="">
          <h4 className="mt-16 text-3xl font-semibold text-blue-500">
            Technologies and Tools
          </h4>
          <p
            className={
              theme.state.darkMode
                ? "mt-4 text-xl text-gray-500"
                : "mt-4 text-xl text-white"
            }
          >
            Using a combination of cutting-edge technologies and reliable
            open-source software I build user-focused, performant apps and
            websites for smartphones, tablets, and desktops.
          </p>
          <div className="mt-8 flex flex-wrap justify-center md:justify-between gap-4">
            {techStack.map((el, index) => (
              <motion.div
                key={index}
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
                className="py-2 px-4 bg-gray-50 rounded-lg flex items-center hover:scale-105 md:hover:scale-125 cursor-pointer w-40 md:w-48"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
