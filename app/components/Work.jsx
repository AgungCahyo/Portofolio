import React from 'react'
import { assets, workData } from '../../assets/assets'
import Image from 'next/image'
import Link from 'next/link'

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20 items-center'>
     <h4 className="text-center mb-2 text-lg font-Ovo text-dark dark:text-gray-300">
  My Projects
</h4>
<h2 className="text-5xl text-center font-Ovo text-dark dark:text-white">
  Taste, Visual & System
</h2>
<p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-dark dark:text-gray-400">
  Beberapa proyek pribadi yang berangkat dari keingintahuan, pengalaman langsung di lapangan, dan eksplorasi antara sistem, visual, serta rasa.
</p>


    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12'>
  {workData.map((project, index) => (
    <div
      key={index}
      className='relative group overflow-hidden rounded-xl shadow-md transform transition duration-300 hover:scale-[1.02] hover:shadow-xl aspect-square'
    >
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${project.bgImage})` }}
      />

      {/* Overlay Box */}
      <div className='absolute bottom-5 left-1/2 transform group -translate-x-1/2 w-11/12 bg-dark dark:bg-gray-900/90 backdrop-blur-md rounded-lg px-5 py-4 flex items-center justify-between gap-4 transition-all duration-300 group-hover:bottom-7 group-hover:bg-light'>
        <div className='text-light group-hover:text-dark dark:text-white'>
          <h3 className='text-light group-hover:text-dark font-semibold line-clamp-1'>{project.title}</h3>
          <p className='text-sm text-dark group-hover:text-light px-3 rounded-2xl border-light bg-light group-hover:bg-dark dark:text-gray-400 line-clamp-2'>{project.description}</p>
        </div>
          <a href={project.link}>
        <div className='flex-shrink-0 w-9 h-9 rounded-full border border-gray-800 dark:border-white flex items-center justify-center bg-light dark:bg-gray-700 group-hover:bg-dark dark:group-hover:bg-blue-500 transition-colors duration-300 shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff]'>
          <Image src={assets.send_icon} alt='send' className='w-4' />
        </div>
          </a>
      </div>
    </div>
  ))}
</div>
</div>
  )
}

export default Work;
