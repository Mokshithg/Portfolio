import { useState } from 'react'; // Only useState is needed here
import { motion } from 'framer-motion';
import NavBar from './NavBar';
import { useTypewriter, Cursor } from 'react-simple-typewriter'; // Import useTypewriter

const LandingPage = () => {

  const [text] = useTypewriter({
    words: ['Web Developer.', 'Full Stack Developer.', 'Front End Developer.'], // Specify the words directly in useTypewriter
    loop: Infinity, // Loop through the words indefinitely
    delay: 100, // Delay between word changes in milliseconds
    cursor: false, // Hide the cursor
  });

  return (
    <>
      <NavBar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            minHeight: "95vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor: "gray",
          }}
        >
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-left py-10 sm:py-20 md:py-20 lg:py-20 xl:py-20"
            >
              {/* <div className="absolute inset-0 ml-4 mt-20 mr-4 mb-4 bg-black bg-opacity-50 rounded-md"></div> */}
              <div className='ml-20'>
                <h1 className="text-5xl font-bold sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl mb-6">
                  <span className="inline-block mb-4">Hey</span>{" "}
                  <span className="inline-block mb-4">I'm</span><br />
                  Mokshith G<br/>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="inline-block text-gray-800 mt-4 font-bold tracking-wide transition-opacity duration-500 ease-in-out"
                  >
                    I am a {text} <Cursor cursorColor="gray" />{/* Display the text managed by useTypewriter */}
                  </motion.span>
                </h1>
                <p className="text-xl mb-8 font-bold sm:text-lg md:text-xl lg:text-xl xl:text-xl">Explore my projects and skills</p>
                <a href="#skills" className="text-white bg-gray-800 px-4 py-2 rounded hover:bg-gray-800 sm:px-3 sm:py-1 md:px-4 md:py-2 lg:px-4 lg:py-2 xl:px-4 xl:py-2">See My Skills</a>
              </div>
            </motion.section>
        </motion.div>
    </>
  );
};

export default LandingPage;
