import React from 'react'
import { Navbar } from '../../components'
import './Home.css'
import avatar from '../../assets/avatar.jpg'
import { motion } from 'framer-motion'
const Home = () => {
  
  return (
    <main className='w-[100%] sm:h-[100vh] md:h-[100vh] lg:h-auto h-auto '>
      <Navbar/>
      <div className="hero mt-[100px] h-auto  w-[100%]">
        <motion.div 
        drag
        dragConstraints={{ left: 0, right: 300 }}
        className=' absolute z-[1] w-[15px] h-[15px] rounded-full bg-black top-[20%] left-[15%]'>

        </motion.div>
       
      <div className="container w-[90%] m-auto">
        <div className="content  flex justify-between flex-wrap sm:gap-0 md:gap-0 gap-[50px] md:flex-row sm:flex-row lg:flex-row flex-col">
          <div className="title p-[15px] sm:p-[40px] md:p-[40px] text-blue-900  sm:items-start md:items-start items-center sm:text-left md:text-left text-center flex flex-col gap-[30px] justify-center flex-1 ">
            <h1 className='sm:text-[50px] md:text-[50px] text-[30px] font-bold'>Build stunning websites & <br/>apps.</h1>
            <p className='text-[25px] text-slate-600'>Make all your dreams of animations and functions using the latest technologies in web development .</p>
            <div className='cv w-[190px] h-[60px] rounded-sm border-solid border-[2px] font-bold border-gray-500 flex items-center justify-center'>
              <a download href='../../assets/CV.pdf'>Download CV</a>
              <span></span>
            </div>
            
          </div>
          <div className="img  flex-1 flex items-center justify-center  ">
              <div className='sm:w-[400px] md:w-[350px] border-solid border-white border-[10px] w-[300px]  sm:h-[400px] md:h-[350px] h-[300px]  rounded-full overflow-hidden shadow-2xl'>
                <img src={avatar} alt="" />
              </div>
          </div>
        </div>
        </div>
      </div>
    </main>
    
  )
}

export default Home