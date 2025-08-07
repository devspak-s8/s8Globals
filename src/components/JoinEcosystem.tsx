import React, { useEffect, useRef } from 'react';
import { Users, GitBranch, Rocket, ArrowRight } from 'lucide-react';

interface JoinEcosystemProps {
  isDarkMode: boolean;
}

const JoinEcosystem: React.FC<JoinEcosystemProps> = ({ isDarkMode }) => {
  const joinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (joinRef.current) {
      observer.observe(joinRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const opportunities = [
    {
      icon: Users,
      title: 'Collaborate',
      description: 'Join our network of developers, designers, and innovators working on the next big thing.',
      cta: 'Join Community',
      color: 'text-primary-blue'
    },
    {
      icon: GitBranch,
      title: 'Contribute',
      description: 'Help us build open-source tools that empower the next generation of creators.',
      cta: 'View Projects',
      color: 'text-accent-yellow'
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'Have an idea? Let\'s turn it into reality under the S8Globals ecosystem.',
      cta: 'Start Building',
      color: 'text-primary-blue'
    }
  ];

  return (
    <section id="join-ecosystem" className={`py-20 ${
      isDarkMode ? 'bg-gray-900' : 'bg-bg-light'
    }`}>
      <div className="container mx-auto px-4">
        <div ref={joinRef} className="opacity-0">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-bg-light' : 'text-text-dark'
            }`}>
              Join the <span className="gradient-text">Ecosystem</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-gray-text'
            }`}>
              Whether you're a developer, designer, entrepreneur, or dreamer, there's a place for you in the S8Globals ecosystem.
            </p>
          </div>

          {/* Opportunities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {opportunities.map((opportunity, index) => (
              <div
                key={opportunity.title}
                className={`group p-8 rounded-2xl text-center transition-all duration-500 hover-lift animate-scale-in ${
                  isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-bg-soft'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 animate-float ${
                  index % 2 === 0 ? 'bg-primary-blue' : 'bg-accent-yellow'
                }`} style={{ animationDelay: `${index * 2}s` }}>
                  <opportunity.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className={`text-2xl font-bold mb-4 ${opportunity.color}`}>
                  {opportunity.title}
                </h3>
                
                <p className={`text-lg mb-6 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-text'
                }`}>
                  {opportunity.description}
                </p>

                {/* CTA Button */}
                <button className={`group/btn inline-flex items-center font-semibold transition-all duration-300 ${
                  opportunity.color === 'text-primary-blue' 
                    ? 'text-primary-blue hover:text-blue-hover' 
                    : 'text-accent-yellow hover:text-yellow-600'
                }`}>
                  {opportunity.cta}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className={`max-w-2xl mx-auto p-8 rounded-2xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="text-center mb-8">
              <h3 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-text-dark'
              }`}>
                Ready to Get Started?
              </h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-text'}`}>
                Tell us about your project and let's build something amazing together.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-bg-soft border-border-gray text-text-dark placeholder-gray-500'
                    }`}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-bg-soft border-border-gray text-text-dark placeholder-gray-500'
                    }`}
                  />
                </div>
              </div>
              
              <div>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project or how you'd like to contribute..."
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300 resize-none ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-bg-soft border-border-gray text-text-dark placeholder-gray-500'
                  }`}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-blue hover:bg-blue-hover text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover-lift animate-pulse-glow"
              >
                Let's Build Together
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinEcosystem;