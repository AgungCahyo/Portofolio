"use client"

import React, { useState, useEffect } from "react";
import { workDetails } from "../../../assets/project_data";
import Image from "next/image";
import { 
  Calendar, 
  ExternalLink, 
  Clock, 
  ArrowLeft, 
  Lightbulb,
  Zap,
  Eye,
  X
} from "lucide-react";

export default function ProjectDetailPage({ params }) {
  const { slug } = React.use(params);
  const work = workDetails.find((s) => s.slug === slug);
  const [selectedImage, setSelectedImage] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!work) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-richblack via-darkgreen to-pine flex items-center justify-center px-6">
        <div className="text-center space-y-6">
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-caribbean to-mountain rounded-full flex items-center justify-center">
            <Eye className="w-12 h-12 text-richblack" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-caribbean via-mountain to-mint bg-clip-text text-transparent font-ovo">
            Project Not Found
          </h1>
          <p className="text-antiflash/80 font-outfit">
            The project you're looking for doesn't exist or has been moved.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-richblack via-darkgreen to-pine overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Back Button */}
        <div className="pt-8">
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 bg-darkgreen/40 backdrop-blur-sm border border-caribbean/20 rounded-full text-antiflash hover:text-caribbean hover:border-caribbean/40 transition-all duration-300 hover:shadow-lg group font-outfit"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </button>
        </div>

        {/* Enhanced Header */}
        <div className="text-center space-y-8 pt-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-black font-ovo leading-tight">
              <span className="bg-gradient-to-r from-caribbean via-mountain to-mint bg-clip-text text-transparent">
                {work.title}
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-light text-caribbean font-outfit">
              {work.subtitle}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-darkgreen/30 backdrop-blur-sm border border-caribbean/20 rounded-3xl p-8 shadow-lg">
              <p className="text-xl text-antiflash/90 leading-relaxed font-outfit">
                {work.description}
              </p>
            </div>
          </div>

          {/* Project Meta Info */}
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <div className="flex items-center space-x-2 px-6 py-3 bg-darkgreen/40 backdrop-blur-sm rounded-full border border-caribbean/20">
              <Calendar className="w-5 h-5 text-caribbean" />
              <span className="text-antiflash font-medium font-outfit">{work.year}</span>
            </div>
            <div className="flex items-center space-x-2 px-6 py-3 bg-darkgreen/40 backdrop-blur-sm rounded-full border border-caribbean/20">
              <Clock className="w-5 h-5 text-mountain" />
              <span className="text-antiflash font-medium font-outfit">{work.status}</span>
            </div>
          </div>
        </div>

        {/* Enhanced Tags */}
        <div className="flex flex-wrap justify-center gap-4">
          {work.tags.map((tag, index) => (
            <span
              key={index}
              className="px-6 py-3 bg-gradient-to-r from-caribbean/20 to-mountain/20 backdrop-blur-sm border border-caribbean/30 rounded-full text-caribbean font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-outfit"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Enhanced Process Section */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-caribbean to-mountain text-richblack rounded-full shadow-xl mb-8">
              <Zap className="w-6 h-6" />
              <h2 className="text-3xl font-bold font-ovo">Process</h2>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {work.process.map((step, index) => (
              <div
                key={index}
                className="group bg-darkgreen/40 backdrop-blur-sm rounded-3xl shadow-2xl border border-caribbean/20 overflow-hidden hover:shadow-caribbean/10 transition-all duration-500 hover:-translate-y-4"
              >
                {step.image && (
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-richblack/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-caribbean to-mountain rounded-full flex items-center justify-center text-richblack text-lg font-bold shadow-xl font-outfit">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-antiflash mb-4 group-hover:text-caribbean transition-colors font-outfit">
                    {step.title}
                  </h3>
                  <p className="text-antiflash/80 leading-relaxed text-lg font-outfit">
                    {step.content}
                  </p>
                </div>

                {/* Border Glow Effect */}
                <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-caribbean/20 via-transparent to-mountain/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full rounded-3xl bg-darkgreen/40"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Reflection */}
        <div className="relative">
          <div className="bg-gradient-to-br from-caribbean/10 to-mountain/10 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border border-caribbean/30">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-caribbean to-mountain rounded-full flex items-center justify-center shadow-xl">
                <Lightbulb className="w-8 h-8 text-richblack" />
              </div>
              <h3 className="text-4xl font-bold text-antiflash font-ovo">Refleksi</h3>
            </div>
            <p className="text-xl text-antiflash/90 leading-relaxed font-outfit">
              {work.reflection}
            </p>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        {work.landingPage && (
          <div className="text-center">
            <a
              href={work.landingPage}
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-caribbean to-mountain hover:from-mountain hover:to-mint text-richblack font-bold text-xl rounded-full shadow-2xl hover:shadow-caribbean/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group font-outfit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-4">View Live Project</span>
              <ExternalLink className="w-7 h-7 transition-transform group-hover:translate-x-2 group-hover:-translate-y-1" />
            </a>
          </div>
        )}

        {/* Enhanced Gallery */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-5xl font-bold font-ovo mb-6">
              <span className="bg-gradient-to-r from-caribbean via-mountain to-mint bg-clip-text text-transparent">
                Project Gallery
              </span>
            </h3>
            <p className="text-antiflash/80 text-xl font-outfit">
              Explore the visual journey of this project
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {work.images.map((src, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-richblack/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-caribbean to-mountain rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-richblack" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Decorative */}
        <div className="flex justify-center">
          <div className="flex gap-4">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-caribbean to-mountain rounded-full animate-pulse"
                style={{ animationDelay: i * 0.15 + 's' }}
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
                style={{ animationDelay: i * 0.25 + 's' }}
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

      {/* Enhanced Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-richblack/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-full">
            <Image
              src={selectedImage}
              alt="Full size"
              width={1400}
              height={900}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-caribbean/20"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-caribbean to-mountain hover:from-mountain hover:to-mint rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <X className="w-6 h-6 text-richblack" />
            </button>
          </div>
        </div>
      )}

      {/* Bottom Fade Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-richblack to-transparent pointer-events-none" />
    </div>
  );
}