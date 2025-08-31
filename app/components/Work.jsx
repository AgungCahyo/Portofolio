"use client";

import React, { useEffect, useState } from "react";
import { workData } from "../../assets/assets";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";

const Work = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState(null);

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
      id="work"
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-richblack via-darkgreen to-pine"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-caribbean/15 to-mountain/15 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x * 0.01 + '%',
            top: mousePosition.y * 0.01 + '%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div 
          className="absolute w-72 h-72 bg-gradient-to-r from-mint/10 to-frog/10 rounded-full blur-2xl animate-pulse"
          style={{
            right: (100 - mousePosition.x * 0.015) + '%',
            bottom: (100 - mousePosition.y * 0.015) + '%',
            transform: 'translate(50%, 50%)',
            animationDelay: '1s',
          }}
        />
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-basil/8 to-forest/8 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '6s' }} />
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-24 right-32 w-24 h-24 border-2 border-caribbean rotate-45 animate-spin" style={{ animationDuration: '30s' }} />
          <div className="absolute bottom-24 left-24 w-16 h-16 border-2 border-mountain rotate-12 animate-pulse" />
          <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-mint/20 rotate-45 animate-bounce" style={{ animationDuration: '4s' }} />
          <div className="absolute top-3/4 left-1/2 w-20 h-20 border border-frog rounded-full animate-ping" style={{ animationDuration: '4s' }} />
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(18)].map((_, i) => (
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

        {/* Mesh Pattern */}
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
              Portfolio
            </h4>
          </div>
          
          <h2
            data-aos="zoom-in"
            className="text-5xl sm:text-6xl lg:text-7xl font-ovo font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-caribbean via-mountain to-mint bg-clip-text text-transparent">
              Selected
            </span>{" "}
            <span className="bg-gradient-to-r from-mint via-frog to-caribbean bg-clip-text text-transparent relative">
              Works
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
                Proyek-proyek pribadi yang lahir dari{" "}
                <span className="bg-gradient-to-r from-caribbean to-mountain bg-clip-text text-transparent font-semibold">
                  keingintahuan
                </span>,{" "}
                <span className="bg-gradient-to-r from-mountain to-mint bg-clip-text text-transparent font-semibold">
                  eksplorasi
                </span>, dan
                pengalaman langsung di lapangan.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {workData.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group relative bg-darkgreen/40 backdrop-blur-sm border border-caribbean/20 rounded-3xl shadow-2xl hover:shadow-caribbean/10 transition-all duration-500 hover:-translate-y-6 overflow-hidden"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Enhanced Image Section */}
              <div className="relative h-64 w-full overflow-hidden rounded-t-3xl">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.bgImage})` }}
                />
                
                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-richblack/80 via-richblack/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Number */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-caribbean to-mountain rounded-full flex items-center justify-center text-richblack text-lg font-bold font-outfit shadow-xl">
                  {String(index + 1).padStart(2, '0')}
                </div>

             

                {/* Status Badge */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="px-4 py-2 bg-darkgreen/80 backdrop-blur-sm border border-caribbean/30 rounded-full">
                    <span className="text-caribbean text-sm font-semibold font-outfit">Featured</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold font-outfit text-antiflash mb-4 group-hover:text-caribbean transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-antiflash/80 leading-relaxed mb-8 font-outfit line-clamp-3">
                  {project.description}
                </p>

                {/* Enhanced CTA */}
                <Link
                  href={project.link}
                  prefetch={false}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-caribbean/80 to-mountain/80 hover:from-caribbean hover:to-mountain text-richblack font-semibold rounded-full transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl font-outfit group/btn"
                >
                  <span>View Project</span>
                  <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>

              {/* Border Glow Effect */}
              <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-caribbean/20 via-transparent to-mountain/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-full h-full rounded-3xl bg-darkgreen/40"></div>
              </div>

              {/* Hover Particle Effect */}
              {hoveredProject === index && (
                <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                  {[...Array(10)].map((_, i) => (
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

        {/* Enhanced CTA Section */}
        <div className="text-center mt-20">
          <div
            data-aos="fade-up"
            data-aos-delay="800"
            className="space-y-8"
          >
            <Link
              href="#"
              className="group inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-caribbean to-mountain hover:from-mountain hover:to-mint text-richblack font-bold text-lg rounded-full shadow-2xl hover:shadow-caribbean/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 font-outfit"
            >
              <span>Explore More Projects</span>
              <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>

            {/* Bottom Decorative */}
            <div className="flex justify-center gap-4 mt-12">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-gradient-to-r from-caribbean to-mountain rounded-full animate-pulse"
                  style={{ animationDelay: i * 0.15 + 's' }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Side Decorative Elements */}
        <div className="absolute bottom-8 left-8 opacity-20">
          <div className="flex flex-col gap-2">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="w-20 h-1 bg-gradient-to-r from-caribbean to-transparent animate-pulse"
                style={{ animationDelay: i * 0.25 + 's' }}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 right-8 opacity-20">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div 
                key={i}
                className="w-2 h-2 bg-caribbean rounded-full animate-bounce"
                style={{ 
                  animationDelay: i * 0.1 + 's',
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

export default Work;