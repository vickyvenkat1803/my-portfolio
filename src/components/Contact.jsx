// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaPhoneAlt, FaGithub, FaMailBulk } from 'react-icons/fa';

const Contact = () => {
    return (
        <motion.section id="contact" className="py-20 px-6 bg-stone-500 dark:bg-gray-900 text-white"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <div className="max-w-4xl mx-auto text-center">
                <h2 data-aos="flip-right" className="text-3xl md:text-4xl font-bold mb-3 dark:text-neutral-400">Contact Me</h2>
                <p data-aos="zoom-out" className="mb-6 text-slate-300">Feel free to reach out if you're like to collaborate or have any questions!</p>
                <div className="flex justify-center gap-6 text-3xl text-stone-800 dark:text-cyan-700">
                    <a href="tel:+919842108257" target='_blank' rel='noopener noreferrer' className='hover:scale-110 hover:text-green-500 transition-transform duration-200'>
                        <FaPhoneAlt />
                    </a>
                    <a href="https://www.instagram.com/vicky_venkat1803" target='_blank' rel='noopener noreferrer' className='hover:scale-110 hover:text-pink-500 transition-transform duration-200'>
                        <FaInstagram />
                    </a>
                    <a href="https://github.com/vickyvenkat1803" target='_blank' rel='noopener noreferrer' className='hover:scale-110 hover:text-gray-700 transition-transform duration-200'>
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/venkatesan1803" target='_blank' rel='noopener noreferrer' className='hover:scale-110 hover:text-cyan-600 transition-transform duration-200'>
                        <FaLinkedin />
                    </a>
                    <a href="mailto:vickyvenkat1803@gmail.com" target='_blank' rel='noopener noreferrer' className='hover:scale-110 hover:text-white transition-transform duration-200'>
                        <FaMailBulk />
                    </a>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;