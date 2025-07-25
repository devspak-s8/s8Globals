"use client";

import React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Sparkles, Users, Code2, ArrowLeft } from "lucide-react";
import emailjs from "emailjs-com";
export default function Waitlist() {
  const [currentView, setCurrentView] = useState("landing");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const referralLink = "https://yourapp.com/?ref=REEFER123"; // Replace with dynamic ref if needed
  const shareReferralLink = () => {
    const message = `🚀 I just joined the S8Globals waitlist! Get early access by signing up with my link: ${referralLink}`;

    if (navigator.share) {
      navigator
        .share({
          title: "Join S8Globals 🚀",
          text: message,
          url: referralLink,
        })
        .then(() => console.log("Referral link shared successfully"))
        .catch((err) => console.error("Error sharing:", err));
    } else {
      // fallback: copy to clipboard
      navigator.clipboard.writeText(referralLink);
      alert("Referral link copied! Share it with your friends 📎");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceID = "service_ts1yckf"; // EmailJS Gmail SMTP service ID
    const adminTemplateID = "template_2wpwm7h"; // built-in admin notify template
    const userTemplateID = "template_5wy0n0q"; // built-in auto-reply template
    const publicKey = "pclh8W5lnXUuwY2UJ"; // EmailJS public key

    const adminParams = {
      to_name: "Sulayman (Admin)", // Your name or brand
      to_email: "info@s8globals.org", // Your email for admin notification
      order_number: "WAITLIST",
      order_date: new Date().toLocaleString(),
      customer_email: formData.email,
    };

    const userParams = {
      user_name: formData.name, // note: user_name not to_name
      email: formData.email, // must match {{email}} in template
    };

    try {
      // Notify admin
      await emailjs.send(serviceID, adminTemplateID, adminParams, publicKey);
      // Auto-reply user
      await emailjs.send(serviceID, userTemplateID, userParams, publicKey);

      setCurrentView("success");
    } catch (error) {
      console.error("Email send failed:", error.text || error);
      alert("Submission failed, try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Landing Page View
  if (currentView === "landing") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Floating elements for decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-40 delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse opacity-50 delay-500"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-30 delay-700"></div>
        </div>

        <div className="text-center space-y-8 z-10 animate-in fade-in-50 duration-1000">
          <div className="flex items-center justify-center space-x-4 mb-8 animate-in slide-in-from-top-8 duration-800">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-3 shadow-lg">
              <Code2 className="w-10 h-10 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                s8Globals
              </h1>
              <p className="text-gray-600">Your Innovation Agency</p>
            </div>
          </div>

          <div className="space-y-4 animate-in slide-in-from-bottom-8 duration-800 delay-200">
            <h2 className="text-4xl font-bold text-gray-900">
              Ready to Bring Your Ideas to Life?
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              S8Globals is your launchpad — empowering students, freelancers, and founders with digital tools built for learning, creating, and scaling. Join a growing ecosystem of innovation across Africa and beyond.
            </p>

          </div>

          <div className="animate-in slide-in-from-bottom-8 duration-800 delay-400">
            <Button
              onClick={() => setCurrentView("waitlist")}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Get Started
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto animate-in slide-in-from-bottom-8 duration-800 delay-600">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-purple-100 hover:bg-white/90 hover:border-purple-200 transition-all duration-300 shadow-sm hover:shadow-md">
              <h3 className="text-gray-900 font-semibold mb-2">For Creators</h3>
              <p className="text-gray-600 text-sm">
                Access design assets, templates, and branding kits to build your
                creative vision with S8Globals.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-purple-100 hover:bg-white/90 hover:border-purple-200 transition-all duration-300 shadow-sm hover:shadow-md">
              <h3 className="text-gray-900 font-semibold mb-2">
                For Developers
              </h3>
              <p className="text-gray-600 text-sm">
                Get pre-built components, AI integrations, and dev tools to
                accelerate your project timelines.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-purple-100 hover:bg-white/90 hover:border-purple-200 transition-all duration-300 shadow-sm hover:shadow-md">
              <h3 className="text-gray-900 font-semibold mb-2">
                For Legal Teams
              </h3>
              <p className="text-gray-600 text-sm">
                Automate legal research, draft documents, and get real-time
                legal insights with LexiAI — your AI-powered legal assistant.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Success View
  if (currentView === "success") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md transform animate-in zoom-in-95 duration-500">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-in zoom-in-50 duration-700 delay-200">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div className="space-y-2 animate-in slide-in-from-bottom-4 duration-700 delay-300">
                <h2 className="text-2xl font-bold text-gray-900">
                  🎉 You're on the waitlist!
                </h2>
                <p className="text-gray-600 mt-2">
                  Thanks for joining — you're officially on the list.
                </p>
              
             
                <p className="text-gray-600 mt-4">
                👇 Share it with friends on WhatsApp, Twitter, IG — and let’s build together!
                </p>

              </div>
              <div className="pt-4 space-y-3 animate-in slide-in-from-bottom-4 duration-700 delay-500">
                <Button
                  onClick={shareReferralLink}
                  variant="outline"
                  className="w-full transition-all duration-300 hover:scale-105"
                >
                   🔗 Share with Friends
                </Button>
                <Button
                  onClick={() => setCurrentView("landing")}
                  variant="ghost"
                  className="w-full transition-all duration-300 hover:scale-105"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Waitlist Form View
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Floating elements for decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-300 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-40 delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse opacity-50 delay-500"></div>
        </div>

        <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-2xl shadow-purple-100/50 transform transition-all duration-500 hover:shadow-3xl hover:shadow-purple-200/60 hover:-translate-y-1 animate-in zoom-in-95 duration-500">
          <CardHeader className="text-center space-y-4 pb-6">
            <Button
              onClick={() => setCurrentView("landing")}
              variant="ghost"
              size="sm"
              className="absolute top-4 left-4 text-gray-500 hover:text-gray-700"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back
            </Button>

            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-3">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-2">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Join s8Globals
              </CardTitle>
              <CardDescription className="text-gray-600 text-lg">
                Be the first to access our innovation ecosystem
              </CardDescription>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Users className="w-4 h-4" />
              <span>10+ innovators already joined</span>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700 transition-colors duration-200"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="h-12 border-2 border-gray-200 focus:border-purple-400 focus:ring-purple-400/20 transition-all duration-300 hover:border-gray-300 bg-white/50 backdrop-blur-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 transition-colors duration-200"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="h-12 border-2 border-gray-200 focus:border-purple-400 focus:ring-purple-400/20 transition-all duration-300 hover:border-gray-300 bg-white/50 backdrop-blur-sm"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading || !formData.name || !formData.email}
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Joining...</span>
                  </div>
                ) : (
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Join Innovation Hub
                  </span>
                )}
              </Button>
            </form>

            <div className="text-center">
              <p className="text-xs text-gray-500">
                By joining, you agree to receive updates about our products and
                launches.
                <br />
                <span className="text-purple-600 hover:text-purple-700 cursor-pointer transition-colors duration-200">
                  Unsubscribe anytime.
                </span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Subtle animation indicators */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-1 text-xs text-gray-400">
            <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-200"></div>
            <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
