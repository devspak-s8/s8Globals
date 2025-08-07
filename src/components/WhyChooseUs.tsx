import React, { useEffect, useRef } from 'react';
import { Rocket, Users, Shield, Globe, Clock, Award, Zap, Heart } from 'lucide-react';

interface WhyChooseUsProps {
  isDarkMode: boolean;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ isDarkMode }) => {
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

  const reasons = [
    {
      icon: Rocket,
      title: 'Lightning Fast Delivery',
      description: 'We move at startup speed. From concept to deployment in record time without compromising quality.',
      stat: '48hrs',
      statLabel: 'Average Turnaround',
      color: 'text-primary-green',
      bgColor: 'bg-primary-green',
      lightBg: 'bg-green-50'
    },
    {
      icon: Users,
      title: 'Young, Fresh Perspective',
      description: 'Our team brings Gen-Z energy and millennial wisdom to solve problems with innovative approaches.',
      stat: '22',
      statLabel: 'Average Team Age',
      color: 'text-primary-orange',
      bgColor: 'bg-primary-orange',
      lightBg: 'bg-orange-50'
    },
    {
      icon: Shield,
      title: 'Privacy-First Approach',
      description: 'Built with security and privacy at the core. Your data and your users\' data are always protected.',
      stat: '100%',
      statLabel: 'GDPR Compliant',
      color: 'text-primary-purple',
      bgColor: 'bg-primary-purple',
      lightBg: 'bg-purple-50'
    },
    {
      icon: Globe,
      title: 'Global Standards, Local Touch',
      description: 'Made in Nigeria with international quality standards. We understand both local and global markets.',
      stat: '15+',
      statLabel: 'Countries Served',
      color: 'text-accent-red',
      bgColor: 'bg-accent-red',
      lightBg: 'bg-red-50'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support because great ideas don\'t wait for business hours.',
      stat: '24/7',
      statLabel: 'Support Available',
      color: 'text-accent-yellow',
      bgColor: 'bg-accent-yellow',
      lightBg: 'bg-yellow-50'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Over 100 successful projects and counting. Our portfolio speaks for itself.',
      stat: '99%',
      statLabel: 'Client Satisfaction',
      color: 'text-primary-green',
      bgColor: 'bg-primary-green',
      lightBg: 'bg-green-50'
    }
  ];

  const achievements = [
    { icon: Zap, title: 'Fastest Growing', desc: 'Tech startup in Nigeria 2024', color: 'text-primary-green' },
    { icon: Award, title: 'Top Rated', desc: 'On Clutch & Upwork platforms', color: 'text-primary-orange' },
    { icon: Heart, title: 'Community Loved', desc: '5000+ developers trust us', color: 'text-accent-red' },
    { icon: Globe, title: 'Global Reach', desc: 'Projects in 15+ countries', color: 'text-primary-purple' }
  ];

  return (
    <section id="why-choose-us" className={`py-20 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-bg-light to-white'
    }`}>
      <div className="container mx-auto px-4">
        <div ref={whyRef} className="opacity-0">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
              isDarkMode ? 'bg-gray-800 text-primary-orange' : 'bg-orange-50 text-primary-orange'
            }`}>
              <div className="w-2 h-2 bg-primary-orange rounded-full mr-2 animate-pulse"></div>
              Why Choose Us
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-text-dark'
            }`}>
              Why <span className="gradient-text">S8Globals</span>?
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              We're not just another tech company. We're the future of digital innovation, powered by youth and driven by results.
            </p>
          </div>

          {/* Main Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={`group relative p-8 rounded-3xl transition-all duration-500 hover-lift animate-scale-in overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : `${reason.lightBg} hover:bg-white border border-gray-200 shadow-lg hover:shadow-xl`
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${
                  reason.color === 'text-primary-green' ? 'from-green-400 to-green-600' :
                  reason.color === 'text-primary-orange' ? 'from-orange-400 to-orange-600' :
                  reason.color === 'text-primary-purple' ? 'from-purple-400 to-purple-600' :
                  reason.color === 'text-accent-red' ? 'from-red-400 to-red-600' :
                  'from-yellow-400 to-yellow-600'
                }`}></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg ${
                    reason.bgColor
                  }`}>
                    <reason.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Stat Badge */}
                  <div className={`absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-bold text-white ${reason.bgColor}`}>
                    {reason.stat}
                  </div>
                </div>

                {/* Content */}
                <h3 className={`text-2xl font-bold mb-4 ${reason.color}`}>
                  {reason.title}
                </h3>
                
                <p className={`text-lg mb-6 leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {reason.description}
                </p>

                {/* Stat */}
                <div className={`text-sm font-semibold ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {reason.statLabel}
                </div>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full ${reason.bgColor}`}></div>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className={`p-8 rounded-3xl mb-16 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white shadow-xl'
          }`}>
            <h3 className={`text-2xl font-bold text-center mb-8 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Our Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={achievement.title} className="text-center group">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 ${
                    index === 0 ? 'bg-primary-green' :
                    index === 1 ? 'bg-primary-orange' :
                    index === 2 ? 'bg-accent-red' :
                    'bg-primary-purple'
                  }`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className={`font-bold mb-2 ${achievement.color}`}>
                    {achievement.title}
                  </h4>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {achievement.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className={`p-8 rounded-3xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-green-50 to-purple-50'
          }`}>
            <h3 className={`text-2xl font-bold text-center mb-8 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              S8Globals vs Traditional Agencies
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <th className={`text-left py-4 px-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Feature</th>
                    <th className="text-center py-4 px-6 text-primary-green font-bold">S8Globals</th>
                    <th className={`text-center py-4 px-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Traditional Agencies</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Project Delivery Time', us: '2-4 weeks', them: '3-6 months' },
                    { feature: 'Communication Style', us: 'Direct & Transparent', them: 'Formal & Slow' },
                    { feature: 'Technology Stack', us: 'Latest & Modern', them: 'Legacy Systems' },
                    { feature: 'Pricing Model', us: 'Transparent & Fair', them: 'Hidden Costs' },
                    { feature: 'Support', us: '24/7 Available', them: 'Business Hours Only' }
                  ].map((row) => (
                    <tr key={row.feature} className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                      <td className={`py-4 px-6 font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-primary-green text-white">
                          ✓ {row.us}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                          isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {row.them}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;