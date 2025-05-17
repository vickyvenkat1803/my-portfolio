import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import GitHubRepos from './components/GithubRepos';

function App() {
  return (
    <div className="bg-stone-700 dark:bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHubRepos username="vickyvenkat1803" />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
