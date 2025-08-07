import React, { useEffect, useRef } from 'react';
import { Rocket, Lightbulb, Shield, Globe } from 'lucide-react';

interface WhyS8Props {
  isDarkMode: boolean;
}

const WhyS8: React.FC<WhyS8Props> = ({ isDarkMode }) => {
  const whyRef = useRef<HTMLDivElement>(null);

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

    if (whyRef.current) {
      observer.observe(whyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Rocket,
      title: 'Fast Deployment',
      description: 'From idea to production in record time with our streamlined development process',
      delay: '0s',
      color: 'text-primary-green',
      bgColor: 'bg-primary-green',
      lightBg: 'bg-green-50'
    },
    {
      icon: Lightbulb,
      title: 'Young Vision, Global Impact',
      description: 'Fresh perspectives combined with cutting-edge technology to solve tomorrow\'s problems',
      delay: '0.2s',
      color: 'text-primary-orange',
      bgColor: 'bg-primary-orange',
      lightBg: 'bg-orange-50'
    },
    {
      icon: Shield,
      title: 'Privacy-First Products',
      description: 'Built with security and privacy at the core, ensuring user data protection',
      delay: '0.4s',
      color: 'text-primary-purple',
      bgColor: 'bg-primary-purple',
      lightBg: 'bg-purple-50'
    },
    {
      icon: Globe,
      title: 'Made in Nigeria. Built for the World.',
      description: 'Local expertise with global standards, creating solutions that scale worldwide',
      delay: '0.6s',
      color: 'text-accent-red',
      bgColor: 'bg-accent-red',
      lightBg: 'bg-red-50'
    }
  ];

  return (
    <section id="why-s8" className={`py-20 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div ref={whyRef} className="opacity-0">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-bg-light' : 'text-text-dark'
            }`}>
              Why <span className="gradient-text">S8Globals</span>?
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-gray-text'
            }`}>
              We're not just another tech company - we're the future of digital innovation
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group relative p-8 rounded-3xl transition-all duration-500 hover-lift animate-scale-in overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : `${feature.lightBg} hover:bg-white border border-gray-200`
                }`}
                style={{ animationDelay: feature.delay }}
              >
                {/* Background Pattern */}
                <div className={`absolute top-0 right-0 w-32 h-32 opacity-5 transition-opacity duration-300 group-hover:opacity-10 ${feature.bgColor} rounded-full -translate-y-8 translate-x-8`}></div>

                {/* Animated Icon */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 animate-float shadow-lg ${
                    feature.bgColor
                  }`} style={{ animationDelay: `${index * 2}s` }}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Pulsing Ring */}
                  <div className={`absolute inset-0 rounded-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 animate-pulse ring-2 ring-opacity-50 ${
                    feature.color === 'text-primary-green' ? 'ring-green-400' :
                    feature.color === 'text-primary-orange' ? 'ring-orange-400' :
                    feature.color === 'text-primary-purple' ? 'ring-purple-400' :
                    'ring-red-400'
                  }`}></div>
                </div>

                {/* Content */}
                <h3 className={`text-2xl font-bold mb-4 ${feature.color}`}>
                  {feature.title}
                </h3>
                
                <p className={`text-lg leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-text'
                }`}>
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className={`mt-6 w-12 h-1 rounded-full transition-all duration-300 group-hover:w-20 ${
                  feature.bgColor
                }`}></div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className={`mt-20 p-8 rounded-2xl ${
            isDarkMode ? 'bg-gray-700' : 'bg-bg-light'
          }`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary-green mb-2">99%</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-text'}`}>
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary-orange mb-2">48h</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-text'}`}>
                  Average Delivery
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary-purple mb-2">15+</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-text'}`}>
                  Countries Served
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent-red mb-2">24/7</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-text'}`}>
                  Support Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyS8;