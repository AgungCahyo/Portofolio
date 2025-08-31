"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { Mail, Github, Linkedin, MessageCircle, Heart, ArrowUp, Book } from "lucide-react";

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: "Github", icon: Github, href: "https://github.com/AgungCahyo" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/agung-cahyo-prasetyo/" },
    { name: "Thread", icon: MessageCircle, href: "https://www.threads.com/@frasa.teduh" },
    { name: "Medium", icon: Book, href: "https://medium.com/@agung-cahyo"}
  ];

  return (
    <footer className="relative w-full bg-gradient-to-br from-richblack via-darkgreen to-pine py-20 px-4 sm:px-6 lg:px-[8%] xl:px-[12%] text-antiflash overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mouse-tracking orb */}
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-caribbean/10 to-mountain/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x * 0.008 + '%',
            top: mousePosition.y * 0.008 + '%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-8 left-10 w-32 h-32 border-2 border-caribbean/20 rotate-12 animate-spin" style={{ animationDuration: '25s' }} />
          <div className="absolute bottom-12 right-20 w-24 h-24 border-2 border-mountain/20 rotate-45 animate-pulse" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-mint/20 rotate-12 animate-bounce" style={{ animationDuration: '4s' }} />
          <div className="absolute top-3/4 right-1/3 w-20 h-20 border border-frog/20 rounded-full animate-ping" style={{ animationDuration: '5s' }} />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-caribbean/20 rounded-full animate-pulse"
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: (3 + Math.random() * 4) + 's',
              }}
            />
          ))}
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-caribbean) 1px, transparent 0)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col items-center gap-12">
          {/* Enhanced Logo Section */}
          <div className="text-center space-y-6">
            <div className="relative group">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-caribbean/20 to-mountain/20 rounded-full blur-2xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <Image 
                  src={assets.logo} 
                  alt="logo" 
                  width={160}
                  height={60}
                  className="transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
            </div>

            {/* Tagline */}
            <p className="text-lg text-antiflash/80 font-outfit max-w-md mx-auto leading-relaxed">
              Crafting digital experiences with{" "}
              <span className="bg-gradient-to-r from-caribbean to-mountain bg-clip-text text-transparent font-semibold">
                passion
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-mountain to-mint bg-clip-text text-transparent font-semibold">
                precision
              </span>
            </p>
          </div>

          {/* Enhanced Contact Section */}
          <div className="bg-darkgreen/30 backdrop-blur-sm border border-caribbean/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-caribbean to-mountain rounded-full flex items-center justify-center shadow-lg">
                <Mail className="w-6 h-6 text-richblack" />
              </div>
              <div>
                <p className="text-sm text-antiflash/60 font-outfit uppercase tracking-wider">Get in Touch</p>
                <a 
                  href="mailto:cahyoprasetyo507@gmail.com"
                  className="text-antiflash font-outfit font-medium hover:text-caribbean transition-colors duration-300"
                >
                  cahyoprasetyo507@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Divider */}
          <div className="w-full max-w-md relative">
            <div className="h-px bg-gradient-to-r from-transparent via-caribbean/50 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-caribbean to-mountain rounded-full"></div>
          </div>

          {/* Enhanced Social Links */}
          <div className="text-center space-y-6">
            <p className="text-antiflash/80 font-outfit text-lg">Let's Connect</p>
            <div className="flex justify-center gap-6">
              {socialLinks.map(({ name, icon: Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="w-14 h-14 bg-darkgreen/40 backdrop-blur-sm border border-caribbean/20 rounded-full flex items-center justify-center hover:border-caribbean/60 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    <Icon className="w-6 h-6 text-caribbean group-hover:text-antiflash transition-colors duration-300" />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-caribbean text-richblack px-3 py-1 rounded-lg text-sm font-semibold whitespace-nowrap shadow-xl font-outfit">
                      {name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-caribbean" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-caribbean/20">
            <p className="text-antiflash/60 font-outfit text-sm flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-caribbean fill-current animate-pulse" /> by Agung Cahyo Prasetyo
            </p>
            <p className="text-antiflash/40 font-outfit text-xs mt-2">
              © 2024 All rights reserved.
            </p>
          </div>
        </div>

        {/* Enhanced Bottom Decorative Elements */}
        <div className="absolute bottom-8 left-8 opacity-20 pointer-events-none">
          <div className="flex gap-3">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 bg-caribbean rounded-full animate-bounce"
                style={{ 
                  animationDelay: i * 0.2 + "s",
                  animationDuration: '2s' 
                }}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 right-8 opacity-20 pointer-events-none">
          <div className="flex flex-col gap-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-16 h-1 bg-gradient-to-r from-caribbean to-transparent animate-pulse"
                style={{ animationDelay: i * 0.3 + "s" }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-20 w-14 h-14 bg-gradient-to-r from-caribbean to-mountain hover:from-mountain hover:to-mint text-richblack rounded-full flex items-center justify-center shadow-2xl hover:shadow-caribbean/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
};

export default Footer;