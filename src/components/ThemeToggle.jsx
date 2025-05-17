import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { button } from "framer-motion/client";

const ThemeToggle = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const saved = localStorage.getItem("theme") || "light";
        setTheme(saved);
        document.documentElement.classList.toggle("dark", saved === "dark");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    };

    return (
        <button onClick={toggleTheme} data-aos="fade-left" className="ml-4 p-2 rounded-full hover:bg-gray-200 transition duration-300 dark:hover:bg-gray-700 transition">
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20}/>}
        </button>
    );
};

export default ThemeToggle;