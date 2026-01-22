import resumeLogo from './assets/resumeLogo.png';
import cleanTubeImg from './assets/CleanTube.png';

export const techStack = [
  { name: "Python", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C++", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Javascript", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
  { name: "SQL", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "HTML", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" },
  
  { name: "React", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
  { name: "React Native", link: "https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png" },
  { name: "NodeJS", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" },
  { name: "Express", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" },
  { name: "Flask", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  
  { name: "Mongo DB", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" },
  { name: "PowerBI", link: "https://img.icons8.com/color/48/000000/power-bi.png" },
  { name: "Pandas", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  
  { name: "Git", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" },
  { name: "VS Code", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "PyCharm", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" },
  { name: "Jupyter", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
]


export const contactLinks = [
{ name: 'Github', url: 'https://img.icons8.com/doodle/40/000000/github--v1.png', link :'https://github.com/Anay-Shah'},
{ name: 'LinkedIn', url: 'https://img.icons8.com/doodle/40/000000/linkedin--v2.png', link: 'https://www.linkedin.com/in/anaycshah/'},
{ name: 'Resume', url: resumeLogo, link: '/AnayShah.pdf'}
]



export const workExperience = [
  {
    name: 'Software Development Engineer',
    company: 'Inclusive Media and Design Centre',
    period: 'May 2025 - Present',
    desc: 'Developed a cross-platform mobile app using React Native, TypeScript and MongoDB, integrating OpenAI and Whisper APIs for AI-driven transcription and analysis to support veterans with chronic pain. Implemented accessibility-focused annotation system with pain scales, emotion stickers, location/keyword tags, improving user engagement and data quality by 40%.',
    img: "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-web-development-coding-kiranshastry-lineal-color-kiranshastry.png"
  },
  {
    name: 'Software Engineer Intern',
    company: 'Citi Freight Logistics',
    period: 'May 2024 - August 2024',
    desc: 'I built automation pipelines and client-facing dashboards using Python, OCR technologies, React, and Bootstrap to streamline logistics workflows and improve data accuracy.',
    img: "https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-app-development-responsive-web-design-justicon-lineal-color-justicon.png"
  },
  {
    name: 'Data Analyst Intern',
    company: 'Orient Technologies',
    period: 'May 2023 - August 2023',
    desc: 'Built monthly PowerBI dashboards tracking business metrics and sales KPIs, helping monitor real-time performance across 5 product lines and identify top-performing regional markets. Wrote and optimized complex SQL queries to validate customer transaction data, ensuring integrity across 17,000+ records and reducing reporting errors by 40%.',
    img: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-backend-no-code-flaticons-flat-flat-icons.png"
  }
]


export const projectData = [
  {
    name: 'NLP Finder - Local Semantic File Search',
    desc: 'NLP Finder is a cross-platform desktop application powered by Ollama that enables you to perform natural language searches over your local files using a completely local AI model. The system generates local text embeddings via Ollama and performs fast semantic cosine similarity using FAISS, allowing users to find files by meaning rather then keywords. It supports multiple file formats, intelligent chunking for large documents, smart result ranking and in-app file previews with highlighted matches.',
    tech: ['Python', 'Ollama', 'FAISS', 'JavaScript', 'FastAPI', 'React', 'Axios'],
    github: 'github.com/Anay-Shah/NLP_Finder',
    img: "https://www.shutterstock.com/image-vector/ai-folder-pentaglow-vector-pixel-600nw-2582083121.jpg"
  },
  {
    name: 'RoboStriker',
    desc: 'This project uses AI planning techniques to solve robot soccer scenarios. Autonomous robots must coordinate actions such as passing the ball and scoring goals while strategically avoiding opponents. A Prolog-based AI planner generates optimal action plans by reasoning over game states and constraints, and Python is used to create animated visualizations that demonstrate the planned behaviors and outcomes.',
    tech: ['Prolog', 'Python', 'SWI-Prolog', 'Constraint Logic Programming'],
    github: 'github.com/Anay-Shah/RoboStriker',
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    name: 'Recreation Club Membership Application',
    desc: 'Designed and implemented a role-based access database management system with Flask, supporting 3 roles (Member, Coach, Treasurer) with secure authentication using session tokens and encrypted cookies. Developed customer scheduling and payment workflows with attendance tracking and automated payment handling using CSV-based data storage.',
    tech: ['Python', 'Flask', 'JavaScript', 'OpenStreetMap API', 'HTML/CSS'],
    github: 'github.com/Anay-Shah/Club_Manager',
    demo: '',
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    name: 'CleanTube - Minamilist YouTube Chrome Extension',
    desc: 'CleanTube is a minamilist chrome extension designed to remove visual clutter from YouTube and create a focused, distraction-free viewing experience. The extension allows users to selectively hide elements such as Shorts, homepage recommendations, sidebar suggestions, comments and end-screen prompts through a simple toggle based popup interface on your browser.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Chrome Extension API (Manifest V3)'],
    github: 'github.com/Anay-Shah/CleanTube',
    demo: '',
    img: cleanTubeImg
  }
]