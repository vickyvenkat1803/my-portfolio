// src/components/Footer.jsx
const Footer = () => {
    return (
        <footer className="bg-zinc-700 dark:bg-neutral-950 text-white py-6 text-center">
            <p>&copy; {new Date().getFullYear()} Venkatesan. All rights reserved.</p>
            <p  className="mt-2">
                Built with <span className="text-white font-semibold">React</span> and <span className="text-white font-semibold">Tailwind CSS</span>
            </p>
        </footer>
    );
};

export default Footer;