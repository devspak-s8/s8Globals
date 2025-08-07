import React, { useEffect, useRef, useState } from 'react';
import { Mail, Send, Check } from 'lucide-react';

interface NewsletterProps {
  isDarkMode: boolean;
}

const Newsletter: React.FC<NewsletterProps> = ({ isDarkMode }) => {
  const newsletterRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

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

    if (newsletterRef.current) {
      observer.observe(newsletterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className={`py-20 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-12">
        <div ref={newsletterRef} className="opacity-0">
          <div className={`max-w-4xl mx-auto p-8 md:p-12 rounded-2xl text-center ${
            isDarkMode ? 'bg-gray-700' : 'bg-bg-soft'
          }`}>
            {/* Icon */}
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 animate-float ${
              isDarkMode ? 'bg-primary-blue' : 'bg-primary-blue'
            }`}>
              <Mail className="w-10 h-10 text-white" />
            </div>

            {/* Header */}
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-text-dark'
            }`}>
              Stay in the Loop
            </h2>
            
            <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-text'
            }`}>
              Get updates on launches, giveaways, and dev tips from S8Globals. Join 200+ subscribers who trust us with their inbox.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={isSubscribed}
                    className={`w-full px-6 py-4 rounded-full border-2 focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300 text-center sm:text-left ${
                      isDarkMode 
                        ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-300' 
                        : 'bg-white border-border-gray text-text-dark placeholder-gray-500'
                    } ${isSubscribed ? 'cursor-not-allowed opacity-75' : ''}`}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubscribed}
                  className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover-lift flex items-center justify-center ${
                    isSubscribed 
                      ? 'bg-green-500 text-white cursor-not-allowed' 
                      : 'bg-primary-blue hover:bg-blue-hover text-white animate-pulse-glow'
                  }`}
                >
                  {isSubscribed ? (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Subscribe
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Privacy Note */}
            <p className={`text-sm mt-6 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-text'
            }`}>
              We respect your privacy. Unsubscribe at any time. No spam, just value.
            </p>

            {/* Social Proof */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <div className="flex -space-x-2">
                {['👨‍💻', '👩‍💼', '👨‍🎨', '👩‍🚀', '👨‍💼'].map((emoji, index) => (
                  <div
                    key={index}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg border-2 ${
                      isDarkMode ? 'border-gray-600 bg-gray-600' : 'border-white bg-white'
                    }`}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Join 10+ developers and founders
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;