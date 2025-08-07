import React, { useEffect, useRef } from 'react';
import { Code, Smartphone, ShoppingCart, Palette} from 'lucide-react';

interface ServicesProps {
  isDarkMode: boolean;
}

const Services: React.FC<ServicesProps> = ({ isDarkMode }) => {
  const servicesRef = useRef<HTMLDivElement>(null);

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

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      features: ['React & Next.js', 'Node.js Backend', 'Responsive Design', 'SEO Optimized'],
      color: 'text-primary-green',
      bgColor: 'bg-primary-green',
      lightBg: 'bg-green-50',
      price: 'From $2,500'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Deployment'],
      color: 'text-primary-orange',
      bgColor: 'bg-primary-orange',
      lightBg: 'bg-orange-50',
      price: 'From $3,000'
    },
 
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment integration and inventory management.',
      features: ['Shopify/WooCommerce', 'Payment Gateway', 'Inventory System', 'Analytics'],
      color: 'text-accent-red',
      bgColor: 'bg-accent-red',
      lightBg: 'bg-red-50',
      price: 'From $3,500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered designs that convert visitors into customers.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'text-accent-yellow',
      bgColor: 'bg-accent-yellow',
      lightBg: 'bg-yellow-50',
      price: 'From $1,500'
    },
   
    
  ];

  return (
    <section id="services" className={`py-20 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } `}>
      <div className="container mx-auto px-4">
        <div ref={servicesRef} className="opacity-0">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
              isDarkMode ? 'bg-gray-700 text-primary-green' : 'bg-green-50 text-primary-green'
            }`}>
              <div className="w-2 h-2 bg-primary-green rounded-full mr-2 animate-pulse"></div>
              Our Services
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Comprehensive <span className="bg-gradient-to-r from-primary-green to-primary-orange bg-clip-text text-transparent">Tech Solutions</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              From concept to deployment, we offer end-to-end technology services that drive your business forward
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group relative p-8 rounded-3xl transition-all duration-500 hover-lift animate-scale-in overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : `${service.lightBg} hover:bg-white border border-gray-200 shadow-lg hover:shadow-xl`
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Pattern */}
                <div className={`absolute top-0 right-0 w-24 h-24 opacity-10 transition-opacity duration-300 group-hover:opacity-20 ${service.bgColor} rounded-full -translate-y-6 translate-x-6`}></div>

                {/* Service Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg ${
                    service.bgColor
                  }`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Service Info */}
                <h3 className={`text-xl font-bold mb-3 ${service.color}`}>
                  {service.title}
                </h3>
                
                <p className={`text-sm mb-4 leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={`text-xs flex items-center ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full mr-2 ${service.bgColor}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className={`text-lg font-bold mb-4 ${service.color}`}>
                  {service.price}
                </div>

                {/* CTA */}
                <button className={`w-full py-2 px-4 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isDarkMode 
                    ? `${service.bgColor} text-white hover:shadow-lg` 
                    : `border-2 ${service.color} hover:${service.bgColor} hover:text-white`
                } border-2 border-transparent`}>
                  Get Quote
                </button>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className={`p-8 rounded-3xl ${
            isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-green-50 to-orange-50'
          }`}>
            <h3 className={`text-2xl font-bold text-center mb-8 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Our Development Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your needs and goals' },
                { step: '02', title: 'Design', desc: 'Creating wireframes and prototypes' },
                { step: '03', title: 'Development', desc: 'Building with cutting-edge tech' },
                { step: '04', title: 'Deployment', desc: 'Launch and ongoing support' }
              ].map((process, index) => (
                <div key={process.step} className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg ${
                    index === 0 ? 'bg-primary-green' :
                    index === 1 ? 'bg-primary-orange' :
                    index === 2 ? 'bg-primary-purple' :
                    'bg-accent-red'
                  }`}>
                    {process.step}
                  </div>
                  <h4 className={`font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {process.title}
                  </h4>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {process.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;