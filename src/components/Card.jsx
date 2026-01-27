import React from "react";
import { motion } from "framer-motion";

const Card = ({ project }) => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="w-full md:w-[48%] lg:w-[48%] bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-4 mx-auto"
    >
      <a href={project.demo || project.github || "#"}>
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src={project.img}
          alt={project.name}
        />
      </a>
      <div className="p-5">
        <a href={project.demo || project.github || "#"}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white break-words">
            {project.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 break-words">
          {project.desc}
        </p>
        <div className="mb-3 flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-center my-4">
          {project.github && (
            <a
              href={`https://${project.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center py-3 px-6 text-base font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 transition-all hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          )}
        </div>
        <div className="flex gap-2">
          {project.demo && (
            <a
              href={project.demo}
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
