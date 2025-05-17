// src/components/Hero.jsx
const Hero = () => {
    return (
        <section id="hero" className="h-[100vh] flex flex-col justify-center items-center bg-gradient-to-b from-slate-500 to-stone-400 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-gray-900 text-white text-center pt-24">
            <h1 data-aos="zoom-out"
            className="text-4xl text-stone-700 dark:text-neutral-300 md:text-6xl font-bold mb-4">Hi, I'm Venkatesan</h1>
            <p data-aos="fade-left" className="text-xl md:text-2xl text-stone-600 dark:text-stone-400">I build web and Android apps</p>
            <div className="flex justify-center mt-6">
                <a href="/resume.pdf"
                download
                data-aos="fade-right"
                className="px-6 py-2 bg-slate-700 dark:bg-blue-600 rounded-full text-white hover:scale-90 border border-zinc-700 hover:border-gray-500 hover:bg-gray-600 dark:hover:bg-blue-800 transition duration-300">
                    Download resume
                </a>
            </div>
        </section>
    );
};

export default Hero;