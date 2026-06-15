import React, { useState } from 'react'
import {FaBars, } from 'react-icons/fa'
import {FaXmark} from 'react-icons/fa6'
const Navbar = () => {
    const [showMenu,setShowMenu]=useState(false)
  return (
    <nav className='fixed w-full z-50  bg-gradient-to-r from-purple-500
     via-pink-500 to-red-500 py-4 px-8 shadow-none '>
        <div className='container mx-auto flex justify-between items-center'>
            <div>
                <a href="" className='text-3xl font-bold text-white'>
                    Faiz 
                    <span className='text-green-950'>Ahmad</span>
                    <div className='w-4 h-4 bg-green-950 rounded-full'></div>
                </a>
            </div>
            <div className='hidden md:flex space-x-10'>
                <a href="#home" className='relative text-white transition duration-300 hover:text-green-950 '>
                    <span>Home</span> </a>
               <a href="#about" className='relative text-white transition duration-300 hover:text-green-950'>
                    <span>About</span> </a>
                <a href="#skill" className='relative text-white transition duration-300 hover:text-green-950'>
                    <span>Skills</span> </a>
                <a href="#project" className='relative text-white transition duration-300 hover:text-green-950'>
                    <span>Projects</span> </a>
                 {/* <a href="#experience" className='relative text-white transition duration-300 hover:text-green-950'>
                    <span>Experience</span></a> */}
                 <a href="#contact" className='relative text-white transition duration-300 hover:text-green-950'>
                    <span>Contact</span></a>   
            </div>
            {/* Mobile view */}
            <div className='md:hidden'>
                {
                    showMenu ?
                    <FaXmark onClick={()=>setShowMenu(!showMenu)}
                    className='text-2xl cursor-pointer'/>:
                    <FaBars onClick={()=>setShowMenu(!showMenu)} 
                    className='text-2xl cursor-pointer'/>
                }
        
        
          </div>
        </div>
        {/* Mobile menue */}
        {
            showMenu && (
                <div className='md:hidden mt-2  bg-gradient-to-r from-purple-500
     via-pink-500 to-red-500 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>
                    <a href="#home" className='relative text-white transition duration-300 '>
                    <span>Home</span> </a>
               <a href="#about" className='relative text-white transition duration-300 '>
                    <span>About</span> </a>
                <a href="#skill" className='relative text-white transition duration-300 '>
                    <span>Skills</span> </a>
                <a href="#project" className='relative text-white transition duration-300 '>
                    <span>Projects</span> </a>
                 {/* <a href="#experience" className='relative text-white transition duration-300 '>
                    <span>Experience</span></a> */}
                 <a href="#contact" className='relative text-white transition duration-300 '>
                    <span>Contact</span></a>   
                </div>
            )
        }
      
    </nav>
  )
}

export default Navbar