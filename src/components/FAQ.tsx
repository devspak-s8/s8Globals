import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';

interface FAQProps {
  isDarkMode: boolean;
}

const FAQ: React.FC<FAQProps> = ({ isDarkMode }) => {
  const faqRef = useRef<HTMLDivElement>(null);
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

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

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What makes S8Globals different from other tech agencies?',
          answer: 'We\'re a youth-led team that combines fresh perspectives with cutting-edge technology. We deliver projects 3x faster than traditional agencies while maintaining premium quality. Our average team age is 22, bringing Gen-Z energy and millennial wisdom to every project.'
        },
        {
          question: 'How quickly can you start working on my project?',
          answer: 'We can typically start within 24-48 hours of project approval. Our streamlined onboarding process and dedicated project managers ensure rapid kickoff without compromising on planning and strategy.'
        },
        {
          question: 'Do you work with international clients?',
          answer: 'Absolutely! We\'ve successfully delivered projects for clients in 15+ countries. We work across different time zones and have experience with various international business requirements and compliance standards.'
        }
      ]
    },
    {
      category: 'Services & Pricing',
      questions: [
        {
          question: 'What services do you offer?',
          answer: 'We offer comprehensive tech solutions including web development, mobile apps, AI/ML solutions, e-commerce platforms, UI/UX design, database solutions, cloud services, and cybersecurity. We\'re your one-stop shop for all digital needs.'
        },
        {
          question: 'How do you price your projects?',
          answer: 'We offer transparent, competitive pricing with no hidden costs. Pricing depends on project complexity, timeline, and requirements. We provide detailed quotes upfront and offer flexible payment plans. Most projects range from $1,500 to $10,000.'
        },
        {
          question: 'Do you offer ongoing support and maintenance?',
          answer: 'Yes! We provide 24/7 support and maintenance packages. This includes regular updates, security patches, performance monitoring, and technical support. We believe in long-term partnerships with our clients.'
        }
      ]
    },
    {
      category: 'Process & Timeline',
      questions: [
        {
          question: 'What is your typical project timeline?',
          answer: 'Most projects are completed within 2-6 weeks, depending on complexity. Simple websites take 1-2 weeks, while complex applications may take 4-8 weeks. We provide detailed timelines during the planning phase and keep you updated throughout.'
        },
        {
          question: 'How do you ensure project quality?',
          answer: 'We follow industry best practices including code reviews, automated testing, security audits, and performance optimization. Every project goes through multiple quality checkpoints before delivery. We also provide post-launch monitoring and support.'
        },
        {
          question: 'Can I make changes during development?',
          answer: 'Yes, we embrace an agile development approach. We provide regular updates and demos, allowing for feedback and adjustments throughout the process. Minor changes are included, while major scope changes are discussed and quoted separately.'
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'What technologies do you use?',
          answer: 'We use modern, cutting-edge technologies including React, Next.js, Node.js, Python, React Native, Flutter, AWS, and more. We choose the best tech stack for each project based on requirements, scalability needs, and long-term maintenance.'
        },
        {
          question: 'Do you provide source code and documentation?',
          answer: 'Absolutely! You receive complete source code, comprehensive documentation, deployment guides, and training materials. We believe in full transparency and ensuring you have everything needed to maintain and scale your solution.'
        },
        {
          question: 'How do you handle data security and privacy?',
          answer: 'Security is our top priority. We implement industry-standard security measures, follow GDPR compliance, use encrypted communications, secure hosting, and regular security audits. All client data is treated with utmost confidentiality.'
        }
      ]
    }
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant answers',
      action: 'Start Chat',
      color: 'text-primary-green',
      bgColor: 'bg-primary-green'
    },
    {
      icon: Phone,
      title: 'Schedule Call',
      description: 'Book a free consultation',
      action: 'Book Now',
      color: 'text-primary-orange',
      bgColor: 'bg-primary-orange'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Detailed inquiries',
      action: 'Send Email',
      color: 'text-primary-purple',
      bgColor: 'bg-primary-purple'
    }
  ];

  return (
    <section id="faq" className={`py-20 ${
      isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-bg-light to-white'
    }`}>
      <div className="container mx-auto px-4">
        <div ref={faqRef} className="opacity-0">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
              isDarkMode ? 'bg-gray-700 text-primary-purple' : 'bg-purple-50 text-primary-purple'
            }`}>
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Got <span className="bg-gradient-to-r from-primary-purple to-accent-red bg-clip-text text-transparent">Questions</span>?
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Everything you need to know about working with S8Globals. Can't find what you're looking for? Just ask!
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* FAQ Categories */}
              <div className="lg:col-span-2">
                {faqs.map((category, categoryIndex) => (
                  <div key={category.category} className="mb-8">
                    <h3 className={`text-2xl font-bold mb-6 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {category.category}
                    </h3>
                    <div className="space-y-4">
                      {category.questions.map((faq, questionIndex) => {
                        const globalIndex = categoryIndex * 10 + questionIndex;
                        const isOpen = openItems.includes(globalIndex);
                        
                        return (
                          <div
                            key={questionIndex}
                            className={`rounded-2xl border transition-all duration-300 ${
                              isDarkMode 
                                ? 'bg-gray-700 border-gray-600 hover:border-gray-500' 
                                : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'
                            } ${isOpen ? 'ring-2 ring-primary-purple ring-opacity-20' : ''}`}
                          >
                            <button
                              onClick={() => toggleItem(globalIndex)}
                              className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                            >
                              <span className={`font-semibold text-lg pr-4 ${
                                isDarkMode ? 'text-white' : 'text-gray-900'
                              }`}>
                                {faq.question}
                              </span>
                              <ChevronDown
                                className={`w-6 h-6 transition-transform duration-300 flex-shrink-0 ${
                                  isOpen ? 'transform rotate-180 text-primary-purple' : 'text-gray-400'
                                }`}
                              />
                            </button>
                            
                            <div
                              className={`overflow-hidden transition-all duration-300 ${
                                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                              }`}
                            >
                              <div className="px-6 pb-6">
                                <div className={`text-lg leading-relaxed ${
                                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                  {faq.answer}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Options Sidebar */}
              <div className="lg:col-span-1">
                <div className={`sticky top-8 p-8 rounded-3xl ${
                  isDarkMode ? 'bg-gray-700' : 'bg-white shadow-xl'
                }`}>
                  <h3 className={`text-2xl font-bold mb-6 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Still Need Help?
                  </h3>
                  <p className={`text-lg mb-8 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Our team is here to help you succeed. Choose your preferred way to get in touch.
                  </p>

                  <div className="space-y-4">
                    {contactOptions.map((option, index) => (
                      <div
                        key={option.title}
                        className={`group p-6 rounded-2xl border-2 border-transparent transition-all duration-300 hover:border-opacity-30 cursor-pointer ${
                          isDarkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-50 hover:bg-white hover:shadow-lg'
                        }`}
                        style={{ 
                          borderColor: openItems.length > index ? 
                            (option.color === 'text-primary-green' ? '#22c55e' :
                             option.color === 'text-primary-orange' ? '#f97316' : '#9333ea') : 'transparent'
                        }}
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${option.bgColor}`}>
                            <option.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className={`font-semibold mb-1 ${
                              isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                              {option.title}
                            </h4>
                            <p className={`text-sm ${
                              isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {option.description}
                            </p>
                          </div>
                        </div>
                        <button className={`w-full mt-4 py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                          isDarkMode 
                            ? `${option.bgColor} text-white hover:shadow-lg` 
                            : `border-2 ${option.color} hover:${option.bgColor} hover:text-white`
                        } border-2 border-transparent`}>
                          {option.action}
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Quick Stats */}
                  <div className={`mt-8 p-6 rounded-2xl ${
                    isDarkMode ? 'bg-gray-600' : 'bg-gradient-to-r from-green-50 to-purple-50'
                  }`}>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-green mb-1">
                        &lt; 2hrs
                      </div>
                      <div className={`text-sm ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Average Response Time
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;