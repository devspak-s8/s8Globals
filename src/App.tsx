import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import WhyChooseUs from './components/WhyChooseUs';
import ComingSoon from './components/ComingSoon';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import JoinEcosystem from './components/JoinEcosystem';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Theme Toggle */}
     <button
  onClick={toggleTheme}
  className="fixed top-4 right-4 z-[9999] p-3 rounded-full bg-primary-green hover:bg-green-hover transition-all duration-300 transform hover:scale-110 shadow-lg"
  aria-label="Toggle theme"
>
        {isDarkMode ? (
          <Sun className="w-5 h-5 text-white" />
        ) : (
          <Moon className="w-5 h-5 text-white" />
        )}
      </button>

      <Header isDarkMode={isDarkMode} />
      <Hero isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <WhyChooseUs isDarkMode={isDarkMode} />
      <ComingSoon isDarkMode={isDarkMode} />
      <Testimonials isDarkMode={isDarkMode} />
      <FAQ isDarkMode={isDarkMode} />
      <JoinEcosystem isDarkMode={isDarkMode} />
      <Newsletter isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;