"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "My Work", href: "/work" },
    { label: "Contact Me", href: "/contact" },
  ];

  return (
    <>
      {/* Sidebar */}
      <aside
  className={`fixed top-0 left-0 z-40 h-screen w-64
    bg-gradient-to-b from-richblack via-darkgreen to-pine
    shadow-xl p-6 flex flex-col justify-between
    transform transition-transform duration-500
    ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
  `}
>

        {/* Logo */}
        <div>
          <Link href="/" className="block mb-12">
            <Image src={assets.logo} alt="Logo" className="w-40 cursor-pointer" />
          </Link>

          {/* Nav Items */}
          <ul className="flex flex-col gap-6">
            {navItems.map((item, i) => {
              const isActive = pathname === item.href;
              return (
                <li key={i}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-lg font-outfit transition-colors duration-300
                      ${
                        isActive
                          ? "text-caribbean font-semibold border-l-4 border-caribbean pl-3"
                          : "text-antiflash hover:text-caribbean"
                      }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="mt-8 block text-center px-6 py-3 border border-caribbean rounded-full text-antiflash hover:text-richblack hover:bg-caribbean transition-all duration-300"
          onClick={() => setIsOpen(false)}
        >
          Let’s Talk
        </Link>
      </aside>

      {/* Hamburger button (mobile only) */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-darkgreen/70 p-2 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={isOpen ? assets.close_black : assets.menu_black}
          alt="menu"
          className="w-6"
        />
      </button>
    </>
  );
};

export default Navbar;
