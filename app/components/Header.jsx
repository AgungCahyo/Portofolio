"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { assets } from "../../assets/assets";
import Aos from "aos";

const Header = () => {
  useEffect(() => {
    Aos.init(
      {
        duration: 1000,
        once: false,
      }
    )
  },[])
  return (
    <div  data-aos="fade-down" id="home" className="w-full background-light max-w-6xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-3">
      <div className="md:mt-25 sm:mt-5">
        <Image src={assets.profile_img} alt="Profile" className="rounded-full w-32" />
      </div>

      <div>
        <h3 className="flex text-center items-center gap-2 text-sm  md:text-2xl mb-3 font-Ovo text-dark dark:text-gray-200">
          Hi! I'm Agung Cahyo Prasetyo{""}
          <Image src={assets.hand_icon} alt="wave hand" className="w-6" />{" "}
        </h3>
      </div>

      <div className="px-5 sm:px-10 md:px-20 ">
        <h1 className="text-2xl sm:text-4xl md:text-sm lg:text-[46px] font-Ovo text-dark dark:text-white">
         Merangkai Kata. Menata Rasa. Merancang Sistem.
        </h1>
        <p className="max-w-2xl mx-auto  md:text-xl font-Ovo text-dark dark:text-gray-300 mt-4">
        Menulis untuk mereka yang kelelahan dalam sunyi. Merancang desain yang jujur dan fungsional. Membangun sistem sederhana yang bisa bekerja dalam diam.
        </p>
      </div>

      <div className="flex flex-row mx-5 sm:flex-row items-center gap-4 mt-2">
        {/* CTA Dark Mode Aware */}
        <a
          href="#contact"
          className="px-5 py-3 border border-transparent rounded-full bg-dark dark:bg-white text-light dark:text-black flex items-center gap-2 hover:scale-105 transition-transform"
        >
          contact me{" "}
          <Image src={assets.right_arrow_bold_dark} alt="arrow" className="w-4 dark:hidden" />
          <Image src={assets.right_arrow_bold} alt="arrow" className="w-4 hidden dark:block" />
        </a>

        <a
          href="/Agung_Cahyo_Prasetyo.pdf"
          download
          className="px-5 py-3 border rounded-full border-dark dark:border-gray-400 text-dark dark:text-gray-200 flex items-center gap-2 hover:scale-105 transition-transform"
        >
          my resume{" "}
          <Image src={assets.download_icon} alt="download" className="w-4" />
        </a>
      </div>
      <div className="">
         <a
          href="#about"
          className="px-6 py-2 border rounded-full border-dark dark:border-gray-400 text-dark dark:text-gray-200 flex items-center gap-2 hover:scale-105 transition-transform"
        >
          See More
          <Image src={assets.download_icon} alt="download" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
