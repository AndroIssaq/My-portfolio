import React from 'react'
import { motion } from 'framer-motion'
const Skills = () => {
  return (
    <>
              <div className="skills w-[100%] flex flex-col gap-[30px]">
              <div className="skill flex flex-col gap-[10px]">
                <div className="skill-title flex items-center justify-between w-full">
                  <div className="skill-name"><h5>HTML5</h5></div>
                  <span>90%</span>
                </div>
                <div className="skill-progress w-[100%] relative ">
                  <div className='w-[100%] h-[20px] rounded-md '></div>
                  <motion.span 
                  initial={{ width:0 }}
                  animate={{ width:'90%' }}
                  transition={{ duration:.6 }}
                  className='w-[90%] bg-white absolute rounded-md top-[50%] translate-y-[-50%] h-[10px]'></motion.span>
                </div>
              </div>

              <div className="skill flex flex-col gap-[10px]">
                <div className="skill-title flex items-center justify-between w-full">
                  <div className="skill-name"><h5>CSS3</h5></div>
                  <span>85%</span>
                </div>
                <div className="skill-progress w-[100%] relative ">
                  <div className='w-[100%] h-[20px] rounded-md '></div>
                  <motion.span 
                  initial={{ width:0 }}
                  animate={{ width:'85%' }}
                  transition={{ duration:.6 , delay:.3}}
                  className='w-[85%] bg-white absolute rounded-md top-[50%] translate-y-[-50%] h-[10px]'></motion.span>
                </div>
              </div>

              <div className="skill flex flex-col gap-[10px]">
                <div className="skill-title flex items-center justify-between w-full">
                  <div className="skill-name"><h5>JavaScript</h5></div>
                  <span>70%</span>
                </div>
                <div className="skill-progress w-[100%] relative ">
                  <div className='w-[100%] h-[20px] rounded-md '></div>
                  <motion.span
                  initial={{ width:0 }}
                  animate={{ width:'70%' }}
                  transition={{ duration:.6,delay:.5 }}
                  className='w-[70%] bg-white absolute rounded-md top-[50%] translate-y-[-50%] h-[10px]'></motion.span>
                </div>
              </div>

              <div className="skill flex flex-col gap-[10px]">
                <div className="skill-title flex items-center justify-between w-full">
                  <div className="skill-name"><h5>React</h5></div>
                  <span>55%</span>
                </div>
                <div className="skill-progress w-[100%] relative ">
                  <div className='w-[100%] h-[20px] rounded-md '></div>
                  <motion.span
                  initial={{ width:0 }}
                  animate={{ width:'55%' }}
                  transition={{ duration:.6 , delay:.7 }}
                  className='w-[55%] bg-white absolute rounded-md top-[50%] translate-y-[-50%] h-[10px]'></motion.span>
                </div>
              </div>

              <div className="skill flex flex-col gap-[10px]">
                <div className="skill-title flex items-center justify-between w-full">
                  <div className="skill-name"><h5>Framer-Motion</h5></div>
                  <span>43%</span>
                </div>
                <div className="skill-progress w-[100%] relative ">
                  <div className='w-[100%] h-[20px] rounded-md '></div>
                  <motion.span
                  initial={{ width:0 }}
                  animate={{ width:'43%' }}
                  transition={{ duration:.6 , delay:.9 }}
                  className='w-[43%] bg-white absolute rounded-md top-[50%] translate-y-[-50%] h-[10px]'></motion.span>
                </div>
              </div>

              <div className="skill flex flex-col gap-[10px]">
                <div className="skill-title flex items-center justify-between w-full">
                  <div className="skill-name"><h5>TailwindCSS</h5></div>
                  <span>65%</span>
                </div>
                <div className="skill-progress w-[100%] relative ">
                  <div className='w-[100%] h-[20px] rounded-md '></div>
                  <motion.span
                  initial={{ width:0 }}
                  animate={{ width:'65%' }}
                  transition={{ duration:.6, delay:1.1 }}
                  className='w-[65%] bg-white absolute rounded-md top-[50%] translate-y-[-50%] h-[10px]'></motion.span>
                </div>
              </div>

              <div className="skill flex flex-col gap-[10px]">
                <div className="skill-title flex items-center justify-between w-full">
                  <div className="skill-name"><h5>Next.js</h5></div>
                  <span>40%</span>
                </div>
                <div className="skill-progress w-[100%] relative ">
                  <div className='w-[100%] h-[20px] rounded-md '></div>
                  <motion.span
                  initial={{ width:0 }}
                  animate={{ width:'40%' }}
                  transition={{ duration:.6, delay:1.3 }}
                  className='w-[40%] bg-white absolute rounded-md top-[50%] translate-y-[-50%] h-[10px]'></motion.span>
                </div>
              </div>
            </div>
            </>
  )
}

export default Skills