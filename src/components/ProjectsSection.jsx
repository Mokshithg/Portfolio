// import React from 'react';
import { motion } from "framer-motion";

const projects = [
    { title: 'Text Analyzerz', 
        description: 'The Text Analyzer project, built using React (props) and Bootstrap, is a basic yet powerful tool designed to analyze text by providing insights into the number of words and letters in a given sentence. The project features a user-friendly interface with light and dark themes, allowing users to switch between them for a comfortable reading experience. This project demonstrates fundamental programming skills, effective use of React components and props, and the application of Bootstrap for responsive design, making it a valuable addition to any portfolio.',
        link: 'https://mokshithg.github.io/mokshit-react/' },
    { title: 'UrbanGarden',
        description: 'UrbanGarden is an innovative nursery dashboard system designed for comprehensive analysis and management. Featuring a sleek, modern layout crafted with SCSS, it ensures a visually appealing and responsive user interface. Built with React, the dashboard offers a seamless user experience through component-based architecture. UrbanGarden provides detailed insights and analytics, helping nurseries optimize operations and make informed decisions. This project demonstrates advanced front-end development skills, combining SCSS for styling and React for dynamic content.', 
        link: 'https://mokshithg.github.io/UrbanGarden/' },
    { title: 'Quriosme- Make it easy', 
        description: 'QuriosMe connects those needing solutions with skilled freelancers. Users post queries, browse profiles, and hire the perfect fit for their project.This user-friendly platform fosters secure communication,payments, and reputation management, ensuring a trusted experience for all.',
    },
];

const ProjectsSection = () => {
  return (
    <motion.section
        id="projects"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: 'gray'
          }}
    >
        <h2 className="text-5xl font-bold mb-8 text-center text-gray-800">My Projects</h2> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4ml-4 ml-8 mr-8 gap-8">
        {projects.map((project, index) => (
            <motion.div key={index} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
            <div className="border border-gray-700 p-6 rounded-lg shadow-md bg-gray-800" style={{backgroundColor: '#374151'}}> 
                <h3 className="text-2xl font-semibold mb-2 text-white flex items-center justify-center">{project.title}</h3> 
                <p className="text-gray-300">{project.description}</p> 
                <a href={project.link} className="mt-4 text-blue-500 hover:text-blue-700 underline">View Live Site</a>
            </div>
            </motion.div>
        ))}
        </div>
    </motion.section>
  )
}

export default ProjectsSection;
