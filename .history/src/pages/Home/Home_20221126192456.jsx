import React from 'react'
import { Navbar } from '../../components'
import './Home.css'
import avatar from '../../assets/avatar.jpg'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import CV from './Andro Isshaq (1).png'
import Balls from '../../components/Balls/Balls'
const Home = () => {
  const  constraintsRef = useRef(null) 
 
  
  return (
    <main className='w-[100%] sm:h-[100vh] md:h-[100vh] lg:h-auto h-auto '>
      <Navbar/>
      <motion.div ref={constraintsRef} className="hero overflow-hidden mt-[100px] h-auto  w-[100%]">
      
        <Balls constraintsRef={constraintsRef}/>
      <div className="container w-[90%] m-auto">
        <div className="content  flex justify-between flex-wrap sm:gap-0 md:gap-0 gap-[50px] md:flex-row sm:flex-row lg:flex-row flex-col">
          <div className="title p-[15px] sm:p-[40px] md:p-[40px] text-blue-900  sm:items-start md:items-start items-center sm:text-left md:text-left text-center flex flex-col gap-[30px] justify-center flex-1 ">
            <motion.h1
              initial={{ y:'700px', opacity:0}}
              animate={{ y:0, opacity:1 }}
              transition={{ duration:.4 }}
              className='sm:text-[50px] md:text-[50px] text-[30px] font-bold'>Build stunning websites & <br/>apps.</motion.h1>
            <motion.p
              initial={{ y:'700px', opacity:0}}
              animate={{ y:0, opacity:1 }}
              transition={{ duration:.4 , delay:.5}}
              className='text-[25px] text-slate-600'>Make all your dreams of animations and functions using the latest technologies in web development .</motion.p>
            <motion.div
              initial={{ y:'700px', opacity:0}}
              animate={{ y:0, opacity:1 }}
              transition={{ duration:.4 , delay:.7}}
              className='cv w-[190px] h-[60px] rounded-sm border-solid border-[2px] font-bold border-gray-500 flex items-center justify-center'>
              <a  href={CV} download>Download CV</a>
              <span></span>
            </motion.div>
            
          </div>
          <div className="img className='pointer-events-none' flex-1 flex items-center justify-center  ">
              <motion.div
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => {e.movementX(100)}}
                onHoverEnd={e => {e.movementX(100)}}
                className=' sm:w-[400px] bg-transparent md:w-[350px] border-solid border-white  border-[10px] w-[300px]  sm:h-[400px] md:h-[350px] h-[300px]  rounded-full overflow-hidden shadow-2xl flex items-center justify-center'>
                <img src={avatar} className=' shadow-2xl shadow-black pointer-events-none w-[90%] h-[90%] rounded-full' alt="" />
              </motion.div>
          </div>
        </div>
        </div>
      </motion.div>
    </main>
    
  )
}

export default  Home  