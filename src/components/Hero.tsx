import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, Star, Users, Zap, Award } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    setVisible(true);
    
    // Animate stats counter
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Users, value: '1,249+', label: 'Happy Clients', color: 'text-primary-green' },
    { icon: Zap, value: '50+', label: 'Active Projects', color: 'text-primary-orange' },
    { icon: Award, value: '99%', label: 'Success Rate', color: 'text-primary-purple' },
    { icon: Star, value: '24/7', label: 'Support', color: 'text-accent-red' }
  ];

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center mb-24 px-6 sm:px-12 overflow-hidden ${
        isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-bg-light to-white'
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-green/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary-orange/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary-purple/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-accent-yellow/20 rounded-full blur-xl animate-float" style={{ animationDelay: '6s' }}></div>
        
        {/* Grid Pattern */}
        <div className={`absolute inset-0 opacity-5 ${isDarkMode ? 'opacity-10' : 'opacity-5'}`}>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${isDarkMode ? 'rgba(34, 197, 94, 0.3)' : 'rgba(34, 197, 94, 0.2)'} 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>
      <div
        ref={heroRef}
        className="relative z-10 max-w-6xl mx-auto text-center opacity-0 mt-36"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
       
        {/* Main Headline */}
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-8 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          Building the{' '}
          <span className="">
            <span className=" font-bold bg-gradient-to-r from-primary-green to-accent-yellow bg-clip-text text-transparent">
              Future
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-green via-primary-orange to-primary-purple rounded-full animate-pulse"></div>
          </span>
          <br />
          One Project at a Time.
        </h1>

        {/* Subheadline */}
        <p
          className={`text-xl sm:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          From cutting-edge e-commerce platforms to revolutionary AI-driven solutions — 
          we transform bold ideas into digital reality with the energy and innovation only youth can bring.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <button className="group bg-gradient-to-r from-primary-green to-green-hover text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-green-500/25 animate-pulse-glow">
            <span className="flex items-center justify-center">
              Explore Our Work
              <ArrowRight className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>

          <button className={`group flex items-center justify-center px-10 py-4 rounded-full font-bold text-lg border-2 transition-all duration-300 transform hover:scale-105 ${
            isDarkMode
              ? 'border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white'
              : 'border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white'
          }`}>
            <Play className="mr-3 w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            Watch Our Story
          </button>
        </div>

        {/* Animated Stats */}
        <div className="grid mb-24 grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative p-6 rounded-2xl transition-all duration-500 hover:scale-105 ${
                isDarkMode ? 'bg-gray-800/50 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm shadow-lg'
              } ${currentStat === index ? 'ring-2 ring-primary-green animate-pulse-glow' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto transition-all duration-300 ${
                currentStat === index ? 'bg-primary-green text-white scale-110' : `${stat.color} bg-gray-100 dark:bg-gray-700`
              }`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className={`text-sm font-medium ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {stat.label}
              </div>
              
              {/* Animated border */}
              <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
                currentStat === index ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-green via-primary-orange to-primary-purple opacity-20 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

       
      </div>

   
    </section>
  );
};

export default Hero;