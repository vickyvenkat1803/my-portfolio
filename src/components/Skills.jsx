// src/components/Skills.jsx
import { motion } from "framer-motion";

const Skills = () => {
    const skills = ["React", "JavaScript", "Tailwind CSS", "Node.js", "MySQL", "Java", "AWS"];

    return (
        <motion.section id="skills" className="py-20 px-6 bg-stone-500 dark:bg-gray-900 text-white pt-24"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 dark:text-neutral-400">Skills</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="group bg-gray-700 px-4 py-2 rounded-full text-sm border border-gray-700 hover:scale-110 transition-transfrom duration-300">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Skills;