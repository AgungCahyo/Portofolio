"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { assets, infoList, toolsData } from "../../assets/assets";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4
        data-aos="zoom-out"
        className="text-center mb-2 text-lg font-Ovo text-dark dark:text-gray-300"
      >
        Introduction
      </h4>
      <h2
        data-aos="zoom-in"
        className="text-5xl text-center font-Ovo mb-10 text-dark dark:text-white"
      >
        About Me
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 my-20">
        {/* Profile Image Section */}
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          className="w-64 sm:w-80 rounded-3xl shadow-2xl max-w-none mb-8 lg:mb-0"
        >
          <Image
            src={assets.profile_img}
            alt="Profile Image"
            className="rounded-3xl w-full transform rotate-y-180"
          />
        </div>

        {/* Text and Info Section */}
        <div className="flex-1 text-center lg:text-left">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-10 max-w-2xl mx-auto font-Ovo text-dark dark:text-gray-300"
          >
            Saya bergerak di ruang antara rasa, bentuk, dan makna. Menyusun
            sistem, merancang pengalaman, dan menulis cerita di baliknya. Fokus
            saya ada pada detail kecil yang menyatukan kreativitas, keramahan,
            dan ketepatan.
          </p>

          {/* Info List Section */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 max-w-2xl mx-auto mb-8">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                // data-aos="fade-up"
                // data-aos-delay={index * 300}
                // data-aos-once="true"
                className="group transition will-change-transform duration-300 ease-in-out border border-dark dark:border-gray-600 rounded-xl p-6 cursor-pointer hover:-translate-y-2 shadow-lg hover:bg-dark dark:hover:bg-gray-800"
              >
                <Image src={icon} alt={title} className="w-7 mt-3 mx-auto" />
                <h3 className="my-4 font-semibold text-dark dark:text-gray-200 group-hover:text-light transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-gray-100 transition-colors duration-300">
                  {description}
                </p>
              </li>
            ))}
          </ul>

          {/* Tools Section */}
          <h4 className="my-6 text-dark dark:text-gray-300 font-Ovo text-center">
            Tools I Use
          </h4>

          <ul className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
            {toolsData.map(({ name, icon }, index) => (
              <li
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 80}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-dark dark:border-gray-600 rounded-lg cursor-pointer relative group"
              >
                <Image src={icon} alt="Tool" className="w-5 sm:w-7" />

                {/* Tooltip Text */}
                <span className="absolute z-[100] top-10 left-1/2 transform -translate-x-1/2 translate-y-full px-5 py-1 border border-dark dark:border-gray-600 text-dark dark:text-white bg-light dark:bg-gray-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap">
                  {`${name}`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
