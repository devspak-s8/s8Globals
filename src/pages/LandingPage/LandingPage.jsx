"use client";
import React from "react";

import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import ComingSoonModal from "./Components/ComingSoonModal"; // Import your custom modal component
import {
  Rocket,
  Puzzle,
  Brain,
  Users,
  Globe,
  Code,
  Palette,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Send,
  Target,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react";

// Custom hook for scroll animations
function useScrollAnimation() {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return visibleSections;
}

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const visibleSections = useScrollAnimation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    {
      icon: <Rocket className="w-8 h-8" />,
      name: "S8Academy",
      description:
        "A skill-based learning platform for coding, design, and digital education",
      features: [
        "Interactive Coding Courses",
        "Design Workshops",
        "Live Mentorship",
        "Project-Based Learning",
      ],
      color: "from-blue-500 to-cyan-500",
      link: "https://s8academy.s8globals.org/", // 🔗 your desired link
    },
    {
      icon: <Puzzle className="w-8 h-8" />,
      name: "S8Builder",
      description:
        "A flexible, no-code/low-code website & landing page builder with booking services",
      features: [
        "Drag & Drop Builder",
        "Professional Templates",
        "Booking Integration",
        "Mobile Responsive",
      ],
      color: "from-purple-500 to-pink-500",
      link: "https://s8builder.s8globals.org/",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      name: "LexiAI",
      description:
        "An AI-powered assistant for research, learning, and productivity",
      features: [
        "Smart Research",
        "Content Generation",
        "Learning Assistant",
        "Productivity Tools",
      ],
      color: "from-green-500 to-emerald-500",
      link: "https://lexiai.s8globals.org/",
    },
  ];

  const techStack = [
    "React",
    "Python",
    "Node.js",
    "Tailwind CSS",
    "AI APIs",
    "Vercel",
    "Firebase",
  ];

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Products",
      desc: "S8Academy, S8Builder, LexiAI",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Platform",
      desc: "Web-first, responsive, scalable",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Target",
      desc: "Students, freelancers, creators",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Focus",
      desc: "Education, Design, Development",
    },
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "10+",
      label: "Early Access Users",
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: "5+",
      label: "Projects Coming Soon",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "98%",
      label: "Success Rate",
    },
    { icon: <Clock className="w-8 h-8" />, number: "24/7", label: "Support" },
  ];
  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const isAnimated = (sectionId) => visibleSections.has(sectionId);

  return (<> <ComingSoonModal />

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
     
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 transition-all duration-1000 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            S8Globals
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#products"
              className="hover:text-cyan-400 transition-colors"
            >
              Products
            </a>
            <a href="#vision" className="hover:text-cyan-400 transition-colors">
              Vision
            </a>
            <a
              href="#features"
              className="hover:text-cyan-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </div>
          <Link to="/waitlist">
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300">
              Join the Waitlist
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6" data-animate id="hero">
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1500 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30 animate-pulse">
              🚀 Digital Innovation Ecosystem
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent leading-tight">
              Your All-in-One
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Digital Ecosystem
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              From learning to launching — S8Globals empowers the next
              generation of learners, creators, and entrepreneurs with
              cutting-edge digital tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300"
              >
                Explore Ecosystem
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-3 bg-transparent transform hover:scale-105 transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Floating Animation */}
          <div
            className={`mt-16 transition-all duration-2000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <ChevronDown className="w-8 h-8 mx-auto text-slate-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6" data-animate id="stats">
        <div className="container mx-auto">
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ${
              isAnimated("stats")
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 delay-${
                  index * 100
                } ${
                  isAnimated("stats")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6" data-animate>
        <div className="container mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isAnimated("products")
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Product Ecosystem
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Three powerful platforms working together to support your digital
              journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className={`bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-700 hover:scale-105 hover:shadow-2xl cursor-pointer group transform ${
                  isAnimated("products")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                } ${activeProduct === index ? "ring-2 ring-cyan-500" : ""}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveProduct(index)}
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {product.icon}
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-cyan-300 transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-slate-300 text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-slate-300"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full mt-6 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 transform hover:scale-105 transition-all duration-300">
                      Learn More
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section
        className="py-16 px-6 bg-gradient-to-r from-cyan-900/20 to-purple-900/20"
        data-animate
        id="cta1"
      >
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isAnimated("cta1")
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Build the Future with S8Globals?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Be part of the early wave shaping Africa’s digital landscape —
              developers, founders, and creatives welcome.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300"
            >
              Join the Early Access
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 px-6 bg-slate-800/30" data-animate>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${
                isAnimated("vision")
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <Badge className="mb-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30">
                🔥 Core Vision
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Democratizing Digital
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}
                  Innovation
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                We're building an all-in-one ecosystem that supports learning,
                innovation, and growth for the future. No matter your level or
                location, our tools are designed to help you learn, build, and
                grow.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <Star className="w-6 h-6 text-yellow-400" />
                <span className="text-slate-300">
                  Trusted by 10,000+ creators worldwide
                </span>
              </div>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300">
                Learn Our Story
              </Button>
            </div>
            <div
              className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-300 ${
                isAnimated("vision")
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
            >
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className={`bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-500 hover:scale-105 transform delay-${
                    index * 100
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mr-3">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-400">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-6" data-animate id="tech">
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isAnimated("tech")
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
              Built with Modern
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Technology
              </span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <Badge
                  key={index}
                  className={`px-4 py-2 text-sm bg-slate-800 text-slate-300 border-slate-600 hover:border-cyan-500 hover:text-cyan-300 transition-all duration-500 cursor-pointer transform hover:scale-110 delay-${
                    index * 100
                  } ${
                    isAnimated("tech")
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 2 */}
      <section
        className="py-16 px-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20"
        data-animate
        id="cta2"
      >
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isAnimated("cta2")
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0"
            }`}
          >
            <Shield className="w-16 h-16 mx-auto mb-6 text-green-400" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Secure, Scalable, and Reliable
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Enterprise-grade security with 99.9% uptime guarantee. Your data
              and projects are always safe with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300"
              >
                View Security Features
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-3 bg-transparent transform hover:scale-105 transition-all duration-300"
              >
                Read Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 px-6" data-animate>
        <div className="container mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isAnimated("contact")
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ready to start your journey? We'd love to hear from you. Send us a
              message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card
              className={`bg-slate-800/50 border-slate-700 transition-all duration-1000 delay-200 ${
                isAnimated("contact")
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-300 mb-2"
                      >
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-700 border-slate-600 text-white focus:border-cyan-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-300 mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-700 border-slate-600 text-white focus:border-cyan-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-slate-700 border-slate-600 text-white focus:border-cyan-500"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-slate-700 border-slate-600 text-white focus:border-cyan-500"
                      placeholder="Tell us about your project or how we can help..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-400 ${
                isAnimated("contact")
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <p className="text-slate-300">info@s8globals.org</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Phone</h4>
                      <p className="text-slate-300">+234 903 706 3075</p>
                      <p className="text-slate-400 text-sm">
                        Mon–Fri, 9AM–6PM WAT
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Office</h4>
                      <p className="text-slate-300">Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border-slate-700">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-white mb-3">
                    Quick Response Guarantee
                  </h4>
                  <p className="text-slate-300 text-sm mb-4">
                    We typically respond to all inquiries within 2-4 hours
                    during business hours.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm font-medium">
                      Average response time: 1.5 hours
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="py-20 px-6 bg-gradient-to-r from-cyan-900/20 to-purple-900/20"
        data-animate
        id="final-cta"
      >
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isAnimated("final-cta")
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Join the
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Future?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Start your journey with S8Globals today. Learn, build, and grow
              with our comprehensive digital ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300"
              >
                Start Free Trial
                <Zap className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-3 bg-transparent transform hover:scale-105 transition-all duration-300"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-6 border-t border-slate-800"
        data-animate
        id="footer"
      >
        <div className="container mx-auto">
          <div
            className={`grid md:grid-cols-4 gap-8 transition-all duration-1000 ${
              isAnimated("footer")
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                S8Globals
              </div>
              <p className="text-slate-400 mb-4">
                Your all-in-one digital ecosystem — from learning to launching.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-slate-600 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 bg-transparent"
                >
                  Twitter
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-slate-600 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 bg-transparent"
                >
                  LinkedIn
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Products</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    S8Academy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    S8Builder
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    LexiAI
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 S8Globals. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div></>
  );
}
