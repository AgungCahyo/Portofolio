import React from 'react'
import { serviceData } from '../../assets/assets'
import Image from 'next/image'
import { assets } from '../../assets/assets'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className="text-center mb-2 text-lg font-Ovo text-dark dark:text-gray-300">What I Offer</h4>
      <h2 className="text-5xl text-center font-Ovo text-dark dark:text-white">My Services</h2> 

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-dark dark:text-gray-300'>
       Saya membantu bisnis, terutama di bidang kuliner dan hospitality, untuk menyusun sistem menu yang efisien, menghadirkan visual yang selaras dengan identitas merek, serta menulis konten yang tidak hanya menjual, tapi juga menyentuh.
      </p>

      {/* Responsive grid layout */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 items-center '>
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className='group border border-dark dark:border-gray-600 rounded-lg px-8 py-12 hover:shadow-xl cursor-pointer hover:bg-dark dark:hover:bg-gray-800 hover:-translate-y-1 duration-500 transition-all'
          >
            <Image src={icon} alt={title} className='w-10 mx-auto rounded-md group-hover:border-light group-hover:border items-center text-center'/>
            <h3 className='text-lg my-4 group-hover:text-light text-dark dark:text-gray-200 text-center'>{title}</h3>
            <p className='text-sm group-hover:text-light text-dark dark:text-gray-400 leading-5 text-center'>{description}</p>
            <a href={link} className='flex items-center group-hover:bg-light group-hover:text-dark max-w-[150px] justify-center gap-2 text-sm mt-5 border border-dark rounded-2xl group-hover:border-light text-black dark:text-white'>
              Read More <Image src={assets.right_arrow} alt="arrow" className='w-4'/>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services;
