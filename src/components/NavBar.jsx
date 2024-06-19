// import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">
            <a href="#" className="text-xl font-bold ml-16">Garipally Mokshith</a>
        </div>
        <div className="hidden md:flex space-x-4">
            <div className="font-bold space-x-8 mr-16">
                <a href="#contact-me" className="text-white hover:text-gray-300">About</a>
                <a href="#skills" className="text-white hover:text-gray-300">Skills</a>
                <a href="#projects" className="text-white hover:text-gray-300">Projects</a>
                <a href="#contact" className="text-white hover:text-gray-300">Contact Me</a>
            </div>
        </div>
        <div className="md:hidden">
            <button className="text-white hover:text-gray-300 focus:outline-none">
            Menu
            </button>
        </div>
        </div>
    </nav>
  )
}

export default NavBar