import Image from 'next/image'
import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-dark dark:bg-black py-10 px-[12%] bottom-0 dark:border-gray-700 transition-colors duration-500">
      <div className="flex flex-col items-center gap-4">
        {/* Logo */}
        <Image src={assets.logo} alt="logo" className="w-36 dark:hidden mb-2" />
        <Image src={assets.logo_dark} alt="logo" className="w-36 mb-2 hidden dark:block" />

        {/* Contact Info */}
        <div className="flex items-center gap-2 text-light dark:text-gray-300 text-sm">
          <Image src={assets.mail_icon} alt="email icon" className="w-5" />
          <span>cahyoprasetyo507@gmail.com</span>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-light dark:bg-gray-700 my-6"></div>

      {/* Social Links */}
      <div className="flex flex-col items-center">
        <p className="text-light dark:text-gray-400 text-sm mb-2">Follow me</p>
        <ul className="flex gap-4 text-sm text-light dark:text-gray-300">
          <li>
            <a target="_blank" href="" rel="noopener noreferrer" className="hover:underline">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" href="" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="" rel="noopener noreferrer" className="hover:underline">
              Thread
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
