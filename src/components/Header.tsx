import React, { useState, useEffect } from "react";
import { Menu, X, Code, Globe, ChevronDown } from "lucide-react";

interface HeaderProps {
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    {
      name: "Services",
      href: "#services",
      dropdown: [
        { name: "Web Development", href: "#services" },
        { name: "Mobile Apps", href: "#services" },
        { name: "AI Solutions", href: "#services" },
        { name: "E-commerce", href: "#services" },
      ],
    },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#join-ecosystem" },
  ];

  return (
    <header
      className={`px-2 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800"
            : "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary-green rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-primary-green to-accent-yellow rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-white animate-pulse" />
                <Code className="w-3 h-3 text-white absolute -top-1 -right-1 animate-bounce" />
              </div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-green to-accent-yellow bg-clip-text text-transparent">
                S8Globals
              </span>
              <div
                className={`text-xs font-medium ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Tech Innovation Hub
              </div>
            </div>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex w-full items-center justify-between px-6">
            {/* Centered Nav Items */}
            <div className="flex-1 flex justify-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group flex-col items-center"
                >
                  <a
                    href={item.href}
                    className={`flex items-center justify-center text-sm font-medium transition-all duration-300 hover:text-primary-green relative ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                    onMouseEnter={() =>
                      item.dropdown && setActiveDropdown(item.name)
                    }
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full"></span>
                  </a>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 rounded-xl shadow-xl border transition-all duration-300 ${
                        isDarkMode
                          ? "bg-gray-800 border-gray-700"
                          : "bg-white border-gray-200"
                      }`}
                    >
                      {item.dropdown.map((dropItem) => (
                        <a
                          key={dropItem.name}
                          href={dropItem.href}
                          className={`block px-4 py-3 text-sm transition-colors duration-200 hover:text-primary-green ${
                            isDarkMode
                              ? "text-gray-300 hover:bg-gray-700"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {dropItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right-aligned Buttons */}
            <div className="flex items-center space-x-4">
              <button className="bg-gradient-to-r from-primary-green to-green-hover text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                Get Started
              </button>
              <button className="border-2 border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`lg:hidden mt-4 p-6 rounded-xl transition-all duration-300 animate-slide-up ${
              isDarkMode
                ? "bg-gray-800 border border-gray-700"
                : "bg-white shadow-xl border border-gray-200"
            }`}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-sm font-medium transition-colors duration-300 hover:text-primary-green py-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropItem) => (
                        <a
                          key={dropItem.name}
                          href={dropItem.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block text-xs transition-colors duration-300 hover:text-primary-green py-1 ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {dropItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
