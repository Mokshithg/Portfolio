import React from 'react';
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className="text-white h-1/2 p-8" style={{ backgroundColor: 'gray' }}>
      <section className="max-w-4xl mx-auto">
        <h1 className="text-5xl text-gray-800 font-bold mb-4">About Me</h1>
        <div className='font-medium'>
            <p className="mb-4 text-xl">
            Hello I'm a tech enthusiast with a relentless curiosity and a passion for learning. My journey in the tech world began with a fascination for how technology shapes our lives and evolves at an unprecedented pace. As someone who believes in continuous growth and improvement, I'm always on the lookout for opportunities to expand my knowledge and skill set.
            </p>
            <p className="mb-4 text-xl">
            Whether it's diving deep into the latest programming languages, exploring emerging technologies, or contributing to open-source projects, I strive to stay ahead of the curve. My goal is to constantly challenge myself and push the boundaries of what's possible in the tech field.
            </p>
            <p className='text-xl'>
            Through my adventures in tech, I've come to appreciate the importance of collaboration, innovation, and resilience. I'm excited about the potential of technology to solve real-world problems and make a positive impact on society.
            </p>
        </div>
        <a href="#contact-me" className="mt-8 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-600 inline-block">
            Let's Connect
        </a>
      </section>
    </div>
  );
};

export default About;
