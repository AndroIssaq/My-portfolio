import React from 'react'
import './About.css'
import { BsGithub ,BsFacebook ,BsLinkedin } from "react-icons/bs";
import { Skills } from '../../components';
import { motion } from 'framer-motion';
const About = () => {
    

  return (
    <>
      <motion.section
        initial={{ opacity:0 }}
        animate={{opacity:1  }}
        transition={{ duration:.75 }}
        className=' relative'>
        <div className="">
          <div className="content flex h-[100%]   flex-wrap justify-between relative ">
            <div className="title  lg:h-[100vh] md:h-[100vh] sm:h-[100vh] h-[100%] pb-[40px] pr-[20px] pt-[50px] bg-amber-100  flex-1 flex items-start flex-col justify-start gap-[20px] md:pl-[50px] sm:pl-[50] lg:pl-[100] pl-[20px]">
            <div className="head-title w-[200px] bg-green-200 flex items-center justify-center ">
              <h2 className='p-[10px]'>About Me</h2>
            </div>
                    <span className='w-[150px] h-[3px] bg-violet-600'></span>
              <div className="description">
              <motion.h1
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration:.5 , delay:.2 }}
              className='sm:text-[50px] md:text-[50px] text-[25px] font-bold'> I'm a Front-End web developer working from home</motion.h1>
              </div>
              <span className='w-[150px] h-[3px] bg-violet-600'></span>
              <motion.p
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration:.5 , delay:.4 }}
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit nisi vitae feugiat vestibulum. Aliquam porta nulla vel odio scelerisque, pretium volutpat dui euismod. Integer porttitor dolor placerat malesuada dictum. Fusce enim dolor, dignissim quis ornare at, elementum nec turpis. Donec ac interdum libero, sed condimentum lectus. Nunc nec iaculis tortor. Donec interdum sollicitudin eros in pharetra. Donec ultricies laoreet dictum. Maecenas vestibulum sodales justo, id hendrerit orci aliquet gravida. Nulla facilisi.
              </motion.p>
              <div className="icons text-[#999ab6] flex w-[100%]  text-[30px] gap-[20px] ">
                <motion.a
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration:.5 , delay:.6 }}
                href="/"><BsGithub  className='hover:text-violet-500 transition duration-300' /> </motion.a> 
                <motion.a
                  initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration:.5 , delay:.8 }}
                href="/"><BsFacebook className='hover:text-violet-500 transition duration-300'/> </motion.a> 
                <motion.a
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration:.5 , delay:1 }}
                href="/"><BsLinkedin className='hover:text-violet-500 transition duration-300'/> </motion.a>
              </div>
            </div>
            <div className="progress lg:h-[100vh] font-bold pb-[60px] md:h-[100vh] sm:h-[100vh] h-[100%]  pt-[50px]    flex-1 flex items-start flex-col justify-start gap-[20px]  md:pr-[50px] sm:pr-[50] lg:pr-[100] pr-[20px pl-[20px]  bg-violet-600">
            <div className="head-title w-[200px] bg-white flex items-center justify-center ">
              <h2 className='p-[10px]'>My Skills</h2>
            </div>
              <Skills/>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default About