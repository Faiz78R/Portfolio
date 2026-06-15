import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets'
const Skills = () => {
  return (
   <motion.div
   
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1,ease:'easeOut'}}
    viewport={{once:false,amount:0.2}}
    id='skill'
    className='py-20 bg-gradient-to-r from-purple-500
     via-pink-500 to-red-500 '
   >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl text-white font-bold text-center mb-4'>
            My 
            <span className='text-green-950'>Skills</span>
        </h2>
        <p className='text-white text-center max-w-2xl mx-auto mb-16'>Technologies I work with to bring ideas to life</p>
        <div className='grid grid-cols-1 md:grid-cols-2
        gap-8 max-w-5xl mx-auto'>
            {
                skills.map((skill,index)=>(
                 <div key={index} className='bg-white rounded-2xl p-6
                 hover:-translate-y-2 transition duration-300 cursor-pointer'>
                   <div className='flex items-center mb-4'>
                    <skill.icon className='w-12 h-12 text-green-950 mr-6'/>
                    <h3 className='text-xl font-semibold'>{skill.title}</h3>
                   </div>
                   <p className='mb-4'>{skill.description}</p>
                   <div>
                    {
                        skill.tags.map((tech)=>(
                            <span key={tech} className='px-3 py-1  text-sm rounded-full bg-gray-600 text-white'>{tech}</span>
                        ))
                    }
                   </div>
                 </div>
                ))
            }
        </div>
      </div>
   </motion.div>
  )
}

export default Skills
