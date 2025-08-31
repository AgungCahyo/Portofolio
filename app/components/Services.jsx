"use client";

import React, { useEffect, useState } from 'react';
import { serviceData } from '../../assets/assets';
import Image from 'next/image';
import { assets } from '../../assets/assets';
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="services"
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-richblack via-darkgreen to-pine"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-caribbean/15 to-mountain/15 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x * 0.012 + '%',
            top: mousePosition.y * 0.012 + '%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div 
          className="absolute w-72 h-72 bg-gradient-to-r from-mint/10 to-frog/10 rounded-full blur-2xl animate-pulse"
          style={{
            right: (100 - mousePosition.x * 0.018) + '%',
            bottom: (100 - mousePosition.y * 0.018) + '%',
            transform: 'translate(50%, 50%)',
            animationDelay: '1s',
          }}
        />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-basil/8 to-forest/8 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '6s' }} />
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-32 right-24 w-28 h-28 border-2 border-caribbean rotate-45 animate-spin" style={{ animationDuration: '25s' }} />
          <div className="absolute bottom-32 left-16 w-20 h-20 border-2 border-mountain rotate-12 animate-pulse" />
          <div className="absolute top-2/3 left-1/3 w-12 h-12 bg-mint/20 rotate-45 animate-bounce" style={{ animationDuration: '4s' }} />
          <div className="absolute top-1/4 left-3/4 w-16 h-16 border border-frog rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-caribbean/30 rounded-full animate-pulse"
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: (2 + Math.random() * 3) + 's',
              }}
            />
          ))}
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-caribbean) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-[8%] xl:px-[12%] py-24 scroll-mt-20">
        {/* Enhanced Heading */}
        <div className="text-center mb-20">
          <div
            data-aos="zoom-out"
            className="inline-flex items-center justify-center px-6 py-3 bg-darkgreen/40 backdrop-blur-sm border border-caribbean/20 rounded-full mb-8"
          >
            <h4 className="text-sm font-outfit font-bold text-caribbean uppercase tracking-widest">
              What I Offer
            </h4>
          </div>
          
          <h2
            data-aos="zoom-in"
            className="text-5xl sm:text-6xl lg:text-7xl font-ovo font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-caribbean via-mountain to-mint bg-clip-text text-transparent">
              My
            </span>{" "}
            <span className="bg-gradient-to-r from-mint via-frog to-caribbean bg-clip-text text-transparent relative">
              Services
              <div className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-caribbean to-mountain rounded-full opacity-50" />
            </span>
          </h2>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="max-w-4xl mx-auto"
          >
            <div className="bg-darkgreen/30 backdrop-blur-sm border border-caribbean/20 rounded-3xl p-8 shadow-lg">
              <p className="text-xl lg:text-2xl text-antiflash/90 leading-relaxed font-outfit">
                Saya membantu bisnis kuliner & hospitality menyusun sistem menu yang
                efisien, menghadirkan visual selaras dengan identitas merek, serta
                menulis konten yang bukan hanya menjual, tapi juga{" "}
                <span className="bg-gradient-to-r from-caribbean to-mountain bg-clip-text text-transparent font-semibold">
                  menyentuh
                </span>.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {serviceData.map(({ icon, title, description, link }, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group relative bg-darkgreen/40 backdrop-blur-sm border border-caribbean/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-caribbean/5 via-transparent to-mountain/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card Number */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-caribbean to-mountain rounded-full flex items-center justify-center text-richblack text-sm font-bold font-outfit opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Enhanced Icon */}
              <div className="relative w-20 h-20 mx-auto mb-8 flex items-center justify-center rounded-2xl bg-gradient-to-br from-caribbean/20 to-mountain/20 group-hover:from-caribbean/30 group-hover:to-mountain/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 border border-caribbean/10 shadow-lg">
                <Image 
                  src={icon} 
                  alt={title} 
                  width={40} 
                  height={40}
                  className="filter rounded-lg invert group-hover:scale-110 transition-transform duration-300" 
                />
                
                {/* Icon Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-caribbean/20 to-mountain/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>

              {/* Enhanced Title */}
              <h3 className="text-xl font-bold font-outfit text-antiflash mb-6 text-center group-hover:text-caribbean transition-colors duration-300 leading-tight">
                {title}
              </h3>

              {/* Enhanced Description */}
              <p className="text-antiflash/80 leading-relaxed text-center mb-8 font-outfit">
                {description}
              </p>

              {/* Enhanced Action Button */}
              <div className="text-center">
                <a
                  href={link}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-caribbean/80 to-mountain/80 hover:from-caribbean hover:to-mountain text-richblack font-semibold rounded-full transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl font-outfit"
                >
                  <span>Read More</span>
                  <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                    <Image
                      src={assets.right_arrow}
                      alt="arrow"
                      width={16}
                      height={16}
                      className="filter brightness-0"
                    />
                  </div>
                </a>
              </div>

              {/* Border Glow Effect */}
              <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-caribbean/20 via-transparent to-mountain/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-full h-full rounded-3xl bg-darkgreen/40"></div>
              </div>

              {/* Hover Particle Effect */}
              {hoveredCard === index && (
                <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-caribbean rounded-full animate-ping"
                      style={{
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                        animationDelay: Math.random() * 2 + 's',
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20">
          <div
            data-aos="fade-up"
            data-aos-delay="800"
            className="inline-flex items-center justify-center gap-4"
          >
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-caribbean to-mountain rounded-full animate-pulse"
                style={{ animationDelay: i * 0.2 + 's' }}
              />
            ))}
          </div>
        </div>

        {/* Side Decorative Elements */}
        <div className="absolute bottom-8 left-8 opacity-20">
          <div className="flex flex-col gap-2">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i}
                className="w-16 h-1 bg-gradient-to-r from-caribbean to-transparent animate-pulse"
                style={{ animationDelay: i * 0.3 + 's' }}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 right-8 opacity-20">
          <div className="grid grid-cols-2 gap-2">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i}
                className="w-3 h-3 bg-caribbean rounded-full animate-bounce"
                style={{ 
                  animationDelay: i * 0.2 + 's',
                  animationDuration: '2s'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Fade Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-richblack to-transparent pointer-events-none" />
    </section>
  );
};

export default Services;