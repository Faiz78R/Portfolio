import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'
import { FaArrowRight } from 'react-icons/fa'
const Projects = () => {
  return (
    
    <motion.div
    initial={{opacity:0,y:50}}
     whileInView={{opacity:1,y:0}}
     transition={{duration:0.6,ease:'easeOut'}}
     viewport={{once:true}}
     id='project'
     className='min-h-screen flex items-center pt-20 pb-16  bg-gradient-to-r from-slate-900 via-indigo-950
    to-purple-900'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl text-white font-bold text-center mb-4 mt-4'>
            My 
            <span className='text-indigo-400'>Projects</span>
        </h2>
        <p className='text-white text-center max-w-2xl mx-auto mb-16'>A selection of my recent work.</p>
        <div className='grid grid-cols-1 md:grid-cols-2
        gap-8 max-w-6xl mx-auto'>
            {
                projects.map((project,index)=>(
                    <ProjectCard key={index} {...project} />
                ))
            }
        </div>
        <div className='text-center mt-12'>
            <a href="#" className='inline-flex items-center px-6 py-3 border border-black font-medium
            hover:bg-gray-500 rounded-4xl'>
                <span>View More Projects</span>
                <FaArrowRight className='ml-2'/>
            </a>
        </div>
        </div>
    </motion.div>
  )
}

export default Projects