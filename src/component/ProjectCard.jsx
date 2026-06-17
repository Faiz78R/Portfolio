import React from 'react'
import { projects } from '../assets/assets'

const ProjectCard = ({title,description,image,demo,code,tech=[]}) => {
  console.log("Demo:",demo)
  return (
    <div className='bg-white rounded-2xl overflow-hidden hover:-translate-y-2
     transition duration-300 cursor-pointer'>
        <img src={image} alt={title} className='w-full h-60 object-cover' />
        <div className='p-6'>
            <h3 className='text-xl font-semibold mb-2' >{title}</h3>
            <p className='text-gray-400 mb-4'>{description}</p>
            <div className='flex flex-wrap gap-2 mb-4'>
            {tech?.map((item,index)=>(
                <span key={index} className='px-3 py-1 rounded-full text-sm bg-gray-600 text-white'>
                {item}
                </span>
            )) }
          </div>
          <div className='flex gap-2'>
            <a href={demo}
            target='_blank'
            rel="noopener noreferrer" 
            className='flex-1 text-center px-4 py-2 bg-black rounded-lg
            font-medium text-white hover:bg-gray-500'>View Demo</a>
            <a href={code}
            target='_blank'
            rel='noopener noreferrer'
             className='flex-1 text-center px-4 py-2 border border-black  rounded-lg
            font-medium hover:bg-gray-500 transition duration-300'>Code</a>
          </div>
        </div>
        
    </div>
  )
}

export default ProjectCard