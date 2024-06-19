import { color, motion } from "framer-motion";

const skills = [
    { name : 'Python', level:'Advanced', color : 'bg-red-500'},
    { name : 'C++', level : 'Beginner', color : 'bg-red-500'}, 
    { name: 'HTML', level: 'Expert', color: 'bg-red-500' },
    { name: 'CSS', level: 'Advanced', color: 'bg-yellow-500' },
    { name: 'JavaScript', level: 'Intermediate', color: 'bg-green-500' },
    { name: 'React', level: 'Intermediate', color: 'bg-purple-500' },
    { name: 'Node.js', level: 'Beginner', color: 'bg-blue-500' },
    { name: 'MongoDB', level: 'Intermediate', color: 'bg-indigo-500' },
    { name: 'MySQL', level: 'Intermediate', color: 'bg-indigo-500' },
    { name: 'Express JS', level: 'Intermediate', color: 'bg-indigo-500' },
    { name: 'Git', level: 'Beginner', color: 'bg-pink-500' },
    { name: 'Version Control', level: 'Intermediate', color: 'bg-orange-500' },
];

const SkillsSection = () => {
  return (
    <motion.section
        id="skills"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: 'gray',
            padding: "40px 20px",
        }}
    >
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
        {skills.map((skill, index) => (
            <motion.div key={index} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
            <div className={`border border-gray-700 p-6 rounded-lg shadow-md ${skill.color}`} style={{backgroundColor: '#374151'}}>
                <h3 className="text-2xl font-semibold mb-2 text-white">{skill.name}</h3>
                <p className="text-gray-300">{skill.level}</p>
            </div>
            </motion.div>
        ))}
        </div>
    </motion.section>
  )
}

export default SkillsSection;
