import React, { useContext } from "react";
import Card from "../components/Card";
import { projectData } from "../constants";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black overflow-x-hidden" : "bg-gray-900 text-white overflow-x-hidden"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12 overflow-x-hidden">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap gap-4">
          {projectData.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
