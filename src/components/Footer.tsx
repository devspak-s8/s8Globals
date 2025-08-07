import React from "react";
import { Globe, Code, Github, Twitter, Mail, Heart, Instagram } from "lucide-react";

interface FooterProps {
  isDarkMode: boolean;
}

// eslint-disable-next-line no-empty-pattern
const Footer: React.FC<FooterProps> = ({}) => {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#join-ecosystem" },
    { name: "GitHub", href: "#", icon: Github },
    { name: "Twitter", href: "#", icon: Twitter },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Use", href: "#" },
  ];

  return (
    <footer className="bg-footer-bg px-12 text-bg-light py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Globe className="w-8 h-8 text-primary-blue animate-pulse-glow" />
                <Code className="w-4 h-4 text-accent-yellow absolute -top-1 -right-1" />
              </div>
              <span className="text-2xl font-bold gradient-text">
                S8Globals
              </span>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-md">
              Building the future, one project at a time. We're the HQ for
              tech-driven innovations by youth, for the world.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/s8globals"
                className="w-10 h-10 bg-gray-700 hover:bg-primary-blue rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://twitter.com/s8globals"
                className="w-10 h-10 bg-gray-700 hover:bg-primary-blue rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </a>

              <a
                href="mailto:info@s8globals.org"
                className="w-10 h-10 bg-gray-700 hover:bg-primary-blue rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-blue transition-colors duration-300 flex items-center"
                  >
                    {link.icon && <link.icon className="w-4 h-4 mr-2" />}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-blue transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0">
              <span>© 2025 S8Globals. Built with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>in Nigeria.</span>
            </div>

            {/* Live Stats */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>50 websites built</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-blue rounded-full animate-pulse"></div>
                <span>24/7 support active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
