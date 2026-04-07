import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen selection:bg-blue-500/30 transition-colors duration-300">
      <ParticleBackground darkMode={darkMode} />
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <main className="relative">
        <Hero />
        <Experience />
        <Skills darkMode={darkMode} />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;