import React, { useEffect, useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, Play, Award } from 'lucide-react';

interface TestimonialsProps {
  isDarkMode: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ isDarkMode }) => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
  
    {
      quote: "The speed and quality of delivery was incredible. What other agencies quoted 6 months for, S8Globals delivered in 3 weeks.",
      author: "Michael Chen",
      role: "Co-founder, Fixify",
      company: "Fixify",
      rating: 5,
      image: "👨‍💻",
      result: "Launched 4 months ahead of schedule",
      video: false
    },
    {
      quote: "Built my first platform in my room with 0 funding. Now we're helping others do the same but faster and better.",
      author: "S8Globals Founder",
      role: "CEO & Lead Developer",
      company: "S8Globals",
      rating: 5,
      image: "👨‍💻",
      result: "50+ successful projects",
      video: true
    },
    {
      quote: "Working with S8Globals felt like having a dedicated tech co-founder. They understood our vision and made it even better.",
      author: "Apatira Sulayman",
      role: "Founder, S8Builder",
      company: "s8Builder",
      rating: 5,
      image: "👩‍🚀",
      result: "$1k+ in sales generated",
      video: false
    },
   
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`py-20 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div ref={testimonialsRef} className="opacity-0">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
              isDarkMode ? 'bg-gray-700 text-accent-red' : 'bg-red-50 text-accent-red'
            }`}>
              <Award className="w-4 h-4 mr-2" />
              Client Success Stories
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-bg-light' : 'text-text-dark'
            }`}>
              What Our Clients <span className="bg-gradient-to-r from-accent-red to-primary-orange bg-clip-text text-transparent">Say</span>
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-gray-text'
            }`}>
              Real results from real clients who trusted us with their vision and saw incredible growth
            </p>
          </div>

          {/* Testimonials Slider */}
          <div className="max-w-6xl mx-auto relative mb-16">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className={`p-8 md:p-12 ${
                      isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-white to-gray-50'
                    }`}>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Content Side */}
                        <div className="text-left">
                          {/* Quote Icon */}
                          <Quote className="w-16 h-16 text-accent-yellow mb-6 animate-float" />

                          {/* Stars */}
                          <div className="flex mb-6">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star key={i} className="w-6 h-6 text-accent-yellow fill-current" />
                            ))}
                          </div>

                          {/* Testimonial Text */}
                          <blockquote className={`text-xl md:text-2xl font-medium mb-8 leading-relaxed ${
                            isDarkMode ? 'text-gray-200' : 'text-gray-900'
                          }`}>
                            "{testimonial.quote}"
                          </blockquote>

                          {/* Result Badge */}
                          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-green text-white text-sm font-semibold mb-6">
                            <Award className="w-4 h-4 mr-2" />
                            {testimonial.result}
                          </div>

                          {/* Author Info */}
                          <div className="flex items-center space-x-4">
                            <div className="text-5xl">{testimonial.image}</div>
                            <div>
                              <div className={`font-bold text-lg ${
                                isDarkMode ? 'text-white' : 'text-gray-900'
                              }`}>
                                {testimonial.author}
                              </div>
                              <div className={`text-sm ${
                                isDarkMode ? 'text-gray-400' : 'text-gray-600'
                              }`}>
                                {testimonial.role}
                              </div>
                              <div className="text-sm font-semibold text-primary-green">
                                {testimonial.company}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Video/Image Side */}
                        <div className="relative">
                          <div className={`aspect-video rounded-2xl flex items-center justify-center ${
                            isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                          }`}>
                            {testimonial.video ? (
                              <div className="relative group cursor-pointer">
                                <div className="w-20 h-20 bg-primary-green rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg">
                                  <Play className="w-8 h-8 text-white ml-1" />
                                </div>
                                <div className="absolute inset-0 bg-primary-green rounded-full opacity-30 animate-ping"></div>
                              </div>
                            ) : (
                              <div className={`text-6xl ${
                                isDarkMode ? 'text-gray-600' : 'text-gray-300'
                              }`}>
                                📸
                              </div>
                            )}
                          </div>
                          {testimonial.video && (
                            <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                              isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                            }`}>
                              Watch Story
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg ${
                isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-800'
              }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg ${
                isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-800'
              }`}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary-green w-8'
                      : isDarkMode 
                        ? 'bg-gray-600 hover:bg-gray-500 w-3' 
                        : 'bg-gray-300 hover:bg-gray-400 w-3'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 md:grid-cols-3 gap-8 p-8 rounded-3xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white shadow-xl'
          }`}>
            {[
              { value: '50+', label: 'Projects Completed', color: 'text-primary-green' },
              { value: '99%', label: 'Client Satisfaction', color: 'text-primary-orange' },
              { value: '48hrs', label: 'Average Delivery', color: 'text-accent-red' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;