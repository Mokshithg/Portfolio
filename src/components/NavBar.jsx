import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">
          <a href="#" className="text-xl font-bold ml-16">Garipally Mokshith</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white hover:text-gray-300 focus:outline-none">
            {isMenuOpen? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className={`${isMenuOpen? 'block' : 'hidden'} md:flex space-x-4`}>
          <a href="#about" className="text-white hover:text-gray-300">About</a>
          <a href="#skills" className="text-white hover:text-gray-300">Skills</a>
          <a href="#projects" className="text-white hover:text-gray-300">Projects</a>
          <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
