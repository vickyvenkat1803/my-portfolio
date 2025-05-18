// src/components/Projects.jsx
import { motion } from 'framer-motion';
import finance from '../assets/finance.jpg';
import portfolio from '../assets/portfolio.jpg';
import { image } from 'framer-motion/client';

const Projects = () => {
    const projects = [
        {
            title: "Finance Tracker",
            image: finance,
            description: "A full-stack app to track personal income and expenses with filtering and summary charts.",
            tech: ["React", "Spring Boot", "MySQL"],
            link: "#",
        },
        {
            title: "Portfolio Website",
            image: portfolio,
            description: "A responsive personal portfolio built with React and Tailwind CSS.",
            tech: ["React", "Tailwind CSS"],
            link: "#",
        }
    ];

    return (
        <motion.section id="projects" className="py-20 px-6 bg-stone-500 dark:bg-gray-900 text-white"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <div className="max-w-6xl mx-auto text-center">
                <h2 data-aos="zoom-in" className="text-3xl md:text-4xl font-bold mb-10 dark:text-neutral-400">Projects</h2>
                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <div key={index}
                        className="group bg-zinc-700 dark:bg-slate-800 rounded-xl p-6 border border-gray-700 shadow-lg text-left hover:scale-110 transition-transform duration-300">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover hover:scale-105 rounded-lg transition duration-300" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-zinc-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, index) => (
                                        <span key={index} className="bg-gray-700 px-3 py-1 rounded-full text-sm text-zinc-200">{tech}</span>
                                    ))}
                                </div>
                                {project.link && (
                                 <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View Project</a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default Projects;