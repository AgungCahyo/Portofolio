"use client";

import React, { useEffect, useState } from "react";
import { serviceDetailData } from "../../../assets/services_data";
import Image from "next/image";
import { 
  ArrowLeft, 
  CheckCircle, 
  Target, 
  Users, 
  Sparkles,
  Eye,
  MessageCircle 
} from "lucide-react";

export default function ServiceDetailPage({ params }) {
  const [slug, setSlug] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Handle async params
    const getSlug = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    };
    getSlug();

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [params]);

  if (!slug) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-richblack via-darkgreen to-pine flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 border-4 border-caribbean border-t-transparent rounded-full animate-spin" />
          <p className="text-antiflash font-outfit">Loading...</p>
        </div>
      </div>
    );
  }

  const service = serviceDetailData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-richblack via-darkgreen to-pine flex items-center justify-center px-6">
        <div className="text-center space-y-6">
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-caribbean to-mountain rounded-full flex items-center justify-center">
            <Eye className="w-12 h-12 text-richblack" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-caribbean to-mountain bg-clip-text text-transparent font-ovo">
            Service Not Found
          </h1>
          <p className="text-antiflash/80 font-outfit">
  The service you&apos;re looking for doesn&apos;t exist or has been moved.
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

      <div className="relative z-10 max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 bg-darkgreen/40 backdrop-blur-sm border border-caribbean/20 rounded-full text-antiflash hover:text-caribbean hover:border-caribbean/40 transition-all duration-300 hover:shadow-lg group font-outfit"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Services
          </button>
        </div>

        {/* Hero Section */}
        <div className="space-y-8 mb-16">
          {/* Hero Image */}
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src={service.image} 
              alt={service.title} 
              width={1200} 
              height={600}
              className="w-full h-96 md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-richblack/80 via-richblack/20 to-transparent opacity-60" />
            
            {/* Overlay Content */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-darkgreen/40 backdrop-blur-sm border border-caribbean/20 rounded-2xl p-6">
                <h1 className="text-4xl md:text-6xl font-bold font-ovo mb-4">
                  <span className="bg-gradient-to-r from-caribbean via-mountain to-mint bg-clip-text text-transparent">
                    {service.title}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-antiflash/90 font-outfit italic">
                  {service.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <div className="bg-darkgreen/30 backdrop-blur-sm border border-caribbean/20 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-caribbean to-mountain rounded-full flex items-center justify-center">
                  <Eye className="w-5 h-5 text-richblack" />
                </div>
                <h2 className="text-2xl font-bold text-antiflash font-outfit">Overview</h2>
              </div>
              <p className="text-lg text-antiflash/90 leading-relaxed font-outfit whitespace-pre-line">
                {service.longDescription}
              </p>
            </div>

            {/* Benefits Section */}
            <div className="bg-darkgreen/30 backdrop-blur-sm border border-caribbean/20 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-caribbean to-mountain rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-richblack" />
                </div>
                <h2 className="text-2xl font-bold text-antiflash font-outfit">Benefits</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="group flex items-start gap-4 p-4 bg-pine/30 rounded-xl hover:bg-pine/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-caribbean to-mountain rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="w-4 h-4 text-richblack" />
                    </div>
                    <span className="text-antiflash/90 font-outfit group-hover:text-antiflash transition-colors duration-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scope of Work */}
            <div className="bg-darkgreen/30 backdrop-blur-sm border border-caribbean/20 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-mountain to-mint rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-richblack" />
                </div>
                <h2 className="text-2xl font-bold text-antiflash font-outfit">Scope of Work</h2>
              </div>
              
              <div className="space-y-4">
                {service.scopeOfWork.map((scope, index) => (
                  <div 
                    key={index} 
                    className="group flex items-start gap-4 p-4 bg-pine/30 rounded-xl hover:bg-pine/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-mountain to-mint rounded-full flex items-center justify-center">
                      <span className="text-richblack text-sm font-bold font-outfit">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-antiflash/90 font-outfit group-hover:text-antiflash transition-colors duration-300">
                      {scope}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Target Audience */}
            <div className="bg-darkgreen/40 backdrop-blur-sm border border-caribbean/20 rounded-3xl p-6 shadow-xl sticky top-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-mint to-frog rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-richblack" />
                </div>
                <h2 className="text-xl font-bold text-antiflash font-outfit">Perfect For</h2>
              </div>
              
              <div className="space-y-3">
                {service.targetAudience.map((audience, index) => (
                  <div 
                    key={index} 
                    className="group flex items-center gap-3 p-3 bg-pine/30 rounded-lg hover:bg-pine/50 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-mint to-frog rounded-full group-hover:scale-150 transition-transform duration-300" />
                    <span className="text-antiflash/90 font-outfit text-sm group-hover:text-antiflash transition-colors duration-300">
                      {audience}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-caribbean/20 to-mountain/20 backdrop-blur-sm border border-caribbean/30 rounded-3xl p-6 shadow-xl">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-caribbean to-mountain rounded-full flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-richblack" />
                </div>
                <h3 className="text-xl font-bold text-antiflash font-outfit">Ready to Start?</h3>
<p className="text-antiflash/80 font-outfit text-sm">
  Let&apos;s discuss your project and see how this service can help you achieve your goals.
</p>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-caribbean to-mountain hover:from-mountain hover:to-mint text-richblack font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-outfit"
                >
                  <MessageCircle className="w-4 h-4" />
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Section */}
        {service.closing && (
          <div className="mt-16">
            <div className="bg-gradient-to-r from-darkgreen/40 via-pine/40 to-darkgreen/40 backdrop-blur-sm border border-caribbean/20 rounded-3xl p-8 md:p-12 shadow-xl text-center">
              <div className="max-w-4xl mx-auto">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-caribbean to-mountain rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-richblack" />
                </div>
                <p className="text-xl md:text-2xl text-antiflash/90 leading-relaxed font-outfit italic whitespace-pre-line">
                  {service.closing}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Decorative */}
        <div className="flex justify-center mt-16">
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
      </div>
    </div>
  );
}