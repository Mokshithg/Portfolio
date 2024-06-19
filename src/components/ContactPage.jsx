// import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

const ContactPage = () => {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mokshithgaripally/', icon: faLinkedin },
    { name: 'GitHub', url: 'https://github.com/Mokshithg', icon: faGithub },
    { name: 'Twitter', url: 'https://x.com/Mokshit67733463', icon: faTwitter },
    { name: 'Discord', url: 'https://discord.com/users/MokshithG', icon: faDiscord }
  ];

  return (
    <section id="contact-me" className="max-w-8xl mx-auto p-6 min-h-[20vh] overflow-auto" style={{backgroundColor:"gray"}}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        // style={{
        //     backgroundColor: "gray"
        // }}
        className="flex flex-col items-center justify-center h-full"
      >
        <h2 className="text-5xl sm:text-4xl font-bold mb-4 text-center text-gray-800">Let's Connect</h2>
        <p className="mb-4 text-xl text-center font-bold text-white">Feel free to reach out to me through my social profiles.</p>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-xl">
        {socialLinks.map((link, index) => (
            <motion.a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center py-4 px-12 bg-gray-700 shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-200 ease-in-out">
                <FontAwesomeIcon icon={link.icon} className="fs-4 text-white" />
                <span className="mt-2 text-base font-medium text-white">{link.name}</span>
            </motion.a>
        ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;
