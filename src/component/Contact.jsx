import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
const Contact = () => {
  return (
    <motion.div
    initial={{opacity:0,y:50}}
     whileInView={{opacity:1,y:0}}
     transition={{duration:0.6,ease:'easeOut'}}
     viewport={{once:true}}
     id='contact'
     className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-purple-500
     via-pink-500 to-red-500'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4 mt-4 text-white'>
            Get In 
            <span className='text-green-950'>Touch</span>
        </h2>
        <p className='text-white text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? Let's talk!</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
            <div>
                <form className='space-y-6'>
                    <div>
                        <label htmlFor="name" className='block text-black mb-2'>Your Name</label>
                        <input 
                        className='w-full bg-white border border-dark-400 rounded-lg px-4 py-3'
                        type="text" />
                    </div>
                    <div>
                        <label htmlFor="email" className='block text-black mb-2'>Email Address </label>
                        <input 
                        className='w-full bg-white border border-dark-400 rounded-lg px-4 py-3'
                        type="email" />
                    </div>
                    <div>
                        <label htmlFor="message" className='block text-black mb-2'>Your Message</label>
                        <textarea
                        className='w-full h-40 bg-white border border-dark-400 rounded-lg px-4 py-3'
                        type="text" />
                    </div>
                    <button type='submit' className='w-full px-6 py-3 rounded-lg font-medium bg-black
                    hover:bg-gray-500 text-white'>Send</button>
                </form>
            </div>
            <div className='space-y-8'>
                <div className='flex items-start'>
                    <div className='text-green-950 text-2xl mr-4'>
                        <FaMapMarkerAlt/>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-2'>Location</h3>
                        <p className='text-white'>Muzaffapur,Bihar 842002</p>
                    </div>
                </div>
                <div className='flex items-start'>
                    <div className='text-green-950 text-2xl mr-4'>
                        <FaEnvelope/>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-2'>Email</h3>
                        <p className='text-white'>faiz7631535366@gmail.com</p>
                    </div>
                </div>
                <div className='flex items-start'>
                    <div className='text-green-950 text-2xl mr-4'>
                        <FaPhone/>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                        <p className='text-white'>9199574047</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact