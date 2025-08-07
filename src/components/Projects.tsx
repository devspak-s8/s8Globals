import React, { useEffect, useRef } from 'react';
import { ExternalLink, ShoppingCart, GraduationCap, Wrench } from 'lucide-react';

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const projectsRef = useRef<HTMLDivElement>(null);

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      icon: Wrench,
      title: 'S8Builder',
      description: 'No-code website builder for businesses and creators',
      cta: 'View Live',
      color: 'text-primary-green',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100'
    },
    {
      icon: ShoppingCart,
      title: 'S8Mart',
      description: 'E-commerce platform tailored for African businesses',
      cta: 'View Live',
      color: 'text-primary-orange',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100'
    },
   
    {
      icon: GraduationCap,
      title: 'S8Academy',
      description: 'Learning management system for educational institutions',
      cta: 'View Live',
      color: 'text-accent-red',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100'
    },
   
  ];

  return (
    <section id="projects" className={`py-20 ${
      isDarkMode ? 'bg-gray-900' : 'bg-bg-light'
    }`}>
      <div className="container mx-auto px-4">
        <div ref={projectsRef} className="opacity-0">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-bg-light' : 'text-text-dark'
            }`}>
              Our <span className="gradient-text">Projects</span>
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-gray-text'
            }`}>
              From concept to deployment, we've built solutions that matter
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative p-8 rounded-3xl transition-all duration-500 hover-lift animate-scale-in overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : `${project.bgColor} ${project.hoverColor} border border-gray-200`
                } hover:shadow-2xl hover:shadow-gray-500/20`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                  project.color === 'text-primary-green' ? 'bg-gradient-to-br from-green-400 to-green-600' :
                  project.color === 'text-primary-orange' ? 'bg-gradient-to-br from-orange-400 to-orange-600' :
                  project.color === 'text-primary-purple' ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                  project.color === 'text-accent-red' ? 'bg-gradient-to-br from-red-400 to-red-600' :
                  'bg-gradient-to-br from-yellow-400 to-yellow-600'
                }`}></div>

                {/* Project Icon */}
                <div className={`relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                  isDarkMode 
                    ? 'bg-gray-700 group-hover:bg-gray-600' 
                    : 'bg-white shadow-lg group-hover:shadow-xl'
                }`}>
                  <project.icon className={`w-10 h-10 ${project.color} transition-all duration-300 group-hover:scale-110`} />
                </div>

                {/* Project Info */}
                <h3 className={`relative text-2xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-text-dark'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`relative text-lg mb-8 leading-relaxed ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-text'
                }`}>
                  {project.description}
                </p>

                {/* CTA Button */}
                <button className={`group/btn relative inline-flex items-center px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                  project.color === 'text-primary-green' ? 'bg-green-100 text-green-700 hover:bg-green-200' :
                  project.color === 'text-primary-orange' ? 'bg-orange-100 text-orange-700 hover:bg-orange-200' :
                  project.color === 'text-primary-purple' ? 'bg-purple-100 text-purple-700 hover:bg-purple-200' :
                  project.color === 'text-accent-red' ? 'bg-red-100 text-red-700 hover:bg-red-200' :
                  'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                }`}>
                  {project.cta}
                  <ExternalLink className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </button>
              </div>
            ))}
          </div>

          {/* Featured Project Highlight */}
          <div className={`max-w-4xl mx-auto p-8 rounded-3xl mb-12 ${
            isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-green-50 to-orange-50'
          }`}>
            <div className="text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="w-3 h-3 bg-primary-green rounded-full animate-pulse mr-2"></div>
                <span className={`text-sm font-semibold uppercase tracking-wider ${
                  isDarkMode ? 'text-green-400' : 'text-primary-green'
                }`}>Featured Project</span>
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-text-dark'
              }`}>
                S8Builder - Our Flagship Platform
              </h3>
              <p className={`text-lg mb-6 max-w-2xl mx-auto ${
                isDarkMode ? 'text-gray-300' : 'text-gray-text'
              }`}>
                Over 200+ websites built and counting. Join thousands of creators who trust S8Builder for their digital presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-green hover:bg-green-hover text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  Try S8Builder Free
                </button>
                <button className={`px-8 py-3 rounded-full font-semibold border-2 transition-all duration-300 transform hover:scale-105 ${
                  isDarkMode 
                    ? 'border-gray-600 text-gray-300 hover:border-primary-orange hover:text-primary-orange' 
                    : 'border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white'
                }`}>
                  View Case Studies
                </button>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <button className="bg-primary-green hover:bg-green-hover text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover-lift">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;