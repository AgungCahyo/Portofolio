"use client";

import { React, useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";
import Link from "next/link";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "My Work", href: "/#work" },
  { label: "Contact Me", href: "/#contact" },
];

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <div>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 bg-dark dark:bg-black/50 backdrop-blur-2xl shadow-sm
        `}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            src={assets.logo}
            alt="Logo"
            className="w-28 dark:hidden cursor-pointer mr-14"
          />
          <Image
            src={assets.logo_dark}
            alt="Logo"
            className="w-28 hidden dark:block cursor-pointer mr-14"
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-light dark:bg-gray-900 shadow-sm dark:opacity-80 transition-colors">
      {navItems.map((item, i) => (
        <li key={i}>
          <Link
            href={item.href}
            className="text-[#204c4b] dark:text-gray-200 hover:underline transition"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>

        {/* CTA + Theme Toggle */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button onClick={toggleTheme}>
            <Image
              src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
              alt="Moon/Sun Icon"
              className="w-6"
            />
          </button>

          {/* Contact CTA */}
          <a
            href="#contactme"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-400 dark:border-gray-600 rounded-full ml-4 text-light dark:text-gray-200"
          >
            Contact
            <Image
              src={assets.arrow_icon}
              alt="Arrow Icon"
              className="w-3 dark:hidden"
            />
            <Image
              src={assets.arrow_icon_dark}
              alt="Arrow Icon"
              className="w-3 hidden dark:block"
            />
          </a>

          {/* Hamburger */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={theme === "dark" ? assets.menu_white : assets.menu_black}
              alt="Menu Icon"
              className="w-6"
            />
          </button>
        </div>

        {/* Side Menu */}
        <ul
          className={`flex md:hidden flex-col gap-8 py-20 px-10 fixed top-0 bottom-0 w-72 z-50 h-screen bg-dark dark:bg-gray-900 shadow-2xl transition-all duration-500 ease-in-out ${
            isOpen ? "right-0" : "-right-72"
          }`}
        >
          {/* Close Button */}
          <div
            className="absolute right-6 top-6 cursor-pointer"
            onClick={closeMenu}
          >
            <Image
              src={assets.close_black}
              alt="close"
              className="w-5 dark:hidden"
            />
            <Image
              src={assets.close_white}
              alt="close"
              className="w-5 hidden dark:block"
            />
          </div>

          {/* Nav Items */}
          {[
            { href: "/", label: "Home" },
            { href: "#about", label: "About Me" },
            { href: "#services", label: "Services" },
            { href: "#work", label: "My Work" },
            { href: "#contact", label: "Contact Me" },
          ].map((item, i) => (
            <li key={i}>
              <a
                onClick={closeMenu}
                href={item.href}
                className="block text-lg font-semibold text-light dark:text-gray-200 hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}

          {/* CTA */}
          <a
            onClick={closeMenu}
            href="#contact"
            className="mt-8 block text-center px-6 py-3 border rounded-full border-light dark:border-white text-light dark:text-white hover:text-dark hover:bg-light dark:hover:bg-gray-800 transition"
          >
            Let’s Talk
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
