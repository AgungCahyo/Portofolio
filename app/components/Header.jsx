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
    <div  data-aos="fade-down" id="home" className="w-full background-light max-w-6xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image src={assets.profile_img} alt="Profile" className="rounded-full w-32" />
      </div>

      <div>
        <h3 className="flex text-center items-center gap-2 text-xl md:text-2xl mb-3 font-Ovo text-dark dark:text-gray-200">
          Hi! I'm Agung Cahyo Prasetyo{" "}
          <Image src={assets.hand_icon} alt="wave hand" className="w-6" />{" "}
        </h3>
      </div>

      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-Ovo text-dark dark:text-white">
         Merangkai Kata. Menata Rasa. Merancang Sistem.
        </h1>
        <p className="max-w-2xl mx-auto font-Ovo text-dark dark:text-gray-300 mt-4">
        Menulis untuk mereka yang kelelahan dalam sunyi. Merancang desain yang jujur dan fungsional. Membangun sistem sederhana yang bisa bekerja dalam diam.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        {/* CTA Dark Mode Aware */}
        <a
          href="#contact"
          className="px-10 py-3 border border-transparent rounded-full bg-dark dark:bg-white text-light dark:text-black flex items-center gap-2 hover:scale-105 transition-transform"
        >
          contact me{" "}
          <Image src={assets.right_arrow_bold_dark} alt="arrow" className="w-4 dark:hidden" />
          <Image src={assets.right_arrow_bold} alt="arrow" className="w-4 hidden dark:block" />
        </a>

        <a
          href="/Agung_Cahyo_Resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-dark dark:border-gray-400 text-dark dark:text-gray-200 flex items-center gap-2 hover:scale-105 transition-transform"
        >
          my resume{" "}
          <Image src={assets.download_icon} alt="download" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
