// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { Menu, X} from "lucide-react"; // Icon library: `lucide-react`
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if(currentScrollY > lastScrollY) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const links = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
        { name: "Resume", href: "/resume.pdf", external: true},
    ];

    return (
        <nav className={`fixed bg-zinc-700 dark:bg-gray-950 text-white px-6 py-4 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 data-aos="fade-right" className="text-xl font-bold">My Portfolio</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-sm">
                    {links.map((link, i) => (
                        <li key={i} data-aos="fade-down">
                            {link.external ? (
                                <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">{link.name}</a>
                            ) : (
                                <a href={link.href} className="hover:text-blue-400 transition">{link.name}</a>
                            )}
                        </li>
                    ))}
                </ul>

                <ThemeToggle />

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={24} /> : <Menu  size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <ul className="md:hidden mt-4 space-y-4 text-center bg-slate-500 rounded-lg py-4">
                    {links.map((link, i) => (
                        <li key={i}>
                            {link.external ? (
                                <a href={link.href} target="_blank" rel="noopener noreferrer"
                                className="block text-white hover:text-blue-400" onClick={() => setMenuOpen(false)} //close menu on click
                                > {link.name}</a>
                            ) : (
                                <a href={link.href} className="block text-white hover:text-blue-400" onClick={() => setMenuOpen(false)}>{link.name}</a>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;