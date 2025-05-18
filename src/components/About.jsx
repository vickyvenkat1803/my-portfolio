// src/components/About.jsx
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.section id="about" className="py-20 px-6 bg-stone-500 dark:bg-gray-900 text-white pt-24 dark:text-black"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <div className="max-w-4xl mx-auto text-center">
                <h2 data-aos="fade-right" className="text-3xl md:text-4xl font-bold mb-6 dark:text-neutral-400">About Me</h2>
                <p data-aos="fade-up" className="text-lg text-gray-300 dark:text-slate-400">I'm a passionate developer who loves building responsive web and Android apps.
          I enjoy solving problems, learning new technologies, and turning ideas into reality through code.</p>
            </div>
        </motion.section>
    );
};

export default About;