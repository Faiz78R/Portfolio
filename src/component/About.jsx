import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'
const About = () => {
  return (
    <motion.div
    initial={{opacity:0,y:50}}
     whileInView={{opacity:1,y:0}}
     transition={{duration:0.6,ease:'easeOut'}}
     viewport={{once:true}}
     id='about'
     className='py-20 bg-gradient-to-r from-purple-500
     via-pink-500 to-red-500 '
    >
      <div className='container mx-0 px-6'>
        <h2 className='text-3xl font-bold text-center mb-4 text-white mt-4' >About
          <span className='text-green-950'>Me</span>
        </h2>
        <p className='text-white text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passion</p>
        {/* image+ my journey */}
        <div className='flex flex-col md:flex-row items-center gap-12'>
          <div className='md:w-1/2 rounded-2xl overflow-hidden'>
          <motion.img 
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.9,ease:'easeOut'}}
            viewport={{once:false,amount:0.2}}
            className='w-full h-full object-cover'

          src={assets.profileImg} alt="profile" />
          </div>
          {/* text content */}
          <motion.div
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.9,ease:'easeOut'}}
          viewport={{once:false,amount:0.2}}
          
          className='md:w1/2'
          >
            <div className='rounded-b-2xl p-8'>
              <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
              <p className='text-gray-300 mb-6'>I am passionate Full Stack Developer focused on building scalable,
                high-performance web applications using modern technologies.My journey began with a strong 
                foundation in HTML,CSS, and JavaScript, and has envolved into developing full-stack solutions using
                frameworks like React, Node.js and modern backend tools.
              </p>
              <p className='text-gray-300 mb-6'>I enjoy transforming ideas into real-world applications,solving complex problems,
                and continuously improvinng my skills.I am committed to writing clean, maintable code and creating
              seamless user experiences.Beyond coding, I stay updated with industry trends to deliver innovative and efficient solutions.
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>

    </motion.div>
  )
}

export default About