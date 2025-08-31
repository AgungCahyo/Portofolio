"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { assets, infoList, toolsData } from "../../assets/assets";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [hoveredTool, setHoveredTool] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
      id="about"
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-richblack via-darkgreen to-pine"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-caribbean/15 to-mountain/15 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x * 0.015 + '%',
            top: mousePosition.y * 0.015 + '%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div 
          className="absolute w-72 h-72 bg-gradient-to-r from-mint/10 to-frog/10 rounded-full blur-2xl animate-pulse"
          style={{
            right: (100 - mousePosition.x * 0.02) + '%',
            bottom: (100 - mousePosition.y * 0.02) + '%',
            transform: 'translate(50%, 50%)',
            animationDelay: '1s',
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-basil/8 to-forest/8 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '6s' }} />
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 border-2 border-caribbean rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-mountain rotate-12 animate-pulse" />
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-mint/20 rotate-45 animate-bounce" style={{ animationDuration: '4s' }} />
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
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
            <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: `linear-gradient(var(--color-caribbean) 1px, transparent 1px), linear-gradient(90deg, var(--color-caribbean) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
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
              Introduction
            </h4>
          </div>
          
          <h2
            data-aos="zoom-in"
            className="text-5xl sm:text-6xl lg:text-7xl font-ovo font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-caribbean via-mountain to-mint bg-clip-text text-transparent">
              About
            </span>{" "}
            <span className="bg-gradient-to-r from-mint via-frog to-caribbean bg-clip-text text-transparent relative">
              Me
              <div className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-caribbean to-mountain rounded-full opacity-50" />
            </span>
          </h2>
        </div>

        <div className="flex flex-col  items-center gap-16 xl:gap-24">
          {/* Enhanced Profile Image */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="relative group"
          >
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-caribbean/20 via-mountain/15 to-mint/20 rounded-[3rem] blur-2xl scale-110 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* Image Container */}
            <div className="relative w-72 sm:w-80 lg:w-96 aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-caribbean/20 backdrop-blur-sm">
              <Image
                src={assets.profile_img}
                alt="Profile Image"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-richblack/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-caribbean to-mountain rounded-full flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-8 h-8 bg-richblack rounded-full" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-mint to-frog rounded-full animate-pulse" />

            {/* Status Indicator */}
            <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-r from-success to-mountain rounded-full border-4 border-richblack flex items-center justify-center animate-pulse">
              <div className="w-3 h-3 bg-antiflash rounded-full" />
            </div>
          </div>

          {/* Enhanced Content */}
          <div className="flex-1 text-center xl:text-left max-w-4xl">
            {/* Description */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="mb-16"
            >
              <div className="relative bg-darkgreen/30 backdrop-blur-sm border border-caribbean/20 rounded-3xl p-8 shadow-lg">
                <p className="text-xl lg:text-2xl text-antiflash/90 leading-relaxed font-outfit">
                  Saya bergerak di ruang antara rasa, bentuk, dan makna. Menyusun
                  sistem, merancang pengalaman, dan menulis cerita di baliknya. Fokus
                  saya ada pada detail kecil yang menyatukan{" "}
                  <span className="bg-gradient-to-r from-caribbean to-mountain bg-clip-text text-transparent font-semibold">
                    kreativitas
                  </span>,{" "}
                  <span className="bg-gradient-to-r from-mountain to-mint bg-clip-text text-transparent font-semibold">
                    keramahan
                  </span>, dan{" "}
                  <span className="bg-gradient-to-r from-mint to-frog bg-clip-text text-transparent font-semibold">
                    ketepatan
                  </span>.
                </p>
              </div>
            </div>

            {/* Enhanced Info List */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mb-16"
            >
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {infoList.map(({ icon, title, description }, index) => (
                  <li
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                    className="group relative bg-darkgreen/40 backdrop-blur-sm border border-caribbean/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
                  >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-caribbean/5 via-transparent to-mountain/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon */}
                    <div className="relative w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-caribbean/20 to-mountain/20 group-hover:from-caribbean/30 group-hover:to-mountain/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 border border-caribbean/10">
                      <Image src={icon} alt={title} width={32} height={32} className="filter brightness-0 invert" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-xl font-bold font-outfit text-antiflash mb-4 group-hover:text-caribbean transition-colors duration-300">
                        {title}
                      </h3>
                      <p className="text-antiflash/80 leading-relaxed font-outfit">
                        {description}
                      </p>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-caribbean to-mountain rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Border Glow */}
                    <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-caribbean/20 via-transparent to-mountain/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-full h-full rounded-2xl bg-darkgreen/40"></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced Tools Section */}
            <div
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="text-center xl:text-left mb-10">
                <h4 className="text-2xl font-bold font-outfit text-antiflash mb-2">
                  Tools I Use
                </h4>
                <div className="w-24 h-1 bg-gradient-to-r from-caribbean to-mountain rounded-full mx-auto xl:mx-0" />
              </div>

              <div className="relative bg-darkgreen/30 backdrop-blur-sm border border-caribbean/20 rounded-3xl p-8 shadow-lg">
                <ul className="flex flex-wrap justify-center xl:justify-start gap-6">
                  {toolsData.map(({ name, icon }, index) => (
                    <li
                      key={index}
                      data-aos="zoom-in"
                      data-aos-delay={700 + index * 50}
                      className="group relative"
                      onMouseEnter={() => setHoveredTool(index)}
                      onMouseLeave={() => setHoveredTool(null)}
                    >
                      <div className="flex items-center justify-center w-16 sm:w-20 aspect-square bg-pine/60 backdrop-blur-sm border-2 border-caribbean/30 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 group-hover:border-caribbean/60 group-hover:bg-darkgreen/60">
                        <Image 
                          src={icon} 
                          alt={name} 
                          width={32} 
                          height={32}
                          className="transition-transform duration-300 group-hover:scale-110 " 
                        />
                      </div>
                      
                      {/* Enhanced Tooltip */}
                      <div className={`absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                        hoveredTool === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}>
                        <div className="bg-caribbean text-richblack px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap shadow-xl border border-mountain/30 font-outfit">
                          {name}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-caribbean" />
                        </div>
                      </div>

                      {/* Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r from-caribbean/20 to-mountain/20 rounded-2xl blur-md transition-opacity duration-300 -z-10 ${
                        hoveredTool === index ? 'opacity-100' : 'opacity-0'
                      }`} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="flex justify-center mt-20">
          <div className="flex gap-4">
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
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className="w-12 h-1 bg-gradient-to-r from-caribbean to-transparent animate-pulse"
                style={{ animationDelay: i * 0.2 + 's' }}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 right-8 opacity-20">
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className="w-3 h-3 bg-caribbean rounded-full animate-bounce"
                style={{ animationDelay: i * 0.3 + 's' }}
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

export default About;