"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import Aos from "aos";

const Header = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-richblack via-darkgreen to-pine"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-caribbean/20 to-mountain/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x * 0.02 + "%",
            top: mousePosition.y * 0.02 + "%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute w-72 h-72 bg-gradient-to-r from-mint/15 to-frog/15 rounded-full blur-2xl animate-pulse"
          style={{
            right: 100 - mousePosition.x * 0.03 + "%",
            bottom: 100 - mousePosition.y * 0.03 + "%",
            transform: "translate(50%, 50%)",
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-basil/10 to-forest/10 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: "6s" }}
        />

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-20 right-20 w-32 h-32 border-2 border-caribbean rotate-45 animate-spin"
            style={{ animationDuration: "20s" }}
          />
          <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-mountain rotate-12 animate-pulse" />
          <div
            className="absolute top-1/2 right-1/3 w-16 h-16 bg-mint/20 rotate-45 animate-bounce"
            style={{ animationDuration: "4s" }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-caribbean/30 rounded-full animate-pulse"
              style={{
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animationDelay: Math.random() * 5 + "s",
                animationDuration: 2 + Math.random() * 3 + "s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 min-h-screen flex flex-col items-center justify-center">
        {/* Profile Section */}
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="mb-8 relative"
        >
          <div className="relative group">
            {/* Glowing Ring */}
            <div className="absolute inset-0 w-36 h-36 bg-gradient-to-r from-caribbean to-mountain rounded-full blur-md opacity-75 animate-pulse group-hover:opacity-100 transition-opacity duration-500" />

            {/* Profile Image */}
            <div className="relative mt-12 w-32 h-32 mx-auto">
              <Image
                src={assets.profile_img}
                alt="Profile"
                fill
                className="rounded-full object-cover border-4 border-antiflash/20 shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Status Indicator */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-success to-mountain rounded-full border-4 border-richblack flex items-center justify-center animate-pulse">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
          </div>
        </div>

        {/* Greeting Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mb-8 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-darkgreen/40 backdrop-blur-sm border border-caribbean/20 rounded-full mb-6">
            <h3 className="text-lg md:text-xl font-outfit text-antiflash font-medium">
              Hi! I'm Agung Cahyo Prasetyo
            </h3>
            <div className="animate-bounce">
              <Image
                src={assets.hand_icon}
                alt="wave hand"
                width={24}
                height={24}
                className="filter brightness-0 invert"
              />
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mb-8 text-center px-4 sm:px-8 md:px-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-ovo leading-tight">
            <span className="block bg-gradient-to-r from-caribbean via-mountain to-mint bg-clip-text text-transparent font-bold">
              Merangkai Kata.
            </span>
            <span className="block bg-gradient-to-r from-mint via-frog to-caribbean bg-clip-text text-transparent font-bold mt-2">
              Menata Rasa.
            </span>
            <span className="block bg-gradient-to-r from-mountain via-caribbean to-mint bg-clip-text text-transparent font-bold mt-2">
              Merancang Sistem.
            </span>
          </h1>
        </div>

        {/* Description */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mb-12 text-center px-4 sm:px-8 md:px-16"
        >
          <div className="max-w-4xl mx-auto bg-darkgreen/30 backdrop-blur-sm border border-caribbean/20 rounded-3xl p-8">
            <p className="text-lg md:text-xl font-outfit text-antiflash/90 leading-relaxed">
              Menulis untuk mereka yang kelelahan dalam sunyi. Merancang desain
              yang jujur dan fungsional. Membangun sistem sederhana yang bisa
              bekerja dalam diam.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col sm:flex-row items-center gap-6 mb-8"
        >
          {/* Contact Button */}
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-caribbean to-mountain rounded-full overflow-hidden shadow-2xl hover:shadow-caribbean/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-mountain to-caribbean opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center gap-3 text-richblack font-outfit font-semibold text-lg">
              <span>Contact Me</span>
              <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                <Image
                  src={assets.right_arrow_bold_dark}
                  alt="arrow"
                  width={16}
                  height={16}
                />
              </div>
            </div>
          </a>

          {/* Resume Button */}
          <a
            href="/Agung_Cahyo_Prasetyo.pdf"
            download
            className="group px-8 py-4 bg-transparent border-2 border-caribbean/60 hover:border-caribbean rounded-full backdrop-blur-sm transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 hover:bg-caribbean/10"
          >
            <div className="flex items-center gap-3 text-caribbean group-hover:text-antiflash font-outfit font-semibold text-lg transition-colors duration-300">
              <span>My Resume</span>
              <div className="transform group-hover:rotate-12 transition-transform duration-300">
                <Image
                  src={assets.download_icon}
                  alt="download"
                  width={16}
                  height={16}
                  className="filter brightness-0 invert"
                />
              </div>
            </div>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div data-aos="fade-up" data-aos-delay="1000" className="relative">
          <a
            href="#about"
            className="group flex flex-col items-center gap-3 text-caribbean hover:text-mountain transition-colors duration-300"
          >
            <span className="font-outfit font-medium tracking-wider text-sm uppercase">
              Explore More
            </span>

            {/* Animated Scroll Arrow */}
            <div className="relative">
              <div className="w-8 h-12 border-2 border-caribbean/60 group-hover:border-mountain rounded-full flex justify-center transition-colors duration-300">
                <div className="w-1 h-3 bg-caribbean group-hover:bg-mountain rounded-full mt-2 animate-bounce transition-colors duration-300" />
              </div>
            </div>
          </a>
        </div>

        {/* Decorative Bottom Elements */}
        <div className="absolute bottom-8 left-8 opacity-20">
          <div className="flex flex-col gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-12 h-1 bg-gradient-to-r from-caribbean to-transparent animate-pulse"
                style={{ animationDelay: i * 0.2 + "s" }}
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
                style={{ animationDelay: i * 0.3 + "s" }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Fade Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-richblack to-transparent pointer-events-none" />
    </div>
  );
};

export default Header;
