import { motion } from 'framer-motion'
import React from 'react'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import { RiDoubleQuotesL } from "react-icons/ri";
import Button from './Button'

const projects = [
  { img: image1 },
  { img: image2 },
  { img: image3 },
  { img: image4 }
]

const Project = () => {
  return (
    <section className='relative w-full bg-gradient-to-b from-[#060016] via-[#060016] to-[#060022] text-white'>
      {/* Heading */}
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className='text-4xl md:text-6xl text-center mb-16'
      >
        Our Latest Projects
      </motion.h1>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-16 px-6 md:px-20'>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${idx % 2 === 1 ? "md:mt-40" : ""}`}
          >
            {/* Image */}
            <div className='rounded-[10px] overflow-hidden shadow-2xl'>
              <img
                src={project.img}
                className='h-[300px] md:h-[500px] w-full object-cover transition duration-300 ease-in hover:scale-105'
                alt="Project"
              />
            </div>

            {/* Text */}
            <div className="relative mt-5">
              <h3 className='font-[500] text-[20px]'>
                Website for product and industrial designer who creates complete experiences
              </h3>
              <span className='absolute -top-1 -left-6 lg:-left-8 lg:-top-2 text-2xl lg:text-3xl text-green-600'>
                <RiDoubleQuotesL />
              </span>
              <p className='font-[400] text-white/70 text-[13px] mt-3'>
                Our To-Do List app is designed to keep you focused and organized.
                Quickly add tasks, set priorities, and track your progress as you complete each goal.
              </p>
              <h3 className=' mt-3 text-[19px] font-[500]'>Vijay Rovo</h3>
              <h5 className=' text-white/70 text-[14px] font-[300]'>Product Designer</h5>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className='mt-20 px-6 md:px-20'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
          <p className='md:w-[60%] text-[17px] font-[400]'>
            If you are ready for a change or have an idea you believe in, let’s talk about it.
            Contact us and stand by for a quick reply.
          </p>
          <div className='flex items-center gap-6'>
            <Button text='Get in touch' />
            <a className='link-hover' href="#">See more work</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
