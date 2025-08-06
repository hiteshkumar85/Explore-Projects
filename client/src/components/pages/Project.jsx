import { motion } from 'framer-motion'
import React from 'react'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import { RiDoubleQuotesL } from "react-icons/ri";
import Button from './Button'

const Project = () => {
    
  return (
    <section className='relative  w-full h-[330vh] bg-[linear-gradient(to_top,_#060014_100%,__#060016_5%)]   text-white '>
        <div className='absolute top-[3%] left-[10%]  text-[70px] font-bold '>
            <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
             
             className='text'>Our Latest Projects</motion.h1>
        </div>
        <div className='page1 absolute top-[10%] left-[10%] w-[36vw] h-[90vh]'>
            <div className='w-[100%] h-[80%]  border-0 rounded-[10px] overflow-hidden shadow-2xl hover:shadow-[#a855f780]'>
                <img src={image1} className=' h-full w-full  object-cover transition duration-300 ease-in  hover:scale-[1.05] '/>
            </div>
            <div className="relative w-[100%] h-[40%] ">
                <h3 id='harsh' className=' font-[500] text-[20px]  mt-3 grou-hover:text-red-600 '>Website for product and industrial designer who creates complete experiences</h3>
                <span className='absolute top-[69px] left-[-16px] text-4xl text-green-600 '><RiDoubleQuotesL/></span>
                <p className='font-[400] text-white/70 text-[13px] ml-7 mt-3'>Our To-Do List app is designed to keep you focused and organized. Quickly add tasks, set priorities, and track your progress as you complete each goal.</p>
                <h3 className='ml-7 mt-3 text-[19px] font-[500]'>Vijay Rovo</h3>
                <h5 className='ml-7 text-white/70 text-[14px] font-[300]'>Product Designer</h5>
            </div>
        </div>
        <div className='page2 absolute top-[24%] right-[10%]  w-[36vw] h-[90vh] ' >
            <div className='w-[100%] h-[80%] rounded-[10px]  overflow-hidden shadow-2xl hover:shadow-[#a855f780] '><img src={image2} className='h-full  object-cover transition duration-300 ease-in  hover:scale-[1.05] '/></div>
            <div className="relative w-[100%] h-[40%] ">
                <h3 className='font-[500] text-[20px]  mt-3'>Website for product and industrial designer who creates complete experiences</h3>
                <span className='absolute top-[69px] left-[-16px] text-4xl text-green-600 '><RiDoubleQuotesL/></span>
                <p className='font-[400] text-white/70 text-[13px] ml-7 mt-3'>Our To-Do List app is designed to keep you focused and organized. Quickly add tasks, set priorities, and track your progress as you complete each goal.</p>
                <h3 className='ml-7 mt-3 text-[19px] font-[500]'>Vijay Rovo</h3>
                <h5 className='ml-7 text-white/70 text-[14px] font-[300]'>Product Designer</h5>
            </div>
        </div>
        <div className='page3 w-[36vw] h-[90vh]  absolute top-[45%] left-[10%] ' >
            <div className='w-[100%] h-[80%] rounded-[10px]  overflow-hidden shadow-2xl hover:shadow-[#a855f780] '><img src={image3} className='h-full  object-cover transition duration-300 ease-in  hover:scale-[1.05] '/></div>
            <div className="relative w-[100%] h-[40%] ">
                <h3 className='font-[500] text-[20px]  mt-3'>Website for product and industrial designer who creates complete experiences</h3>
                <span className='absolute top-[69px] left-[-16px] text-4xl text-green-600 '><RiDoubleQuotesL/></span>
                <p className='font-[400] text-white/70 text-[13px] ml-7 mt-3'>Our To-Do List app is designed to keep you focused and organized. Quickly add tasks, set priorities, and track your progress as you complete each goal.</p>
                <h3 className='ml-7 mt-3 text-[19px] font-[500]'>Vijay Rovo</h3>
                <h5 className='ml-7 text-white/70 text-[14px] font-[300]'>Product Designer</h5>
            </div>
        </div>
        <div className='page4 absolute top-[48%] right-[10%] w-[36vw] h-[90vh]  mt-[20%] ' >
            <div className='w-[100%] h-[80%]  rounded-[10px]  overflow-hidden shadow-2xl hover:shadow-[#a855f780] '><img src={image4} className='h-full  object-cover transition duration-300 ease-in  hover:scale-[1.05] '/></div>
            <div className="relative w-[100%] h-[40%] ">
                <h3 className='font-[500] text-[20px]  mt-3'>Website for product and industrial designer who creates complete experiences</h3>
                <span className='absolute top-[69px] left-[-16px] text-4xl text-green-600 '><RiDoubleQuotesL/></span>
                <p className='font-[400] text-white/70 text-[13px] ml-7 mt-3'>Our To-Do List app is designed to keep you focused and organized. Quickly add tasks, set priorities, and track your progress as you complete each goal.</p>
                <h3 className='ml-7 mt-3 text-[19px] font-[500]'>Vijay Rovo</h3>
                <h5 className='ml-7 text-white/70 text-[14px] font-[300]'>Product Designer</h5>
            </div>
        </div>
        <div className='absolute bottom-7 left-[13%] w-[70%] h-14'>
            <div className='flex  '>
                <p className='w-[34vw] text-[17px] font-[400]  '>If you are ready for a change or have an idea you believe in, let’s talk about it. Contact us and stand by for a quick reply.</p>
            <div className='flex items-center gap-8 ml-25'>
                <span className=' '><Button text='Get in touch' /></span>
                <a className='text-[18px] font-[400] hover:underline ' href="#">See more work</a>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Project