import React, { useEffect, useRef } from 'react';
import { Target, Lightbulb, Globe } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={`py-20 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div ref={aboutRef} className="max-w-4xl mx-auto text-center opacity-0">
          {/* Main Statement */}
          <div className="mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-bg-light' : 'text-text-dark'
            }`}>
              We're the{' '}
              <span className="gradient-text">HQ</span>{' '}
              for tech-driven innovations by youth, for the world.
            </h2>
            
            <p className={`text-xl max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-gray-text'
            }`}>
              At S8Globals, we believe the future belongs to young innovators who aren't afraid to challenge the status quo and build solutions that matter.
            </p>
          </div>

          {/* Animated Visual Element */}
          <div className="mb-16 relative">
            <div className={`w-full h-64 rounded-2xl flex items-center justify-center relative overflow-hidden ${
              isDarkMode ? 'bg-gray-700' : 'bg-bg-soft'
            }`}>
              {/* Design Evolution Animation */}
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 animate-pulse ${
                    isDarkMode ? 'bg-gray-600' : 'bg-white'
                  }`}>
                    <Lightbulb className="w-8 h-8 text-accent-yellow" />
                  </div>
                  <span className={`text-sm font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Idea</span>
                </div>

                <div className="flex-1 h-px bg-gradient-to-r from-accent-yellow to-primary-blue animate-pulse"></div>

                <div className="text-center">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 animate-pulse ${
                    isDarkMode ? 'bg-gray-600' : 'bg-white'
                  }`} style={{ animationDelay: '1s' }}>
                    <Target className="w-8 h-8 text-primary-blue" />
                  </div>
                  <span className={`text-sm font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Design</span>
                </div>

                <div className="flex-1 h-px bg-gradient-to-r from-primary-blue to-accent-yellow animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="text-center">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 animate-pulse ${
                    isDarkMode ? 'bg-gray-600' : 'bg-white'
                  }`} style={{ animationDelay: '2s' }}>
                    <Globe className="w-8 h-8 text-accent-yellow" />
                  </div>
                  <span className={`text-sm font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Global Impact</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-xl transition-all duration-300 hover-lift ${
              isDarkMode ? 'bg-gray-700' : 'bg-bg-soft'
            }`}>
              <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                isDarkMode ? 'text-white' : 'text-text-dark'
              }`}>Innovation First</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-text'}`}>
                We don't just follow trends - we create them. Every project pushes boundaries.
              </p>
            </div>

            <div className={`p-6 rounded-xl transition-all duration-300 hover-lift ${
              isDarkMode ? 'bg-gray-700' : 'bg-bg-soft'
            }`}>
              <div className="w-12 h-12 bg-accent-yellow rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                isDarkMode ? 'text-white' : 'text-text-dark'
              }`}>Purpose Driven</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-text'}`}>
                Every line of code serves a purpose. We build solutions that solve real problems.
              </p>
            </div>

            <div className={`p-6 rounded-xl transition-all duration-300 hover-lift ${
              isDarkMode ? 'bg-gray-700' : 'bg-bg-soft'
            }`}>
              <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                isDarkMode ? 'text-white' : 'text-text-dark'
              }`}>Global Impact</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-text'}`}>
                From Nigeria to the world - our solutions transcend geographical boundaries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;