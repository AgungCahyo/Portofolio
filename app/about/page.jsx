import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'

const page = () => {
  return (
    <main className="min-h-screen bg-light dark:bg-black transition-colors duration-300  md:ml-64">
        <Navbar/>
        <About/>
    </main>
  )
}

export default page