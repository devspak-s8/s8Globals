import React, { useEffect, useRef } from 'react';
import { Brain, DollarSign, Calendar, Bell, BarChart3 } from 'lucide-react';

interface ComingSoonProps {
  isDarkMode: boolean;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ isDarkMode }) => {
  const soonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    }, { threshold: 0.1 });

    if (soonRef.current) {
      observer.observe(soonRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const upcomingTools = [
    {
      icon: Brain,
      title: 'S8AI',
      description: 'AI-powered development assistant and automation tools',
      timeline: 'Q1 2026',
      status: 'In Development',
      color: 'text-primary-green',
      bgColor: 'bg-primary-green',
      statusColor: 'bg-primary-green',
    },
    {
      icon: DollarSign,
      title: 'S8Finance',
      description: 'Fintech solutions for emerging markets and crypto integration',
      timeline: 'Early 2026',
      status: 'Planning Phase',
      color: 'text-primary-orange',
      bgColor: 'bg-primary-orange',
      statusColor: 'bg-primary-orange',
    },
   {
      icon: BarChart3,
      title: 'S8Analytics',
      description: 'Privacy-first analytics for modern web applications',
      timeline: 'Late 2026',
      status: 'Concept',
      color: 'text-primary-purple',
      bgColor: 'bg-primary-purple',
      statusColor: 'bg-primary-purple',
    },
  ];

  return (
    <section
      id="coming-soon"
      className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-bg-light'}`}
    >
      <div className="container mx-auto px-4">
        <div ref={soonRef} className="opacity-0">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                isDarkMode ? 'text-bg-light' : 'text-text-dark'
              }`}
            >
              Coming <span className="gradient-text">Soon</span>
            </h2>
            <p
              className={`text-xl max-w-2xl mx-auto ${
                isDarkMode ? 'text-gray-400' : 'text-gray-text'
              }`}
            >
              The future of tech is being built right now. Here's what's next in our roadmap.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-16">
              {/* Timeline Line */}
              <div
                className={`absolute left-8 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-primary-green via-primary-orange to-primary-purple opacity-30`}
              />
              <div
                className={`absolute left-8 top-0 w-1 h-32 rounded-full bg-gradient-to-b from-primary-green to-primary-orange animate-pulse`}
              />

              {/* Timeline Items */}
              <div className="space-y-12">
                {upcomingTools.map((tool, index) => (
                  <div
                    key={tool.title}
                    className={`relative pl-20 animate-scale-in`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`absolute left-6 w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-300 hover:scale-125 ${
                        index === 0
                          ? `${tool.bgColor} animate-pulse-glow`
                          : index === 1
                          ? `${tool.bgColor} opacity-75`
                          : `${tool.bgColor} opacity-50`
                      }`}
                    ></div>

                    {/* Content Card */}
                    <div
                      className={`relative p-8 rounded-3xl transition-all duration-500 hover-lift overflow-hidden ${
                        isDarkMode
                          ? 'bg-gray-800 hover:bg-gray-700'
                          : 'bg-white hover:bg-gray-50 border border-gray-200 shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {/* Progress Indicator */}
                      <div
                        className={`absolute top-0 left-0 h-1 rounded-full transition-all duration-300 ${
                          index === 0
                            ? 'w-3/4 bg-primary-green'
                            : index === 1
                            ? 'w-1/2 bg-primary-orange'
                            : 'w-1/4 bg-primary-purple'
                        }`}
                      ></div>

                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-6 ${tool.bgColor}`}
                          >
                            <tool.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3
                              className={`text-2xl font-bold mb-2 ${
                                isDarkMode ? 'text-white' : 'text-text-dark'
                              }`}
                            >
                              {tool.title}
                            </h3>
                            <span
                              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white ${tool.statusColor}`}
                            >
                              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                              {tool.status}
                            </span>
                          </div>
                        </div>

                        <div className="text-right">
                          <div
                            className={`flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                              isDarkMode
                                ? 'bg-gray-700 text-gray-300'
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            <Calendar className="w-4 h-4 mr-1" />
                            {tool.timeline}
                          </div>
                        </div>
                      </div>

                      <p
                        className={`text-lg leading-relaxed ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-text'
                        }`}
                      >
                        {tool.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Overview */}
            <div
              className={`p-8 rounded-3xl ${
                isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-green-50 to-purple-50'
              }`}
            >
              <h3
                className={`text-2xl font-bold text-center mb-6 ${
                  isDarkMode ? 'text-white' : 'text-text-dark'
                }`}
              >
                Development Progress
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {upcomingTools.map((tool, index) => (
                  <div key={tool.title} className="text-center">
                    <div className={`text-3xl font-bold mb-2 ${tool.color}`}>
                      {index === 0 ? '40%' : index === 1 ? '35%' : '20%'}
                    </div>
                    <div
                      className={`text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-text'
                      }`}
                    >
                      {tool.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Waitlist CTA */}
          <div
            className={`mt-16 p-8 rounded-2xl text-center ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <Bell className="w-12 h-12 text-accent-yellow mx-auto mb-4 animate-float" />
            <h3
              className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-text-dark'
              }`}
            >
              Be the First to Know
            </h3>
            <p
              className={`text-lg mb-6 max-w-2xl mx-auto ${
                isDarkMode ? 'text-gray-300' : 'text-gray-text'
              }`}
            >
              Join 2,500+ developers and entrepreneurs waiting for early access to these revolutionary tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-green hover:bg-green-hover text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 animate-pulse-glow">
                Join Waitlist
              </button>
              <button
                className={`px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 transform hover:scale-105 ${
                  isDarkMode
                    ? 'border-gray-600 text-gray-300 hover:border-primary-orange hover:text-primary-orange'
                    : 'border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white'
                }`}
              >
                Get Notified
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
